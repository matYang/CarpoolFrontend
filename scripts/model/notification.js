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

		if (typeof data.initUser.userId !== 'undefined'){
			data.initUser = new User(data.initUser, {'parse': true});
		}
		if (typeof data.message.messageId !== 'undefined'){
			data.message = new Message(data.message, {'parse': true});
		}
		if (typeof data.transaction.transactionId !== 'undefined'){
			data.transaction = new Transaction(data.transaction, {'parse': true});
		}

		data.state = parseInt(data.state, 10);
		data.creationTime = Utilities.castFromAPIFormat(data.creationTime);

        return data;
    },

    //place holder, since notification are never posted to server
    toJSON: function(){
		var json = _.clone(this.attributes);
		return json;
    },

    _toJSON: function(){
        var json = this.toDropdownJSON();
        return json;
    },

    toDropdownJSON: function(){
		var json = this.toJSON();
        json.creationTime = Utilities.castToAPIFormat(this.get('creationTime'));
        if (this.get('initUser') instanceof Backbone.Model) {
            json.initUserName = this.get('initUser').get('name');
            json.imgPath = this.get('initUser').get('imgPath');
        }

        switch (this.get('notificationEvent')){
			case Constants.notificationEvent.transactionInit:
				json.notificationText = "预约了你的拼车";
				break;
            case Constants.notificationEvent.transactionCancelled:
				json.notificationText = "取消了他向你的预约";
				break;
            case Constants.notificationEvent.transactionAboutToStart:
				json.notificationText = "与你的拼车即将开始";
				break;
            case Constants.notificationEvent.transactionEvaluated:
                json.notificationText = "与你的拼车已经完成，请给对方打分";
                break;
			case Constants.notificationEvent.tranasctionUnderInvestigation:
				json.notificationText = "投诉了与你的拼车，现已开始调查";
				break;
			case Constants.notificationEvent.transactionReleased:
				json.notificationText = "与你的拼车投诉调查完毕";
				break;
			case Constants.notificationEvent.watched:
				json.notificationText = "关注了你的主页";
				break;
			default:
				info.warn('Invalid notificationEvent');
				json.notificationText = "Invalid notificationEvent";
        }

        if (typeof this.get('initUser')._toJSON === 'function'){
			json.initUser = this.get('initUser')._toJSON();
		}
		if (typeof this.get('message')._toJSON === 'function'){
			json.message = this.get('message')._toJSON();
		}
		if (typeof this.get('transaction')._toJSON === 'function'){
			json.transaction = this.get('transaction')._toJSON();
		}
		

        return json;
    }

});

var Notifications = Backbone.Collection.extend({

	model: Notification,

	//use 1 to force an request with id attr
	url: Constants.origin + "/api/v1.0/notification/notification/1",

	initialize:function(urlOverride){
		_.bindAll(this, 'overrideUrl');
		if (typeof urlOverride !== 'undefined'){
			this.url = urlOverride;
		}

	},

	overrideUrl:function(urlOverride){
		if (typeof urlOverride !== 'undefined'){
			this.url = urlOverride;
		}
	}


});