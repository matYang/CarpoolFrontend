var MessageHistoryView = MultiPageView.extend({


    initialize: function(messageList, type, container){
        _.bindAll(this, 'render', 'openDetailMessage', 'close');
        MultiPageView.prototype.messages = messageList;
        MultiPageView.prototype.entryTemplate = _.template(tpl.get('personalPage/personalDetailMessage'));
        MultiPageView.prototype.pageNumberClass = "searchResultPageNumber";
        MultiPageView.prototype.pageNumberId = type+"MessagePageNumber";
        MultiPageView.prototype.entryEvent = this.openDetailMessage;
        MultiPageView.prototype.pageNavigator = type+"MessageHistoryNavigator";
        MultiPageView.prototype.user = app.sessionManager.getSessionUser();
        MultiPageView.prototype.entryHeight = 67;
        MultiPageView.prototype.pageEntryNumber = 7;
        MultiPageView.prototype.entryClass = "profilePage_eventBox";
        MultiPageView.prototype.entryContainer = container;
        MultiPageView.prototype.domContainer = $("#"+container);
        MultiPageView.prototype.minHeight = 427;
        MultiPageView.prototype.render();
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