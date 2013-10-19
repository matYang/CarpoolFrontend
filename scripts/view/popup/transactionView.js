var TransactionDetailView = Backbone.View.extend({

	el: "",
	bookInfo:{
		"go":0,
		"back":0,
		"number":0
	},
	initialize: function (transaction){
		var i;
		_.bindAll(this, 'render', 'bindEvents', 'acceptTransaction', 'calculateTotal','cancelTransaction', 'completeTransaction', 'evaluateTransaction', 'close');
		app.viewRegistration.register("transactionDetail", this, true);
		this.isClosed = false;
		this.transaction = transaction;
		this.priceList = this.transaction.get("departure_priceList");
		for (i = 0; i < this.priceList.length; i++) {
			if (this.priceList[i] === 0) {
				this.priceList[i] = this.priceList[i-1];
			}
		}
		this.user = app.sessionManager.getSessionUser();
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
		if (this.editable){
			this.bindEvents();
		}
	},
	render: function () {
		var that = this;
		this.domContainer.append(this.template(this.transaction._toJSON()));
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
;		}
	},
	load: function(){
		$("#transaction_number").val(this.transaction.get("people"));
		this.bookInfo.number = this.transaction.get("people");
		if (this.transaction.get("myDirection") === 0){
			this.bookInfo.go = 1;
			this.bookInfo.back = 1;
		} else if (this.transaction.get("myDirection") === 1) {
			this.bookInfo.go = 1;
		} else {
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
			that.calculateTotal();
		});
		$("#startButton").on("click", function(){
			app.transactionManager.initTransaction(this.transaction, function(){
				that.close();
			});
		});
	},
	calculateTotal:function(){
		debugger;
		temp = this.priceList.length < this.bookInfo.number ? this.priceList.length : this.bookInfo.number;
		if (this.bookInfo.number > 0){
			this.bookInfo.total = (this.bookInfo.go+this.bookInfo.back)*this.bookInfo.number*(this.priceList[temp-1]);
		} else {
			this.bookInfo.total = 0;
		}
		$("#transaction_totalPrice").html("总价："+this.bookInfo.total+"元");
	},
	acceptTransaction: function(){},
	cancelTransaction: function(){},
	completeTransaction: function(){},
	evaluateTransaction: function(){},
	close: function () {
		if (!this.isClosed){
			$("#transaction_close").off();
			this.domContainer.empty();
			this.domContainer.hide();
			this.isClosed = true;
		}
	}
});
