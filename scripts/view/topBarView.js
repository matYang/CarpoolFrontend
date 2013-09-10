var TopBarView = Backbone.View.extend({

	el: $('#topBar'),

	events: {


	},

	initialize:function(){
		_.bindAll(this, 'render', 'bindEvents','close', 'logout','showMessage','hideMessage','showLikes','hideLikes','showFavorite','hideFavorite');
		app.viewRegistration.register("topBar", this, true);
		this.isClosed = false;

		this.loggedInTemplate = _.template(tpl.get('topBar/topBar-loggedIn'));
		this.notLoggedInTemplate = _.template(tpl.get('topBar/topBar-notLoggedIn'));



		var self = this;

		if (!app.sessionManager.hasSession()){
			self.topBarUser = app.userManager.getTopBarUser();

			self.render();
			self.bindEvents();
		}
		//if has session, fetch before continue
		else{
			app.userManager.fetchTopBarUser(function(){
				self.topBarUser = app.userManager.getTopBarUser();

				self.render();
				self.bindEvents();
			});
		}

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

	bindEvents: function(){
		var that = this;


		$('#logo').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/front" , true);
		});
		$('.navigate_main').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/main" , true);
		});
		$('.navigate_personal').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/personal/" + that.topBarUser.id , true);
		});
		$('.navigate_feedBack').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/DMpost" , true);
		});

		$('#messages').on('mouseenter', function(){
			that.showMessage();
			$("#messages").addClass("whiteBackground");
		});
		$('#likes').on('mouseenter', function(){
			that.showLikes();
			$("#likes").addClass("whiteBackground");
		});
		$('#favorites').on('mouseenter', function(){
			that.showFavorite();
			$("#favorites").addClass("whiteBackground");
		});
		$('#profilePicture').on('mouseenter', function(){
			that.showProfile();
		});
		$('#messages').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "messageDropdown" && e.toElement.parentElement.id !== "messageDropdown"){
				that.hideMessage();
			}
		});
		$('#likes').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "likeDropdown" && e.toElement.parentElement.id !== "likeDropdown"){
				that.hideLikes();
			}
		});
		$('#favorites').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "favoriteDropdown" && e.toElement.parentElement.id !== "favoriteDropdown"){
				that.hideFavorite();
			}
		});
		$('#profilePicture').on('mouseleave', function(e){
			if (e.toElement !== null && e.toElement.id !== "profileDropdown" && e.toElement.parentElement.id !== "profileDropdown"){
				that.hideProfile();
			}
		});
		$('#favoriteDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "favorites"){
				that.hideFavorite();
			}
		});
		$('#messageDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "messages"){
				that.hideMessage();
			}
		});
		$('#likeDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "likes"){
				that.hideLikes();
			}
		});
		$('#profileDropdown').on('mouseleave', function(e){
			if (e.toElement.id !== "profilePicture"){
				that.hideLikes();
			}
		});
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
							app.sessionManager.fetchSession(true, function(){
								app.userManager.topBarUser = app.sessionManager.getSessionUser();
								app.navigate(app.sessionManager.getUserId() + "/main", true);
							});
						},

						error: function(status){
							alert("登录失败，请稍后再试");
							$("#login_username").css("background-color","#ff7777");
							$("#login_password").css("background-color","#ff7777");
						}
					});
				} else {
					//请输入密码
					alert("用户名和密码不能为空");
					$("#login_username").css("background-color","#ff7777");
					$("#login_password").css("background-color","#ff7777");
				}
			});
		}
		else{
			//TODO add a logout btn
			$('#logout').on('click', function(){
				that.logout();
			});
		}

	},

	logout: function(){
		app.sessionManager.logout({
			success: function(response){
				Constants.dLog("server logout response: ");
				Constants.dLog(response);

				app.sessionManager.fetchSession(true, function(){
					app.userManager.topBarUser = app.sessionManager.getSessionUser();
					app.navigate("front", true);
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
		$("#messageDropdown").show();
	},
	hideMessage:function(){
		$("li").removeClass("whiteBackground");
		$("#messageDropdown").hide();
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
		$("#likeDropdown").show();
	},
	hideLikes:function(){
		$("li").removeClass("whiteBackground");
		$("#likeDropdown").hide();
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
			$('#messages').off();
			$('#likes').off();
			$('#favorites').off();
			$('#messageDropdown').off();
			$('#likeDropdown').off();
			$('#favoriteDropdown').off();
			if (!app.sessionManager.hasSession()){
				$('#signup_button').off();
				$('#login_button').off();
			}
			this.unbind();
			$(this.el).empty();

			this.isClosed = true;
		}
	}


});