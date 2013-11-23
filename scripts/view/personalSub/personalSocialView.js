var PersonalSocialView = MultiPageView.extend({
	initialize: function(params) {
		this.isClosed = false;
		_.bindAll(this, 'render', 'entryEvent', 'error', 'close');
		this.user = app.sessionManager.getSessionUser();

		this.entryTemplate = _.template(tpl.get('personalPage/personalSocialCard'));
		this.pageNumberClass = "searchResultPageNumber";
		this.pageNumberId = "searchResultPageNumber";
		this.entryEvent = this.entryEvent;
		this.pageNavigator = "pageNavigator";
		this.entryHeight = 117;
		this.pageEntryNumber = 12;
		this.entryClass = "socialCard";
		this.entryContainer = "socialListContent";
		this.minHeight = 480;
		this.startIndex = 0;

		this.domContainer = $("#profilePage_content");
		this.wrapperTemplate = _.template(tpl.get('personalPage/personalSocial'));
		this.domContainer.append(this.wrapperTemplate);

		this.curUserId = params.intendedUserId;
		this.sessionUser = app.sessionManager.getSessionUser();

		var that = this;
		app.userManager.fetchWatchedUsers(this.curUserId , {"success":this.render, "error":this.error});
	},

	render: function(socialList){
		this.messages = socialList;
		MultiPageView.prototype.render.call(this);
		$(".social_gender_0").html("♂");
		$(".social_gender_1").html("♀");
	},
	entryEvent: function(id){
		app.navigate(this.user.id+"/personal/"+id, true);
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