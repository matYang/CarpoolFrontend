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

		"dirction":-1,
		
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

		// json.arrival_location = this.get('arrival_location').toUiString();
		json.arrival_time = Utilities.getDateString(this.get('arrival_time'));

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