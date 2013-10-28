(function () {
	'use strict';


	this.NotificationManager = function(sessionManager, userManager){
		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;

		this.notification = new Notification();
		this.timeStamp = new Date();

		this.sessionManager.resgisterManager(this);
	};

	Notification.prototype.getNotification = function() {
		return this.notification;
	};

	Notification.prototype.getNotifications = function() {
		return this.notifications;
	};

	NotificationManager.prototype.release = function() {
		this.notifications = new Notifications();
		this.timeStamp = new Date();
	};


	NotificationManager.prototype.fetchNotification = function(callback){
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("NotificationManager::fetchNotification:: session does not exist, exit");
			return;
		}

		var self = this;
		//passing reset true to make sure notifications are always sync with server
		this.notifications.fetch({
			reset: true,
			data: $.param({ 'userId': this.sessionManager.getUserId()}),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success();
				}
			},
			error: function(model, response){
				Constants.dWarn("NotificationManager::fetchNotification:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error();
				}
			}
		});
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

		this.notification.overrideUrl(this.apis.notification_notification);
		this.notification.set('notificationId', notificationId);
		this.notification.save({},{
			data: $.param({'userId': this.sessionManager.getUserId() }),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success();
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

		this.notification.overrideUrl(this.apis.notification_notification);
		this.notification.set('notificationId', notificationId);
		this.notification.destroy({
			data: $.param({ 'userId': this.sessionManager.getUserId()}),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success();
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

	NotificationManager.prototype.handleSocket = function(eventName, data) {
		if (eventName === 'newNotification'){
			this.fetchNotification();
		}
	};


}).call(this);