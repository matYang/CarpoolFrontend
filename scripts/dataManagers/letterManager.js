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


	LetterManager.prototype.sendLetter = function(targetId, content, callback) {
		if (typeof targetId !== 'number'){
			Constants.dWarn("LetterManager::sendetter:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("LetterManager::sendLetter:: session does not exist, exit");
			return;
		}

		var self = this;

		var letter = new Letter();
		letter.overrideUrl(this.apis.letter_letter);
		letter.set('letterId', -1);
		letter.set('from_userId', this.sessionManager.getUserId());
		letter.set('to_userId', targetId);Ï
		letter.set('content', content);

		/*optional, this will be inforced by server API logic,leaving here for reference*/
		letter.set('type', Constants.LetterType.user);
		letter.set('send_time', new Date());
		letter.set('state', Constants.LetterState.unread);

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

	/*TODO probably should check all the letters from same user all at once, and probably should be done on server side	*/
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
