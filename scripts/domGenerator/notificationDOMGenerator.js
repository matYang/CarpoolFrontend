(function () {
	'use strict';



	this.NotificationDOMGenerator = function(){};

	NotificationDOMGenerator.prototype.getNotificationDropdownDOM = function(notifications){
		var domArr = '',
			i = 0,
			n_evt = -1;

		for (i = 0; i < notifications.length; i++){
			n_evt = notifications.get(i);
			switch (n_evt){
				case Constants.notificationEvent.transactionInit:
					x="Today it's Sunday";
					break;
				case Constants.notificationEvent.transactionCancelled:
					x="Today it's Monday";
					break;
				case Constants.notificationEvent.transactionAboutToStart:
					x="Today it's Tuesday";
					break;
				case Constants.notificationEvent.transactionEvaluated:
					x="Today it's Wednesday";
					break;
				case Constants.notificationEvent.tranasctionUnderInvestigation:
					x="Today it's Thursday";
					break;
				case Constants.notificationEvent.transactionReleased:
					x="Today it's Friday";
					break;
				case Constants.notificationEvent.watched:
					x="Today it's Saturday";
					break;
				default:
					info.log('invalid notificationEvent when generating DOM');
			}
		}

	};


}).call(this);