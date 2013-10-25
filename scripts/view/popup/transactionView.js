var TransactionDetailView = Backbone.View.extend({

	el: "",
	bookInfo:{
		"go":0,
		"back":0,
		"number":0
	},
	initialize: function (transaction, info){
		var i, that = this;
		_.bindAll(this, 'render', 'load',  'bindEvents', 'bookSuccess', 'calculateTotal','bookFail', 'close');
		app.viewRegistration.register("transactionDetail", this, true);
		this.isClosed = false;
		this.transaction = transaction;
		this.info = info;
		this.json = this.transaction._toJSON();
		for ( i in info) {
			this.json[i] = info[i];
		}
		this.priceList = this.transaction.get("departure_priceList");
		for (i = 0; i < this.priceList.length; i++) {
			if (this.priceList[i] === 0) {
				this.priceList[i] = this.priceList[i-1];
			}
		}
		this.user = app.sessionManager.getSessionUser();
		debugger;
		// if (testMockObj.testMode){
		// 	this.transaction = testMockObj.sampleTransactionA;
		// 	//To allow edit
		// }
		this.user = app.sessionManager.getSessionUser();
		this.editable = transaction.get("transactionId") === -1;
		this.userId = this.user.get("userId");
		this.template = _.template(tpl.get('modal/transactionDetail'));
		this.domContainer = $('#popup');
		this.render();
		this.load();
		this.textareaClicked = false;

		if (this.editable){
			this.bindEvents();
		}
	},
	render: function () {
		var that = this;
		this.domContainer.append(this.template(this.json));
		this.domContainer.show();
		
		$("#transaction_close, #closeButton").on("click", function(){
			that.close();
		});
		this.mapView = new MapView({
			"div":"transaction_map",
			"originLocation":this.transaction.get("departure_location"),
			"destLocation":this.transaction.get("arrival_location"),
		});
		if (!this.editable){
			$("#transaction_number").prop("disabled", true);	
			$("#startButton").remove();
			debugger;
			$("#transaction_userNote").html(this.transaction.get("customerNote"));
		}
		if (this.userId === this.transaction.get("providerId")){
			$("#deleteButton").remove();
		} else if (this.userId === this.transaction.get("customerId")){
			$("#transaction_number").prop("disabled", true);
			$("#transaction_userNote").prop("disabled", true)
			$("#reportButton").remove();
			$("#evaluateButton").remove();
			$("#startButton").remove();
		} else {
			$("#transaction_number").prop("disabled", true);
			$("#transaction_userNote").prop("disabled", true)
			$("#deleteButton").remove();
			$("#reportButton").remove();
			$("#evaluateButton").remove();
			$("#startButton").remove();
		}
	},
	load: function(){
		$("#transaction_number").val(this.transaction.get("departure_seatsBooked"));
		this.bookInfo.number = this.transaction.get("departure_seatsBooked");
		if (this.transaction.get("myDirection") === 0){
			this.bookInfo.go = 1;
			this.bookInfo.back = 1;
		} else if (this.transaction.get("myDirection") === 1) {
			this.bookInfo.go = 1;
		} else if (this.transaction.get("myDirection") === 2) {
			this.bookInfo.back = 1;
		}
		if ( this.bookInfo.go === 1) {
			$("#transaction_go").addClass("direction_selected");
		}
		if ( this.bookInfo.back === 1) {
			$("#transaction_back").addClass("direction_selected");
		}
		this.calculateTotal();
	},

	bindEvents: function () {
		var that = this, temp;
		if (this.userId === this.transaction.get("providerId") && this.transaction.get("state") === Constants.transactionState.init) {
			$("#closeButton").before($("<div>").attr("id","deleteButton"));
			$("#deleteButton").on("click",function(){
				app.transactionManager.deleteTransaction(that.transactionId, function(){
					that.close();
				});
			});
		}

		$("#transaction_go, #transaction_back").on("click", function(e){
			if (this.classList.contains("direction_selected")) {
				this.classList.remove("direction_selected");
			} else {
				this.classList.add("direction_selected");
			}
			if (e.delegateTarget.id === "transaction_go"){
				that.bookInfo.go = (that.bookInfo.go + 1)%2;
			} else {
				that.bookInfo.back = (that.bookInfo.back + 1)%2;
			}

			that.calculateTotal();
		});

		$("#transaction_number").on("change", function(e){
			that.bookInfo.number = Utilities.toInt(e.target.value);
			if (that.bookInfo.go) {
				that.transaction.set("departure_seatsBooked", that.bookInfo.number);
			}
			debugger;
			if (that.bookInfo.back) {
				that.transaction.set("arrival_seatsBooked", that.bookInfo.number);
			}
			$("#transaction_number").removeClass("invalid_input");
			that.calculateTotal();
		});
		$("#startButton").on("click", function(){
			if (that.textareaClicked) {
				that.transaction.set("userNote", $("#transaction_userNote").val());
			}
			if ( that.info.departure_seatsNumber >= that.transaction.get("departure_seatsBooked") && that.info.arrival_seatsNumber >= that.transaction.get("arrival_seatsBooked")) {
				app.transactionManager.initTransaction(that.transaction, {
					"success":that.bookSuccess,
					"error":that.bookFail
				});
			} else {
				$("#transaction_number").addClass("invalid_input");
			}
		});
		$("#transaction_userNote").on("focus", function(e){
			if (!that.textareaClicked) {
				that.textareaClicked = true;
				e.target.textContent = "";
			}
		});
		$("#deleteButton").on("click", function(){

		});
	},
	calculateTotal:function(){
		temp = this.priceList.length < this.bookInfo.number ? this.priceList.length : this.bookInfo.number;
		if (this.bookInfo.number > 0){
			this.bookInfo.total = (this.bookInfo.go+this.bookInfo.back)*this.bookInfo.number*(this.priceList[temp-1]);
		} else {
			this.bookInfo.total = 0;
		}
		$("#transaction_totalPrice").html("总价："+this.bookInfo.total+"元");
	},
	bookSuccess: function(){
		this.close();
	},
	bookFail: function(){
		Info.warn("unable to connect to server");
	},

	close: function () {
		if (!this.isClosed){
			$("#transaction_close").off();
			$("#startButton").off();
			$("#transaction_go, #transaction_back").off();
			$("#transaction_number").off();
			this.domContainer.empty();
			this.domContainer.hide();
			this.isClosed = true;
		}
	}
});
