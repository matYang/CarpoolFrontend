var PersonalSocialView = Backbone.View.extend({
	initialize: function(params) {
		this.isClosed = false;
		_.bindAll(this, 'render', 'bindEvents', 'entryEvent', 'error', 'close');
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
		this.domContainer = $("#socialListContent");
		this.minHeight = 480;

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

	bindEvents: function(){
		var self = this;
		$('#socialListContent>.social_card').on("click", function(e){
			app.navigate(self.sessionUser.id+"/personal/"+Utilities.getId(e.delegateTarget.id), true);
		});
	},
	entryEvent: function(id){
		app.navigate(this.sessionUser.id+"/personal/"+id, true);
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