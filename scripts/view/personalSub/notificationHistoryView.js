var NotificationHistoryView = MultiPageView.extend({

    initialize: function (messageList) {
        _.bindAll(this, 'render', 'bindNotificationEvent', 'additionalEvents', 'fetchMessageError', 'close');
        this.messages = messageList;
        this.baseTemplate = _.template(tpl.get('personalNotificationHistory'))
        $("#content").append(this.baseTemplate);
        this.entryTemplate = _.template(tpl.get('personalNotificationEntry'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "notificationPageNumber";
        this.entryEvent = this.bindNotificationEvent;
        this.pageNavigator = "notificationHistoryNavigator";
        this.user = app.sessionManager.getSessionUser();
        this.pageEntryNumber = 7;
        this.entryClass = "notice_viewDetail";
        this.entryContainer = "personalNotificationContainer";
        this.domContainer = $("#personalNotificationContainer");
        this.render();
    },

    render: function (start) {
        MultiPageView.prototype.render.call(this);
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
    additionalEvents: function() {
        var taht = this;
        $("#personalNotificationContainer").on("click", ".delete", function (e) {
            app.notificationManager.deleteNotification(Utilities.getId(e.target),{
                "success": that.deleteSuccess,
            });
        });
    },
    fetchMessageError: function () {

    },
    deleteSuccess: function (id) {
        $("#personal_notification_"+id).remove();
    },
    close: function () {
        this.domContainer.empty();
    }
});
