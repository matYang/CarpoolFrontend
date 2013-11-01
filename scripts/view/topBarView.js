var TopBarView = Backbone.View.extend({

	el: $('#topBar'),

	events: {

	},

	initialize:function(){
		_.bindAll(this, 'render', 'bindEvents', 'renderNotificationDropdown', 'renderLetterDropdown', 'renderFavoriteDropdown', 'bindDropdownEvents', '_unbindDropdownEvents', 'close', 'logout','showMessage','hideMessage','showLikes','hideLikes','showFavorite','hideFavorite');
		app.viewRegistration.register("topBar", this, true);
		this.isClosed = false;

		this.loggedInTemplate = _.template(tpl.get('topBar/topBar-loggedIn'));
		this.notLoggedInTemplate = _.template(tpl.get('topBar/topBar-notLoggedIn'));
		this.dropdown_notifiationTemplate = _.template(tpl.get('dropdown/notificationDropdown'));

		this.sessionUser = app.sessionManager.getSessionUser();
		this.render();
		this.bindEvents();

		this.notifications = app.sessionManager.getCurNotifications();
		this.listenTo(this.notifications, 'reset', this.renderNotificationDropdown);
		this.favorites = app.sessionManager.getCurSocialList();
		this.listenTo(this.favorites, 'reset', this.renderFavoriteDropdown);

		this.notificationContainer = $('#notificationDropdownContentContainer');
		this.letterContainer = $('#letterDropdownContentContainer');
		this.favoriteContainer = $('#favoriteDropdownContentContainer');

		this.renderNotificationDropdown();
		this.renderLetterDropdown();
		this.renderFavoriteDropdown();
	},


	render: function(){
		if (app.sessionManager.hasSession()){
			$(this.el).append(this.loggedInTemplate);
			$("#dropdowns>div").hide();
		}
		else{
			$(this.el).append(this.notLoggedInTemplate);
		}

	},

	renderNotificationDropdown: function(notifications){
		var i = 0,
			htmlContext = '';

		for (i = 0; i < this.notifications.length; i++){
			htmlContext += this.template(this.notifications.get(i).toDropdownJSON());
		}

		this.notificationContainer.html(htmlContext);
		this.bindDropdownEvents('notification');
	},

	renderLetterDropdown: function(){

	},

	renderFavoriteDropdown: function(){

	},

	bindDropdownEvents: function(dropdownName){
		var self = this;
		this._unbindDropdownEvents(dropdownName);
		this.notificationContainer.find('.dropdownContent').on('click', function(e){
			var n_id = $(this).attr("data-notificationId");
			var n_model = self.notifications.where({'id': n_id})[0];
			var n_evt = n_model.get('notificationEvent');

			//async, don't care about result
			app.notificationManager.checkNotification(n_id);

			if (n_evt === Constants.notificationEvent.watched){
				app.navigate(app.sessionManager.getUserId() + "/personal/" + n_model.get('initUserId') , true);
			}
			//transaction related
			else if (n_evt < Constants.notificationEvent.watched){
				app.navigate(app.sessionManager.getUserId() + "/message/" + n_model.get('messageId') , true);
			}
		});
	},

	_unbindDropdownEvents: function(dropdownName){
		this.notificationContainer.find('.dropdownContent').off();
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
			self.showMessage();
			$("#notifications").addClass("whiteBackground");
		});
		$('#letters').on('mouseenter', function(){
			self.showLikes();
			$("#letters").addClass("whiteBackground");
		});
		$('#favorites').on('mouseenter', function(){
			self.showFavorite();
			$("#favorites").addClass("whiteBackground");
		});
		$('#profilePicture').on('mouseenter', function(){
			self.showProfile();
		});
		$('#notifications').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "notificationDropdown" && e.toElement.parentElement.id !== "notificationDropdown"){
				self.hideMessage();
			}
		});
		$('#letters').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "letterDropdown" && e.toElement.parentElement.id !== "letterDropdown"){
				self.hideLikes();
			}
		});
		$('#favorites').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "favoriteDropdown" && e.toElement.parentElement.id !== "favoriteDropdown"){
				self.hideFavorite();
			}
		});
		$('#profilePicture').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "profileDropdown" && e.toElement.parentElement.id !== "profileDropdown"){
				self.hideProfile();
			}
		});
		$('#favoriteDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "favorites"){
				self.hideFavorite();
			}
		});
		$('#notificationDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "notifications"){
				self.hideMessage();
			}
		});
		$('#letterDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "letters"){
				self.hideLikes();
			}
		});
		$('#profileDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "profilePicture"){
				self.hideProfile();
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
						Info.alert("登出失败，请稍后再试");
					}
				});
			},

			error: function(status){
				alert("登出失败，请稍后再试");
			}
		});
	},

	showMessage: function(){
		$("#dropdowns>div").hide();
		$("li").removeClass("whiteBackground");
		$("#notificationDropdown").show();
	},
	hideMessage:function(){
		$("li").removeClass("whiteBackground");
		$("#notificationDropdown").hide();
	},
	showFavorite: function(){
		$("#dropdowns>div").hide();
		$("li").removeClass("whiteBackground");
		$("#favoriteDropdown").show();
	},

	hideFavorite:function(){
		$("li").removeClass("whiteBackground");
		$("#favoriteDropdown").hide();
	},
	showLikes: function(){
		$("#dropdowns>div").hide();
		$("li").removeClass("whiteBackground");
		$("#letterDropdown").show();
	},
	hideLikes:function(){
		$("li").removeClass("whiteBackground");
		$("#letterDropdown").hide();
	},
	showProfile: function(){
		$("#dropdowns>div").hide();
		$("li").removeClass("whiteBackground");
		$("#profileDropdown").show();
	},
	hideProfile: function(){
		$("li").removeClass("whiteBackground");
		$("#profileDropdown").hide();
	},

	close:function(){
		if (!this.isClosed){
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
			this.stopListening();
			this.unbind();
			$(this.el).empty();

			this.isClosed = true;
		}
	}


});
