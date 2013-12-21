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
		//if (testMockObj.testMode) {
		// callback.err((new Letter()).set("letterId",123).set("content",content));
		// return;
		//}
		if (typeof targetId !== 'number'){
			Constants.dWarn("LetterManager::sendLetter:: invalid parameter");
			return;
		}
		if (targetId === this.sessionManager.getUserId()){
			Constants.dWarn("LetterManager::sendLetter:: sending message to yourself");
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
		letter.set('to_userId', targetId);
		letter.set('content', content);

		/*optional, this will be inforced by server API logic,leaving here for reference*/
		letter.set('type', targetId > 0 ? Constants.LetterType.user : Constants.LetterType.system);
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
					callback.error(letter);
				}
			}
		});
	};

	LetterManager.prototype.checkLetter = function(targetUserId, callback) {
		if (typeof targetUserId !== 'number'){
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
		letter.set('letterId', 1);
		letter.save({},{
			data: JSON.stringify({'userId': this.sessionManager.getUserId(), 'targetUserId': targetUserId}),
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
					callback.error(response);
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
					callback.error(response);
				}
			}
		});
	};


}).call(this);
