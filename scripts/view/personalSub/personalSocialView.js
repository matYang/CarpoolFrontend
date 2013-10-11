var PersonalSocialView = Backbone.View.extend({
	initialize: function(params) {
		this.isClosed = false;

		this.domContainer = $("#profilePage_content");
		this.wrapperTemplate = _.template(tpl.get('personalPage/personalSocial'));
		// this.messageTemplate = _.template(tpl.get('personalPage/personalSocialCard'));

		this.curUserId = params.intendedUserId;
		this.user = app.sessionManager.getSessionUser();
		this.domContainer.append(this.wrapperTemplate);
		this.render();
		app.userManager.fetchWatchedUsers(this.curUserId , {"success":this.loadUsers, "error":this.error});
	},

	render: function(){

	},

	loadUsers: function(socialList) {

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
