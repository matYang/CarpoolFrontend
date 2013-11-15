(function () {
	'use strict';


	this.LetterManager = function(sessionManager){
		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.timeStamp = new Date();

		this.sessionManager.resgisterManager(this);
	};

	LetterManager.prototype.release = function() {
		this.timeStamp = new Date();
	};
	LetterManager.prototype.getTimeStamp = function() {
		return this.timeStamp;
	};

	LetterManager.prototype.fetchLetter = function(letterId, callback){
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("LetterManager::fetchLetter:: session does not exist, exit");
			return;
		}

		var self = this,
			letter = new Letter();
		letter.overrideUrl(this.apis.letter_letter);
		letter.set('letterId', letterId);
		letter.fetch({
			data: $.param({ 'userId': self.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();
				if (callback) {
					callback.success(letter);
				}
			},
			error: function(model, response){
				Constants.dWarn("LetterManager::fetchLetter:: fetch failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error();
				}
			}
		});
	};

	LetterManager.prototype.sendLetter = function(newLetter, callback) {
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("LetterManager::checkLetter:: session does not exist, exit");
			return;
		}

		var self = this;

		letter.overrideUrl(this.apis.letter_letter);
		letter.set('letterId', -1);
		letter.set('from_userId', this.sessionManager.getUserId());
		letter.save({},{
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(letter);
				}
			},
			error: function(model, response){
				Constants.dWarn("LetterManager::sendLetter:: save failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error();
				}
			}
		});
	};

	LetterManager.prototype.checkLetter = function(letterId, callback) {
		if (typeof letterId !== 'number'){
			Constants.dWarn("LetterManager::checkLetter:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("LetterManager::checkLetter:: session does not exist, exit");
			return;
		}

		var self = this;
	
		var letter = new Letter();
		letter.overrideUrl(this.apis.letter_letter);
		letter.set('letterId', letterId);
		letter.save({},{
			data: JSON.stringify({'userId': this.sessionManager.getUserId()}),
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(letter);
				}
			},
			error: function(model, response){
				Constants.dWarn("LetterManager::checkLetter:: save failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error();
				}
			}
		});
	};

	LetterManager.prototype.deleteLetter = function(letterId, callback) {
		if (typeof letterId !== 'number'){
			Constants.dWarn("LetterManager::deleteLetter:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("LetterManager::deleteLetter:: session does not exist, exit");
			return;
		}

		var self = this;
		var letter = new Letter();
		letter.overrideUrl(this.apis.letter_letter);
		letter.set('letterId', letterId);
		letter.destroy({
			dataType:'json',
			success:function(model, response){
				self.timeStamp = new Date();
				if(callback){
					callback.success(letter);
				}
			},
			error: function(model, response){
				Constants.dWarn("LetterManager::deleteLetter:: delete failed with response:");
				Constants.dLog(response);
				if(callback){
					callback.error();
				}
			}
		});
	};


}).call(this);
