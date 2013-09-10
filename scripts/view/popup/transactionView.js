var TransactionDetailView = Backbone.View.extend({

	el: "",

	initialize: function (transaction, user, link){
		_.bindAll(this, 'render', 'bindEvents', 'setControl', 'acceptTransaction', 'parseTransaction', 'cancelTransaction', 'completeTransaction', 'evaluateTransaction', 'close');
		app.viewRegistration.register("transactionDetail", this, true);
		this.isClosed = false;
		this.transaction = transaction;
		this.user = user;
		this.link = link;
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
	setControl: function () {
		var button = "",
			that = this;
		switch (this.state){
			case 0:
				if (this.userId !== this.transaction.get('initUserId')) {
					button = "<div class = 'button' id='accept'>接受</div>";
					this.id = "accept";
					this.callback = this.acceptTransaction;
				}
			break;
			case 1:
				button = "<div class = 'button' id='cancel'>取消</div>";
				this.id = "cancel";
				this.callback = this.cancelTransaction;
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			break;
			case 7:
				button = "<div class = 'button' id='evaluate'>评分</div>";
				this.id = "evaluate";
				this.callback = this.evaluateTransaction;
				break;
			case 8:
			if (this.userId === this.transaction.get('targetUserId')) {
				button = "<div class = 'button' id='evaluate'>评分</div>";
				this.id = "evaluate";
				this.callback = this.evaluateTransaction;
			}
			case 9:
			if (this.userId === this.transaction.get('initUserId')) {
				button = "<div class = 'button' id='evaluate'>评分</div>";
				this.id = "evaluate";
				this.callback = this.evaluateTransaction;
			}
			case 10:
			default:
			break;
		}
		$("#transaction_control").append(button);
		this.eventButton = $("#"+this.id).on("click", function(e) {
			that.callback();
		});
	},
	bindEvents: function () {

	},
	parseTransaction: function (transaction) {
		var parsed = {};
		parsed.transactionId = transaction.get("transactionId");
		if (transaction.get("initUserId") !== this.userId ){
			parsed.userName = transaction.get("initUserName");
			parsed.userLevel = transaction.get("initUserLevel");
			parsed.userImgPath = transaction.get("initUserImgPath");
		} else {
			parsed.userName = transaction.get("targetUserName");
			parsed.userLevel = transaction.get("targetUserLevel");
			parsed.userImgPath = transaction.get("targetUserImgPath");
		}
		parsed.messageNote = transaction.get("messageNote");
		parsed.paymentMethod = transaction.get("paymentMethod");
		parsed.startTime = Utilities.getDateString(transaction.get("startTime"));
		parsed.endTime = Utilities.getDateString(transaction.get("endTime"));
		parsed.location = transaction.get("location").get("university");
		parsed.state = transaction.get("state");
		parsed.stateText = Constants.stateText[transaction.get("state")];
		parsed.creationDate = transaction.get("creationDate");
		parsed.userEval = "default";
		parsed.userInfo = "default";
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
			this.eventButton.off();
			this.isClosed = true;
		}
	}
});
