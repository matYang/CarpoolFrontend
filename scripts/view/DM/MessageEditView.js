var MessageEditView = MessagePostView.extend({

	el: "",
	initialize: function (id, message) {
		if (testMockObj.testMode){
			this.message = testMockObj.sampleMessageA;
			//To allow edit
			this.message.get("arrival_Location").set("city","苏州");
			this.message.get("arrival_Location").set("region","苏州市区");
			this.message.get("arrival_Location").set("university","苏州大学");
			this.message.set("isRoundTrip", true);
			this.message.set("arrival_seatsNumber", 1);
			this.transactions = testMockObj.sampleTransactions;
			this.message.set("note", "火车站出发，谢绝大行李");
			this.message.set("departure_priceList", [20,18,15]);
		}
		this.reverseMessage(this.message);
		MessagePostView.prototype.method = "message/"+ this.message.get("messageId") +"/edit";
		MessagePostView.prototype.initialize();

	},
	reverseMessage: function(message){
		var toSubmit = MessagePostView.prototype.toSubmit;
		toSubmit.origin = message.get("departure_Location");
		toSubmit.dest = message.get("arrival_Location");
		toSubmit.numberRequests = 1;
		toSubmit.description = message.get("note");
		toSubmit.priceList = message.get("departure_priceList");
		toSubmit.departureSeats = message.get("departure_seatsNumber");
		toSubmit.returnSeats = message.get("arrival_seatsNumber");
		toSubmit.type = message.get("type");
		toSubmit.requests[0] = {};
		toSubmit.requests[0].departDate = message.get("departure_Time");
		toSubmit.requests[0].returnDate = message.get("arrival_Time");
		toSubmit.requests[0].round = message.get("isRoundTrip");
		toSubmit.requests[0].type = message.get("type");
	
		var entryNum = 0;
		var index = 0;
		for ( var p in toSubmit.priceList) {
			entryNum += (toSubmit.priceList[p] > 0) ? 1 : 0;
			index = p;
		}
		toSubmit.priceListEntries = entryNum;
		toSubmit.conditionalPrice = entryNum > 1 || p > 0;

	}
});