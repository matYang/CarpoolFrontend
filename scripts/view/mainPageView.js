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
		_.bindAll(this, 'render', 'renderSearchResults', 'messageSearch', 'onClickTime', 'onClickLocation','submitSearch', 'refresh', 'bindEvents', 'close');
		app.viewRegistration.register("mainPage", this, true);
		this.isClosed = false;
		this.user = app.userManager.getTopBarUser();
		//define the template
		this.template = _.template(tpl.get('main'));
		this.filter.gender = Constants.gender.both;
		var result;
		this.currentPage = 0;
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

		$("#searchDateInput_depart").datepicker({
			buttonImageOnly: true,
			buttonImage: "calendar.gif",
			buttonText: "Calendar",
			minDate: new Date(),
			onSelect:function(text,inst){
				var d = new Date();
			}
		});
		$("#searchDateInput_return").datepicker({
			buttonImageOnly: true,
			buttonImage: "calendar.gif",
			buttonText: "Calendar",
			minDate: new Date(),
			onSelect:function(text,inst){
				var d = new Date();
			}
		});
		$("#searchLocationInput_from").val(this.targetLocation.get("university"));
		$("#searchDateInput_depart").val(Utilities.getDateString(this.targetDate));
		if (this.searchState%2 === 0 ) {
			$("#oneWay").attr("class","selected button");
			$("#round").attr("class","notSelected button");
			$("#searchDateInput_return").hide();
		} else {
			$("#oneWay").attr("class","notSelected button");
			$("#round").attr("class","selected button");
			$("#searchDateInput_return").show();
		}
		$("#oneWay").on("click", function(){
			$("#oneWay").attr("class","selected button");
			$("#round").attr("class","notSelected button");
			$("#searchDateInput_return").hide();
			this.searchState = Constants.userSearchState.universityAsk;
		});
		$("#round").on("click", function(){
			$("#oneWay").attr("class","notSelected button");
			$("#round").attr("class","selected button");
			$("#searchDateInput_return").show();
			this.searchState = Constants.userSearchState.universityHelp;
		});
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
		this.toPage(1);
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
		$("#searchLocationInput_from").val(this.targetLocation.get("university"));
	},

	bindEvents: function(){
		var that = this;

		$("#searchLocationInput_from").on('click', function(e){
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

	},
	toPage: function(page){
		this.searchResultView.toPage(page);
		this.currentPage = page;
		this.setPageNavigator();
	},
	setPageNavigator: function(){
		$(".pageNumber").off();
		var pages = this.messageList.length / 6 + 1;
		var buf = [];
		buf[0] = "<span class = 'pageNumber' id='pageNumber_1'>"+ 1 +"</span>";

		if (this.currentPage>=5) {
			buf[1] =  "<span class = 'pageNumber' >...</span>";
		}

		for (var i = 0; i < 3; i++) {
			var pageNumber = this.currentPage - 1 + i;
			if (pageNumber < pages && pageNumber > 0){ff
				buf[buf.length] = "<span class = 'pageNumber' id='pageNumber_'"+ pageNumber + ">"+ pageNumber +"</span>";
			}
		}
		if (this.currentPage + 1 < pages) {
			buf[buf.length] =  "<span class = 'pageNumber' >...</span>";
			buf[buf.length] = "<span class = 'pageNumber' id='pageNumber_'"+pages+">"+ pages +"</span>";

		}
		var html = buf.join("");
		$("#pages").empty();
		$("#pages").append(html);
		var that = this;
		$(".pageNumber").on("click", function(e){
			if (!e.target.id) return;
			var id = Utilities.toInt(Utilities.getId(e.target.id));
			that.toPage(id);
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

			this.searchResultView.close();

			//get ride of the view
			this.unbind();
			$(this.el).empty();

			this.isClosed = true;
		}
	}
});