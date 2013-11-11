var TopBarView = Backbone.View.extend({

	el: $('#topBar'),

	events: {

	},

	initialize:function(){
		_.bindAll(this, 'render', 'reRender', 'bindEvents', 'renderNotificationDropdown', 'renderLetterDropdown', 'renderFavoriteDropdown', 'bindDropdownEvents', '_unbindDropdownEvents', 'updateProfileImg', 'close', 'logout','showNotificationDropdown','hideNotificationDropdown','showLetterDropdown','hideLetterDropdown','showFavoriteDropdown','hideFavoriteDropdown', '_clearAll');
		app.viewRegistration.register("topBar", this, true);
		this.isClosed = false;

		this.loggedInTemplate = _.template(tpl.get('topBar/topBar-loggedIn'));
		this.notLoggedInTemplate = _.template(tpl.get('topBar/topBar-notLoggedIn'));
		this.dropdown_notifiationTemplate = _.template(tpl.get('dropdown/notificationDropdown'));
		this.dropdown_favoriteTemplate = _.template(tpl.get('dropdown/favoriteDropdown'));

		this.sessionUser = app.sessionManager.getSessionUser();
		
		this.render();
		
	},


	render: function(){
		this.listenTo(this.sessionUser, 'change:userId', this.reRender);

		if (app.sessionManager.hasSession()){
			$(this.el).append(this.loggedInTemplate(this.sessionUser.toJSON()));
			$("#dropdowns>div").hide();
			this.bindEvents();

			//dropdown specific data binding
			this.listenTo(this.sessionUser, 'change:imgPath', this.updateProfileImg);
			this.notifications = app.sessionManager.getCurUserNotifications();
			this.listenTo(this.notifications, 'reset', this.renderNotificationDropdown);
			this.favorites = app.sessionManager.getCurUserFavorites();
			this.listenTo(this.favorites, 'reset', this.renderFavoriteDropdown);


			this.notificationContainer = $('#notificationDropdownContentContainer');
			this.letterContainer = $('#letterDropdownContentContainer');
			this.favoriteContainer = $('#favoriteDropdownContentContainer');

			this.renderNotificationDropdown();
			this.renderLetterDropdown();
			this.renderFavoriteDropdown();
		}
		else{
			$(this.el).append(this.notLoggedInTemplate);
			this.bindEvents();
		}

	},

	reRender: function(){
		this._clearAll();
		this.render();
	},


	renderNotificationDropdown: function(notifications){
		var i = 0,
			htmlContext = '';

		for (i = 0; i < this.notifications.length; i++){
			htmlContext += this.dropdown_notifiationTemplate(this.notifications.at(i).toDropdownJSON());
		}

		this.notificationContainer.html(htmlContext);
		this.bindDropdownEvents('notifications');
	},

	renderLetterDropdown: function(){

	},

	renderFavoriteDropdown: function(){
		var i = 0,
			htmlContext = '';

		for (i = 0; i < this.favorites.length; i++){
			htmlContext += this.dropdown_favoriteTemplate(this.favorites.at(i).toDropdownJSON());
		}

		this.favoriteContainer.html(htmlContext);
		this.bindDropdownEvents('favorites');
	},

	bindDropdownEvents: function(dropdownName){
		var self = this;
		this._unbindDropdownEvents(dropdownName);
		if (dropdownName === 'notifications'){
			this.notificationContainer.find('.dropdownContent').on('click', function(e){
				var n_id = parseInt($(this).attr("data-notificationId"), 10);
				var n_model = self.notifications.get(n_id);
				var n_evt = n_model.get('notificationEvent');

				//async, don't care about result
				app.notificationManager.checkNotification(n_id);

				if (n_evt === Constants.notificationEvent.watched){
					app.navigate(app.sessionManager.getUserId() + "/personal/" + n_model.get('initUserId'), true);
				}
				//transaction related
				else if (n_evt < Constants.notificationEvent.watched){
					app.navigate(app.sessionManager.getUserId() + "/message/" + n_model.get('messageId'), true);
				}
			});
		}
		else if (dropdownName === 'favorites'){
			this.favoriteContainer.find('.dropdownContent').on('click', function(e){
				var u_id = $(this).attr("data-userId");
				app.navigate(app.sessionManager.getUserId() + "/personal/" + u_id, true);
			});
		}
	},

	_unbindDropdownEvents: function(dropdownName){
		if (dropdownName === 'notifications' && this.notificationContainer){
			this.notificationContainer.find('.dropdownContent').off();
		}
		else if (dropdownName ===  'favorites' && this.favoriteContainer){
			this.favoriteContainer.find('.dropdownContent').off();
		}
		else{

			if (this.notificationContainer){
				this.notificationContainer.find('.dropdownContent').off();
			}
			if (this.favoriteContainer){
				this.favoriteContainer.find('.dropdownContent').off();
			}
		}
	},

	updateProfileImg: function(sessionUser){
		Info.alert("ahhhh, time to change profile image");
		$('#profilePictureImg').attr("src", this.sessionUser.get('imgPath'));
	},

	bindEvents: function(){
		var self = this,
			idString = app.sessionManager.hasSession() ? app.sessionManager.getUserId() : "";


		/*  navigation events  */
		//main nav
		$('#logo').on('click', function(){
			app.navigate(idString  + "/front" , true);
		});
		$('.navigate_main').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/main/" + self.sessionUser.get('searchRepresentation') , true);
		});
		$('.navigate_personal').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/personal/" + app.sessionManager.getUserId() , true);
		});
		$('.navigate_feedBack').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/post" , true);
		});

		//personal nav
		$('#notificationDropdown .dropdownTitleCheckAll').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/personal/" + app.sessionManager.getUserId() + "/history" , true);
		});
		$('#letterDropdown .dropdownTitleCheckAll').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/personal/" + app.sessionManager.getUserId() + "/history" , true);
		});
		$('#favoriteDropdown .dropdownTitleCheckAll').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/personal/" + app.sessionManager.getUserId() + "/social" , true);
		});


		/*  UI events  */
		$('#notifications').on('mouseenter', function(){
			self.showNotificationDropdown();
			$("#notifications").addClass("whiteBackground");
		});
		$('#letters').on('mouseenter', function(){
			self.showLetterDropdown();
			$("#letters").addClass("whiteBackground");
		});
		$('#favorites').on('mouseenter', function(){
			self.showFavoriteDropdown();
			$("#favorites").addClass("whiteBackground");
		});
		$('#profilePicture').on('mouseenter', function(){
			self.showProfileDropdown();
		});
		$('#notifications').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "notificationDropdown" && e.toElement.parentElement.id !== "notificationDropdown"){
				self.hideNotificationDropdown();
			}
		});
		$('#letters').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "letterDropdown" && e.toElement.parentElement.id !== "letterDropdown"){
				self.hideLetterDropdown();
			}
		});
		$('#favorites').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "favoriteDropdown" && e.toElement.parentElement.id !== "favoriteDropdown"){
				self.hideFavoriteDropdown();
			}
		});
		$('#profilePicture').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "profileDropdown" && e.toElement.parentElement.id !== "profileDropdown"){
				self.hideProfileDropdown();
			}
		});
		$('#favoriteDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "favorites"){
				self.hideFavoriteDropdown();
			}
		});
		$('#notificationDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "notifications"){
				self.hideNotificationDropdown();
			}
		});
		$('#letterDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "letters"){
				self.hideLetterDropdown();
			}
		});
		$('#profileDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "profilePicture"){
				self.hideProfileDropdown();
			}
		});
		//	$('#logout').on('mouseleave', function(e)) {
		//		if (e.toElement.id !== "profilePicture"){
		//			self.hideLikes();
		//		}
		//	});
		if (!app.sessionManager.hasSession()){
			$('#signup_button').on('click', function(){
				app.navigate("/register", true);
			});
			$('#login_button').on('click', function(){
				var username = $("#login_username").val();
				var password = $("#login_password").val();
				if ( username !== "" && password !== "") {
					app.sessionManager.login(username, password, {
						success: function(response){
							Constants.dLog("server login response: ");
							Constants.dLog(response);

							//fetching session, with async flag to true
							app.sessionManager.fetchSession(true, {
								success: function(){
									app.userManager.sessionUser = app.sessionManager.getSessionUser();
									app.navigate(app.sessionManager.getUserId() + "/main", true);
								},
								error: function(){
									Info.alert("登录失败");
								}
								
							});
						},

						error: function(status){
							alert("登录失败，请稍后再试");
							$("#login_username").addClass('invalid_input');
							$("#login_password").addClass('invalid_input');
						}
					});
				} else {
					//请输入密码
					alert("用户名和密码不能为空");
					$("#login_username").addClass('invalid_input');
					$("#login_password").addClass('invalid_input');
				}
			});
		}
		else{
			$('#logout').on('click', function(){
				self.logout();
			});
		}

		$("#login_username,#login_password").on('focus', function(){
			this.classList.remove('invalid_input');
		});
	},

	logout: function(){
		app.sessionManager.logout({
			success: function(response){
				Constants.dLog("server logout response: ");
				Constants.dLog(response);

				app.sessionManager.fetchSession(true, {
					success: function(){
						app.userManager.sessionUser = app.sessionManager.getSessionUser();
						app.navigate("front", true);
					},
					error: function(){
						Info.warn("Session fetch failed");
						app.navigate("front", true);
						app.userManager.sessionUser = app.sessionManager.getSessionUser();
					}
				});
			},

			error: function(status){
				alert("登出失败，请稍后再试");
			}
		});
	},

	showNotificationDropdown: function(){
		$("#dropdowns>div").hide();
		$("li").removeClass("whiteBackground");
		$("#notificationDropdown").show();
	},
	hideNotificationDropdown:function(){
		$("li").removeClass("whiteBackground");
		$("#notificationDropdown").hide();
	},
	showFavoriteDropdown: function(){
		$("#dropdowns>div").hide();
		$("li").removeClass("whiteBackground");
		$("#favoriteDropdown").show();
	},
	hideFavoriteDropdown:function(){
		$("li").removeClass("whiteBackground");
		$("#favoriteDropdown").hide();
	},
	showLetterDropdown: function(){
		$("#dropdowns>div").hide();
		$("li").removeClass("whiteBackground");
		$("#letterDropdown").show();
	},
	hideLetterDropdown: function(){
		$("li").removeClass("whiteBackground");
		$("#letterDropdown").hide();
	},
	showProfileDropdown: function(){
		$("#dropdowns>div").hide();
		$("li").removeClass("whiteBackground");
		$("#profileDropdown").show();
	},
	hideProfileDropdown: function(){
		$("li").removeClass("whiteBackground");
		$("#profileDropdown").hide();
	},

	_clearAll: function(){
		$('#logo').off();
		$('.navigate_main').off();
		$('.navigate_personal').off();
		$('.navigate_feedBack').off();
		$('#notifications').off();
		$('#letters').off();
		$('#favorites').off();
		$('#notificationDropdown').off();
		$('#letterDropdown').off();
		$('#favoriteDropdown').off();
		if (!app.sessionManager.hasSession()){
			$('#signup_button').off();
			$('#login_button').off();
		}
		this._unbindDropdownEvents();
		this.stopListening();
		this.unbind();
		$(this.el).empty();
	},

	close:function(){
		if (!this.isClosed){
			this._clearAll();

			this.isClosed = true;
		}
	}


});
