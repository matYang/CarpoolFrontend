(function () {
	'use strict';


	/*
	*	map_handlers interface
	*	{eventName: event_handler}, calls appropriate handler.handleSocket(event, data)
	*/
	this.SocketManager = function(sessionManager, map_handlers){
		this.sessionManager = sessionManager;
		this.map_handlers = map_handlers;

		this.timeStamp = new Date();
		this.sessionManager.resgisterManager(this);
	};

	SocketManager.prototype.release = function() {
		this.subscribe();
	};

	SocketManager.prototype.subscribe = function() {
		var self = this;

		if (this.sessionManager.hasSession()){
			this.socket = io.connect(Constants.socketOrigin, {secure: true});
			this.timeStamp = new Date();

			this.socket.emit('register', {'id': this.sessionManager.getUserId()});

			this.socket.on('newNotification', function(data){
				Info.log("push message: newNotification received, with data: ");
				Info.log(data);
				if (self.map_handlers['newNotification']){
					self.map_handlers['newNotification'].handleSocket('newNotification', data);
				}
				else{
					Info.alert("newNotification event not handled");
				}
			});

			this.socket.on('newLetter', function(data){
				Info.log("push letter: newLetter received, with data: ");
				Info.log(data);
				if (self.map_handlers['newLetter']){
					self.map_handlers['newLetter'].handleSocket('newLetter', data);
				}
				else{
					Info.alert("newLetter event not handled");
				}
			});

			this.socket.on('broadCast', function(data){
				Info.log("broadcast received with data: ");
				Info.log(data);
				if (self.map_handlers['broadCast']){
					self.map_handlers['broadCast'].handleSocket('broadCast', data);
				}
				else{
					Info.alert("broadcast event not handled");
				}
			});
		}
	};

	SocketManager.prototype.unsubscribe = function (){
		if (typeof this.socket !== 'undefined'){
			this.socket.disconnect();
		}
	};

}).call(this);