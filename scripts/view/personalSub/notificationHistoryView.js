var NotificationHistoryView = MultiPageView.extend({


    initialize: function(messageList){
        _.bindAll(this, 'render', 'openNotificationDetail','fetchMessageSuccess','fetchMessageError', 'close');
        MultiPageView.prototype.messages = messageList;
        MultiPageView.prototype.entryTemplate = _.template(tpl.get('personalPage/personalNotificationHistory'));
        MultiPageView.prototype.pageNumberClass = "searchResultPageNumber";
        MultiPageView.prototype.pageNumberId = "notificationPageNumber";
        MultiPageView.prototype.entryEvent = this.openNotificationDetail;
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
    openNotificationDetail: function(messageId){
        // var currentTransaction = MultiPageView.prototype.messages.get(messageId);
        // app.messageManager.fetchMessage(currentTransaction.get("messageId"), {
        //     "success":this.fetchMessageSuccess,
        //     "error":this.fetchMessageError,
        //     "transaction":currentTransaction
        // });

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