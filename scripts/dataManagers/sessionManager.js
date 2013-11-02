(function () {
	'use strict';
	this.SessionManager = function(){

		this.apis = new ApiResource();
		this.sessionUser = new User();

		this.isLoggedIn = false;
		this.sessionUser = new User(this.apis.users_findSession);

		this.timeStamp = new Date();

		//this is used to reset all manager data upon logouts
		this.sessionRegistraTable = [];
		
		this.cur_notifications = new Notifications();
		this.cur_notificationsTimeStamp = new Date();
		this.cur_socialList = new Users();
		this.cur_socialListTimeStamp = new Date();

	};

	SessionManager.prototype.resgisterManager = function(manager) {
		this.sessionRegistraTable.push(manager);
	};

	SessionManager.prototype.releaseManager = function() {
		for (var managerIndex = 0; managerIndex < this.sessionRegistraTable.length; managerIndex++){
			this.sessionRegistraTable[managerIndex].release();
		}
	};

	SessionManager.prototype.hasSession = function(){
		if (testMockObj.testMode) return true;
		return this.isLoggedIn;
	};

	//avoid using this
	SessionManager.prototype.getSessionUser = function(){
		return this.sessionUser;
	};

	SessionManager.prototype.getUserId = function() {
		return  this.sessionUser.id;
	};

	SessionManager.prototype.getTimeStamp = function() {
		return this.timeStamp;
	};
	
	SessionManager.prototype.getCurNotifications = function(){
		return this.cur_notifications;
	}
	
	SessionManager.prototype.getCurSocialList = function(){
		return this.cur_socialList;
	}
	
	//using the find session API to determine if the uer has logged in or not
	SessionManager.prototype.fetchSession = function(asyncFlag, callback){
		var self = this;
		
		this.sessionUser = new User(this.apis.users_findSession);
		if (testMockObj.testMode) {
			this.sessionUser.set("userId", 10001);
			this.isLoggedIn = true;
			if(callback){
				callback.success();
			}
			return;
		}
		//make sure the session user is new, and sends Get to /findSession
		this.sessionUser.fetch({

			async:asyncFlag,

            dataType:'json',

            success:function(model, response){
				self.isLoggedIn = self.sessionUser.id >= 0 ? true : false;
				self.releaseManager();
				if (self.hasSession()){
					self.fetchCurUserNotifications();
					self.fetchCurUserLetters();
					self.fetchCurUserFavorites();
				}
				if(callback){
					callback.success();
				}
            },

            error: function(model, response){
                Constants.dWarn("SessionManager::updateSession:: fetch failed with response:");
                Constants.dLog(response);

                self.isLoggedIn = false;
                if(callback){
					callback.error();
				}
            }
        });

        this.timeStamp = new Date();

	};

	SessionManager.prototype.login = function(emailVal, passwordVal, callback){
		//if invalid input or is already logged in, can not login
		if (!(emailVal && passwordVal)){
			Constants.dWarn("SessionManager::lougout:: invalid parameter");
			return;
		}
		if (this.isLoggedIn){
			Constants.dWarn("SessionManager::login::already logged in, conflict, still sending the login request");
		}
		var self = this;

		this.sessionUser = new User(this.apis.users_login);
		//make sure the user is new, so no id is in the api path
		this.sessionUser.set('email', emailVal);
		this.sessionUser.set('password', passwordVal);
		this.sessionUser.save({},{

            dataType:'json',

            success:function(model, response){
				self.isLoggedIn = true;

				self.fetchCurUserNotifications();
				self.fetchCurUserLetters();
				self.fetchCurUserFavorites();

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

	SessionManager.prototype.logout = function(callback){
		if (!this.isLoggedIn){
			Constants.dWarn("SessionManager::logout::not logged in, conflict, still sending the logout request");
		}

		var self = this;

		this.sessionUser.overrideUrl(this.apis.users_logout);
		//if session user is new, no id in path, then already logged out
		//if session user is not new, then has id in path, will launch right call
		this.sessionUser.save({},{

            dataType:'json',

            success:function(model, response){
				self.isLoggedIn = false;

				if(callback){
					callback.success(response);
				}
            },

            error: function(model, response){
                Constants.dWarn("SessionManager::logout:: logout failed with response:");
                Constants.dLog(response);

                if(callback){
					callback.error(response);
				}
            }
        });

        this.timeStamp = new Date();
	};

	
	SessionManager.prototype.fetchCurUserNotifications = function(callback){
                var self = this;

                if (!this.hasSession()){
                        Constants.dWarn("SessionManager::fetchNotificationList:: session does not exist, exit");
                        return;
                }

                this.cur_notifications.fetch({
                        data: $.param({ 'userId': this.getUserId()}),
        		 dataType:'json',

            		success:function(model, response){
                                self.cur_notificationsTimeStamp = new Date();
                                if(callback){
                                	//should've used binding, not retrurning or passing models back
                                        callback.success();
                                }
            		},
            		error: function(model, response){
        			Constants.dWarn("SessionManager::fetchNotificationList:: fetch failed with response:");
               			Constants.dLog(response);
               			if(callback){
                                	callback.error();
                                }
        		}
        	});
	};
	
	SessionManager.prototype.fetchCurUserLetters = function(callback){
		
	};

	
	SessionManager.prototype.fetchCurUserFavorites = function(callback) {
		var self = this;

		if (!this.hasSession()){
			Constants.dWarn("SessionManager::fetchWatchedUsers:: session does not exist, exit");
			return;
		}

		this.cur_socialList.overrideUrl(this.apis.users_watchUser + '/' + this.getUserId());
		this.cur_socialList.fetch({
			data: $.param({ 'intendedUserId': this.getUserId()}),
		        dataType:'json',
		
		        success:function(model, response){
				self.socialList_timeStamp = new Date();
				if(callback){
					callback.success();
				}
		        },
	            	error: function(model, response){
		                Constants.dWarn("SessionManager::fetchSocialList:: fetch failed with response:");
		                Constants.dLog(response);
		                if(callback){
					callback.error();
				}
	            	}
        	});
	};
	
	SessionManager.prototype.handleSocket = function(eventName, data) {
        	if (eventName === 'newNotification'){
                        this.fetchCurUserNotifications();
                }
        };

}).call(this);
