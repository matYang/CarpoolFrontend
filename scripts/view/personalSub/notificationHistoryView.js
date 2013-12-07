var NotificationHistoryView = MultiPageView.extend({

    initialize: function (messageList) {
        _.bindAll(this, 'render', 'bindNotificationEvent', 'fetchMessageError', 'close');
        this.messages = messageList;
        this.entryTemplate = _.template(tpl.get('personalNotificationHistory'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "notificationPageNumber";
        this.entryEvent = this.bindNotificationEvent;
        this.pageNavigator = "notificationHistoryNavigator";
        this.user = app.sessionManager.getSessionUser();
        this.entryHeight = 61;
        this.pageEntryNumber = 7;
        this.entryClass = "personal_notification_message";
        this.entryContainer = "notificationHistoryContent";
        this.domContainer = $("#notificationHistoryContent");
        this.minHeight = 427;
        MultiPageView.prototype.render.call(this);
    },

    render: function (start) {

    },
    bindNotificationEvent: function (messageId) {
        var currentNotification = this.messages.get(messageId);
        var n_evt = currentNotification.get('notificationEvent');
        app.notificationManager.checkNotification(messageId);
        if (n_evt === Constants.notificationEvent.watched) {
            app.navigate("personal/" + currentNotification.get('initUserId'), true);
        } else if (n_evt < Constants.notificationEvent.watched) {
            app.navigate("message/" + messageId, true);
        }
    },

    fetchMessageError: function () {

    },

    close: function () {
        this.domContainer.empty();
    }
}); 