var Message = Backbone.Model.extend({
	//TODO fill in Constants with enum int mapping
	defaults:{
        "messageId": -1,
		"ownerId": -1,
		"owner": {},

		"transactionList": [],	//new ArrayList<Transaction>(),

		"isRoundTrip":false,

		"departure_location": {},
		"departure_time": new Date(),
		"departure_timeSlot": 0,
		"departure_seatsNumber":0,
		"departure_seatsBooked":0,
		"departure_priceList":[],				//If only single price is set, then priceList has length 1

		"arrival_location": {},
		"arrival_time": new Date(),
		"arrival_timeSlot": 0,
		"arrival_seatsNumber":0,
		"arrival_seatsBooked":0,
		"arrival_priceList":[],

		"paymentMethod": Constants.paymentMethod.offline,
		"note": "deault",
		"type": Constants.messageType.ask,
		"genderRequirement": Constants.gender.both,
		"state": Constants.messageState.normal,

		"creationTime": new Date(),
		"editTime": new Date(),
		"historyDeleted": false
	},

	idAttribute: "messageId",

	urlRoot: Constants.origin + "/api/v1.0/dianming/dianming",

	initialize:function(urlRootOverride){
		_.bindAll(this, 'overrideUrl', 'isNew', 'parse', 'toJSON');

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

	parse: function(data){

		data.owner = new User(data.owner, {'parse': true});
		data.isRoundTrip = data.isRoundTrip === 'true';
		
		data.departure_location = new UserLocation(data.departure_location, {'parse': true});
		data.departure_time = Utilities.castFromAPIFormat(data.departure_time);
		data.departure_timeSlot = parseInt(data.departure_timeSlot, 10);
		data.departure_seatsNumber = parseInt(data.departure_seatsNumber, 10);
		data.departure_seatsBooked = parseInt(data.departure_seatsBooked, 10);

		data.arrival_location = new UserLocation(data.arrival_location, {'parse': true});
		data.arrival_time = Utilities.castFromAPIFormat(data.arrival_time);
		data.arrival_timeSlot = parseInt(data.arrival_timeSlot, 10);
		data.arrival_seatsNumber = parseInt(data.arrival_seatsNumber, 10);
		data.arrival_seatsBooked = parseInt(data.arrival_seatsBooked, 10);

		data.paymentMethod = parseInt(data.paymentMethod, 10);

		data.type = parseInt(data.type, 10);
		data.genderRequirement = parseInt(data.genderRequirement, 10);
		data.state = parseInt(data.state, 10);

		data.creationTime = Utilities.castFromAPIFormat(data.creationTime);
		data.editTime = Utilities.castFromAPIFormat(data.editTime);

		data.historyDeleted = data.historyDeleted === 'true';

        return modelHash;
	},

	toJSON: function(){
		var json = _.clone(this.attributes);
		
		//ignore user here, meaningless to do anything to user persistence from inside message
		json.departure_location = json.departure_location.toJSON();
		json.departure_time = Utilities.castToAPIFormat(json.departure_time);

		json.arrival_location = json.arrival_location.toJSON();
		json.arrival_time = Utilities.castToAPIFormat(json.arrival_time);

		//ignore creationTime and editTime cuz they are determined by server

		return json;
	}

});

var Messages = Backbone.Collection.extend({

	model: Message,

	url: Constants.origin + "/api/v1.0/dianming/dianming",

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