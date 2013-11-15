var Letter = Backbone.Model.extend({

	defaults:{
		'letterId': -1,
		'from_userId': -1,
		'to_userId': -1,
		'type': Constants.LetterType.user,

		'from_user': {},
		'to_user': {},

		'content': '',
		'send_time': new Date(),
		'check_time': new Date(),

		'state': Constants.LetterState.unread,
		'historyDeleted': false
	},

	idAttribute: 'letterId',

	urlRoot: Constants.origin + "/api/v1.0/letter/letter",

	initialize:function(urlRootOverride){
		_.bindAll(this, 'overrideUrl', 'isNew', 'parse', 'toJSON', '_toJSON', 'toDropdownJSON');

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

		data.letterId = parseInt(data.letterId, 10);
		data.from_userId = parseInt(data.from_userId, 10);
		data.to_userId = parseInt(data.to_userId, 10);
		data.type = parseInt(data.type, 10);

		if (typeof data.from_user.userId !== 'undefined'){
			data.from_user = new User(data.from_user, {'parse': true});
		}
		if (typeof data.to_user.userId !== 'undefined'){
			data.to_user = new User(data.to_user, {'parse': true});
		}

		data.send_time = Utilities.castFromAPIFormat(data.send_time);
		data.check_time = Utilities.castFromAPIFormat(data.check_time);

		data.state = parseInt(data.state, 10);
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
        json.send_time = Utilities.castToAPIFormat(this.get('send_time'));

        if (typeof this.get('from_user')._toJSON === 'function'){
			json.from_user = this.get('from_user')._toJSON();
		}
		if (typeof this.get('to_user')._toJSON === 'function'){
			json.to_user = this.get('to_user')._toJSON();
		}
		
        return json;
    }

});

var Letter = Backbone.Collection.extend({

	model: Letter,

	//use 1 to force an request with id attr
	url: Constants.origin + "/api/v1.0/letter/letter/1",

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