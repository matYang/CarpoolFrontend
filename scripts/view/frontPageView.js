var FrontPageView = Backbone.View.extend({

    el: $('#content'),
    displayIndex: 0,
    initialize: function () {
        _.bindAll(this, 'getRecents', 'render', 'bindEvents', 'bindRecentsEvents', 'renderRecents', 'updateLocation', 'scroll', 'close');
        app.viewRegistration.register("frontPage", this, true);
        this.isClosed = false;
        this.bottomRecentId = 0;
        this.template = _.template(tpl.get('front'));
        this.messageTemplate = _.template(tpl.get('SimpleMessage'));

        this.user = app.sessionManager.getSessionUser();

        this.searchRepresentation = app.storage.getSearchRepresentationCache();
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
        this.displayMessages = recents;
        var buf = [];
        debugger;
        while (this.displayIndex< 3 ) {
            buf.push(this.messageTemplate(this.displayMessages.at(this.displayIndex++)._toJSON()));
        }
        $("#quickStart_resultPanel").append(buf.join(""));
        $("#quickStart_resultPanel>div").addClass("frontBoxContainer");
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
         $('#s3slider').s3Slider({
            timeOut: 4000
         });
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
            app.navigate("main/" + self.searchRepresentation.toString(), true);
            app.storage.setSearchRepresentationCache(this.searchRepresentation);
        });
        $("#quickStartButton2").on("click", function () {
            app.navigate("main/" + self.searchRepresentation.toString(), true);
            app.storage.setSearchRepresentationCache(this.searchRepresentation);
        });
        this.rollInterval = setInterval(this.scroll, 5000);
    },

    bindRecentsEvents: function () {
        var self = this;
        $("#quickStart_resultPanel>.frontBoxContainer").on('click', function(e){
            if (app.sessionManager.hasSession()) {
                app.navigate("message/" + Utilities.getId(e.delegateTarget.id), true);
            } else {
                self.loginAlert();
            }
        })
    },

    updateLocation: function (id) {
        $("#quickStart_from>.quickStart_value").html(this.searchRepresentation.get("departureLocation").get("city"));
        $("#quickStart_to>.quickStart_value").html(this.searchRepresentation.get("arrivalLocation").get("city"));
        $("#quickStart_cityInDescription").html(this.searchRepresentation.get("departureLocation").get("city"));
        $("#quickStart_schoolInDescription").html(this.searchRepresentation.get("arrivalLocation").get("city"));
        this.getRecents();
    },

    loginAlert: function () {
        Info.displayNotice("请先登录。若是已经登陆，请刷新页面。");
    },
    scroll: function () {
        var buf = this.messageTemplate(this.displayMessages.at(this.displayIndex++)._toJSON()), that = this;
        $("#quickStart_resultPanel").prepend(buf);
        $("#quickStart_resultPanel>div").first().addClass("frontBoxContainer").css("margin-top",-100);
        $("#quickStart_resultPanel>div").first().animate({"margin-top":0}, 600);
        if ($("#quickStart_resultPanel>div").length > 4) {
            $("#quickStart_resultPanel>div").last().remove();
        }
        if (this.displayIndex === this.displayMessages.length) {
            this.displayIndex = 0;
            app.messageManager.fetchRecents({
                "success": function(recents){
                    that.displayMessages = recents;
                },
                "error": this.renderError
            });
        }
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
            clearInterval(this.rollInterval);
        }
    }
});
