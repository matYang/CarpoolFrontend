var SearchResultView = MultiPageView.extend({


	initialize: function(messageList, isSearchResult){
		_.bindAll(this, 'render', 'transferURL', 'close');
		this.messages = messageList;
		this.isSearchResult = isSearchResult;
		this.entryTemplate = _.template(tpl.get('Module/SimpleMessage'));
		this.pageNumberClass = "searchResultPageNumber";
		this.pageNumberId = "searchResultPageNumber";
		this.entryEvent = this.transferURL;
		this.pageNavigator = "pageNavigator";
		this.user = app.sessionManager.getSessionUser();
		if (isSearchResult){
			this.entryHeight = 108;
			this.pageEntryNumber = 6;
			this.entryClass = "searchResultBoxContainer";
			this.entryContainer = "searchResultDisplayPanel";
			this.domContainer = $("#searchResultDisplayPanel");

		} else {
			this.entryHeight = 100;
			this.pageEntryNumber = 3;
			this.entryClass = "frontBoxContainer";
			this.entryContainer = "quickStart_resultPanel";
			this.domContainer = $("#quickStart_resultPanel");
			this.minHeight = 300;
		}

		MultiPageView.prototype.render.call(this);

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