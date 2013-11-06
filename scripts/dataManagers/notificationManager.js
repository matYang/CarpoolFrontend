(function () {
	'use strict';


	this.NotificationManager = function(sessionManager, userManager){
		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;
	
		this.timeStamp = new Date();

		this.sessionManager.resgisterManager(this);
	};

	NotificationManager.prototype.release = function() {
		this.timeStamp = new Date();
	};
	
	NotificationManager.prototype.getTimeStamp = function() {
		return this.timeStamp;
	};

	NotificationManager.prototype.checkNotification = function(notificationId, callback) {
		if (typeof notificationId !== 'number'){
			Constants.dWarn("NotificationManager::checkNotification:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("NotificationManager::checkNotification:: session does not exist, exit");
			return;
		}

		var self = this;
	
		var notification = new Notification();
		notification.overrideUrl(this.apis.notification_notification);
		notification.set('notificationId', notificationId);
		notification.save({},{
			data: JSON.stringify({'userId': this.sessionManager.getUserId()}),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(notification);
				}
			},
			error: function(model, response){
				Constants.dWarn("NotificationManager::checkNotification:: save failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error();
				}
			}
		});
	};

	NotificationManager.prototype.deleteNotification = function(notificationId, callback) {
		if (typeof notificationId !== 'number'){
			Constants.dWarn("NotificationManager::deleteNotification:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("NotificationManager::deleteNotification:: session does not exist, exit");
			return;
		}

		var self = this;
		var notification = new Notification();
		notification.overrideUrl(this.apis.notification_notification);
		notification.set('notificationId', notificationId);
		notification.destroy({
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(notification);
				}
			},
			error: function(model, response){
				Constants.dWarn("NotificationManager::deleteNotification:: delete failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error();
				}
			}
		});
	};


}).call(this);
