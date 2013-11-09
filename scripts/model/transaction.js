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
		
		"departure_location": new UserLocation(),
		"arrival_location": new UserLocation(),
		"departure_time": new Date(),
		"departure_timeSlot": 0,
		"departure_seatsBooked":0,
		"departure_priceList":[],				//If only single price is set, then priceList has length 1

		"type":-1,				//used to specify if a transaction is associated with messages's departure or return trip
		"totalPrice": -1,
		"state": -1,

		"historyDeleted": false,
		"creationTime": new Date()
	},

	idAttribute: "transactionId",

	urlRoot: Constants.origin + "/api/v1.0/transaction/transaction",

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

        if (typeof data !== 'undefined' && typeof data.userId !== 'undefined'){
            data.transactionId = parseInt(data.transactionId, 10);
            data.providerId = parseInt(data.providerId, 10);
            data.customerId = parseInt(data.customerId, 10);
            data.messageId = parseInt(data.messageId, 10);

            data.provider = new User(data.provider, {'parse': true});
            data.customer = new User(data.customer, {'parse': true});
            data.message = new Message(data.message, {'parse': true});

            data.paymentMethod = parseInt(data.paymentMethod, 10);
            data.customerEvaluation = parseInt(data.customerEvaluation, 10);
            data.providerEvaluation = parseInt(data.providerEvaluation, 10);
           

            data.departure_location = new UserLocation(data.departure_location, {'parse': true});
            data.arrival_location = new UserLocation(data.arrival_location, {'parse': true});
            data.departure_time = Utilities.castFromAPIFormat(data.departure_time);
            data.departure_timeSlot = parseInt(data.departure_timeSlot, 10);
            data.departure_seatsBooked = parseInt(data.departure_seatsBooked, 10);

			data.type = parseInt(data.type, 10);
            data.totalPrice = parseInt(data.totalPrice, 10);
            data.state = parseInt(data.state, 10);

            data.creationTime = Utilities.castFromAPIFormat(data.creationTime);

        }
		return modelHash;
	},

	toJSON: function(){
		var json = _.clone(this.attributes);
		if ( this.get('departure_location') instanceof UserLocation ) {
			json.departure_location = this.get('departure_location').toJSON();
		}
		if ( this.get('arrival_location') instanceof UserLocation ) {
			json.arrival_location = this.get('arrival_location').toJSON();
		}
		json.departure_time = Utilities.castToAPIFormat(this.get('departure_time'));

		return json;
	},

	_toJSON: function(){
		var json = this.toJSON();
		json.departure_time = Utilities.getDateString(this.get('departure_time'));
		//do use Constants.DayTimeSlot, otherwise it'll be difficult to manage
		if ( this.departure_timeSlot === Constants.DayTimeSlot.all ){
			json.departure_timeSlot = "全天";
		} else if ( this.departure_timeSlot == Constants.DayTimeSlot.morning ){
			json.departure_timeSlot = "早上";
		} else if ( this.departure_timeSlot == Constants.DayTimeSlot.afternoon ){
			json.departure_timeSlot = "下午";
		} else if ( this.departure_timeSlot == Constants.DayTimeSlot.night ){
			json.departure_timeSlot = "晚上";
		} else {
			json.departure_timeSlot += "点";
		}
		
		json.arrival_location = this.get('arrival_location').toUiString();
		if (json.arrival_time){
			json.arrival_time = Utilities.getDateString(this.get('arrival_time'));
		}

		if ( this.arrival_timeSlot === 0 ){
			json.arrival_timeSlot = "全天";
		} else if ( this.arrival_timeSlot == 1 ){
			json.arrival_timeSlot = "早上";
		} else if ( this.arrival_timeSlot == 2 ){
			json.arrival_timeSlot = "下午";
		} else if ( this.arrival_timeSlot == 3 ){
			json.arrival_timeSlot = "晚上";
		} else if ( this.arrival_timeSlot ){
			json.arrival_timeSlot = (this.arrival_timeSlot-3) + "点";
		}
		json.creationTime = Utilities.getDateString(this.get('creationTime'));

		var priceList = this.get("departure_priceList");
		var currentPrice = 0;
		var bookedSeats = this.get("departure_seatsBooked");
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

		if (json.state === Constants.transactionState.init ){
			json.stateText = "接受预定中";
		} else if (json.state === Constants.transactionState.cancelled ){
			json.stateText = "已经取消";
		} else if (json.state === Constants.transactionState.aboutToStart ){
			json.stateText = "即将开始";
		} else if (json.state === Constants.transactionState.finished) {
			json.stateText = "完成";
		} else if (json.state === Constants.transactionState.underInvestigation) {
			json.stateText = "审查中";
		} else if (json.state === Constants.transactionState.invalid) {
			json.stateText = "无效";
		}
		return json;

	}

});

var Transactions = Backbone.Collection.extend({

	model: Transaction,

	url: Constants.origin + "/api/v1.0/transaction/transaction",

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