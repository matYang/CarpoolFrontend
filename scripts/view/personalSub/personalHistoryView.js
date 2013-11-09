var PersonalHistoryView = Backbone.View.extend({

	initialize: function(params){
		_.bindAll(this, 'renderTransactions', 'renderNotifications', 'bindNotificationEvents', 'openTransactionDetail', 'close');
		this.isClosed = false;
		this.domContainer = $("#profilePage_content");

		this.wrapperTemplate = _.template(tpl.get('personalPage/personalHistory'));
		this.transactionTemplate = _.template(tpl.get('personalPage/personalTransactionHistory'));
		//this is reserved for notification construction
		this.notificationTemplate = _.template(tpl.get('personalPage/personalNotificationHistory'));

		this.curUserId = params.intendedUserId;
		this.user = app.sessionManager.getSessionUser();
		this.transactionLookup = {};
		this.domContainer.append(this.wrapperTemplate);

		app.userManager.fetchTransactionList(this.curUserId, {"success":this.renderTransactions, "error":this.renderTransactionError});
		if (this.user.id === this.curUserId) {
			app.userManager.fetchNotificationList(this.curUserId, {"success":this.renderNotifications, "error":this.renderNotificationError});
		}
		
	},

	renderTransactions: function(transactionList){
		this.transactionView = new TransactionHistoryView(transactionList);
	},

	renderNotifications: function(notificationList){
		this.notificationView = new NotificationHistoryView(notificationList);
		// this.notifications = notificationList;
		// this.notificationContainer = $("#notificationHistoryContent");
		
		// var that = this;
		// 	toBeAppended = [],
		// 	html = "",
		// 	i = 0;

		// for (i = 0; i < this.notifications.length; i++){
		// 	toBeAppended[i]=this.notificationTemplate(this.notifications.at(i).toJSON());
		// }
		// html = toBeAppended.join("");
		// this.notificationContainer.append(html);

		// this.bindNotificationEvents();
	},

	bindNotificationEvents: function(){
		//TODO: bind notification events
	},
	renderTransactionError: function(){

	},
	renderNotificationError:function(){

	},
	openTransactionDetail: function(transaction, user){
		this.transactionDetailView = new TransactionDetailView(transaction, this.user, "personal/history");
	},

	close: function(){
		if (!this.isClosed){
			//TODO: unbind all events
			$("#transactionHistoryContent>.personal_transactionHistory_message").off();
			this.domContainer.empty();
			this.isClosed = true;
		}
	}


});