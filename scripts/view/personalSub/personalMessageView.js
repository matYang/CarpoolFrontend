var PersonalMessageView = Backbone.View.extend({

    initialize: function (params) {
        _.bindAll(this, 'render', 'loadMessage', 'bindEventsForParticipated', 'close');
        this.isClosed = false;

        this.domContainer = $("#profilePage_content");
        this.wrapperTemplate = _.template(tpl.get('personalMessage'));
        this.messageTemplate = _.template(tpl.get('personalDetailMessage'));

        this.curUserId = params.intendedUserId;
        this.user = app.sessionManager.getSessionUser();
        this.domContainer.append(this.wrapperTemplate);
        app.userManager.fetchMessageHistory(this.curUserId, {
            "success": this.render,
            "error": this.error
        });
    },

    render: function (messages) {
        this.myActiveContainer = $("#profilePage_messagePublishedContent");
        this.myFinishedContainer = $("#profilePage_messageParticipatedContent");
        this.loadMessage(messages);
        this.bindEventsForParticipated();
    },

    loadMessage: function (messages) {
        var myMessages = new Messages (), pMessages = new Messages ();
        for (var i = 0; i < messages.length; i++) {
            message = messages.at(i);
            if (message.get("ownerId") === this.curUserId) {
                myMessages.add(message);
            } else {
                pMessages.add(message);
            }
        }
        this.myMessageHistoryView = new MessageHistoryView (myMessages, "my", "profilePage_messagePublishedContent");
        this.pMessageHistoryView = new MessageHistoryView (pMessages, "my", "profilePage_messageParticipatedContent");

    },

    bindEventsForParticipated: function () {
        var that = this;
        $("#profilePage_activeMessageParticipated>.profilePage_eventBox").off();
        $("#profilePage_finishedMessageParticipated>.profilePage_eventBox").off();
        $("#profilePage_activeMessageParticipated>.profilePage_eventBox").on("click", function (e) {
            app.navigate(that.user.get("userId") + /Message/ + Utilities.getId(e.delegateTarget.id), true);
        });
    },

    bindEventsForPublished: function () {
        var that = this;
        $("#profilePage_activeMessagePublished>.profilePage_eventBox").off();
        $("#profilePage_finishedMessagePublished>.profilePage_eventBox").off();
        $("#profilePage_activeMessagePublished>.profilePage_eventBox").on("click", function (e) {
            app.navigate(that.user.get("userId") + /Message/ + Utilities.getId(e.delegateTarget.id), true);
        });
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