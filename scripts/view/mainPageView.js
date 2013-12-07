var PRICE_MIN = 0, PRICE_MAX = 200;

var MainPageView = Backbone.View.extend({
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
        this.searchRepresentation = new SearchRepresentation ();
        // this.searchRepresentation.set("departureLocation", new UserLocation());
        // this.searchRepresentation.set("arrivalLocation", new UserLocation());
        this.currentPage = 0;
        if (params) {
            this.searchRepresentation.castFromString(params.searchKey);
            app.storage.setSearchRepresentationCache(this.searchRepresentation);
        } else if (app.sessionManager.hasSession()) {
            this.searchRepresentation = this.user.get('searchRepresentation');
        } else {
            this.searchRepresentation = app.storage.getSearchRepresentationCache();
        }

        //TODO force target type to be all
        this.searchRepresentation.set('targetType', Constants.messageType.both);

        //after data intialiazation, start render curreny view
        this.render();
        this.messageSearch();
        this.bindEvents();
    },

    messageSearch: function () {
        app.messageManager.searchMessage(this.searchRepresentation, {
            "success": this.renderSearchResults,
            "error": this.renderError
        });
    },

    render: function () {
        var me = this;
        //injecting the template
        $(this.el).append(this.template);

        $("#searchDateInput_depart").datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                me.searchRepresentation.set("departureDate", d);
                $("#searchDateInput_depart").val(Utilities.getDateString(me.searchRepresentation.get("departureDate")));
            }
        });
        $("#searchDateInput_return").datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                me.searchRepresentation.set("arrivalDate", d);
                $("#searchDateInput_return").val(Utilities.getDateString(me.searchRepresentation.get("arrivalDate")));
            }
        });
        this.updateLocation('searchLocationInput_from');
        this.updateLocation('searchLocationInput_to');

        $("#searchDateInput_depart").val(Utilities.getDateString(this.searchRepresentation.get("departureDate")));
        $("#searchDateInput_return").val(Utilities.getDateString(this.searchRepresentation.get("arrivalDate")));
        me.filter.isRoundTrip = me.searchRepresentation.get("isRoundTrip");
        if (!me.filter.isRoundTrip) {
            $("#oneWay").attr("class", "selected button");
            $("#round").attr("class", "notSelected button");
            $("#searchFilterTimeContainer2").hide();
            $("#searchDateInput_return").hide();
        } else {
            $("#oneWay").attr("class", "notSelected button");
            $("#round").attr("class", "selected button");
            $("#searchFilterTimeContainer2").show();
            $("#searchDateInput_return").show();
            $("#filterBox").css("height", "145px");
        }
        $("#oneWay").on("click", function () {
            me.filter.isRoundTrip = false;
            $("#oneWay").attr("class", "selected button");
            $("#round").attr("class", "notSelected button");
            $("#searchDateInput_return").hide();
            $("#searchFilterTimeContainer2").slideUp(200);
            $("#filterBox").animate({
                height: "120px"
            }, 200);
            me.searchRepresentation.set("isRoundTrip", false);
        });
        $("#round").on("click", function () {
            me.filter.isRoundTrip = true;
            $("#oneWay").attr("class", "notSelected button");
            $("#round").attr("class", "selected button");
            $("#searchDateInput_return").show();
            $("#searchFilterTimeContainer2").slideDown(200);
            $("#filterBox").animate({
                height: '146px'
            }, 200);
            me.searchRepresentation.set("isRoundTrip", true);
        });
    },

    renderSearchResults: function (searchResults) {
        //prevent memory leaks
        if (this.searchResultView) {
            this.searchResultView.close();
        }
        this.allMessages = searchResults;
        if (testMockObj.testMode) {
            this.allMessages = testMockObj.sampleMessages;
        }
        this.filteredMessages = this.filterMessage(this.allMessages);
        this.searchResultView = new SearchResultView (this.filteredMessages, true);
        //this.searchResultView = new SearchResultView(this.allMessages, true);
    },

    renderError: function () {
        $("#searchResultDisplayPanel").append("<div id = 'mainPageNoMessage'>暂无消息</div>");
    },

    onClickTime: function (e, parentId) {
        var me = $('#' + e.target.getAttribute('id'));
        $("#" + parentId + ">.selected").removeClass('selected').addClass('notSelected');
        me.removeClass('notSelected').addClass('selected');
        var time = e.target.getAttribute("data-id");
        this.filter.time1 = time;
    },

    onClickType: function (e) {
        var me = $('#' + e.target.getAttribute('id'));
        $("#typeSelections>.selected").removeClass('selected').addClass('notSelected');
        me.removeClass('notSelected').addClass('selected');
        var type = e.target.getAttribute("data-id");
        this.filter.type = type;
    },

    submitSearch: function () {
        app.navigate("main/" + this.searchRepresentation.toString());
        app.messageManager.searchMessage(this.searchRepresentation, {
            "success": this.renderSearchResults,
            "error": this.renderError
        });
        app.storage.setSearchRepresentationCache(this.searchRepresentation);
    },

    refresh: function () {
        if (this.searchResultView) {
            this.searchResultView.close();
        }
        this.filteredMessages = this.filterMessage(this.allMessages);
        this.searchResultView = new SearchResultView (this.filteredMessages, true);

    },

    filterMessage: function (messages) {
        var filtered = new Messages ();
        var l = messages ? messages.length : 0;

        for (var i = 0; i < l; i++) {
            var m = messages.at(i);
            var dt = m.get("departure_timeSlot");
            var rt = m.get("arrival_timeSlot");
            if (this.searchRepresentation.get("departureLocation").isEquivalentTo(m.get("departure_location"))) {
                if (this.filterTime(this.filter.time1, dt)) {
                    filtered.add(m);
                }
                if (this.filter.isRoundTrip && this.filterTime(this.filter.time2, rt)) {
                    filtered.add(m);
                }
            } else if (m.get("isRoundTrip") && this.searchRepresentation.get("departureLocation").isEquivalentTo(m.get("arrival_location"))) {
                if (this.filterTime(this.filter.time2, dt)) {
                    filtered.add(m);
                }
                if (this.filter.isRoundTrip && this.filterTime(this.filter.time1, rt)) {
                    filtered.add(m);
                }

            }
        }
        return filtered;
    },

    filterTime: function (time, timeslot) {
        if (time === 'all' || timeslot === Constants.DayTimeSlot.all) {
            return true;
        } else if (time === "morning" && (timeslot === Constants.DayTimeSlot.morning || (timeslot >= 8 && timeslot < 15 ))) {
            return true;
        } else if (time === "afternoon" && (timeslot === Constants.DayTimeSlot.afternoon || (timeslot >= 15 && timeslot < 22 ))) {
            return true;
        } else if (time === "night" && (timeslot === Constants.DayTimeSlot.night || (timeslot >= 22 || (timeslot < 8 && timeslot > 3)))) {
            return true;
        } else {
            return false;
        }
    },

    updateLocation: function (id) {
        var custTemp;
        if (id === "searchLocationInput_from") {
            $("#searchLocationInput_from").val(this.searchRepresentation.get("departureLocation").get("city"));
            cust = this.searchRepresentation.get("departureLocation").get("point");
            if (cust !== "undetermined") {
                $("#customizeLocationInput_from").val(cust);
            }
        } else {
            $("#searchLocationInput_to").val(this.searchRepresentation.get("arrivalLocation").get("city"));
            cust = this.searchRepresentation.get("arrivalLocation").get("point");
            if (cust !== "undetermined") {
                $("#customizeLocationInput_to").val(cust);
            }
        }
    },

    bindEvents: function () {
        var that = this;

        $("#searchLocationInput_from").on('click', function (e) {
            that.locationPickerView = new LocationPickerView (that.searchRepresentation.get("departureLocation"), that, "searchLocationInput_from");
        });

        $("#searchLocationInput_to").on('click', function (e) {
            that.locationPickerView = new LocationPickerView (that.searchRepresentation.get("arrivalLocation"), that, "searchLocationInput_to");
        });

        $("#timeSelections1>.button").on('click', function (e) {
            that.onClickTime(e, "timeSelections1");
        });

        $("#timeSelections2>.button").on('click', function (e) {
            that.onClickTime(e, "timeSelections2");
        });

        $("#typeSelections>.button").on('click', function (e) {
            that.onClickType(e);
        });

        $("#searchResultButton").on('click', function (e) {
            that.submitSearch(e);
        });

        $("#refreshButton").on('click', function (e) {
            that.refresh(e);
        });

        $("#customizeLocationInput_from").on("blur", function (e) {
            that.searchRepresentation.get("departureLocation").set("point", this.value);
            that.searchRepresentation.get("departureLocation").reverseFill();
        });
        $("#customizeLocationInput_to").on("blur", function (e) {
            that.searchRepresentation.get("arrivalLocation").set("point", this.value);
            that.searchRepresentation.get("arrivalLocation").reverseFill();
        });

    },

    close: function () {
        if (!this.isClosed) {
            //removing all event handlers
            $("#genderSelections>.button").off();
            $("#timeSelections1>.button").off();
            $("#timeSelections2>.button").off();
            $("#searchResultButton").off();
            $("#refreshButton").off();
            $("#searchFilterTimeContainer1>.button").off();
            $("#searchFilterTimeContainer2>.button").off();
            $("#typeSelections>.button").off();
            $("#customizeLocationInput_from").off();
            $("#customizeLocationInput_to").off();
            $(".pageNumber").off();
            $("#oneWay").off();
            $("#round").off();
            $("#goToSpecificPage>button").off();
            $('#pageNumberInput').off();
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
