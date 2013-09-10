var Transaction = Backbone.Model.extend({
	//TODO fill in Constants with enum int mapping
	defaults:{
		"transactionId": -1,
		"initUserId": -1,
		"targetUserId": -1,

		"initUserImgPath": "default",
		"initUserName": "default",
		"initUserLevel": -1,
		"targetUserImgPath": "default",
		"targetUserName": "default",
		"targetUserLevel": -1,

		"messageId": -1,
		"messageNote": "default",
		"paymentMethod": Constants.paymentMethod.offline,
		"price": -1,
		"requestInfo": "default",
		"responseInfo": "default",

		"startTime": new Date(),
		"endTime": new Date(),
		"location":  new UserLocation(),			//new Location(),

		"established": false,
		"success": false,
		"state": Constants.transactionState.init,
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

		this.set("startTime", new Date(response.startTime));
		this.set("endTime", new Date(response.endTime));

		this.set("location", new UserLocation(false, response.location));

		modelHash.established = response.established;
		modelHash.success = response.success;
		modelHash.state = Constants.transactionState[response.state];
		modelHash.historyDeleted = response.historyDeleted;

		this.set("creationTime", new Date(response.creationTime));

        return modelHash;
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