var PRICE_MIN = 0,
	PRICE_MAX = 200;

var MainPageView = Backbone.View.extend ({
	el: $('#content'),

	filter: {
		"isRoundTrip": false,
		"time1": "all",
		"time2": "all",
		"type": "all",
		"priceMin": PRICE_MIN,
		"priceMax": PRICE_MAX
	},

	initialize: function (params) {
		_.bindAll(this, 'render', 'renderSearchResults', 'messageSearch', 'onClickTime', 'onClickType', 'submitSearch', 'refresh', 'bindEvents', 'close');
		app.viewRegistration.register("mainPage", this, true);
		this.isClosed = false;
		this.user = app.sessionManager.getSessionUser();
		//define the template
		this.template = _.template(tpl.get('main'));
		this.searchRepresentation = new SearchRepresentation();
		this.searchRepresentation.set("departureLocation", new UserLocation());
		this.searchRepresentation.set("arrivalLocation", new UserLocation());
		this.currentPage = 0;
		if (params) {
			this.searchRepresentation.castFromString(params.searchKey);
		}

		//after data intialiazation, start render curreny view
		this.render();
		//lauch the async search call, pass results-rendering method as callback
		this.messageSearch();

		this.bindEvents();
	},

	messageSearch: function(){
		//Todo: Change to accept return date;
		app.messageManager.searchMessage(this.searchRepresentation, this.renderSearchResults);

	},

	render: function () {
		var me = this;
		//injecting the template
		$(this.el).append(this.template);
		
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
		$("#searchLocationInput_from").val(this.searchRepresentation.get("departureLocation").toUiString());
		$("#searchLocationInput_to").val(this.searchRepresentation.get("arrivalLocation").toUiString());
		$("#searchDateInput_depart").val(Utilities.getDateString(this.searchRepresentation.get("departureDate")));
		$("#searchDateInput_return").val(Utilities.getDateString(this.searchRepresentation.get("arrivalDate")));
		if (me.searchRepresentation.get("targetType")%2 === 0 ) {
			me.filter.isRoundTrip = false;
			$("#oneWay").attr("class","selected button");
			$("#round").attr("class","notSelected button");
			$("#searchFilterTimeContainer2").hide();
			$("#searchDateInput_return").hide();
		} else {
			me.filter.isRoundTrip = true;
			$("#oneWay").attr("class","notSelected button");
			$("#round").attr("class","selected button");
			$("#searchFilterTimeContainer2").show();
			$("#searchDateInput_return").show();
			$("#filterBox").css("height","145px");
		}
		$("#oneWay").on("click", function(){
			me.filter.isRoundTrip = false;
			$("#oneWay").attr("class","selected button");
			$("#round").attr("class","notSelected button");
			$("#searchDateInput_return").hide();
			$("#searchFilterTimeContainer2").slideUp(200);
			$("#filterBox").animate({
			    height: "120px"
			}, 200);
			me.searchRepresentation.set("targetType", Constants.userSearchState.universityAsk);
		});
		$("#round").on("click", function(){
			me.filter.isRoundTrip = true;
			$("#oneWay").attr("class","notSelected button");
			$("#round").attr("class","selected button");
			$("#searchDateInput_return").show();
			$("#searchFilterTimeContainer2").slideDown(200);
			$("#filterBox").animate({
			    height: '146px'
			}, 200);
			me.searchRepresentation.set("targetType", Constants.userSearchState.universityHelp);
		});
		$("#goToSpecificPage>button").on("click", function(){
			var page = $("#pageNumberInput").val();
			if(!page) page = 1;
			else if (page>me.pages) page = me.pages;
			debugger;
			me.toPage(page);
		})
		$('#pageNumberInput').on('keypress', function(e){
			var code = (e.keyCode ? e.keyCode : e.which);
			if (code === 13){
				var page = $('#pageNumberInput').val();
				if(!page) page = 1;
				else if (page>me.pages) page = that.pages;
				me.toPage(page);
			} else if (code<48 || code>57) {
				e.preventDefault();
			}
		});
	},

	renderSearchResults: function(){
		//prevent memory leaks
		if (this.searchResultView){
			this.searchResultView.close();
		}
		this.allMessages = app.messageManager.getSearchResults();
		if (testMockObj.testMode){
			this.allMessages = testMockObj.sampleMessages;
		}
		this.filteredMessages = this.filterMessage(this.allMessages);
		this.searchResultView = new SearchResultView(this.filteredMessages, true);
		this.toPage(1);
		this.setPageNavigator();
	},
	onClickTime: function (e, parentId) {
		var me = $('#'+e.target.getAttribute('id'));
		$("#"+parentId+">.selected").removeClass('selected').addClass('notSelected');
		me.removeClass('notSelected').addClass('selected');
		var time = e.target.getAttribute("data-id");
		this.filter.time1 = time;
	},
	onClickType: function (e) {
		var me = $('#'+e.target.getAttribute('id'));
		$("#typeSelections>.selected").removeClass('selected').addClass('notSelected');
		me.removeClass('notSelected').addClass('selected');
		var type = e.target.getAttribute("data-id");
		this.filter.type = type;
	},
	submitSearch: function () {
		
		if (app.sessionManager.hasSession()) {
			app.navigate(this.user.get("userId") + "/main/" + encodedSearchKey);
		} else {
			app.navigate("main/" + encodedSearchKey);
		}
		//TODO: change to accept return date
		app.messageManager.searchMessage(this.searchRepresentation, this.renderSearchResults);
	},
	refresh: function () {
		debugger;
		if (this.searchResultView){
			this.searchResultView.close();
		}
		this.filteredMessages = this.filterMessage(this.allMessages);
		this.searchResultView = new SearchResultView(this.filteredMessages, true);

	},
	filterMessage: function(messages){
		var filtered = new Messages();
		var l = messages.length;

		for (var i = 0; i < l; i++ ) {
			var m = messages.at(i);
			var dt = m.get("departure_timeSlot");
			var rt = m.get("arrival_timeSlot");
			if (this.searchRepresentation.get("departureLocation").isEquivalentTo(m.get("departure_location"))){
				if (this.filterTime(this.filter.time1, dt)) {
					filtered.add(m);
				} 
				if ( this.filter.isRoundTrip && this.filterTime(this.filter.time2, at)) {
					filtered.add(m);
				}
			} else if ( m.get("isRoundTrip") && this.searchRepresentation.get("departureLocation").isEquivalentTo(m.get("arrival_location")) ){
				if (this.filterTime(this.filter.time2, dt)) {
					filtered.add(m);
				}
				if ( this.filter.isRoundTrip && this.filterTime(this.filter.time1, at)) {
					filtered.add(m);
				}

			}
		}
		return filtered;
	},
	filterTime: function(time, timeslot){
		if (timeslot == 0) {
			return true;
		} else if ( time === "morning" && ((timeslot<=12 && timeslot >= 0) || timeslot === 24 || timeslot === 25 || timeslot === 28)) {
			return true;
		} else if ( time === "afternoon" && (timeslot === 26 || (timeslot<=17 && timeslot >12))) {
			return true;
		} else if ( time === "night" && ((timeslot>17 && timeslot <=23) || timeslot === 27)) {
			return true;
		} else if ( time === "all") {
			return true;
		} else {
			return false;
		}
	},
	updateLocation: function (id) {
		$("#"+id).val(this.searchRepresentation.get("departureLocation").get("city"));
	},

	bindEvents: function(){
		var that = this;

		$("#searchLocationInput_from").on('click', function(e){
			this.locationPickerView = new LocationPickerView(this.searchRepresentation.get("departureLocation"), this, "searchLocationInput_from");
		});

		$("#searchLocationInput_to").on('click', function(e){
			this.locationPickerView = new LocationPickerView(this.searchRepresentation.get("arrivalLocation") , this, "searchLocationInput_from");
		});

		$("#timeSelections1>.button").on('click', function(e){
			that.onClickTime(e, "timeSelections1");
		});

		$("#timeSelections2>.button").on('click', function(e){
			that.onClickTime(e, "timeSelections2");
		});

		$("#typeSelections>.button").on('click', function(e){
			that.onClickType(e);
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
		
	},
	setPageNavigator: function(){
		$(".pageNumber").off();
		
		var length = this.filteredMessages ? this.filteredMessages.length : 0;
		var pages =  Math.floor(length / 6) + 1;
		this.pages = pages;
		var buf = [];
		for (var i = 1; i<=pages; i++) {
			buf[i-1] = "<a href='javascript:void(0)' class = 'pageNumber' id='pageNumber_"+i+"'> "+ i +"</span>";
		}
		var html = buf.join("");
		$("#pages").empty();
		$("#pages").append(html);
		var that = this;
		$(".pageNumber").on("click", function(e){
			var id = Utilities.toInt(Utilities.getId(e.target.id));
			that.toPage(id); 
		});
	},
	close: function () {
		if (!this.isClosed){
			//removing all event handlers
			$("#genderSelections>.button").off();
			$("#timeSelections1>.button").off();
			$("#timeSelections2>.button").off();
			$("#searchResultButton").off();
			$("#refreshButton").off();
			$("#genderSelections>.button").off();
			$("#typeSelections>.button").off();
			$(".pageNumber").off();
			if (this.searchResultView) {
				this.searchResultView.close();
			}
			//get ride of the view
			this.unbind();
			$(this.el).empty();

			this.isClosed = true;
		}
	}
});