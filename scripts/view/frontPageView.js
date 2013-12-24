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
        $("#frontPage-resultPanel").empty();
        app.messageManager.fetchRecents({
            "success": this.renderRecents,
            "error": this.renderError
        });
    },

    renderRecents: function (recents) {
        this.displayMessages = recents;
        var buf = [];
        while (this.displayIndex< 3 ) {
            buf.push(this.messageTemplate(this.displayMessages.at(this.displayIndex++)._toJSON()));
        }
        $("#frontPage-resultPanel").append(buf.join(""));
        this.bindRecentsEvents();
        this.rollInterval = setInterval(this.scroll, 5000);
    },

    render: function () {
        $(this.el).append(this.template);
    },

    renderError: function () {
        $("#frontPage-resultPanel").append("<div id = 'mainPageNoMessage'>暂无消息</div>");
    },
    bindEvents: function () {
        var self = this;
        $("#from").on("mouseup", function (e) {
            self.locationPicker = new LocationPickerView (self.searchRepresentation.get("departureLocation"), self);
        });
        $("#to").on("mouseup", function (e) {
            self.locationPicker = new LocationPickerView (self.searchRepresentation.get("arrivalLocation"), self);
        });
        $(".date>input").on("click", function (e) {
            $(".date>input").trigger("focus");

        });
        $(".date>input").datepicker({
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
                $(".date>input").val(Utilities.getDateString(d));
            }
        });
        $("#btn_search").on("click", function () {
            app.navigate("main/" + self.searchRepresentation.toString(), true);
            app.storage.setSearchRepresentationCache(this.searchRepresentation);
        });
        $("#frontPage-userButtons>.user").on("click", function(e){
            if (!$(this).hasClass("active")) {
                $(".active").removeClass("active").addClass("f-gray");
                $(this).removeClass("f-gray").addClass("active");
            }
        })
    },

    bindRecentsEvents: function () {
        var self = this;
        $(".message_simple").off();
        $(".message_simple").on('click', function(e){
            if (app.sessionManager.hasSession()) {
                app.navigate("message/" + Utilities.getId(e.delegateTarget.id), true);
            } else {
                self.loginAlert();
            }
        })
    },

    updateLocation: function (id) {
        this.getRecents();
    },

    loginAlert: function () {
        Info.displayNotice("请先登录。若是已经登陆，请刷新页面。");
    },
    scroll: function () {
        var buf = this.messageTemplate(this.displayMessages.at(this.displayIndex++)._toJSON()), that = this;
        $("#frontPage-resultPanel").prepend(buf);
        $("#frontPage-resultPanel>div").first().css("margin-top",-100);
        $("#frontPage-resultPanel>div").first().animate({"margin-top":0}, 600);
        if ($("#frontPage-resultPanel>div").length > 4) {
            $("#frontPage-resultPanel>div").last().remove();
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
        this.bindRecentsEvents();
    },
    close: function () {
        if (!this.isClosed) {
            $("#btn_search").off();
            $("#from").off();
            $("#to").off();
            $("#frontPage-userButtons>.user").off();
            this.unbind();
            $(".date>input").off();

            $(this.el).empty();
            this.isClosed = true;
            clearInterval(this.rollInterval);
        }
    }
});
