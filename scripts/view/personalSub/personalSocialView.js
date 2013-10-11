var PersonalSocialView = Backbone.View.extend({
	initialize: function(params) {
		this.isClosed = false;
		_.bindAll(this, 'render', 'loadUsers', 'error', 'close');
		this.domContainer = $("#profilePage_content");
		this.wrapperTemplate = _.template(tpl.get('personalPage/personalSocial'));
		debugger;
		this.messageTemplate = _.template(tpl.get('personalPage/personalSocialCard'));

		this.curUserId = params.intendedUserId;
		this.user = app.sessionManager.getSessionUser();
		this.domContainer.append(this.wrapperTemplate);
		this.listContainer = $("#socialListContent");
		var that = this;
		app.userManager.fetchWatchedUsers(this.curUserId , {"success":this.loadUsers, "error":this.error});
	},

	render: function(){
		
	},

	loadUsers: function(socialList, index) {
		var length = socialList.length - index;
		if (length > 12) length = 12;
		var buf = [];
		for (var i = index; i < index + length; i++) {
			buf.push(this.messageTemplate(socialList.at(i)._toJSON()));
		}
		this.listContainer.append(buf.join(""));
		$(".social_gender_0").html("♂");
		$(".social_gender_1").html("♀");
	},

	error: function() {

	},
	close: function() {
		if (!this.isClosed){

			this.domContainer.empty();
			this.isClosed = true;
		}
	}

});