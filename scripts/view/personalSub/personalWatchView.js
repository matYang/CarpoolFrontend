
var PersonalWatchView = Backbone.View.extend({

	initialize: function(params){
		_.bindAll(this, 'renderMessages', 'renderUsers', 'bindMessageEvents', 'bindUserEvents','close');
		this.isClosed = false;

		this.domContainer = $("#profilePage_content");
		this.wrapperTemplate = _.template(tpl.get('personalPage/personalWatch'));
		this.messageTemplate = _.template(tpl.get('personalPage/personalSimpleMessage'));
		this.userTemplate = _.template(tpl.get('personalPage/personalSimpleUser'));

		this.curUserId = params.intendedUserId;
		this.user = app.userManager.getTopBarUser();
		this.currentMessageEntries = 0;
		this.addMessageEntries = 10;
		this.currentUserEntries = 0;
		this.addUserEntries = 10;
		this.domContainer.append(this.wrapperTemplate);
		app.userManager.fetchWatchedMessages(this.curUserId, this.renderMessages);
		app.userManager.fetchWatchedUsers(this.curUserId, this.renderUsers);

	},

	renderMessages: function(){

		this.messageContainer = $("#messageWatchContent");
		this.messages = app.userManager.getUser().get('watchList');
		var that = this;
		this.messageContainer.append("<div id = 'message_more' class = 'button'>查看更多</div>");
		this.addMoreEntries("message");
		$("#message_more").on("click",function(){
			that.addMoreEntries("message");
		});
	},

	renderUsers: function(){
		this.userContainer = $("#userWatchContent");
		this.users = app.userManager.getUser().get('socialList');
		var that = this;
		this.userContainer.append("<div id = 'user_more' class = 'button'>查看更多</div>");
		this.addMoreEntries("user");
		$("#user_more").on("click",function(){
			that.addMoreEntries("user");
		})
	},

	addMoreEntries: function(messageOrUser){
		var that = this;
		if (messageOrUser === "message"){
			var toBeAppended = [];
			this.addMessageEntries = this.addMessageEntries < this.messages.length ? this.addMessageEntries : this.messages.length;
			var i = this.currentMessageEntries;
			for (i = this.currentMessageEntries; i<this.addMessageEntries; i++){
				toBeAppended[i] = this.messageTemplate(this.messages.at(i).toJSON());
			}
			$('#message_more').before(toBeAppended.join(""));
			this.currentMessageEntries += this.addMessageEntries;
			this.bindMessageEvents();
		} else {
			var toBeAppended = [];
			this.addUserEntries = this.addUserEntries < this.users.length ? this.addUserEntries : this.users.length;
			var i = this.currentUserEntries;
			for (i = this.currentUserEntries; i < this.addUserEntries ; i++){
				toBeAppended[i] = this.userTemplate(this.users.at(i).toJSON());
			}
			$('#user_more').before(toBeAppended.join(""));
			this.currentUserEntries += this.addUserEntries;

		this.bindUserEvents();
		}
	},
	bindMessageEvents: function(){
		var that = this;
		$("#messageWatchContent>.profilePage_eventBox").off();
		$("#messageWatchContent>.profilePage_eventBox").on("click", function(e){
			var id = Utilities.getId(e.delegateTarget.id);
			app.navigate(that.user.get("userId") + "/DMMessage/" + id, true);
		});
	},

	bindUserEvents: function(){
		//TODO: bind the events of users
		var that = this;
		$("#userWatchContent>.profilePage_userWatch").off();
		$("#userWatchContent>.profilePage_userWatch").on("click", function(e){
			var id = Utilities.getId(e.delegateTarget.id);
			app.navigate(that.user.get("userId") + "/personal/" + id, true);
		});
	},

	close: function(){
		if (!this.isClosed){
			//TODO: unbind all
			this.domContainer.empty();
			this.isClosed = true;
		}
	}


});