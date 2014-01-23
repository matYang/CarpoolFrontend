var MessageHistoryView = MultiPageView.extend({

    initialize: function (messageList, container) {
        _.bindAll(this, 'render', 'openDetailMessage', 'close');
        this.messages = messageList;
        this.entryTemplate = _.template(tpl.get('SimpleMessage'));
        this.pageNumberClass = "message_simple";
        this.pageNumberId = "MessagePageNumber";
        this.entryEvent = this.openDetailMessage;
        this.pageNavigator = "MessageHistoryNavigator";
        this.user = app.sessionManager.getSessionUser();
        this.entryHeight = 95;
        this.pageEntryNumber = 8;
        this.entryClass = "profilePage_eventBox";
        this.entryContainer = container;
        this.domContainer = $("#" + container);
        this.minHeight = 700;
        this.render();
    },
    render: function(){
        MultiPageView.prototype.render.call(this);
    },
    afterRender: function (start) {
        $(".message_simple").find("img").remove();
    },
    openDetailMessage: function (messageId) {
        app.navigate("message/" + messageId, true);
    },

    close: function () {
        this.domContainer.empty();
    }
}); 