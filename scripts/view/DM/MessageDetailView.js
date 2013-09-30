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
			this.message.get("arrival_Location").set("city","苏州");
			this.message.get("arrival_Location").set("region","苏州市区");
			this.message.get("arrival_Location").set("university","苏州大学");
			this.message.set("roundTrip", true);
			this.message.set("arrival_seatsNumber", 1);
			this.transactions = testMockObj.sampleTransactions;
			this.message.set("note", "火车站出发，谢绝大行李");
		}
		this.pricelist = this.message.get("departure_priceList");
		this.bookInfo = {
			"go":false,
			"back":false
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
			originLocation:this.message.get("departure_Location"),
			destLocation:this.message.get("arrival_Location"),
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
		var n = this.parsedMessage.departureSeats < this.parsedMessage.returnSeats
			 ? this.parsedMessage.departureSeats 
			 : this.parsedMessage.returnSeats;

		if (this.parsedMessage.departureSeats === 0 && this.parsedMessage.returnSeats === 0) {
			$("#view_book_option").remove();
			$("#view_book").text("座位已满").css("background-color","#888888").css("width","100%");
		} else {
			if ( this.parsedMessage.departureSeats > 0 ) {
				$("#go").on("click", function(e){
					if (that.bookInfo.go) {
						this.classList.remove("direction_selected");
					} else {
						this.classList.add("direction_selected");
					}
					that.bookInfo.go = !that.bookInfo.go;
				});
			} else {
				$("#go").remove();
			}
			if ( this.parsedMessage.returnSeats > 0 && this.message.get("roundTrip")) {

				$("#chooseSeatNumber").attr("max", n);
				$("#back").on("click", function(e){
					if (that.bookInfo.back) {
						this.classList.remove("direction_selected");
					} else {
						this.classList.add("direction_selected");
					}
					that.bookInfo.back = !that.bookInfo.back;
				});
			} else {
				$("#back, #returnTime, #returnSeats").remove();
			}
			$("#view_book").on("click", function(e) {
				//Book API call
			});
			$("#chooseSeatNumber").on("keypress", function(e) {
				if (e.keyCode < 48 || e.keyCode >57){
					e.preventDefault();
				} 
			});
			$("#chooseSeatNumber").on("keyup", function(e) {
				var value = this.value;
				value = Utilities.toInt(value);
				if (isNaN(value)) {
					$("#chooseSeatNumber").css("background-color", "#cc1111");
					return;
				}
				$("#chooseSeatNumber").css("background-color", "#ffffff");
				if (value > that.parsedMessage.departureSeats && that.bookInfo.go ) {
					$("#chooseSeatNumber").val(that.parsedMessage.departureSeats);
					value = that.parsedMessage.departureSeats;
				}
				if (value > that.parsedMessage.returnSeats  && that.bookInfo.back) {
					$("#chooseSeatNumber").val(that.parsedMessage.returnSeats);
					value = that.parsedMessage.returnSeats;
				}
			});
		}
		// $('#view_school').on('click', function(){
		// 	if (app.sessionManager.getUserId() === that.message.get('ownerId')) {
		// 		//do nothing for now
		// 	} else {
		// 		var message = app.userManager.getTopBarUser().get('watchList').get(that.messageId);

		// 		if (typeof message === 'object'){
		// 			app.userManager.deWatchMessage(that.messageId, function(){
		// 				alert("Message with id: " + that.messageId + " successfully been watched");
		// 			});
		// 		}
		// 		else{
		// 			app.userManager.watchMessage(that.messageId, function(){
		// 				alert("Message with id: " + that.messageId + " successfully been deWatched");
		// 			});
		// 		}
		// 	}
		// });
	},

	openTransactionDetail: function(transaction){
		var link = [this.userId,"/transaction/",transaction.get("transactionId"),"/Message/",this.messageId];
		app.navigate(link.join(""));
		this.transactionDetailView = new TransactionDetailView(transaction, this.user, "Message/"+this.messageId);
	},

	parseMessage: function(message){
		var parsedMessage = {};
		parsedMessage.origin = message.get("departure_Location").toString();
		parsedMessage.dest = message.get("arrival_Location").toString();
		parsedMessage.departureTime = Utilities.getDateString(message.get("departure_Time"), true);
		parsedMessage.returnTime = Utilities.getDateString(message.get("arrival_Time"), true);
		parsedMessage.departureSeats = message.get("departure_seatsNumber") - message.get("departure_seatsBooked");
		parsedMessage.returnSeats = message.get("arrival_seatsNumber") - message.get("arrival_seatsBooked");
		parsedMessage.ownerUser = message.get("ownerName");
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
	computePrice: function(seats, tripNumber){
		if (this.pricelist[seats] > 0) return this.priceResult[seats]*tripNumber;
		var i = 1;
		while ( i <= seats ) {
			if (!(this.pricelist[i] && this.pricelist[i] > 0)) {
				var j;
				for ( j = 1; j < i; j++ ){

					if (this.priceResult[i] === 0 || this.priceResult[i] > this.priceResult[i-j] + this.priceResult[j]) {
						this.priceResult[i] = this.priceResult[i-j] + this.priceResult[j];
					}
				}
			}
			i++;
		}
		return this.pricelist[seats] * tripNumber;
	},
	close: function(){
		if (!this.isClosed){
			$(".view_edit_inine").off();
			$("#view_transactions_button").off();
			$("#chooseSeatNumber").off();
			$("#view_book").off();
			$("#go").off();
			$("#back").off();
			this.domContainer.empty();
			this.isClosed = true;
		}
	}
});