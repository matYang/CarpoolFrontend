(function () {
	'use strict';


	this.MessageManager = function(sessionManager,  userManager){

		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;

		this.message = new Message();
		this.timeStamp = new Date();
		this.searchResults = new Messages();
		this.searchResults_timeStamp = new Date();
		this.recents = new Messages();
		this.recents_timeStamp = new Date();

		this.sessionManager.resgisterManager(this);
	};

	MessageManager.prototype.getMessage = function() {
		return this.message;
	};

	MessageManager.prototype.getSearchResults = function() {
		return this.searchResults;
	};

	MessageManager.prototype.getRecents = function() {
		return this.recents;
	};

	//only reset the detailed message upon logout
	MessageManager.prototype.release = function() {
		this.message = new Message();
		this.timeStamp = new Date();
	};


	MessageManager.prototype.fetchMessage = function(messageId, callback){
		if (typeof messageId === 'undefined' ){
			Constants.dWarn("MessageManager::fetchMessage:: invalid parameter");
			return;
		}
		if (typeof messageId !== 'number'){
			messageId = parseInt(messageId, 10);
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::fetchMessage:: session does not exist, exit");
			return;
		}

		var self = this;

		this.message.overrideUrl(this.apis.DM_dianming);
		this.message.set('messageId', messageId);

		this.message.fetch({
			data: $.param({ 'userId': this.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success();
				}
			},
			error: function(model, response){
				Constants.dWarn("MessageManager::fetchMessage:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error();
				}
			}
		});
	};

	MessageManager.prototype.postMessage = function(newMessage, callback) {
		var self = this;
		if (!newMessage || typeof newMessage !== 'object'){
			Constants.dWarn("MessageManager::postMessage::invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::postMessage::currentMessage does not have session, exit");
			return;
		}

		newMessage.overrideUrl(this.apis.DM_dianming);
		newMessage.set('messageId', -1);
		newMessage.save({},{

			data: $.param({ 'userId': this.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.message = newMessage;
				self.timeStamp = new Date();

				if(callback){
					callbac.success();
				}
			},
			error: function(model, response){
				Constants.dWarn("MessageManager::postMessage:: post failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error();
				}
			}
		});
	};


	MessageManager.prototype.updateMessage = function(updatedMessage, callback) {
		if (!updatedMessage || typeof updatedMessage !== 'object'){
			Constants.dWarn("MessageManager::updateMessage:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::updateMessage:: session does not exist, exit");
			return;
		}

		var self = this;

		updatedMessage.overrideUrl(this.apis.DM_dianming);
		updatedMessage.save({},{

			data: $.param({ 'userId': this.sessionManager.getUserId()}),
            dataType:'json',

            success:function(model, response){
				self.message = updatedMessage;
				if(callback){
					callback.success();
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::updateMessage:: update failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error();
				}
            }
        });

	};


	MessageManager.prototype.deleteMessage = function(messageId, callback) {
		var self = this;
		if (typeof messageId !== 'number'){
			Constants.dWarn("MessageManager::deleteMessage:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::deleteMessage::current user does not have session, exit");
			return;
		}

		this.message.overrideUrl(this.apis.messages_message);
		this.message.set('messageId', messageId);
		//this will force to add id into api path, correcting it
		this.message.destroy({

			data: $.param({ 'userId': this.sessionManager.getUserId()}),
            dataType:'json',

            success:function(model, response){

				if(callback){
					callback.success();
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::deleteMessage:: delete failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error();
				}
            }
        });

	};

	//cannot use search because of naming collisions
	MessageManager.prototype.searchMessage = function(searchRepresentationObj, callback) {
		var self = this;

		if (typeof searchRepresentationObj !== 'object'){
			Constants.dWarn("MessageManager::fetchSearchResult:: invalid parameter, exit");
			return;
		}

		var userId = this.sessionManager.hasSession() ? this.sessionManager.getUserId() : -1;
		this.searchResults.overrideUrl(this.apis.DM_search);

		this.searchResults.fetch({
			data: $.param({'searchRepresentation': searchRepresentationObj.toString(), 'userId' : userId}),
            dataType:'json',

            success:function(model, response){

				// self.searchResults_timeStamp = new Date();
				// //sync the search state
				// self.sessionManager.getSessionUser().set('searchState', searchState);

				if(callback){
					callback.success();
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::fetchSearchResult:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error();
				}
            }
        });
	};

	MessageManager.prototype.fetchRecents = function(callback) {

		var self = this;
		//confront to API requirements
		this.recents.overrideUrl(this.apis.DM_recent);
		this.recents.fetch({
            dataType:'json',

            success:function(model, response){
				self.recents_timeStamp = new Date();
				if(callback){
					callback.success();
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::fetchRecents:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error();
				}
            }
        });


	};


}).call(this);