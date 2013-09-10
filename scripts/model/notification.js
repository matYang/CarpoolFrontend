var Notification = Backbone.Model.extend({

	defaults:{
        "notificationId": -1,
		"notificationType": Constants.notificationType.on_user,
		"notificationEvent": Constants.notificationEvent.followed,

		"initUserId": -1,
		"initUserName": "default",
		"messageId": -1,
		"transactionId": -1,

		"targetUserId": -1,
		"summary": "default",

		"creationTime": new Date(),
		"checked": false,
		"historyDeleted": false
	},

	idAttribute: "notificationId",

	urlRoot: Constants.origin + "",

	initialize:function(urlRootOverride){
		_.bindAll(this, 'overrideUrl');

		if (urlRootOverride !== null){
			this.urlRoot = urlRootOverride;
		}

		//warning: this fall back is kinda dangerous
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

        modelHash.notificationId = response.notificationId;
		modelHash.notificationType = Constants.notificationType[response.notificationType];
		modelHash.notificationEvent = Constants.notificationEvent[response.notificationEvent],

		modelHash.initUserId = response.initUserId;
		modelHash.initUserName = response.initUsername;
		modelHash.messageId = response.messageId;
		modelHash.transactionId = response.transactionId;

		modelHash.targetUserId = response.targetUserId;
		modelHash.summary = response.summary;

		this.set("creationTime", new Date(response.creationTime));

		modelHash.checked = response.checked;
		modelHash.historyDeleted = response.historyDeleted;

        return modelHash;
    }

});

var Notifications = Backbone.Collection.extend({

	model: Notification,

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