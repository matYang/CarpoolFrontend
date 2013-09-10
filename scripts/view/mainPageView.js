var PRICE_MIN = 0,
	PRICE_MAX = 200;

var MainPageView = Backbone.View.extend ({
	el: $('#content'),

	filter: {
		"gender": Constants.gender.both,
		"time": "morning",
		"priceMin": PRICE_MIN,
		"priceMax": PRICE_MAX
	},

	initialize: function (params) {
		_.bindAll(this, 'render', 'renderSearchResults', 'messageSearch', 'onClickGender', 'onClickTime', 'onClickLocation','submitSearch', 'refresh', 'bindEvents', 'close');
		app.viewRegistration.register("mainPage", this, true);
		this.isClosed = false;
		this.user = app.userManager.getTopBarUser();
		//define the template
		this.template = _.template(tpl.get('main'));
		this.filter.gender = Constants.gender.both;
		var result;
		if (params) {
			result = Utilities.decodeSearchKey(params.searchKey);
		}
		if (result) {
			this.targetLocation = result[0];
			this.targetDate = result[1];
			this.searchState = result[2];
		} else {
			//assign parameters to current object, use defaults of not specified
			this.targetLocation = this.user.get("location");
			this.targetDate = new Date();
			this.searchState = this.user.get("searchState");
		}
		//after data intialiazation, start render curreny view
		this.render();

		//lauch the async search call, pass results-rendering method as callback
		this.messageSearch();

		this.bindEvents();
	},

	messageSearch: function(){
		app.messageManager.searchMessage(this.targetLocation, this.targetDate, this.searchState, this.renderSearchResults);
	},

	render: function () {
		var me = this;
		//injecting the template
		$(this.el).append(this.template);
		$("#filterPriceInputTagContainer").slider({
			min:PRICE_MIN,
			max:PRICE_MAX,
			step:5,
			range:true,
			values:[PRICE_MIN,PRICE_MAX],
			slide: function(event, ui){
				me.filter.priceMin = ui.values[0];
				me.filter.priceMax = ui.values[1];
				$("#priceRangeDisplay").html(me.filter.priceMin + "-" + me.filter.priceMax);
			}
		});

		$("#searchDateInput").datepicker({
			buttonImageOnly: true,
			buttonImage: "calendar.gif",
			buttonText: "Calendar",
			minDate: new Date(),
			onSelect:function(text,inst){
				var d = new Date();
			}
		});
		$("#searchSchoolInput").val(this.targetLocation.get("university"));
		$("#searchDateInput").val(Utilities.getDateString(this.targetDate));
		if (this.searchState%2 === 0 ) {
			$("#searchAsk").attr("class","selected button");
			$("#searchHelp").attr("class","notSelected button");
		} else {
			$("#searchAsk").attr("class","notSelected button");
			$("#searchHelp").attr("class","selected button");
		}
		$("#searchAsk").on("click", function(){
			$("#searchAsk").attr("class","selected button");
			$("#searchHelp").attr("class","notSelected button");
			this.searchState = Constants.userSearchState.universityAsk;
		});
		$("#searchHelp").on("click", function(){
			$("#searchAsk").attr("class","notSelected button");
			$("#searchHelp").attr("class","selected button");
			this.searchState = Constants.userSearchState.universityHelp;
		});
		$("#genderSelections>.selected").removeClass('selected').addClass('notSelected');
		if (this.filter.gender === Constants.gender.both) {
			$("#genderSelectionNoPreference").removeClass('notSelected').addClass('selected');
		} else if (this.filter.gender === Constants.gender.both) {
			$("#genderSelectionMale").removeClass('notSelected').addClass('selected');
		} else {
			$("#genderSelectionFemale").removeClass('notSelected').addClass('selected');
		}
		$("#priceRangeDisplay").html(this.filter.priceMin + "-" + this.filter.priceMax);
	},

	renderSearchResults: function(){
		//prevent memory leaks
		if (this.searchResultView){
			this.searchResultView.close();
		}
		this.allMessages = app.messageManager.getSearchResults();
		this.filteredMessages = this.filterMessage(this.allMessages);
		this.searchResultView = new SearchResultView(this.filteredMessages, true);
	},

	onClickGender:function(e){
		var me = $('#'+e.target.getAttribute('id'));
		$("#genderSelections>.selected").removeClass('selected').addClass('notSelected');
		me.removeClass('notSelected').addClass('selected');
		var gender = e.target.getAttribute("data-id");
		this.filter.gender = gender;
	},

	onClickTime: function (e) {
		var me = $('#'+e.target.getAttribute('id'));
		$("#timeSelections>.selected").removeClass('selected').addClass('notSelected');
		me.removeClass('notSelected').addClass('selected');
		var time = e.target.getAttribute("data-id");
		this.filter.time = time;
	},

	submitSearch: function () {
		var encodedSearchKey = Utilities.encodeSearchKey([this.targetLocation, this.targetDate, this.searchState]);
		if (app.sessionManager.hasSession()) {
			app.navigate(this.user.get("userId") + "/main/" + encodedSearchKey);
		} else {
			app.navigate("main/" + encodedSearchKey);
		}
		
		app.messageManager.searchMessage(this.targetLocation, this.targetDate, this.searchState, this.renderSearchResults);

	},
	refresh: function () {
		if (this.searchResultView){
			this.searchResultView.close();
		}
		this.filteredMessages = this.filterMessage(this.allMessages);
		this.searchResultView = new SearchResultView(this.filteredMessages, true);

	},
	filterMessage: function(dmMessages){
		var filtered = new DMMessages();
		var l = dmMessages.length;
		for (var i = 0; i < l; i++ ) {
			var m = dmMessages.at(i);
			if (this.filter.gender === m.get("genderRequirement") || m.get("genderRequirement") === Constants.gender.both ){
				if ( this.filter.priceMin <= m.get("price") && this.filter.priceMax >= m.get("price")){
					if ( this.filter.time === "morning" && m.get("startTime").getHours()<12 && m.get("startTime").getHours() >= 6) {
						filtered.add(m);
					} else if ( this.filter.time === "afternoon" && m.get("startTime").getHours()<19 && m.get("startTime").getHours() >=12) {
						filtered.add(m);
					} else if ( this.filter.time === "night" && (m.get("startTime").getHours()>=19 || m.get("startTime").getHours() < 6)) {
						filtered.add(m);
					}

				}
			}
		}

		return filtered;
	},

	onClickLocation: function () {
		this.locationPickerView = new LocationPickerView(this.targetLocation, this);
	},

	updateLocation: function () {
		$("#searchSchoolInput").val(this.targetLocation.get("university"));
	},

	bindEvents: function(){
		var that = this;

		$("#searchSchoolInput").on('click', function(e){
			that.onClickLocation(e);
		});

		$("#timeSelections>.button").on('click', function(e){
			that.onClickTime(e);
		});

		$("#searchResultButton").on('click', function(e){
			that.submitSearch(e);
		});

		$("#refreshButton").on('click', function(e){
			that.refresh(e);
		});

		$("#genderSelections>.button").on('click', function(e){
			that.onClickGender(e);
		});

	},

	close: function () {
		if (!this.isClosed){
			//removing all event handlers
			$("#genderSelections>.button").off();
			$("#timeSelections>.button").off();
			$("#searchResultButton").off();
			$("#refreshButton").off();
			$("#genderSelections>.button").off();
			$("#searchDateInputTagContainer").off();

			this.searchResultView.close();

			//get ride of the view
			this.unbind();
			$(this.el).empty();

			this.isClosed = true;
		}
	}
});