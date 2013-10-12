var PersonalSocialView = Backbone.View.extend({
	initialize: function(params) {
		this.isClosed = false;
		_.bindAll(this, 'render', 'bindEvents', 'entryEvent', 'error', 'close');
		MultiPageView.prototype.user = app.sessionManager.getSessionUser();

		MultiPageView.prototype.entryTemplate = _.template(tpl.get('personalPage/personalSocialCard'));
		MultiPageView.prototype.pageNumberClass = "searchResultPageNumber";
		MultiPageView.prototype.pageNumberId = "searchResultPageNumber";
		MultiPageView.prototype.entryEvent = this.entryEvent;
		MultiPageView.prototype.pageNavigator = "pageNavigator";
		MultiPageView.prototype.entryHeight = 117;
		MultiPageView.prototype.pageEntryNumber = 12;
		MultiPageView.prototype.entryClass = "socialCard";
		MultiPageView.prototype.entryContainer = "socialListContent";
		MultiPageView.prototype.domContainer = $("#socialListContent");

		this.domContainer = $("#profilePage_content");
		this.wrapperTemplate = _.template(tpl.get('personalPage/personalSocial'));
		this.domContainer.append(this.wrapperTemplate);

		this.curUserId = params.intendedUserId;
		this.sessionUser = app.sessionManager.getSessionUser();

		var that = this;
		app.userManager.fetchWatchedUsers(this.curUserId , {"success":this.render, "error":this.error});
	},

	render: function(socialList){
		MultiPageView.prototype.messages = socialList;
		MultiPageView.prototype.render();
		$(".social_gender_0").html("♂");
		$(".social_gender_1").html("♀");
	},

	bindEvents: function(){
		var self = this;
		$('#socialListContent>.social_card').on("click", function(e){
			debugger;
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