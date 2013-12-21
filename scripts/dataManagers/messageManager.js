(function () {
	'use strict';

	var postCount = 0;
	var firstSuccessMessage = null;

	this.MessageManager = function(sessionManager,  userManager){

		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;

		this.timeStamp = new Date();
		this.searchResults_timeStamp = new Date();
		this.recents_timeStamp = new Date();

		this.sessionManager.resgisterManager(this);
	};


	//only reset the detailed message upon logout
	MessageManager.prototype.release = function() {
		this.timeStamp = new Date();
	};


	MessageManager.prototype.fetchMessage = function(messageId, callback){
		var message = new Message();
		if (testMockObj.testMode){
			// callback.error();
			message = testMockObj.sampleMessageA;
			if(callback && callback.transaction){
				callback.success(message, callback.transaction);
			} else if (callback) {
				callback.success(message);
			}
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

		message.overrideUrl(this.apis.DM_dianming);
		message.set('messageId', messageId);

		message.fetch({
			data: $.param({ 'userId': self.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();
				if(callback && callback.transaction){
					callback.success(message, callback.transaction);
				} else if (callback) {
					callback.success(message);
				}
			},
			error: function(model, response){
				Constants.dWarn("MessageManager::fetchMessage:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error(response);
				}
			}
		});
	};


	MessageManager.prototype._postSingleMessage = function(newMessage, promiseback, callback){
		var self = this;

		newMessage.overrideUrl(this.apis.DM_dianming);
		newMessage.set('messageId', -1);
		newMessage.set('ownerId', this.sessionManager.getUserId());
		newMessage.save({},{
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();

				if(promiseback){
					promiseback(newMessage, callback, self);
				}
			},
			error: function(model, response){
				Constants.dWarn("MessageManager::postMessage:: post failed with response:");
				Constants.dLog(response);
				if(promiseback){
					promiseback(null, callback, self);
				}
			}
		});
	};

	MessageManager.prototype._executePromise = function(message, callback, immediateCaller) {
		//always point to the last successful one
		if (firstSuccessMessage === null){
			firstSuccessMessage = message;
		}
		postCount -= 1;
		if (postCount === 0){
			immediateCaller.message = firstSuccessMessage;

			if (firstSuccessMessage !== null){
				callback.success(firstSuccessMessage);
				firstSuccessMessage = null;
			}
			else{
				callback.error();
			}
		}
	};

	MessageManager.prototype.postMessage = function(newMessages, callback) {
		var self = this,
			i = 0;
		if (!newMessages || !(newMessages instanceof Backbone.Collection)){
			Constants.dWarn("MessageManager::postMessage::invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::postMessage::currentMessage does not have session, exit");
			return;
		}
		if (postCount > 0){
			Constants.dWarn("MessagePost Queue not cleared yet");
			return;
		}

		postCount = newMessages.length;
		firstSuccessMessage = null;
		for (i = 0; i < postCount; i++){
			this._postSingleMessage(newMessages.at(i), this._executePromise, callback);
		}
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
		updatedMessage.set('ownerId', this.sessionManager.getUserId());
		updatedMessage.save({},{
            dataType:'json',
            success:function(model, response){
				if(callback){
					callback.success(updatedMessage);
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::updateMessage:: update failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });

	};


	MessageManager.prototype.deactivateMessage = function(messageId, callback) {
		var self = this;
		if (typeof messageId !== 'number'){
			Constants.dWarn("MessageManager::deleteMessage:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::deleteMessage::current user does not have session, exit");
			return;
		}
		//do not destory the message itself
		var message = new Message();
		message.overrideUrl(this.apis.messages_message);
		message.set('messageId', messageId);
		message.destroy({
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
					callback.error(response);
				}
            }
        });

	};

	//cannot use search because of naming collisions
	MessageManager.prototype.searchMessage = function(searchRepresentationObj, callback) {
		var self = this;
		var searchResults = new Messages();
		if(testMockObj.testMode){
			searchResults = testMockObj.sampleMessages;
			callback.success(searchResults);
			return;
		}
		if (typeof searchRepresentationObj !== 'object'){
			Constants.dWarn("MessageManager::fetchSearchResult:: invalid parameter, exit");
			return;
		}

		var userId = this.sessionManager.hasSession() ? this.sessionManager.getUserId() : -1;
		searchResults.overrideUrl(this.apis.DM_search);
		searchResults.fetch({
			data: $.param({'searchRepresentation': searchRepresentationObj.toString(), 'userId' : userId}),
            dataType:'json',

            success:function(model, response){
				self.searchResults_timeStamp = new Date();
				if(callback){
					callback.success(searchResults);
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::fetchSearchResult:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });
	};

	MessageManager.prototype.fetchRecents = function(callback) {
		var recents = new Messages();
		if (testMockObj.testMode){
			recents = testMockObj.sampleMessages;
			callback.success(recents);
			return;
		}
		var self = this;
		recents.overrideUrl(this.apis.DM_recent);
		recents.fetch({
            dataType:'json',
            success:function(model, response){
				self.recents_timeStamp = new Date();
				if(callback){
					callback.success(recents);
				}
            },
            error: function(model, response){
                Constants.dWarn("MessageManager::fetchRecents:: fetch failed with response:");
                Constants.dLog(response);
                if(callback){
					callback.error(response);
				}
            }
        });


	};
	
	MessageManager.prototype.fetchTransactionList = function(intendedMessageId, callback) {
		if(testMockObj.testMode){
			callback.success(testMockObj.sampleTransactions);
			return;
		}
		var self = this;

		if (typeof intendedMessageId !== 'number'){
			Constants.dWarn("MessageManager::fetchTransactionList:: invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::fetchTransactionList:: session does not exist, exit");
			return;
		}


		var transactionList = new Transactions();
		transactionList.overrideUrl(this.apis.DM_transaction + '/' + intendedMessageId);
		transactionList.fetch({
			data: $.param({ 'userId': self.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				if(callback){
					callback.success(transactionList);
				}
			},

			error: function(model, response){
				Constants.dWarn("MessageManager::fetchTransactionList:: fetch failed with response:");
				Constants.dLog(response);
					if(callback){
					callback.error(response);
				}
			}
		});
	};
	
	MessageManager.prototype.autoMatch = function(messageId, callback) {
		if(testMockObj.testMode){
			callback.success(testMockObj.sampleMessages);
			return;
		}
		var self = this;

		if (typeof messageId !== 'number'){
			Constants.dWarn("MessageManager::autoMatch:: invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("MessageManager::autoMatch:: session does not exist, exit");
			return;
		}


		var messages = new Messages();
		messages.overrideUrl(this.apis.DM_autoMatch + '/' + messageId);
		messages.fetch({
			data: $.param({ 'userId': self.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				if(callback){
					callback.success(messages);
				}
			},

			error: function(model, response){
				Constants.dWarn("MessageManager::autoMatch:: fetch failed with response:");
				Constants.dLog(response);
					if(callback){
					callback.error(response);
				}
			}
		});
	};


}).call(this);
