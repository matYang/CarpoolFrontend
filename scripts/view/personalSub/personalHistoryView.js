var PersonalHistoryView = Backbone.View.extend({

	initialize: function(params){
		_.bindAll(this, 'renderTransactions', 'renderNotifications', 'bindTransactionEvents', 'bindNotificationEvents', 'openTransactionDetail', 'close');
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
		this.transactions = transactionList;
		this.transactionContainer = $("#transactionHistoryContent");
		var that = this;
			toBeAppended = [],
			html = "",
			i = 0;

		for (i = 0; i < this.transactions.length; i++){
			transactionList.at(i).set("stateText", Constants.stateText[transactionList.at(i).get("state") ]);
			transactionList.at(i).set("startDateText", Utilities.getDateString(transactionList.at(i).get("startTime")));
			toBeAppended[i] = this.transactionTemplate(transactionList.at(i).toJSON());
			this.transactionLookup[transactionList.at(i).get("transactionId")] = i;
		}
		html = toBeAppended.join("");
		this.transactionContainer.append(html);

		this.bindTransactionEvents();
	},

	renderNotifications: function(notificationList){
		this.notifications = notificationList;
		this.notificationContainer = $("#notificationHistoryContent");
		
		var that = this;
			toBeAppended = [],
			html = "",
			i = 0;

		for (i = 0; i < this.notifications.length; i++){
			toBeAppended[i]=this.notificationTemplate(this.notifications.at(i).toJSON());
		}
		html = toBeAppended.join("");
		this.notificationContainer.append(html);

		this.bindNotificationEvents();
	},

	bindTransactionEvents: function(){
		var that = this;
		$("#transactionHistoryContent>.personal_transactionHistory_message").on("click", function(e){
			var id = Utilities.getId(e.delegateTarget.id);
			var transaction = that.transactions.at(that.transactionLookup[id]);

			that.openTransactionDetail(transaction, that.user);
		});
	},

	bindNotificationEvents: function(){
		//TODO: bind notification events
	},
	renderTransactionError: function(){

	},
	renderNotificationError:function(){

	},
	openTransactionDetail: function(transaction, user){
		app.navigate(user.get("userId")+"/transaction/"+transaction.get("transactionId")+"/personal/history");
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