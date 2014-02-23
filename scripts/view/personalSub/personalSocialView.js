var PersonalSocialView = MultiPageView.extend({
    el: "#profilePage_content",
    initialize: function (params) {
        this.isClosed = false;
        _.bindAll(this, 'render', 'entryEvent', 'error', 'close');
        this.user = app.sessionManager.getSessionUser();

        this.entryTemplate = _.template(tpl.get('personalSocialCard'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "searchResultPageNumber";
        this.entryEvent = this.entryEvent;
        this.pageNavigator = "pageNavigator";
        this.entryHeight = 88;
        this.pageEntryNumber = 15;
        this.entryClass = "name";
        this.entryContainer = "socialListContent";
        this.minHeight = 460;
        this.startIndex = 0;
        this.noMessage = "你还没有关注的人";
        this.wrapperTemplate = _.template(tpl.get('personalSocial'));
        this.$el.append(this.wrapperTemplate);

        this.curUserId = params.intendedUserId;
        this.sessionUser = app.sessionManager.getSessionUser();

        var that = this;
        app.userManager.fetchWatchedUsers(this.curUserId, {
            "success": this.render,
            "error": this.error 
        });
    },

    render: function (socialList) {
        var that = this;
        this.messages = socialList;
        $("#social_following").html("关注（" + socialList.length + "）");
        this.sessionUser.set("socialList", socialList);
        MultiPageView.prototype.render.call(this);
        $("#socialListContent").on("click", ".cancel", function (e) {
            e.preventDefault();
            app.userManager.deWatchUser(Utilities.toInt(Utilities.getId(e.target.id)), {
                "success": function (user) {
                    $("#socialCard_" + Utilities.getId(e.target.id)).remove();
                    $("#social_following").html("关注（" + (socialList.length - 1) + "）");
                },
                "error": function () {
                    $(this).html("取消失败 重试");
                }
            });
        });
    },
    entryEvent: function (id) {
        app.navigate("personal/" + id, true);
    },
    error: function () {

    },
    close: function () {
        if (!this.isClosed) {

            this.$el.empty();
            this.isClosed = true;
        }
    }
}); 