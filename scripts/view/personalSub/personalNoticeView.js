var PersonalNoticeView = Backbone.View.extend({
    el: "#profilePage_content",
    initialize: function (params) {
        _.bindAll(this, 'render', 'loadMessage', 'close');
        this.isClosed = false;

        this.wrapperTemplate = _.template(tpl.get('personalNotification'));

        this.curUserId = params.intendedUserId;
        this.user = app.sessionManager.getSessionUser();
        this.$el.append(this.wrapperTemplate);
        app.userManager.fetchNotificationHistory(this.curUserId, {
            "success": this.render,
            "error": this.error
        });
    },

    render: function (noticeList) {
        this.myMessageHistoryView = new NotificationHistoryView (noticeList);
    },
    bindEvents: function(){
    	
    },
    error: function () {
        Info.displayErrorPage("profilePage_content", "Message History fetch failed");
    },
    close: function () {
        if (!this.isClosed) {
            //TODO: unbind all the events
            this.$el.empty();
            this.isClosed = true;
        }
    }
}); 