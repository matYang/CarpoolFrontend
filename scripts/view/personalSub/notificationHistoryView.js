var NotificationHistoryView = MultiPageView.extend({

    initialize: function (params) {
        _.bindAll(this, 'render', 'bindNotificationEvent', 'bindDelegateEvents', 'fetchNotificationError', 'close');
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
        this.messages = new Notifications();
        this.allMessages = new Notifications();
        app.sessionManager.fetchCurUserNotifications({
            "success": this.render,
            "error": this.fetchNotificationError 
        });
        this.selected = [];
        this.bindDelegateEvents();
        this.bindFilterEvents();
    },

    render: function (messages) {

        //only Pass message as parameter when it is called as a callback of fetch
        if (messages && messages instanceof Array) {
            this.allMessages.add(messages);
            this.messages.add(messages);
        } else if (messages instanceof Backbone.Collection){
            this.allMessages.add(messages.toArray());
            this.messages.add(messages.toArray());
        }
        //Render this.messages
        MultiPageView.prototype.render.call(this);
        this.unregisterFilterEvent();
        this.bindFilterEvents();

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
    bindDelegateEvents: function() {
        var that = this;
        $("#personalNotificationContainer").on("click", ".delete", function (e) {
            app.notificationManager.deleteNotification(Utilities.getId(e.target),{
                "success": that.deleteSuccess,
            });
        }).on("click", ".checkbox", function (e) {
            if ($(e.target).hasClass("checked")) {
                $(e.target).removeClass("checked");
            } else {
                $(e.target).addClass("checked");
            }
        });
        $("#selectAll").on("click", function (e) {
            e.preventDefault();
            var checkboxes = $("#personalNotificationContainer").find(".checkbox").addClass("checked");
        });
        $("#selectOpposite").on("click", function (e) {
            e.preventDefault();
            var checkboxes = $("#personalNotificationContainer").find(".checkbox");
            for ( var i = 0; i < checkboxes.length; i++ ) {
                if (checkboxes[i].hasClass("checked")) {
                    checkboxes[i].removeClass("checked");
                } else {
                    checkboxes[i].addClass("checked");
                }
            }
        });
        $("#markAsRead").on("click", function (e) {
            if (that.getCheckedNotificationIds && that.getCheckedNotificationIds.length) {
                app.notificationManager.checkNotification(that.getCheckedNotificationIds, {
                    "success":null,
                    "error":null
                });
            }
        });
        $("#deleteSelected").on("click", function (e) {
            if (that.getCheckedNotificationIds && that.getCheckedNotificationIds.length) {
                app.notificationManager.deleteNotification(that.getCheckedNotificationIds, {
                    "success":that.deleteSuccess,
                    "error":null
                });
            }
        });
    },
    bindFilterEvents: function () {
        var that = this;
        this.$all = $("#allNotificationFilter");
        this.$unread = $("#unreadNotificationFilter");
        this.$read = $("#readNotificationFilter");
        this.registerFilterEvent(this.$unread,
            function(n){n.get('state') === Constants.notificationState.unread},
            this, function(){$("#markAsRead").show();});
        this.registerFilterEvent(this.$read,
            function(n){n.get('state') === Constants.notificationState.read},
            this, function(){$("#markAsRead").hide();});
        this.registerFilterEvent(this.$all, null, this, function(){$("#markAsRead").show();});
        $("#notificationSetting").on("click", function (e) {
            e.preventDefault();
            app.navigate("personal/"+that.user.id+"/utility/trade", true);
        });
    },
    getCheckedNotificationIds: function () {
        var entries = $("#personalNotificationContainer").find(".checked");
        var len = entries.length, idList = [];
        for (var i = 0; i < len; i++) {
            idList.push(Utilities.toInt($(entries[i]).attr("data-id")));
        }
        return idList;
    },
    fetchNotificationError: function () {
        this.domContainer.append("<div class = 'noMessage'>暂无消息</div>");
    },
    deleteSuccess: function (idlist) {
        for (var i = 0; i < idlist.length; i ++) {
            $("#personal_notification_" + i).remove();        
        }
    },
    deleteFail: function () {

    },
    close: function () {
        if (!this.isClosed) {
            this.domContainer.empty();
            $("#profilePage_content").empty();
        }
    }
});
