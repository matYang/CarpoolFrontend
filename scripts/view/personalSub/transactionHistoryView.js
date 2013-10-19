var TransactionHistoryView = MultiPageView.extend({


	initialize: function(messageList){
		_.bindAll(this, 'render', 'openTransactionDetail', 'close');
		MultiPageView.prototype.messages = messageList;
		MultiPageView.prototype.entryTemplate = _.template(tpl.get('personalPage/personalTransactionHistory'));
		MultiPageView.prototype.pageNumberClass = "searchResultPageNumber";
		MultiPageView.prototype.pageNumberId = "transactionPageNumber";
		MultiPageView.prototype.entryEvent = this.openTransactionDetail;
		MultiPageView.prototype.pageNavigator = "transactionHistoryNavigator";
		MultiPageView.prototype.user = app.sessionManager.getSessionUser();
		MultiPageView.prototype.entryHeight = 61;
		MultiPageView.prototype.pageEntryNumber = 7;
		MultiPageView.prototype.entryClass = "personal_transactionHistory_message";
		MultiPageView.prototype.entryContainer = "transactionHistoryContent";
		MultiPageView.prototype.domContainer = $("#transactionHistoryContent");
		MultiPageView.prototype.minHeight = 427;
		MultiPageView.prototype.render();
	},

	render: function(start){
		
	},
	openTransactionDetail: function(messageId){
		if (app.sessionManager.hasSession()){
			this.transactionDetail = new TransactionDetailView(MultiPageView.prototype.messages.get(messageId));
		}
	},

	close: function(){
		this.domContainer.empty();
	}


});