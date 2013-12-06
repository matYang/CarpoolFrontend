var FrontPageView = Backbone.View.extend({

    el: $('#content'),

    initialize: function () {
        _.bindAll(this, 'getRecents', 'render', 'bindEvents', 'bindRecentsEvents', 'renderRecents', 'updateLocation', 'close');
        app.viewRegistration.register("frontPage", this, true);
        this.isClosed = false;

        this.template = _.template(tpl.get('front'));
        this.messageTemplate = _.template(tpl.get('Front'));

        this.user = app.sessionManager.getSessionUser();

        this.searchRepresentation = app.storage.getSearchRepresentationCache();

        this.displayMessages = new Messages ();
        this.render();
        //fire async API call befire entering the time consuming events binding stage
        this.getRecents();
        //app.sessionManager.fetchSession();
        this.bindEvents();

    },

    getRecents: function () {
        //passing renderRecents as the callback to be executed upon successful fetch
        $("#quickStart_resultPanel").empty();
        app.messageManager.fetchRecents({
            "success": this.renderRecents,
            "error": this.renderError
        });
    },

    renderRecents: function (recents) {
        recentMessages = recents;
        for (var i = 0; i < 3 && i < recentMessages.length; i++) {
            this.displayMessages.add(recentMessages.at(i));
        }
        this.searchResultView = new SearchResultView (this.displayMessages, false);

        this.bindRecentsEvents();
    },

    render: function () {
        $(this.el).append(this.template);
        $("#quickStart_day>.quickStart_value").html(Utilities.getDateString(this.searchRepresentation.get("departureDate")));
        $("#quickStart_selectedDate").html(Utilities.getDateString(this.searchRepresentation.get("departureDate")));
        $("#quickStart_from>.quickStart_value").html(this.searchRepresentation.get("departureLocation").get("city"));
        $("#quickStart_to>.quickStart_value").html(this.searchRepresentation.get("arrivalLocation").get("city"));
        $("#quickStart_cityInDescription").html(this.searchRepresentation.get("departureLocation").get("city"));
        $("#quickStart_schoolInDescription").html(this.searchRepresentation.get("arrivalLocation").get("city"));
    },

    renderError: function () {
        $("#quickStart_resultPanel").append("<div id = 'mainPageNoMessage'>暂无消息</div>");
    },
    bindEvents: function () {
        var self = this;
        $("#quickStart_from>.quickStart_value").on("mouseup", function (e) {
            self.locationPicker = new LocationPickerView (self.searchRepresentation.get("departureLocation"), self);
        });
        $("#quickStart_to>.quickStart_value").on("mouseup", function (e) {
            self.locationPicker = new LocationPickerView (self.searchRepresentation.get("arrivalLocation"), self);
        });
        $("#quickStart_day>.quickStart_value").on("mouseup", function (e) {
            $("#quickStart_dateinput").trigger("focus");

        });
        $("#quickStart_dateinput").datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                self.searchRepresentation.set("departureDate", d);
                $("#quickStart_day>.quickStart_value").html(Utilities.getDateString(d));
                $("#quickStart_selectedDate").html(Utilities.getDateString(d));
            }
        });
        $("#quickStartButton1").on("click", function () {
            if (app.sessionManager.hasSession()) {
                var id = app;
                app.navigate(app.sessionManager.getUserId() + "/main/" + self.searchRepresentation.toString(), true);
            } else {
                app.navigate("main/" + self.searchRepresentation.toString(), true);
            }
            app.storage.setSearchRepresentationCache(this.searchRepresentation);
        });
        $("#quickStartButton2").on("click", function () {
            if (app.sessionManager.hasSession()) {
                var id = app;
                app.navigate(app.sessionManager.getUserId() + "/main/" + self.searchRepresentation.toString(), true);
            } else {
                app.navigate("main/" + self.searchRepresentation.toString(), true);
            }
            app.storage.setSearchRepresentationCache(this.searchRepresentation);
        });
    },

    bindRecentsEvents: function () {
        var self = this;
        //define scope functions separately, do not make functions inside loops, use scope functions or function maker
        // patterns
        var callback_link = function (e) {
            if (app.sessionManager.hasSession()) {
                app.navigate(app.sessionManager.getUserId() + "/Message/" + Utilities.getId(e.delegateTarget.id), true);
            } else {
                self.loginAlert();
            }
        };

        for (var i = 0; i < this.displayMessages.length; i++) {
            var messageId = this.displayMessages.at(i).get("messageId");
            $("#frontBox_" + messageId).on("click", callback_link);
        }
    },

    updateLocation: function (id) {
        $("#quickStart_from>.quickStart_value").html(this.searchRepresentation.get("departureLocation").get("city"));
        $("#quickStart_to>.quickStart_value").html(this.searchRepresentation.get("arrivalLocation").get("city"));
        $("#quickStart_cityInDescription").html(this.searchRepresentation.get("departureLocation").get("city"));
        $("#quickStart_schoolInDescription").html(this.searchRepresentation.get("arrivalLocation").get("city"));
        this.getRecents();
    },

    loginAlert: function () {
        Info.alert("请先登录。若是已经登陆，请刷新页面。");
    },

    close: function () {
        if (!this.isClosed) {
            $("#quickStartButton1").off();
            $("#quickStartButton2").off();
            for (var i = 0; i < this.displayMessages.length; i++) {
                var messageId = this.displayMessages.at(i).get("messageId");
                $("#frontBox_" + messageId).off();
            }

            this.unbind();
            $("#quickStart_from>.quickStart_value").off();
            $("#quickStart_to>.quickStart_value").off();
            $("#quickStart_date>.quickStart_value").off();

            $(this.el).empty();
            this.isClosed = true;
        }
    }
});
