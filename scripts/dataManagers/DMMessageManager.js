(function () {
	'use strict';


	this.DMMessageManager = function(sessionManager,  userManager){

		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;

		this.message = new DMMessage();
		this.timeStamp = new Date();

		this.searchResults = new DMMessages();
		this.searchResults_timeStamp = new Date();

		this.recents = new DMMessages();
		this.recents_timeStamp = new Date();

		this.sessionManager.resgisterManager(this);
	};

	DMMessageManager.prototype.getMessage = function() {
		return this.message;
	};

	DMMessageManager.prototype.getSearchResults = function() {
		return this.searchResults;
	};

	DMMessageManager.prototype.getRecents = function() {
		return this.recents;
	};

	//only reset the detailed message upon logout
	DMMessageManager.prototype.release = function() {
		this.message = new DMMessage();
		this.timeStamp = new Date();
	};


	DMMessageManager.prototype.fetchMessage = function(messageId, callback){
		if (typeof messageId !== 'number' ){
			Constants.dWarn("DMMessageManager::fetchMessage:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("DMMessageManager::fetchMessage:: session does not exist, exit");
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
					callback();
				}
			},

			error: function(model, response){
				Constants.dWarn("DMMessageManager::fetchMessage:: fetch failed with response:");
				Constants.dLog(response);
			}
		});
	};

	DMMessageManager.prototype.postMessage = function(newMessage, callback) {
		var self = this;
		if (!newMessage || typeof newMessage !== 'object'){
			Constants.dWarn("DMMessageManager::postMessage::invalid parameter, exit");
			return;
		}
		if (!sessionManager.hasSession()){
			Constants.dWarn("DMMessageManager::postMessage::currentDMMessage does not have session, exit");
			return;
		}

		newMessage.overrideUrl(this.apis.DM_dianming);
		newMessage.set('messageId', -1);
		//this will make sure no id is auto appended

		newMessage.save({},{

			data: $.param({ 'userId': this.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.message = newMessage;
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},

			error: function(model, response){
				Constants.dWarn("DMMessageManager::postMessage:: post failed with response:");
				Constants.dLog(response);
			}
		});
	};


	DMMessageManager.prototype.updateMessage = function(updatedMessage, callback) {
		if (!updatedMessage || typeof updatedMessage !== 'object'){
			Constants.dWarn("DMMessageManager::updateMessage:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("DMMessageManager::updateMessage:: session does not exist, exit");
			return;
		}

		var self = this;

		updatedMessage.overrideUrl(this.apis.DM_dianming);
		//updatedMessage.set('messageId', updatedMessage.id);
		//this will force to add id into api path, correcting it, does not need it right here
		updatedMessage.save({},{

			data: $.param({ 'userId': this.sessionManager.getUserId()}),
            dataType:'json',

            success:function(model, response){
				self.message = updatedMessage;

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("DMMessageManager::updateMessage:: update failed with response:");
                Constants.dLog(response);

            }
        });

	};


	DMMessageManager.prototype.deleteMessage = function(messageId, callback) {
		var self = this;
		if (typeof messageId !== 'number'){
			Constants.dWarn("DMMessageManager::deleteMessage:: invalid parameter");
			return;
		}
		if (!sessionManager.hasSession()){
			Constants.dWarn("DMMessageManager::deleteMessage::current user does not have session, exit");
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
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("DMMessageManager::deleteMessage:: delete failed with response:");
                Constants.dLog(response);

            }
        });

	};

	//cannot use search because of naming collisions
	DMMessageManager.prototype.searchMessage = function(location, date, searchState, callback) {
		this.searchResults = testMockObj.sampleDMMessages;
		callback();

		// var self = this;

		// if (typeof location !== 'object' || typeof date !== 'object' || typeof searchState !== 'number'){
		// 	Constants.dWarn("DMMessageManager::fetchSearchResult:: invalid parameter, exit");
		// 	return;
		// }

		// var userId = this.sessionManager.hasSession() ? this.sessionManager.getUserId() : -1;
		// this.searchResults.overrideUrl(this.apis.DM_search);

		// this.searchResults.fetch({

		// 	data: $.param({ 'userId': userId, 'location': location.toString(), 'date': date.toString(), 'searchState': searchState}),

  //           dataType:'json',

  //           success:function(model, response){

		// 		self.searchResults_timeStamp = new Date();
		// 		//sync the search state
		// 		self.userManager.getTopBarUser().set('searchState', searchState);

		// 		if(callback){
		// 			callback();
		// 		}
  //           },

  //           error: function(model, response){
  //               Constants.dWarn("DMMessageManager::fetchSearchResult:: fetch failed with response:");
  //               Constants.dLog(response);

  //           }
  //       });
	};

	DMMessageManager.prototype.fetchRecents = function(callback) {

		this.recents = testMockObj.sampleDMMessages;
		callback();

		//TODO: uncomment
		// var self = this;
		// //confront to API requirements
		// this.recents.overrideUrl(this.apis.DM_recent);

		// this.recents.fetch({

  //           dataType:'json',

  //           success:function(model, response){

		// 		self.recents_timeStamp = new Date();
		// 		if(callback){
		// 			callback();
		// 		}
  //           },

  //           error: function(model, response){
  //               Constants.dWarn("DMMessageManager::fetchRecents:: fetch failed with response:");
  //               Constants.dLog(response);

  //           }
  //       });


	};


}).call(this);