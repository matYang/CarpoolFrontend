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
			this.socket = io.connect(Constants.socketOrigin);
			this.timeStamp = new Date();

			this.socket.emit('register', {'id': this.sessionManager.getUserId()});

			this.socket.on('newNotification', function(data){
				info.log("push message: newNotification received, with data: ");
				info.log(data);
				if (this.map_handlers['newNotification']){
					this.map_handlers['newNotification'].handleSocket('newNotification', data);
				}
				else{
					info.alert("Broadcast event not handled");
				}
			});

			this.socket.on('broadCast', function(data){
				info.log("broadcast received with data: ");
				info.log(data);
				if (this.map_handlers['broadCast']){
					this.map_handlers['broadCast'].handleSocket('broadCast', data);
				}
				else{
					info.alert("Broadcast event not handled");
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