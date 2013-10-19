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
		"departure_seatsBooked":0,
		"departure_priceList":[],				//If only single price is set, then priceList has length 1

		"arrival_location": new UserLocation(),
		"arrival_time": new Date(),
		"arrival_timeSlot": 0,
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

        if (typeof data !== 'undefined' && typeof data.userId !== 'undefined'){
            data.transactionId = parseInt(data.transactionId, 10);
            data.providerId = parseInt(data.providerId, 10);
            data.customerId = parseInt(data.customerId, 10);
            data.messageId = parseInt(data.messageIdm, 10);

            data.provider = new User(data.provider, {'parse': true});
            data.customer = new User(data.customer, {'parse': true});
            data.message = new Message(data.message, {'parse': true});

            data.paymentMethod = parseInt(data.paymentMethod, 10);
            data.customerEvaluation = parseInt(data.customerEvaluation, 10);
            data.providerEvaluation = parseInt(data.providerEvaluation, 10);
            data.direction = parseInt(data.direction, 10);

            data.departure_location = new UserLocation(data.departure_location, {'parse': true});
            data.departure_time = Utilities.castFromAPIFormat(data.departure_time);
            data.departure_timeSlot = parseInt(data.departure_timeSlot, 10);
            data.departure_seatsBooked = parseInt(data.departure_seatsBooked, 10);

            data.arrival_location = new UserLocation(data.arrival_location, {'parse': true});
            data.arrival_time = Utilities.castFromAPIFormat(data.arrival_time);
            data.arrival_timeSlot = parseInt(data.arrival_timeSlot, 10);
            data.arrival_seatsBooked = parseInt(data.arrival_seatsBooked, 10);

		
            data.totalPrice = parseInt(data.totalPrice, 10);
            data.state = parseInt(data.state, 10);

            data.historyDeleted = data.historyDeleted === 'true';
            data.creationTime = Utilities.castFromAPIFormat(data.creationTime);

        }
		return modelHash;
	},

	toJSON: function(){
		var json = _.clone(this.attributes);
		if ( this.get('departure_location') instanceof UserLocation ) {
			json.departure_location = this.get('departure_location').toJSON();
		}
		json.departure_time = Utilities.castToAPIFormat(this.get('departure_time'));

		if ( this.get('arrival_location') instanceof UserLocation ) {
			json.arrival_location = this.get('arrival_location').toJSON();
		}
		json.arrival_time = Utilities.castToAPIFormat(this.get('arrival_time'));

		return json;
	},

	_toJSON: function(){
		var json = this.toJSON();
		json.departure_time = Utilities.getDateString(this.get('departure_time'));
		if ( this.departure_timeSlot === 0 ){
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
		if ( this.arrival_timeSlot === 0 ){
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

		if (json.state === 0 ){
			json.stateText = "接受预定中";
		} else if (json.state === 1 ){
			json.stateText = "已经取消";
		} else if (json.state === 2 ){
			json.stateText = "即将开始";
		} else if (json.state === 3) {
			json.stateText = "完成";
		} else if (json.state === 4) {
			json.stateText = "审查中";
		} else if (json.state === 5) {
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