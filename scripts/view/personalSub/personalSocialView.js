var PersonalSocialView = MultiPageView.extend({
    initialize: function (params) {
        this.isClosed = false;
        _.bindAll(this, 'render', 'entryEvent', 'error', 'close', 'dewatchSuccess', 'dewatchFail');
        this.user = app.sessionManager.getSessionUser();

        this.entryTemplate = _.template(tpl.get('personalSocialCard'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "searchResultPageNumber";
        this.entryEvent = this.entryEvent;
        this.pageNavigator = "pageNavigator";
        this.entryHeight = 117;
        this.pageEntryNumber = 12;
        this.entryClass = "name";
        this.entryContainer = "socialListContent";
        this.minHeight = 480;
        this.startIndex = 0;

        this.domContainer = $("#profilePage_content");
        this.wrapperTemplate = _.template(tpl.get('personalSocial'));
        this.domContainer.append(this.wrapperTemplate);

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
            app.userManager.deWatchUser(Utilities.toInt(Utilities.getId(e.target.id)), {
                "success":that.dewatchSuccess,
                "error":that.dewatchFail
            });
        });
    },
    dewatchSuccess: function () {

    },
    dewatchFail: function () {

    },
    entryEvent: function (id) {
        app.navigate("personal/" + id, true);
    },
    error: function () {

    },
    close: function () {
        if (!this.isClosed) {

            this.domContainer.empty();
            this.isClosed = true;
        }
    }
}); 