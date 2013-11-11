var SearchResultView = MultiPageView.extend({


	initialize: function(messageList, isSearchResult){
		_.bindAll(this, 'render', 'transferURL', 'close');
		MultiPageView.prototype.messages = messageList;
		MultiPageView.prototype.isSearchResult = isSearchResult;
		MultiPageView.prototype.entryTemplate = _.template(tpl.get('Module/SimpleMessage'));
		MultiPageView.prototype.pageNumberClass = "searchResultPageNumber";
		MultiPageView.prototype.pageNumberId = "searchResultPageNumber";
		MultiPageView.prototype.entryEvent = this.transferURL;
		MultiPageView.prototype.pageNavigator = "pageNavigator";
		MultiPageView.prototype.user = app.sessionManager.getSessionUser();
		if (isSearchResult){
			MultiPageView.prototype.entryHeight = 108;
			MultiPageView.prototype.pageEntryNumber = 6;
			MultiPageView.prototype.entryClass = "searchResultBoxContainer";
			MultiPageView.prototype.entryContainer = "searchResultDisplayPanel";
			MultiPageView.prototype.domContainer = $("#searchResultDisplayPanel");

		} else {
			MultiPageView.prototype.entryHeight = 100;
			MultiPageView.prototype.pageEntryNumber = 3;
			MultiPageView.prototype.entryClass = "frontBoxContainer";
			MultiPageView.prototype.entryContainer = "quickStart_resultPanel";
			MultiPageView.prototype.domContainer = $("#quickStart_resultPanel");
			MultiPageView.prototype.minHeight = 300;
		}

		MultiPageView.prototype.render();

	},
	transferURL: function(messageId){
		if (app.sessionManager.hasSession()){
			app.navigate(this.user.id + "/message/" + messageId, true);
		} else {
			alert("请先登陆");
		}
	},

	close: function(){
		this.domContainer.empty();
	}


});