var PersonalMessageView = Backbone.View.extend({

	initialize: function(params){
		_.bindAll(this, 'render', 'loadMessage', 'bindEventsForParticipated','close');
		this.isClosed = false;

		this.domContainer = $("#profilePage_content");
		this.wrapperTemplate = _.template(tpl.get('personalPage/personalMessage'));
		this.messageTemplate = _.template(tpl.get('personalPage/personalDetailMessage'));

		this.curUserId = params.intendedUserId;
		this.user = app.sessionManager.getSessionUser();
		this.domContainer.append(this.wrapperTemplate);
		app.userManager.fetchMessageHistory(this.curUserId , {"success":this.render, "error":this.error});
	},

	render: function(messages){
		this.myActiveContainer = $("#profilePage_activeMessagePublished");
		this.myFinishedContainer = $("#profilePage_finishedMessagePublished");
		this.participatedActiveContainer = $("#profilePage_activeMessageParticipated");
		this.participatedFinishedContainer = $("#profilePage_finishedMessageParticipated");
		this.loadMessage(messages);
		this.bindEventsForParticipated();
	},

	loadMessage: function(messages) {
		var message;
		this.counter=[0,0,0,0];
		for (var i = 0; i < messages.length; i++) {
			message = messages.at(i);
			if (message.get("state") === Constants.messageState.normal){
				if (message.get("ownerId") === this.curUserId && this.counter[0]+this.counter[1]<=6) {
					this.myActiveContainer.append(this.messageTemplate(message._toJSON()));
					this.counter[0]++;
				} else if ( this.counter[2]+this.counter[3]<=6) {
					this.participatedActiveContainer.append(this.messageTemplate(message._toJSON()));
					this.counter[2]++;
				}
			} else {
				if (message.get("ownerId") === this.curUserId && this.counter[0]+this.counter[1]<=6)  {
					this.myFinishedContainer.append(this.messageTemplate(message._toJSON_toJSON()));
					this.counter[1]++;
				} else if ( this.counter[2]+this.counter[3] <= 6 ) {
					this.participatedFinishedContainer.append(this.messageTemplate(message._toJSON()));
					this.counter[3]++;
				}
			}
		}

	},

	bindEventsForParticipated: function(){
		var that = this;
		$("#profilePage_activeMessageParticipated>.profilePage_eventBox").off();
		$("#profilePage_finishedMessageParticipated>.profilePage_eventBox").off();
		$("#profilePage_activeMessageParticipated>.profilePage_eventBox").on("click", function(e){
			app.navigate(that.user.get("userId")+/Message/+Utilities.getId(e.delegateTarget.id),true);
		});
	},

	bindEventsForPublished: function(){
		var that = this;
		$("#profilePage_activeMessagePublished>.profilePage_eventBox").off();
		$("#profilePage_finishedMessagePublished>.profilePage_eventBox").off();
		$("#profilePage_activeMessagePublished>.profilePage_eventBox").on("click", function(e){
			app.navigate(that.user.get("userId")+/Message/+Utilities.getId(e.delegateTarget.id),true);
		});
	},
	error: function(){
		Info.alert("Message History fetch failed");
	},
	close: function(){
		if (!this.isClosed){
			//TODO: unbind all the events
			this.domContainer.empty();
			this.isClosed = true;
		}
	}

});