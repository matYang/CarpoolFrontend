
var FrontPageView = Backbone.View.extend({

	el: $('#content'),


	initialize:function(){
		_.bindAll(this, 'getRecents','render', 'bindEvents', 'bindRecentsEvents', 'renderRecents', 'updateLocation', 'close');
		app.viewRegistration.register("frontPage", this, true);
		this.isClosed = false;

		this.template = _.template(tpl.get('front'));
		this.messageTemplate = _.template(tpl.get('Module/Front'));

		this.user = app.userManager.getTopBarUser();

		this.fromLocation = this.user.get("location");
		this.toLocation = new UserLocation();
		this.displayMessages = new Messages();
		this.date = new Date();
		this.render();
		//fire async API call befire entering the time consuming events binding stage
		this.getRecents();
		//app.sessionManager.fetchSession();
		this.bindEvents();

	},

	getRecents: function(){
		//passing renderRecents as the callback to be executed upon successful fetch
		// app.messageManager.fetchRecents(this.renderRecents);
		$("#quickStart_resultPanel").empty();
		app.messageManager.searchMessage(this.location, this.date, Constants.transactionState.init, this.renderRecents);

	},

	renderRecents: function(){
		recentMessages = app.messageManager.getSearchResults();
		for ( var i = 0; i < 3 && i < recentMessages.length; i++ ) {
			this.displayMessages.add(recentMessages.at(i));
		}
		this.searchResultView = new SearchResultView(this.displayMessages, false);
		
		this.bindRecentsEvents();
	},


	render: function(){
		$(this.el).append(this.template);
		$("#quickStart_day>.quickStart_value").html(Utilities.getDateString(this.date));
		$("#quickStart_selectedDate").html(Utilities.getDateString(this.date));
		$("#quickStart_from>.quickStart_value").html(this.fromLocation.get("city"));
		$("#quickStart_to>.quickStart_value").html(this.toLocation.get("city"));
		$("#quickStart_cityInDescription").html(this.fromLocation.get("city"));
		$("#quickStart_schoolInDescription").html(this.fromLocation.get("university"));
	},

	bindEvents: function () {
		var that = this;
		$("#quickStart_from>.quickStart_value").on("mouseup", function(e){
			this.locationPicker = new LocationPickerView(that.fromLocation, that);
		});
		$("#quickStart_to>.quickStart_value").on("mouseup", function(e){
			this.locationPicker = new LocationPickerView(that.toLocation, that);
		});
		$("#quickStart_day>.quickStart_value").on("mouseup", function (e){
			$("#quickStart_dateinput").trigger("focus");

		});
		$("#quickStart_dateinput").datepicker({
			buttonImageOnly: true,
			buttonImage: "calendar.gif",
			buttonText: "Calendar",
			minDate: new Date(),
			onSelect:function(text,inst){
				var d = new Date();
				d.setDate(inst.selectedDay);
				d.setMonth(inst.selectedMonth);
				d.setYear(inst.selectedYear);
				this.date = d;
				$("#quickStart_day>.quickStart_value").html(Utilities.getDateString(d));
				$("#quickStart_selectedDate").html(Utilities.getDateString(d));
			}
		});
		$("#quickStartButton1").on("click", function(){
			var params = [that.fromLocation, that.toLocation, Constants.userSearchState.universityHelp, that.date];
			var key = Utilities.encodeSearchKey(params);
			if (app.sessionManager.hasSession()) {
				var id = app;
				app.navigate(that.user.get("userId")+"/main/"+key, true);
			} else {
				app.navigate("main/"+key, true);
			}
		});
		$("#quickStartButton2").on("click", function(){
			var params = [that.fromLocation, that.toLocation, Constants.userSearchState.universityAsk, that.date];
			var key = Utilities.encodeSearchKey(params);
			if (app.sessionManager.hasSession()) {
				var id = app;
				app.navigate(that.user.get("userId")+"/main/"+key, true);
			} else {
				app.navigate("main/"+key, true);
			}
		});
	},

	bindRecentsEvents: function(){
		var that = this;

		//define scope functions separately, do not make functions inside loops, use scope functions or function maker patterns
		var callback_link = function(e){
			if (app.sessionManager.hasSession()) {
				app.navigate(that.user.get("userId")+"/Message/" + Utilities.getId(e.delegateTarget.id), true);
			} else {
				that.loginAlert();
			}
		};

		for ( var i = 0; i < this.displayMessages.length; i++ ) {
			var messageId = this.displayMessages.at(i).get("messageId");
			$("#frontBox_"+messageId).on("click", callback_link);
		}
	},


	updateLocation: function (){
		$("#quickStart_from>.quickStart_value").html(this.fromLocation.get("city"));
		$("#quickStart_to>.quickStart_value").html(this.toLocation.get("university"));
		$("#quickStart_cityInDescription").html(this.fromLocation.get("city"));
		$("#quickStart_schoolInDescription").html(this.fromLocation.get("university"));
		this.getRecents();
	},

	loginAlert: function() {
			alert("请先登录。若是已经登陆，请刷新页面。");
	},
	close:function(){
		if (!this.isClosed){

			for ( var i = 0; i < this.displayMessages.length; i++ ) {
				var messageId = this.displayMessages.at(i).get("messageId");
				$("#frontBox_"+messageId).off();
			}

			this.unbind();
			$("#quickStart_from>.quickStart_value").off();

			$(this.el).empty();
			this.isClosed = true;
		}
    }



});