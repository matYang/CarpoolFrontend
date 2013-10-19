var Transaction = Backbone.Model.extend({
	
	defaults:{
		"transactionId": -1,

		"providerId":-1,
		"customerId":-1,
		"messageId":-1,

		"provider":{},
		"customer":{},
		"message":{},

		"paymentMethod": Constants.paymentMethod.offline,
		"customerNote": "default",
		"providerNote": "default",
		"customerEvaluation": -1,
		"providerEvaluation": -1,

		"direction":-1,
		
		"departure_location": new UserLocation(),
		"departure_time": new Date(),
		"departure_timeSlot": 0,
		"departure_seatsNumber":0,
		"departure_seatsBooked":0,
		"departure_priceList":[],				//If only single price is set, then priceList has length 1

		"arrival_location": new UserLocation(),
		"arrival_time": new Date(),
		"arrival_timeSlot": 0,
		"arrival_seatsNumber":0,
		"arrival_seatsBooked":0,
		"arrival_priceList":[],

		"totalPrice": -1,
		"state": -1,

		"people": 0,
		"historyDeleted": false,
		"creationTime": new Date()
	},

	idAttribute: "transactionId",

	urlRoot: Constants.origin + "",

	initialize:function(urlRootOverride){
		_.bindAll(this, 'overrideUrl');

		if (urlRootOverride !== null){
			this.urlRoot = urlRootOverride;
		}
	},

	overrideUrl:function(urlRootOverride){
		if (urlRootOverride !== null){
			this.urlRoot = urlRootOverride;
		}
	},

	isNew: function () {
        return this.id === -1;
    },

	parse: function(response){

        var modelHash  = {};

        modelHash.transactionId = response.transactionId;
		modelHash.initUserId = response.initUserId;
		modelHash.targetUserId = response.targetUserId;

		modelHash.initUserImgPath = response.initUserImgPath;
		modelHash.initUserName = response.initUserName;
		modelHash.initUserLevel = response.initUserLevel;
		modelHash.targetUserImgPath = response.targetUserImgPath;
		modelHash.targetUserName = response.targetUserName;
		modelHash.targetUserLevel = response.targetUserLevel;

		modelHash.messageId = response.messageId;
		modelHash.messageNote = response.messageNote;
		modelHash.paymentMethod = Constants.paymentMethod[response.paymentMethod];
		modelHash.price = response.price;
		modelHash.requestInfo = response.requestInfo;
		modelHash.responseInfo = response.responseInfo;

		modelHash.established = response.established;
		modelHash.success = response.success;
		modelHash.state = Constants.transactionState[response.state];
		modelHash.historyDeleted = response.historyDeleted;

		this.set("creationTime", new Date(response.creationTime));

		return modelHash;
	},
	_toJSON: function(){
		var json = this.toJSON();
		json.departure_time = Utilities.getDateString(this.get('departure_time'));
		if ( this.departure_timeSlot == 0 ){
			json.departure_timeSlot = "全天";
		} else if ( this.departure_timeSlot == 1 ){
			json.departure_timeSlot = "早上";
		} else if ( this.departure_timeSlot == 2 ){
			json.departure_timeSlot = "下午";
		} else if ( this.departure_timeSlot == 3 ){
			json.departure_timeSlot = "晚上";
		} else {
			json.departure_timeSlot += "点";
		}
		// json.arrival_location = this.get('arrival_location').toUiString();
		json.arrival_time = Utilities.getDateString(this.get('arrival_time'));
		if ( this.arrival_timeSlot == 0 ){
			json.arrival_timeSlot = "全天";
		} else if ( this.arrival_timeSlot == 1 ){
			json.arrival_timeSlot = "早上";
		} else if ( this.arrival_timeSlot == 2 ){
			json.arrival_timeSlot = "下午";
		} else if ( this.arrival_timeSlot == 3 ){
			json.arrival_timeSlot = "晚上";
		} else {
			json.arrival_timeSlot = (this.arrival_timeSlot-3) + "点";
		}
		//these 2 are actually ignored by server side, placing here for uniformity
		json.creationTime = Utilities.getDateString(this.get('creationTime'));
		json.editTime = Utilities.getDateString(this.get('editTime'));
		var priceList = this.get("departure_priceList");
		var currentPrice = 0;
		var bookedSeats = this.get("departure_seatsBooked")
		if (priceList.length === 1) {
		    currentPrice = priceList[0];
		} else {
			for ( var p = 0; p < priceList.length; p++){
				if (priceList[p] === 0) {
					priceList[p] = priceList[p-1];
				}
			}
			if (priceList.length <= bookedSeats) {
				currentPrice = priceList[priceList.length-1];
			} else {
				currentPrice = priceList[bookedSeats];
			}
		}
		json.currentPrice = currentPrice;
		if ( this.get('departure_location') instanceof UserLocation ) {
			json.departure_location = this.get('departure_location').toUiString();
		}
		if ( this.get('arrival_location') instanceof UserLocation ) {
			json.arrival_location = this.get('arrival_location').toUiString();
		}

		if (json.state === 0 ){
			json.stateText = "有效";
		} else if (json.state === 1 ){
			json.stateText = "即将开始";
		} else if (json.state === 2) {
			json.stateText = "完成";
		} else if (json.state === 3) {
			json.stateText = "审查中";
		} else if (json.state === 4) {
			json.stateText = "无效";
		} 
		return json;

	}

});

var Transactions = Backbone.Collection.extend({

	model: Transaction,

	url: Constants.origin + "",

	initialize:function(urlOverride){
		_.bindAll(this, 'overrideUrl');
		if (urlOverride !== null){
			this.url = urlOverride;
		}

	},

	overrideUrl:function(urlOverride){
		if (urlOverride !== null){
			this.url = urlOverride;
		}
	}


});