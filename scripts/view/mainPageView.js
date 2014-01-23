var PRICE_MIN = 0, PRICE_MAX = 200;

var MainPageView = Backbone.View.extend({
    el: $('#content'),

    filter: {
        "isRoundTrip": false,
        "time1": "all",
        "time2": "all",
        "type": Constants.messageType.both,
        "priceMin": PRICE_MIN,
        "priceMax": PRICE_MAX
    },

    initialize: function (params) {
        _.bindAll(this, 'render', 'renderSearchResults', 'messageSearch', 'onClickTime', 'onClickType', 'submitSearch', 'refresh', 'bindEvents', 'close');
        app.viewRegistration.register("mainPage", this, true);
        this.isClosed = false;
        this.rendered = false;
        this.user = app.sessionManager.getSessionUser();
        //define the template
        this.template = _.template(tpl.get('main'));
        this.temp = {};
        this.searchRepresentation = new SearchRepresentation ();
        this.currentPage = 0;
        if (params) {
            this.searchRepresentation.castFromString(params.searchKey);
            app.storage.setSearchRepresentationCache(this.searchRepresentation);
        } else if (app.sessionManager.hasSession()) {
            this.searchRepresentation = this.user.get('searchRepresentation');
        } else {
            this.searchRepresentation = app.storage.getSearchRepresentationCache();
        }
        //injecting the template
        $(this.el).append(this.template);
        //TODO force target type to be all
        this.searchRepresentation.set('targetType', Constants.messageType.both);
        app.locationService.getDefaultLocations(this.render, this);

        //after data intialiazation, start render curreny view
    },

    messageSearch: function () {
        app.messageManager.searchMessage(this.searchRepresentation, {
            "success": this.renderSearchResults,
            "error": this.renderError
        });
    },
    closeLocationDropDown: function(){
        if (typeof this.locationDropDownView !== 'undefined' && this.locationDropDownView !== null){
            this.locationDropDownView.close();
        }
    },
    acceptDefaultLocation: function(defaultLocation){
        if (this.locationDirection === Constants.LocationDirection.from){
            this.origin = defaultLocation;
            this.$locationFrom.val(this.origin.toUiString());
        }
        else if (this.locationDirection === Constants.LocationDirection.to){
            this.dest = defaultLocation;
            this.$locationTo.val(this.dest.toUiString());
        }
        if (this.map) {
            this.map.getDirection(this.origin, this.dest);
        }
    },

    render: function () {
        this.$locationFrom = $("#searchLocationInput_from");
        this.$locationTo = $("#searchLocationInput_to");
        this.$type = $("#typeSelections");
        this.origin = (this.searchRepresentation.get("departureMatch_Id")>-1 ) ? this.defaultLocations.where({"defaultId":this.searchRepresentation.get("departureMatch_Id")})[0] : this.defaultLocations.at(0);
        this.dest = (this.searchRepresentation.get("arrivalMatch_Id")>-1 ) ? this.defaultLocations.where({"defaultId":this.searchRepresentation.get("arrivalMatch_Id")})[0] : this.defaultLocations.at(1);

        this.$locationFrom.val(this.origin.toUiString());
        this.$locationTo.val(this.dest.toUiString());
        var me = this, mapParams = {
            div: "mainMap",
            class: "mainPage-map",
            originLocation: this.origin,
            destLocation: this.dest,
            clickable: false
        };



        this.map = app.storage.getViewCache("MapView", mapParams);
        this.$dateDepart = $("#searchDateInput_depart").datepicker({
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
                $(this).val(Utilities.getDateString(me.searchRepresentation.get("departureDate")));
                me.submitSearch();
            }
        });
        this.$dateReturn = $("#searchDateInput_return").datepicker({
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
                $(this).val(Utilities.getDateString(me.searchRepresentation.get("arrivalDate")));
                me.submitSearch();
            }
        });
        this.$swap = $("#swap").on("click", function() {
            me.map.getDirection(me.dest, me.origin);
            var temp;
            temp = me.origin;
            me.origin = me.dest;
            me.dest = temp;
            me.$locationFrom.val(me.origin.toUiString());
            me.$locationTo.val(me.dest.toUiString());
            me.submitSearch();
        });
        this.$dateDepart.val(Utilities.getDateString(this.searchRepresentation.get("departureDate")));
        me.filter.isRoundTrip = me.searchRepresentation.get("isRoundTrip");
        var $stc = $("#searchTypeContainer");
        $stc.children(".active").removeClass("active");
            this.$spans = $stc.children("span");
        if (!me.filter.isRoundTrip) {
            this.$dateReturn.parent().addClass("date-return-disabled").prop("disabled", true);
            this.$spans.first().addClass("active");
        } else {
            this.$dateReturn.val(Utilities.getDateString(this.searchRepresentation.get("arrivalDate")));
            this.$spans.second().addClass("active");
        }
        this.$spans.on("click", function(e){
            $stc.children(".active").removeClass("active");
            $(e.target).addClass("active");
            if ($(e.target).attr("data-id") == "roundtrip") {
                me.filter.isRoundTrip = true;
                me.$dateReturn.prop("disabled", false);
                me.$dateReturn.parent().removeClass("date-return-disabled");
                me.submitSearch();
            } else {
                me.filter.isRoundTrip = false;
                me.$dateReturn.prop("disabled", true);
                me.$dateReturn.parent().addClass("date-return-disabled");
                me.submitSearch();
            }
        });
        this.messageSearch();
        this.bindEvents();
        this.rendered = true;
    },

    renderSearchResults: function (searchResults) {
        //prevent memory leaks
        if (this.searchResultView) {
            this.searchResultView.close();
        }
        $("#originText").html(this.$locationFrom.val());
        $("#destText").html(this.$locationTo.val());
        $("#numberText").html(searchResults.length);
        this.allMessages = searchResults;
        this.filteredMessages = this.filterMessage(this.allMessages);
        this.searchResultView = new SearchResultView (this.filteredMessages, true);
    },

    renderError: function () {
        this.$resultp = this.$resultp || $("#searchResultDisplayPanel");
        this.$resultp.empty().append("<div id = 'mainPageNoMessage'>暂无消息</div>");
    },

    onClickTime: function (e, parentId) {
        var me = $('#' + e.id);
        $("#" + parentId + ">.selected").removeClass('selected').addClass('notSelected');
        me.removeClass('notSelected').addClass('selected');
        var time = e.target.getAttribute("data-id");
        this.filter.time1 = time;
    },

    onClickType: function (e) {
        this.$type.children(".active").removeClass('active');
        $(e.target).addClass('active');
        if (e.target.getAttribute("data-id") === "passenger"){
            this.filter.type = Constants.messageType.ask;
        } else if (e.target.getAttribute("data-id") === "driver") {
            this.filter.type = Constants.messageType.help;
        } else {
            this.filter.type = Constants.messageType.both;
        }
        this.refresh();
    },

    submitSearch: function () {
        if (!(this.$dateDepart.val() && this.$locationFrom.val() && this.$locationTo.val())) {
            return;
        } else if (!this.$dateReturn.val() && this.filter.isRoundTrip) {
            return;
        }
        app.navigate("main/" + this.searchRepresentation.toString());
        this.searchRepresentation.set("departureMatch_Id", this.origin.get("defaultId"));
        this.searchRepresentation.set("arrivalMatch_Id", this.dest.get("defaultId"));
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
            // var dt = m.get("departure_timeSlot");
            // var rt = m.get("arrival_timeSlot");
            // if (this.searchRepresentation.get("departureLocation").isEquivalentTo(m.get("departure_location"))) {
            //     if (this.filterTime(this.filter.time1, dt)) {
            //         filtered.add(m);
            //     }
            //     if (this.filter.isRoundTrip && this.filterTime(this.filter.time2, rt)) {
            //         filtered.add(m);
            //     }
            // } else if (m.get("isRoundTrip") && this.searchRepresentation.get("departureLocation").isEquivalentTo(m.get("arrival_location"))) {
            //     if (this.filterTime(this.filter.time2, dt)) {
            //         filtered.add(m);
            //     }
            //     if (this.filter.isRoundTrip && this.filterTime(this.filter.time1, rt)) {
            //         filtered.add(m);
            //     }

            // }
            if (this.filter.type === Constants.messageType.both || this.filter.type === m.get("type")) {
                filtered.add(m);
            }
        }
        return filtered;
    },

    filterTime: function (time, timeslot) {
        if (time === 'all') {
            return true;
        } else if (time === "morning" && timeslot < Utilities.getDayTimeSlot_afternoonStart()) {
            return true;
        } else if (time === "afternoon" && (timeslot >= Utilities.getDayTimeSlot_afternoonStart() && timeslot < Utilities.getDayTimeSlot_nightStart())) {
            return true;
        } else if (time === "night" && (timeslot >= Utilities.getDayTimeSlot_nightStart())) {
            return true;
        } else {
            return false;
        }
    },

    updateLocation: function (id) {
        // var custTemp;
        // if (id === "searchLocationInput_from") {
        //     this.$locationFrom.val(this.searchRepresentation.get("departureLocation").get("city"));
        //     cust = this.searchRepresentation.get("departureLocation").get("point");
        //     if (cust !== "undetermined") {
        //         $("#customizeLocationInput_from").val(cust);
        //     }
        // } else {
        //     this.$locationTo.val(this.searchRepresentation.get("arrivalLocation").get("city"));
        //     cust = this.searchRepresentation.get("arrivalLocation").get("point");
        //     if (cust !== "undetermined") {
        //         $("#customizeLocationInput_to").val(cust);
        //     }
        // }
    },

    bindEvents: function () {
        var that = this;
        this.$locationFrom.on('focus', function (e) {
            that.closeLocationDropDown();
            that.locationDirection = Constants.LocationDirection.from;
            that.locationDropDownView = new LocationDropDownView($("#from"), that);
        });

        this.$locationTo.on('focus', function (e) {
            that.closeLocationDropDown();
            that.locationDirection = Constants.LocationDirection.to;
            that.locationDropDownView = new LocationDropDownView($("#to"), that);
        });
        this.$locationFrom.on('blur', function (e) {
            if (!$(this).val())
                $(this).val(that.temp.from);
            if ($(this).val() && that.$locationTo.val() ) {
                that.submitSearch();
            }
        });

        this.$locationTo.on('blur', function (e) {
            if (!$(this).val())
                $(this).val(that.temp.to);
            if ($(this).val() && that.$locationTo.val() ) {
                that.submitSearch();
            }
        });

        // $("#timeSelections1>.button").on('click', function (e) {
        //     that.onClickTime(e, "timeSelections1");
        // });

        // $("#timeSelections2>.button").on('click', function (e) {
        //     that.onClickTime(e, "timeSelections2");
        // });

        this.$type.children("span").on('click', function (e) {
            that.onClickType(e);
        });

        $("#refreshButton").on('click', function (e) {
            that.refresh(e);
        });

        // this.$custFrom.on("blur", function (e) {
        //     that.originLocation.set("pointAddress", this.value);
        //     that.submitSearch();
        // });
        // this.$custTo.on("blur", function (e) {
        //     that.destLocation.set("pointAddress", this.value);
        //     that.submitSearch();
        // });

    },

    close: function () {
        if (!this.isClosed) {
            //removing all event handlers
            if (this.rendered) {
                if (this.map) {
                    this.map.close();
                }
                this.$type.children("span").off();
                this.$locationFrom.off();
                this.$locationTo.off();
                this.$swap.off();
                if (this.searchResultView) {
                    this.searchResultView.close();
                }
            }

            //get ride of the view
            this.unbind();
            $(this.el).empty();

            this.isClosed = true;
        }
    }
});
