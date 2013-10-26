var MessageDetailView = Backbone.View.extend({

	el: "",

	initialize: function(messageIdWrapper){
		_.bindAll(this, 'render', 'bindEvents', 'loadTransactions', 'createNewTransaction', 'openTransactionDetail', 'parseMessage', 'parseTransaction', 'renderPriceList', 'close');
		app.viewRegistration.register("MessageDetail", this, true);
		this.isClosed = false;


		this.user = app.sessionManager.getSessionUser();
		this.userId = app.sessionManager.getUserId();

		var self = this;
		this.newTransaction = new Transaction();
		
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
				for (i = 0; i < self.pricelist.length; i++) {
					if (self.pricelist[i] === 0) {
						self.pricelist[i] = self.pricelist[i-1];
					}
				}
				self.createNewTransaction();
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
		app.userManager.fetchTransactionList(this.ownerId,{
			"success":this.loadTransactions,
			"error":this.error
		});
	},
	loadTransactions: function(transactions){
		var i,
			buffer = [],
			that = this;
			this.transactions = transactions;
		for ( i = 0; i < this.transactions.length; i++){
			if ( Utilities.isEmpty(this.transactions.at(i).targetUserName === null)) continue;
			buffer[i] = this.transactionTemplate(this.transactions.at(i)._toJSON());
		}
		$("#view_transactions_content").append(buffer.join(""));
		$("#view_transactions_content>.transaction_content").on("click", function(e){
			var id = Utilities.getId(e.delegateTarget.id);
			var transaction = that.transactions.get(Utilities.toInt(id));
			that.openTransactionDetail(transaction);
		});
		$("#reservation_count").html(this.transactions.length);
	},
	calculateTotal:function(){
		var temp = this.pricelist.length < this.bookInfo.number ? this.pricelist.length : this.bookInfo.number;
		var trips = 0;
		if (this.bookInfo.number > 0){

			if (this.bookInfo.go) {
				trips += 1;
			}
			if (this.bookInfo.back) {
				trips += 1;
			}
			this.bookInfo.total = trips*this.bookInfo.number*(this.pricelist[temp-1]);
		} else {
			this.bookInfo.total = 0;
		}
		$("#price_total").html("总价："+this.bookInfo.total+"元");
	},
	loadError: function(){

	},

	bindEvents: function () {
		var that = this;
		if ( this.ownerId === this.userId){
			$("#view_edit").on("click", function(){
				app.navigate(that.userId + "/message/"+that.messageId+"/edit", true);
			});
		}

		$("#view_transactions_button").on("click", function(){
			var content = $("#view_transactions_content");
			if (that.showTransaction) {
				content.slideUp(100);
			} else {

				content.slideDown(100);
			}
			that.showTransaction = !that.showTransaction;
		});
		var n = this.parsedMessage.departureSeats < this.parsedMessage.returnSeats ? this.parsedMessage.departureSeats : this.parsedMessage.returnSeats;

		if (this.parsedMessage.departureSeats === 0 && this.parsedMessage.returnSeats === 0) {
			$("#view_book_option").remove();
			$("#view_book").text("座位已满").css("background-color","#888888").css("width","100%");
			$("#view_book").off();
		} else {
			if ( this.parsedMessage.departureSeats > 0 ) {
				$("#go").on("click", function(e){
					if (that.bookInfo.go) {
						this.classList.remove("direction_selected");
					} else {
						this.classList.add("direction_selected");
					}
					that.bookInfo.go = !that.bookInfo.go;
					that.calculateTotal();
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
					that.calculateTotal();
				});
			} else {
				$("#back, #returnTime, #returnSeats").remove();
			}
			$("#view_book").on("click", function(e) {

				if (that.bookInfo.go && that.bookInfo.back){
					that.newTransaction.set("myDirection", 0);
					that.newTransaction.set("arrival_seatsBooked", Utilities.toInt($("#chooseSeatNumber").val()));
					that.newTransaction.set("departure_seatsBooked", Utilities.toInt($("#chooseSeatNumber").val()));
				} else if (that.bookInfo.go) {
					that.newTransaction.set("departure_seatsBooked", Utilities.toInt($("#chooseSeatNumber").val()));
					
					that.newTransaction.set("myDirection", 1);
				} else if (that.bookInfo.back){
					that.newTransaction.set("arrival_seatsBooked", Utilities.toInt($("#chooseSeatNumber").val()));
					that.newTransaction.set("myDirection", 2);
				} else {
					that.newTransaction.set("myDirection", -1);
				}
				that.transactionView = new TransactionDetailView(that.newTransaction, {
					"departure_seatsNumber":that.message.get("departure_seatsNumber") - that.message.get("departure_seatsBooked"),
					"arrival_seatsNumber":that.message.get("arrival_seatsNumber") - that.message.get("arrival_seatsBooked")
				});
			});
			$("#chooseSeatNumber").on("keypress", function(e) {
				if (e.keyCode < 48 || e.keyCode >57){
					e.preventDefault();
				}
			});
			// $("#chooseSeatNumber").on("keyup", function(e) {
				
			// });

			$("#chooseSeatNumber").on("change", function(){
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
				that.bookInfo.number = value;
				that.calculateTotal();
			});
		}

	},
	createNewTransaction: function(){
		this.newTransaction.set("providerId", this.ownerId);
		this.newTransaction.set("customerId", this.userId);
		this.newTransaction.set("messageId", this.messageId);
		this.newTransaction.set("provider", this.message.get("owner"));
		this.newTransaction.set("customer", this.user);
		this.newTransaction.set("message", this.message);
		this.newTransaction.set("paymentMethod", this.message.get("paymentMethod"));
		this.newTransaction.set("providerNote", this.message.get("note"));
		if (this.message.get("roundTrip")){
			this.newTransaction.set("direction", 0);
		} else {
			this.newTransaction.set("direction", 1);
		}
		this.newTransaction.set("departure_location",this.message.get("departure_location"));
		this.newTransaction.set("departure_time",this.message.get("departure_time"));
		this.newTransaction.set("departure_timeSlot",this.message.get("departure_timeSlot"));
		
		this.newTransaction.set("departure_priceList",this.message.get("departure_priceList"));
		this.newTransaction.set("arrival_location",this.message.get("arrival_location"));
		this.newTransaction.set("arrival_time",this.message.get("arrival_time"));
		this.newTransaction.set("arrival_timeSlot",this.message.get("arrival_timeSlot"));
		
		this.newTransaction.set("arrival_priceList",this.message.get("arrival_priceList"));
		this.newTransaction.set("state", this.message.get("state"));
	},
	openTransactionDetail: function(transaction){
		var that = this;
		this.transactionDetailView = new TransactionDetailView(transaction, {
			"departure_seatsNumber":that.message.get("departure_seatsNumber") - that.message.get("departure_seatsBooked"),
			"arrival_seatsNumber":that.message.get("arrival_seatsNumber") - that.message.get("arrival_seatsBooked")
		});

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
		parsedMessage.returnSeats = message.get("arrival_seatsNumber") - message.get("departure_seatsBooked");
		if ( message.get("owner") instanceof Backbone.Model) {
			parsedMessage.ownerUser = message.get("owner").toJSON();
		} else {
			parsedMessage.ownerUser = new User().toJSON();
		}
		parsedMessage.type = message.get("Type");
		parsedMessage.note = message.get("note");
		parsedMessage.price = message.get("price");
		parsedMessage.creationTime = "发布于"+Utilities.getDateString(message.get("creationTime"));
		parsedMessage.transactionCount = this.transactions ? this.transactions.length : 0;
		parsedMessage.sessionUserId = this.userId;
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
	close: function(){
		if (!this.isClosed){
			$("#view_edit").off();
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