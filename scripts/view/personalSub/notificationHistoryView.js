var NotificationHistoryView = MultiPageView.extend({

    initialize: function (params) {
        _.bindAll(this, 'render', 'bindNotificationEvent', 'additionalEvents', 'fetchNotificationError', 'close');
        app.sessionManager.fetchCurUserNotifications({
            "success": this.render,
            "error": this.fetchNotificationError 
        });
        this.baseTemplate = _.template(tpl.get('personalNotificationHistory'))
        $("#profilePage_content").append(this.baseTemplate());
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
        this.selected = [];
    },

    render: function (message) {
        this.messages = message;
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
        }).on("click", ".checkbox", function (e) {
            if ($(e.target).hasClass("checked")) {
                $(e.target).removeClass("checked");
                that.selected.remove(Utilities.getId(checkbox[i].parentElement.parentElement.id));
            } else {
                $(e.target).addClass("checked");
                that.selected.push(Utilities.getId(checkbox[i].parentElement.parentElement.id));
            }
        });
        $("#selectAll").on("click", function (e) {
            e.preventDefault();
            var checkboxes = $("#personalNotificationContainer").find(".checkbox").addClass("checked");
            that.selected = [];
            for ( var i = 0; i < checkboxes.length; i++ ) {
                that.selected.push(Utilities.getId(checkbox[i].parentElement.parentElement.id));
            }
        });
        $("selectOpposite").on("click", function (e) {
            e.preventDefault();
            that.selected = [];
            var checkboxes = $("#personalNotificationContainer").find(".checkbox")；
            for ( var i = 0; i < checkboxes.length; i++ ) {
                if (checkboxes[i].hasClass("checked")) {
                    checkboxes[i].removeClass("checked");
                } else {
                    checkboxes[i].addClass("checked");
                    that.selected.push(Utilities.getId(checkbox[i].parentElement.parentElement.id));
                }
            }
        });
        $("#markAsRead").on("click", function (e) {

        });
        $("#deleteSelected").on("click", function (e) {
            
        });
    },
    fetchNotificationError: function () {

    },
    deleteSuccess: function (id) {
        $("#personal_notification_"+id).remove();
    },
    close: function () {
        if (!this.isClosed) {
            this.domContainer.empty();
            $("#profilePage_content").empty();
        }
    }
});
