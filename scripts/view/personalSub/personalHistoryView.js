
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

		this.transactionLookup = {};
		this.domContainer.append(this.wrapperTemplate);

		app.userManager.fetchTransactionList(this.curUserId, this.renderTransactions);
		app.userManager.fetchNotificationList(this.curUserId, this.renderNotifications);
	},

	renderTransactions: function(){
		this.transactionContainer = $("#transactionHistoryContent");
		this.transactions = this.messages = app.userManager.getUser().get('transactionList');
		this.user = this.messages = app.userManager.getUser();

		var that = this;
			toBeAppended = [],
			html = "",
			i = 0;

		for (i = 0; i < this.transactions.length; i++){
			this.transactions.at(i).set("stateText", Constants.stateText[this.transactions.at(i).get("state") ]);
			this.transactions.at(i).set("startDateText", Utilities.getDateString(this.transactions.at(i).get("startTime")));
			toBeAppended[i] = this.transactionTemplate(this.transactions.at(i).toJSON());
			this.transactionLookup[this.transactions.at(i).get("transactionId")] = i;
		}
		html = toBeAppended.join("");
		this.transactionContainer.append(html);

		this.bindTransactionEvents();
	},

	renderNotifications: function(){
		this.notificationContainer = $("#notificationHistoryContent");
		this.notifications = this.messages = app.userManager.getUser().get('notificationList');
		this.user = this.messages = app.userManager.getUser();

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