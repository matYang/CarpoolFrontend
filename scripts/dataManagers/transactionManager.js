(function () {
	'use strict';


	this.TransactionManager = function(sessionManager, userManager){

		this.apis = new ApiResource();

		this.sessionManager = sessionManager;
		this.userManager = userManager;

		this.transaction = new Transaction();
		this.timeStamp = new Date();

		this.sessionManager.resgisterManager(this);

	};

	TransactionManager.prototype.getTransaction = function() {
		return this.transaction;
	};

	TransactionManager.prototype.release = function() {
		this.transaction = new Transaction();
		this.timeStamp = new Date();
	};

	TransactionManager.prototype.initTransaction = function(newTransaction, callback){

		if (!newTransaction || typeof newTransaction !== 'object'){
			Constants.dWarn("TransactionManager::initTransaction:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("TransactionManager::initTransaction:: session does not exist, exit");
			return;
		}

		var self = this;

		newTransaction.overrideUrl(this.apis.transaction_transaction);
		newTransaction.set('transactionId', -1);

		newTransaction.save({},{

			data: $.param({ 'userId': this.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.transaction = newTransaction;
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},

			error: function(model, response){
				Constants.dWarn("TransactionManager::initTransaction:: save failed with response:");
				Constants.dLog(response);
			}
		});

	};

	TransactionManager.prototype.fetchTransaction = function(transactionId, callback) {
		if (typeof transactionId !== 'number' ){
			Constants.dWarn("TransactionManager::fetchTransaction:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("TransactionManager::fetchTransaction:: session does not exist, exit");
			return;
		}

		var self = this;

		this.transaction.overrideUrl(this.apis.transaction_transaction);
		this.transaction.set('transactionId', transactionId);

		this.transaction.fetch({

			data: $.param({ 'userId': this.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},

			error: function(model, response){
				Constants.dWarn("TransactionManager::fetchTransaction:: fetch failed with response:");
				Constants.dLog(response);
			}
		});
	};

	TransactionManager.prototype.changeTransactionState = function(transactionId, newState, callback) {
		if (typeof transactionId !== 'number' || typeof newState !== 'number'){
			Constants.dWarn("TransactionManager::changeTransactionState:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("TransactionManager::changeTransactionState:: session does not exist, exit");
			return;
		}

		var self = this;

		this.transaction.overrideUrl(this.apis.transaction_transaction);
		this.transaction.set('transactionId', transactionId);

		this.transaction.save({},{

			data: $.param({ 'userId': this.sessionManager.getUserId(), 'stateIndex': newState}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},

			error: function(model, response){
				Constants.dWarn("TransactionManager::changeTransactionState:: save failed with response:");
				Constants.dLog(response);
			}
		});
	};

	TransactionManager.prototype.deleteTransaction = function(transactionId, callback) {
		if (typeof transactionId !== 'number'){
			Constants.dWarn("TransactionManager::deleteTransaction:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("TransactionManager::deleteTransaction:: session does not exist, exit");
			return;
		}

		var self = this;

		this.transaction.overrideUrl(this.apis.transaction_transaction);
		this.transaction.set('transactionId', transactionId);

		this.transaction.destroy({

			data: $.param({ 'userId': this.sessionManager.getUserId()}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},

			error: function(model, response){
				Constants.dWarn("TransactionManager::deleteTransaction:: delete failed with response:");
				Constants.dLog(response);
			}
		});
	};



	TransactionManager.prototype.changeTransactionState_admin = function(transactionId, newState, access_admin ,callback) {
		if (!access_admin ||typeof transactionId !== 'number' || typeof newState !== 'number' || typeof access_admin !== 'string'){
			Constants.dWarn("TransactionManager::changeTransactionState_admin:: invalid parameter");
			return;
		}

		var self = this;

		this.transaction.overrideUrl(this.apis.transaction_admin);
		this.transaction.set('transactionId', transactionId);

		this.transaction.save({},{

			data: $.param({ 'access_admin': access_admin, 'stateIndex': newState}),
			dataType:'json',

			success:function(model, response){
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},

			error: function(model, response){
				Constants.dWarn("TransactionManager::changeTransactionState_admin:: save failed with response:");
				Constants.dLog(response);
			}
		});
	};


}).call(this);