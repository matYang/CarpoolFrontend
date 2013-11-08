var NotificationHistoryView = MultiPageView.extend({


    initialize: function(messageList){
        _.bindAll(this, 'render', 'bindNotificationEvent','fetchMessageSuccess','fetchMessageError', 'close');
        MultiPageView.prototype.messages = messageList;
        MultiPageView.prototype.entryTemplate = _.template(tpl.get('personalPage/personalNotificationHistory'));
        MultiPageView.prototype.pageNumberClass = "searchResultPageNumber";
        MultiPageView.prototype.pageNumberId = "notificationPageNumber";
        MultiPageView.prototype.entryEvent = this.bindNotificationEvent;
        MultiPageView.prototype.pageNavigator = "notificationHistoryNavigator";
        MultiPageView.prototype.user = app.sessionManager.getSessionUser();
        MultiPageView.prototype.entryHeight = 61;
        MultiPageView.prototype.pageEntryNumber = 7;
        MultiPageView.prototype.entryClass = "personal_notification_message";
        MultiPageView.prototype.entryContainer = "notificationHistoryContent";
        MultiPageView.prototype.domContainer = $("#notificationHistoryContent");
        MultiPageView.prototype.minHeight = 427;
        MultiPageView.prototype.render();
    },

    render: function(start){
        
    },
    bindNotificationEvent: function(messageId){
        var currentNotification = MultiPageView.prototype.messages.get(messageId);

        app.notificationManager.checkNotification(messageId);

        if (n_evt === Constants.notificationEvent.watched){
            app.navigate(app.sessionManager.getUserId() + "/personal/" + currentNotification.get('initUserId'), true);
        }
        else if (n_evt < Constants.notificationEvent.watched){
            app.navigate(app.sessionManager.getUserId() + "/message/" + messageId, true);
        }
    },
    fetchMessageSuccess:function(message, transaction){
        if (app.sessionManager.hasSession()){
            this.transactionDetail = new TransactionDetailView(transaction, {
                "departure_seatsNumber":message.get("departure_seatsNumber") - message.get("departure_seatsBooked"),
                "arrival_seatsNumber":message.get("arrival_seatsBookedtsNumber") - message.get("arrival_seatsBooked"),
                "status":"r"
            });
        }
    },
    fetchMessageError:function(){

    },

    close: function(){
        this.domContainer.empty();
    }


});