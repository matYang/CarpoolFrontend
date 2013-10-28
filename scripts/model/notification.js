var Notification = Backbone.Model.extend({

	defaults:{
        'notificationId': -1,
		'notificationEvent': Constants.notificationEvent.watched,
		'targetUserId': -1,

		'initUserId': -1,
		'messageId': -1,
		'transactionId': -1,

		'initUser': {},
		'message': {},
		'transaction': {},
		
		'state': Constants.notificationState.unread,
		'creationTime': new Date(),
		'historyDeleted': false
	},

	idAttribute: 'notificationId',

	urlRoot: Constants.origin + "/api/v1.0/notification/notification",

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

	parse: function(data){

		data.notificationId = parseInt(data.notificationId, 10);
		data.notificationEvent = parseInt(data.notificationEvent, 10);
		data.targetUserId = parseInt(data.targetUserId, 10);

		data.initUserId = parseInt(data.initUserId, 10);
		data.messageId = parseInt(data.messageId, 10);
		data.transactionId = parseInt(data.transactionId, 10);

		data.initUser = new User(data.initUser, {'parse': true});
		data.message = new Message(data.message, {'parse': true});
		data.transaction = new Transaction(data.transaction, {'parse': true});

		data.state = parseInt(data.state, 10);
		data.creationTime = Utilities.castFromAPIFormat(data.creationTime);
		data.historyDeleted = data.historyDeleted === 'true';

        return data;
    },

    //place holder, since notification are never posted to server
    toJSON: function(){
		return {};
    },

    //TODO to user JSON
    _toJSON: function(){

    }

});

var Notifications = Backbone.Collection.extend({

	model: Notification,

	//use 1 to force an request with id attr
	url: Constants.origin + "/api/v1.0/notification/notification/1",

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