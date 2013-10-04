var MessageEditView = MessagePostView.extend({

	el: "",
	initialize: function (id, message) {
		_.bindAll(this, 'render', z'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'reverseMessage', 'close');
		app.viewRegistration.register("MessageEdit", this, true);
		if (testMockObj.testMode){
			this.message = testMockObj.sampleMessageA;
			//To allow edit
			this.message.get("arrival_location").set("city","苏州");
			this.message.get("arrival_location").set("region","苏州市区");
			this.message.get("arrival_location").set("university","苏州大学");
			this.message.set("isRoundTrip", true);
			this.message.set("arrival_seatsNumber", 1);
			this.transactions = testMockObj.sampleTransactions;
			this.message.set("note", "火车站出发，谢绝大行李");
			this.message.set("departure_priceList", [20,18,15]);
		}
		this.reverseMessage(this.message);
		MessagePostView.prototype.initialize({"method":"message/"+ this.message.get("messageId") +"/edit"});
		this.renderFirstPage();
	},
	render:function(step){
		if (step === 1) {
			this.renderFirstStep();
		} else if (step === 2) {
			this.renderSecondStep();
		} else if (step === 3) {
			this.renderThirdStep();
		}

	},
	renderFirstPage: function(){
		var that = this;
		MessagePostView.prototype.render(1);
		$('#publish_nextStep').off();
		$('#publish_nextStep').on('click', function(){
			if (MessagePostView.prototype.validate(1)) {
				app.navigate(that.user.id + "/post/step2");
				that.renderSecondPage();
			}
		});
	},
	renderSecondPage: function(){
		var that = this;
		MessagePostView.prototype.render(2);
		$('#publish_nextStep').off();
		$('#publish_nextStep').on('click', function(){
			if (MessagePostView.prototype.validate(2)) {
				app.navigate(that.user.id + "/post/step3");
				that.renderThirdPage(3);
			}
		});
		$('#publish_back').on('click', function(){
			app.navigate(that.user.id + "/post/step1");
			that.renderFirstPage(1);
		});
	},
	renderThirdPage: function(){
		var that = this;
		MessagePostView.prototype.render(3);
		$('#publish_nextStep').off();
		$('#publish_back').off();
		$('#publish_back').on('click', function(){
			app.navigate(that.user.id + "/post/step1");
			that.renderSecondPage();
		});
	},
	reverseMessage: function(message){
		var toSubmit = MessagePostView.prototype.toSubmit;
		toSubmit.origin = message.get("departure_location");
		toSubmit.dest = message.get("arrival_location");
		toSubmit.numberRequests = 1;
		toSubmit.description = message.get("note");
		toSubmit.priceList = message.get("departure_priceList");
		toSubmit.departureSeats = message.get("departure_seatsNumber");
		toSubmit.returnSeats = message.get("arrival_seatsNumber");
		toSubmit.type = message.get("type");
		toSubmit.requests[0] = {};
		toSubmit.requests[0].departDate = message.get("departure_time");
		toSubmit.requests[0].returnDate = message.get("arrival_time");
		toSubmit.requests[0].round = message.get("isRoundTrip");
		toSubmit.requests[0].type = message.get("type");
		toSubmit.requests[0].departTime = message.get("departure_timeSlot");
		toSubmit.requests[0].returnTime = message.get("arrival_timeSlot");
		var entryNum = 0;
		var index = 0;
		for ( var p in toSubmit.priceList) {
			entryNum += (toSubmit.priceList[p] > 0) ? 1 : 0;
			index = p;
		}
		toSubmit.priceListEntries = entryNum;
		toSubmit.conditionalPrice = entryNum > 1 || p > 0;

	},
	close: function(){
		MessagePostView.prototype.close();
	}
});