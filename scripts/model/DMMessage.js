var DMMessage = Backbone.Model.extend({
	//TODO fill in Constants with enum int mapping
	defaults:{
        "messageId": -1,
		"ownerId": -1,
		"owner": null,

		"transactionList": new Transactions(),	//new ArrayList<Transaction>(),

		"isRoundTrip":false,

		"departure_Location": new UserLocation(),
		"departure_Time": new Date(),
		"departure_seatsNumber":0,
		"departure_seatsBooked":0,
		"departure_priceList":[],

		"arrival_Location": new UserLocation(),
		"arrival_Time": new Date(),
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
		_.bindAll(this, 'overrideUrl', 'simpleFill', 'parse');

		if (urlRootOverride !== null){
			this.urlRoot = urlRootOverride;
		}

		this.simpleFill();			//be careful to use it here
	},

	overrideUrl:function(urlRootOverride){
		if (urlRootOverride !== null){
			this.urlRoot = urlRootOverride;
		}
	},

	//fills the required fields for simple messages with server-fetched fields
	simpleFill: function(){
		this.set("simple_date", Utilities.getDateString(this.startTime));

		this.set("simple_timeRange", Utilities.getTimeRange(this.startTime, this.endTime));

		this.set("duration", Utilities.getDuration(this.startTime, this.endTime));
		this.set("simple_hourlyRate", Utilities.getHourlyRate(this.startTime, this.endTime, this.price));
	},

	isNew: function () {
        return this.id === -1;
    },

	parse: function(response){

		var modelHash = {};

		modelHash.messageId = reponse.messageId;
		modelHash.ownerId = response.ownerId;
		modelHash.ownerImgPath = response.ownerImgPath;
		modelHash.ownerName = response.ownerName;
		modelHash.ownerLevel = response.ownerLevel;
		modelHash.ownerAverageScore = response.ownerAverageScore;
		modelHash.ownerPhone = response.ownerPhone;
		modelHash.ownerEmail = response.ownerEmail;
		modelHash.ownerQq = response.ownerQq;
		modelHash.paymentMethod = Constants.paymentMethod[response.paymentMethod];

		this.set("location", new UserLocation(false, response.location));
		this.set("startTime", new Date(response.startTime));
		this.set("endTime", new Date(response.endTime));

		this.get('transactionList').reset( response.transactionList);		//watchout, found on stackoveflow

		modelHash.note = response.note;

		modelHash.type = Constants.messageType[response.type];
		modelHash.genderRequirement = Constants.gender(response.genderRequirement);
		modelHash.state = Constants.messageState[response.state];

		modelHash.price = response.price;
		modelHash.active = response.active;
		modelHash.historyDeleted = response.historyDeleted;
		this.set("creationTime", new Date(response.creationTime));

        return modelHash;
	}

});

var DMMessages = Backbone.Collection.extend({

	model: DMMessage,

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