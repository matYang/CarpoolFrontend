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

	NotificationManager.prototype.checkNotification = function(notificationIdOpt, callback) {
		var _idArr = Utilities.getIdList(notificationIdOpt);
		var notificationId = _idArr[0];
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("NotificationManager::checkNotification:: session does not exist, exit");
			return;
		}

		var self = this;
	
		var notification = new Notification();
		notification.overrideUrl(this.apis.notification_notificationByIdList);
		notification.save({
			data: JSON.stringify({'userId': this.sessionManager.getUserId(), 'idArray': _idArr, 'stateChangeAction': Constants.notificationStateChangeAction.check}),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(_idArr);
				}
			},
			error: function(model, response){
				Constants.dWarn("NotificationManager::checkNotification:: save failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};

	NotificationManager.prototype.deleteNotification = function(notificationIdOpt, callback) {
		var _idArr = Utilities.getIdList(notificationIdOpt);
		var notificationId = _idArr[0];
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("NotificationManager::deleteNotification:: session does not exist, exit");
			return;
		}

		var self = this;
		var notification = new Notification();
		notification.overrideUrl(this.apis.notification_notificationByIdList);
		notification.save({},{
			data: SON.stringify({'userId': this.sessionManager.getUserId(), 'idArray': _idArr, 'stateChangeAction': Constants.notificationStateChangeAction.delete}),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(_idArr);
				}
			},
			error: function(model, response){
				Constants.dWarn("NotificationManager::deleteNotification:: delete failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};



}).call(this);
