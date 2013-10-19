var TransactionDetailView = Backbone.View.extend({

	el: "",

	initialize: function (transaction){
		_.bindAll(this, 'render', 'bindEvents', 'acceptTransaction', 'parseTransaction', 'cancelTransaction', 'completeTransaction', 'evaluateTransaction', 'close');
		app.viewRegistration.register("transactionDetail", this, true);
		this.isClosed = false;
		this.transaction = transaction;
		this.user = app.sessionManager.getSessionUser();
		if (testMockObj.testMode){
			this.transaction = testMockObj.sampleTransactionA;
			//To allow edit
			this.user = testMockObj.sampleUser;
		}
		this.userId = this.user.get("userId");
		this.template = _.template(tpl.get('modal/transactionDetail'));
		this.domContainer = $('#popup');
		this.render();
		this.bindEvents();

	},
	render: function () {
		var that = this;
		this.domContainer.append(this.template(this.parseTransaction(this.transaction)));
		this.domContainer.show();
		this.setControl();
		$("#transaction_close").on("click", function(){
			app.navigate(that.user.get("userId")+"/"+that.link);
			that.close()}
		);
	},
	bindEvents: function () {

	},
	parseTransaction: function (transaction) {
		var parsed = {};
			this.state =  parsed.state;
		return parsed;
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
