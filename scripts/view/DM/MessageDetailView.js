var MessageDetailView = Backbone.View.extend({

	el: "",

	initialize: function(id, message){
		_.bindAll(this, 'render', 'bindEvents', 'loadTransactions', 'openTransactionDetail', 'parseMessage', 'parseTransaction', 'close');
		app.viewRegistration.register("MessageDetail", this, true);
		this.isClosed = false;
		this.message = message;
		this.userId = id;
		if (testMockObj.testMode){
			this.message = testMockObj.sampleMessageA;
			//To allow edit
			this.transactions = testMockObj.sampleTransactions;
		}
		this.parsedMessage = this.parseMessage(this.message);
		this.messageId = this.message.get("messageId");
		this.ownerId = this.message.get("ownerId");

		this.template = _.template(tpl.get('DMModule/DMDetailMessage'));
		this.transactionTemplate = _.template(tpl.get('DMModule/DMTransaction'));
		this.domContainer = $('#content');
		// this.transactions = this.message.get("transactions");
		this.render();
		this.bindEvents();
		this.showTransaction = true;
	},

	render: function(){
		this.domContainer.append(this.template(this.parsedMessage));
		this.loadTransactions();
		this.map = new MapView({
			div:"view_map",
			location:this.message.get("location")
		});
	},
	loadTransactions: function(){
		var i,
			buffer = [],
			that = this;

		for ( i = 0; i < this.transactions.length; i++){
			if ( Utilities.isEmpty(this.transactions.at(i).targetUserName === null)) continue;
			buffer[i] = this.transactionTemplate(this.parseTransaction(this.transactions.at(i), i));
		}
		$("#view_transactions_content").append(buffer.join(""));
		$("#view_transactions_content>.transaction_content").on("click", function(e){
			var id = Utilities.getId(e.delegateTarget.id);
			var transaction = that.transactions.at(Utilities.toInt(id));
			that.openTransactionDetail(transaction);
		});
	},


	bindEvents: function () {
		var that = this;
		if ( this.ownerId === this.userId){
			$(".view_edit_inline").on("click", function(){
				app.navigate(that.userId + "/Message/"+that.messageId+"/edit", true);
			});
		} else {
			$(".view_edit_inline").hide();
		}

		$("#view_transactions_button").on("click", function(){
			var content = $("#view_transactions_content");
			if (that.showTransaction) {
				content.slideUp();
			} else {
				content.slideDown();
			}
			that.showTransaction = !that.showTransaction;
		});

		//TODO:: add a watch btn
		$('#view_school').on('click', function(){
			if (app.sessionManager.getUserId() === that.message.get('ownerId')) {
				//do nothing for now
			} else {
				var message = app.userManager.getTopBarUser().get('watchList').get(that.messageId);

				if (typeof message === 'object'){
					app.userManager.deWatchMessage(that.messageId, function(){
						alert("Message with id: " + that.messageId + " successfully been watched");
					});
				}
				else{
					app.userManager.watchMessage(that.messageId, function(){
						alert("Message with id: " + that.messageId + " successfully been deWatched");
					});
				}
			}
		});
	},

	openTransactionDetail: function(transaction){
		var link = [this.userId,"/transaction/",transaction.get("transactionId"),"/Message/",this.messageId];
		app.navigate(link.join(""));
		this.transactionDetailView = new TransactionDetailView(transaction, this.user, "Message/"+this.messageId);
	},

	parseMessage: function(message){
		var parsedMessage = {};
		var departure = message.get("departure_location");
		parsedMessage.school = departure.get("university");
		parsedMessage.city = departure.get("city") + " " + departure.get("region");
		parsedMessage.ownerUser = message.get("ownerName");
		parsedMessage.startTime = message.get("simple_date")+message.get("simple_startTime");
		parsedMessage.type = message.get("Type");
		parsedMessage.note = message.get("note");
		parsedMessage.price = message.get("price");
		parsedMessage.creationTime = "发布于"+Utilities.getDateString(message.get("creationTime"));
		parsedMessage.phone = message.get("ownerPhone");
		parsedMessage.qq = message.get("ownerQq");
		parsedMessage.email = message.get("ownerEmail");
		parsedMessage.transactionCount = this.transactions.length;
		return parsedMessage;
	},

	parseTransaction: function(transaction, i){
		var parsedTransaction = {};
		parsedTransaction.id = i;
		parsedTransaction.transactionId = transaction.get("transactionId");
		parsedTransaction.targetUserName = transaction.get("targetUserName");
		parsedTransaction.date = Utilities.getDateString(transaction.get("creationTime"));
		return parsedTransaction;
	},

	close: function(){
		if (!this.isClosed){
			$(".view_edit_inine").off();
			$("#view_transactions_button").off();
			this.domContainer.empty();
			this.isClosed = true;
		}
	}
});