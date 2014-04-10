var MessageHistoryView = MultiPageView.extend({

    initialize: function (messageList, container) {
        _.bindAll(this, 'render', 'openDetailMessage', 'afterRender', 'bindEvents', 'close');
        this.allMessages = messageList;
        this.messages = messageList.clone();
        this.entryTemplate = _.template(tpl.get('SimpleMessage'));
        this.pageNumberClass = "page-messageHistory";
        this.pageNumberId = "MessagePageNumber";
        this.entryEvent = this.openDetailMessage;
        this.pageNavigator = "MessageHistoryNavigator";
        this.user = app.sessionManager.getSessionUser();
        this.entryHeight = 95;
        this.pageEntryNumber = 8;
        this.entryClass = "message_simple";
        this.entryContainer = container;
        this.domContainer = $("#" + container);
        this.minHeight = 700;
        this.render();
        this.bindEvents();
    },
    render: function(){
        MultiPageView.prototype.render.call(this);

    },
    afterRender: function (start) {
        $(".message_simple").find(".personalInfo").remove();
    },
    openDetailMessage: function (messageId) {
        app.navigate("message/" + messageId, true);
    },
    bindEvents: function () {
        this.registerFilterEvent($("#allMessageFilter"), null, this);
        this.registerFilterEvent($("#activeMessageFilter"), 
            function(m){ return m.get("state") !== Constants.messageState.closed; }, this);
        this.registerFilterEvent($("#finishedMessageFilter"),
            function(m){ return m.get("state") === Constants.messageState.closed; }, this);
    },
    close: function () {
        this.domContainer.empty();
    }
}); 