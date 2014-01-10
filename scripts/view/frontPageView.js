var FrontPageView = Backbone.View.extend({

    el: $('#content'),
    displayIndex: 0,
    initialize: function () {
        _.bindAll(this, 'getRecents', 'render', 'bindEvents', 'bindRecentsEvents', 'renderRecents', 'updateLocation', 'scroll', 'close');
        app.viewRegistration.register("frontPage", this, true);
        this.isClosed = false;
        this.temp = {};
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
        this.$resultPanel.empty();
        app.messageManager.fetchRecents({
            "success": this.renderRecents,
            "error": this.renderError
        });
    },

    renderRecents: function (recents) {
        if (recents.length === 0) {
            this.renderError();
        }
        this.displayMessages = recents;
        var buf = [];
        while (this.displayIndex < 3 && this.displayIndex < recents.length) {
            buf.push(this.messageTemplate(this.displayMessages.at(this.displayIndex++)._toJSON()));
        }
        this.$resultPanel.append(buf.join(""));
        this.bindRecentsEvents();
        this.rollInterval = setInterval(this.scroll, 5000);
    },

    render: function () {
        $(this.el).append(this.template);
        this.$resultPanel = $("#frontPage-resultPanel");
        $("#frontPage-exp>dt").hide();
        $("#exp1").show();
        $( '.cycle-slideshow' ).cycle({"slideCount":3});
    },

    renderError: function () {
        this.$resultPanel.append("<div id = 'mainPageNoMessage'>暂无消息</div>");
    },
    bindEvents: function () {
        var self = this;
        this.$from = $("#from").children("input").on("focus", function (e) {
            self.temp.from = $(this).val(); 
            $(this).val("");
        });
        this.$to = $("#to").children("input").on("focus", function (e) {
            self.temp.to = $(this).val();
            $(this).val("");
        });
        this.$from.on("blur", function(){
            if (!$(this).val())
            $(this).val(self.temp.from);
        });
        this.$to.on("blur", function(){
            if (!$(this).val())
            $(this).val(self.temp.to);
        });
        this.$date = $(".date>input").on("focus", function (e) {
            $(this).val("");
        });
        this.$date.datepicker({
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
                this.$date.val(Utilities.getDateString(d));
            }
        });
        $("#btn_search").on("click", function () {
            if (that.$from.val() && that.$to.val() && that.$date.val() ) {
                self.searchRepresentation.get("departureLocation").set("city", that.$from.val());
                self.searchRepresentation.get("arrivalLocation").set("city", that.$to.val());
                app.storage.setSearchRepresentationCache(self.searchRepresentation);
                app.navigate("main/" + self.searchRepresentation.toString(), true);
            }
        });
        this.$users = $("#frontPage-userButtons>.user").on("click", function (e) {
            if (!$(this).hasClass("active")) {
                $("#frontPage-exp>dt").hide();
                $(".active").removeClass("active").addClass("f-gray");
                $(this).removeClass("f-gray").addClass("active");
                $("#exp"+Utilities.getId(e.delegateTarget.id)).show();
            }
        })
    },

    bindRecentsEvents: function () {
        var self = this;
        this.$messages = $("#frontPage-resultPanel.message_simple").off().on('click', function (e) {
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
        var $resp = this.$resultPanel.prepend(buf);
        var $respdiv = $resp.children("div").first().css("margin-top",-100);
        $respdiv.first().animate({"margin-top":0}, 600);
        if ($respdiv.length > 4) {
            $respdiv.last().remove();
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
	    if (this.$messages) {
                this.$messages.off();
            }
            $(".btn_search").off();
            this.$from.off();
            this.$to.off();
            this.$users.off();
            this.$date.off();
            this.unbind();

            $( '.cycle-slideshow' ).cycle('destroy');
            $(this.el).empty();
            this.isClosed = true;
            clearInterval(this.rollInterval);
        }
    }
});
