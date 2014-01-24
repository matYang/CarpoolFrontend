var PersonalNoticeView = Backbone.View.extend({

    initialize: function (params) {
        _.bindAll(this, 'render', 'loadMessage', 'close');
        this.isClosed = false;

        this.domContainer = $("#profilePage_content");
        this.wrapperTemplate = _.template(tpl.get('personalNotification'));

        this.curUserId = params.intendedUserId;
        this.user = app.sessionManager.getSessionUser();
        this.domContainer.append(this.wrapperTemplate);
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
            this.domContainer.empty();
            this.isClosed = true;
        }
    }
}); 