var TransactionHistoryView = MultiPageView.extend({


	initialize: function(messageList){
		_.bindAll(this, 'render', 'openTransactionDetail','fetchMessageSuccess','fetchMessageError', 'close');
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
		var currentTransaction = MultiPageView.prototype.messages.get(messageId);
		app.messageManager.fetchMessage(currentTransaction.get("messageId"), {
			"success":this.fetchMessageSuccess,
			"error":this.fetchMessageError,
			"transaction":currentTransaction
		});

	},
	fetchMessageSuccess:function(message, transaction){
		if (app.sessionManager.hasSession()){
			this.transactionDetail = new TransactionDetailView(transaction, {
				"departure_seatsNumber":message.get("departure_seatsNumber") - message.get("departure_seatsBooked"),
				"arrival_seatsNumber":message.get("arrival_seatsBookedtsNumber") - message.get("arrival_seatsBooked"),
				"status":"r"
			});
		}
	},
	fetchMessageError:function(){

	},

	close: function(){
		this.domContainer.empty();
	}


});