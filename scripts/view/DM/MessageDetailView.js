var MessageDetailView = Backbone.View.extend({

	el: "",

	initialize: function(messageIdWrapper){
		_.bindAll(this, 'render', 'bindEvents', 'loadTransactions', 'openTransactionDetail', 'parseMessage', 'parseTransaction', 'renderPriceList', 'close');
		app.viewRegistration.register("MessageDetail", this, true);
		this.isClosed = false;


		this.user = app.sessionManager.getSessionUser();
		this.userId = app.sessionManager.getUserId();

		var self = this;
		app.messageManager.fetchMessage(messageIdWrapper.messageId, {
			success: function(){
				self.message = app.messageManager.getMessage();
				self.pricelist = self.message.get("departure_priceList");
				self.bookInfo = {
					"go":false,
					"back":false
				};
				self.parsedMessage = self.parseMessage(self.message);
				self.messageId = self.message.get("messageId");
				self.ownerId = self.message.get("ownerId");

				self.template = _.template(tpl.get('Module/DetailMessage'));
				self.transactionTemplate = _.template(tpl.get('Module/Transaction'));
				self.domContainer = $('#content');
				// self.transactions = self.message.get("transactions");
				self.render();
				self.bindEvents();
				self.showTransaction = false;
			},
			error: function(){
				Info.alert("信息读取失败");
			}
		});
	},

	render: function(){

		// if (testMockObj.testMode){
		// this.message = testMockObj.sampleMessageA;
		// //To allow edit
		// this.message.get("arrival_location").set("province","上海");
		// this.message.get("arrival_location").set("city","上海");
		// this.message.get("arrival_location").set("point","浦东机场");
		// this.message.set("roundTrip", true);
		// this.message.set("departure_seatsNumber", 5);
		// this.message.set("departure_seatsBooked", 1);
		// this.message.set("arrival_seatsNumber", 5);
		// this.message.set("arrival_seatsBooked", 3);
		// this.transactions = testMockObj.sampleTransactions;
		// this.message.set("note", "火车站出发，谢绝大行李");
		// this.message.set("departure_priceList", [20,18,15]);
		// }
		this.domContainer.append(this.template(this.parsedMessage));
		
		this.map = new MapView({
			div:"view_map",
			originLocation:this.message.get("departure_location"),
			destLocation:this.message.get("arrival_location"),
		});
		this.renderPriceList();
		if (this.message.get("roundTrip")) {
			$("#directionArrow").html("<->");
		} else {
			$("#directionArrow").html("->");
		}
	},
	loadTransactions: function(transactions){
		var i,
			buffer = [],
			that = this;
			this.transactions = transactions;
		for ( i = 0; i < this.transactions.length; i++){
			if ( Utilities.isEmpty(this.transactions.at(i).targetUserName === null)) continue;
			buffer[i] = this.transactionTemplate(this.parseTransaction(this.transactions.at(i), i));
		}
		$("#view_transactions_content").append(buffer.join(""));
		//$("#view_transactions_content>.transaction_content").on("click", function(e){
		//var id = Utilities.getId(e.delegateTarget.id);
		//var transaction = that.transactions.at(Utilities.toInt(id));
		//that.openTransactionDetail(transaction);
		//});
	},
	loadError: function(){

	},

	bindEvents: function () {
		var that = this;
		if ( this.ownerId === this.userId){
			$(".view_edit_inline").on("click", function(){
				app.navigate(that.userId + "/message/"+that.messageId+"/edit", true);
			});
		} else {
			$(".view_edit_inline").hide();
		}

		$("#view_transactions_button").on("click", function(){
			var content = $("#view_transactions_content");
			if (that.showTransaction) {
				content.slideUp(100);
			} else {
				app.userManager.fetchTransactionList(this.ownerId,{
					"success":that.loadTransactions,
					"error":that.error
				});
				content.slideDown(100);
			}
			that.showTransaction = !that.showTransaction;
		});
		var n = this.parsedMessage.departureSeats < this.parsedMessage.returnSeats ? this.parsedMessage.departureSeats : this.parsedMessage.returnSeats;

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

	},

	openTransactionDetail: function(transaction){
		this.transactionDetailView = new TransactionDetailView(transaction, this.user, "message/"+this.messageId);
	},

	parseMessage: function(message){
		var parsedMessage = {};
		if (message.get("departure_location") instanceof UserLocation) {
			parsedMessage.origin = message.get("departure_location").toUiString();
		}
		if (message.get("departure_location") instanceof UserLocation) {
			parsedMessage.dest = message.get("arrival_location").toUiString();
		}
		parsedMessage.departureTime = Utilities.getDateString(message.get("departure_time"), true);
		parsedMessage.returnTime = Utilities.getDateString(message.get("arrival_time"), true);
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
		parsedMessage.transactionCount = this.transactions ? this.transactions.length : 0;
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
	renderPriceList: function() {
		var pricelist = this.message.get("departure_priceList");
		var appender = [];
		for ( var p = 0; p < pricelist.length; p++) {
			if  ( pricelist[p] !== 0 ) {
				var num = Utilities.toInt(p)+1;
				appender.push("<div class = 'priceEntry'>"+num+"人：每人"+pricelist[p]+"元</div>");
			}
		}
		$("#pricelist").append(appender.join(""));
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
			if (typeof this.domContainer !== 'undefined'){
				this.domContainer.empty();
			}
			this.isClosed = true;
		}
	}
});