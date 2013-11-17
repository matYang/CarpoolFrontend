var MessageHistoryView = MultiPageView.extend({


    initialize: function(messageList, type, container){
        _.bindAll(this, 'render', 'openDetailMessage', 'close');
        this.messages = messageList;
        this.entryTemplate = _.template(tpl.get('personalPage/personalDetailMessage'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = type+"MessagePageNumber";
        this.entryEvent = this.openDetailMessage;
        this.pageNavigator = type+"MessageHistoryNavigator";
        this.user = app.sessionManager.getSessionUser();
        this.entryHeight = 67;
        this.pageEntryNumber = 6;
        this.entryClass = "profilePage_eventBox";
        this.entryContainer = container;
        this.domContainer = $("#"+container);
        this.minHeight = 427;
        MultiPageView.prototype.render.call(this);
    },

    render: function(start){
        
    },
    openDetailMessage: function(messageId){
        app.navigate(app.sessionManager.getUserId() + "/message/" + messageId, true);
    },

    close: function(){
        this.domContainer.empty();
    }


});