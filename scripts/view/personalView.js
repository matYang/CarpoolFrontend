var PersonalView = Backbone.View.extend({
	initialize: function (params) {
		_.bindAll(this, 'preRender','render', 'switchChildView', 'createChildView', 'getCurrentUserId', 'bindEvents', 'close');
		app.viewRegistration.register("personal", this, true);
		this.isClosed = false;

		this.template = _.template(tpl.get('personalPage/personal'));
		//this curUserId is used to record the id of the user the personalPage is currently displaying
		this.curUserId = Utilities.toInt(params.intendedUserId);
		this.activeViewState = params.viewState;
		this.childrenViews = {};
		this.domContainer = $('#content');

		app.userManager.fetchUser(this.curUserId, this.preRender);

	},

	preRender: function(){
		this.user = app.userManager.getUser();
		this.render();
		this.switchChildView(this.activeViewState);
		if (this.user.get("userId") !== this.curUserId){
			$("#profilePage_utilityTab").html(" + 关注");
		}
		this.bindEvents();
	},

	render: function () {
		this.domContainer.append(this.template(this.user.toJSON()));
	},

	switchChildView: function(viewState){

		//validity of viewState is guranteed on the URL level, since deep linking is applied
		//reduncy of safety check is not necessary here because in development, we need to know where things go wrong
		this.activeViewState = viewState;
		this.createChildView();
	},

	getCurrentUserId: function(){
		return this.curUserId;
	},


	createChildView: function(){
		if (this.activeChildView){
			this.activeChildView.close();
		}
		var create = true;
		$('.selectedTabButton').removeClass('selectedTabButton').addClass('nonSelectedTabButton');
		switch (this.activeViewState) {

			case "watch":
				$('#profilePage_watchTab').addClass('selectedTabButton');
				this.activeChildView = new PersonalWatchView({'intendedUserId': this.curUserId});
				break;
			case "message":
				$('#profilePage_messageTab').addClass('selectedTabButton');
				this.activeChildView = new PersonalMessageView({'intendedUserId': this.curUserId});
				break;
			case "history":
				$('#profilePage_historyTab').addClass('selectedTabButton');
				this.activeChildView = new PersonalHistoryView({'intendedUserId': this.curUserId});
				break;
			case "utility":
					$('#profilePage_utilityTab').addClass('selectedTabButton');
					this.activeChildView = new PersonalUtilityView({'intendedUserId': this.curUserId});
					break;
			default:
				Info.warn("PersonalView:: createChildView:: this.viewState matchin failed in switch, using Watch as default");
				this.activeChildView = new PersonalWatchView({'intendedUserid': this.curUserId});
				break;
		}

		this.childrenViews[this.activeViewState] = this.activeChildView;
	},

	bindEvents: function(){
		var that = this;
		$('#profilePage_messageTab').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/personal/"+ that.curUserId +"/message");
			that.switchChildView("message");
		});

		$('#profilePage_historyTab').on('click', function(){
			app.navigate(app.sessionManager.getUserId() + "/personal/"+ that.curUserId +"/history");
			that.switchChildView("history");
		});

		$('#profilePage_utilityTab').on('click', function(){
			if (app.sessionManager.getUserId() === that.curUserId) {
				app.navigate(app.sessionManager.getUserId() + "/personal/"+ that.curUserId +"/utility");
				that.switchChildView("utility");
			} else {
				var user = app.sessionManager.getSessionUser().get('socialList').get(that.curUserId);
				//if user has watched this user
				if (typeof user === 'object'){
					app.userManager.deWatchUser(that.curUserId, function(){
						alert("User with id: " + that.curUserId + " successfully been watched");
					});
				}
				else{
					app.userManager.watchUser(that.curUserId, function(){
						alert("User with id: " + that.curUserId + " successfully been deWatched");
					});
				}
			}
		});
	},

	close: function () {
		if (!this.isClosed){
			if (this.activeChildView){
				this.activeChildView.close();
			}
			$('#profilePage_messageTab').off();
			$('#profilePage_historyTab').off();
			$('#profilePage_utilityTab').off();

			this.unbind();
			this.domContainer.empty();
			this.isClosed = true;
		}
	}

});