(function() {
	'use strict';


	this.AdminManager = function(sessionManager){

		this.apis = new ApiResource();
		this.adminApis = new AdminApiResource();

		this.sessionManager = sessionManager;
		this.user_pendingVerify = new Users();
		this.timeStamp = new Date();

        this.sessionManager.resgisterManager(this);
        this.sessionUser = this.sessionManager.getSessionUser();

	};

	AdminManager.prototype.adminLogin = function(emailVal, passwordVal, callback){
		//if invalid input or is already logged in, can not login
		if (!(emailVal && passwordVal)){
			Constants.dWarn("SessionManager::lougout:: invalid parameter");
			return;
		}
		if (this.sessionManager.hasSession()){
			Constants.dWarn("SessionManager::login::already logged in, conflict, still sending the login request");
			app.navigate("", true);
		}
		var self = this;

		this.sessionUser.overrideUrl(this.apis.admin_login);
		//make sure the user is new, so no id is in the api path
		this.sessionUser.set('email', emailVal);
		this.sessionUser.set('password', passwordVal);
		this.sessionUser.save({},{
            dataType:'json',

            success:function(model, response){
				Constants.dLog(model);
				if(callback){
					callback.success(response);
				}
            },

            error: function(model, response){
                Constants.dWarn("SessionManager::login:: login failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });

        this.timeStamp = new Date();
	};

	AdminManager.prototype.fetchVerifyRequests = function(type, callback) {
		if (!this.hasSession()){
			Constants.dWarn("SessionManager::login::already logged in, conflict, still sending the login request");
			app.navigate("/login", true);
		}
		// this.user_pendingVerify.overrideUrl(this.);
		this.user_pendingVerify.fetch({
			data: $.param({ 'userId': this.sessionManager.getUserId(),
							'type': type
			}),
			dataType:'json',
			success: function (model, response) {
				if (callback) {
					callback.success(response);
				}
			},
			error: function (model, response) {
				if (callback) {
					callback.error(response);
				}
			}

		});
	};

	/*

	*/
	AdminManager.prototype.processRequest = function (request, callback) {
		var url = this.adminApis.admin_verification;
		rerqust.overrideUrl(url);
		request.set("reviewerId", this.sessionManager.getUserId());
		request.save({
			dataType:'json',
			success: function (model, response) {
				if (callback) {
					callback.success(response);
				}
			},
			error: function (model, response) {
				if (callback) {
					callback.error(response);
				}
			}
		});

	};

}).call(this);