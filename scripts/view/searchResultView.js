var SearchResultView = Backbone.View.extend({


	initialize: function(messageList, isSearchResult){
		_.bindAll(this, 'render', 'transferURL', 'bindPageNumber', 'close');
		this.messageList = messageList;
		if (testMockObj.testMode){
			this.messageList = testMockObj.sampleMessages;
		}
		this.entries = 6 < this.messageList.length ? 6 : this.messageList.length;
		this.isSearchResult = isSearchResult;
		this.singleSearchResultTemplate = _.template(tpl.get('Module/SimpleMessage'));


		this.user = app.userManager.getTopBarUser();
		if (isSearchResult){
			this.domContainer = $(".searchResultDisplay");
		} else {
			this.domContainer = $("#quickStart_resultPanel");
		}
		this.render(0);
		this.bindPageNumber();
		if (!isSearchResult){
			$(".searchResultBoxContainer").removeClass("searchResultBoxContainer").addClass("frontBoxContainer");
		}
	},

	render: function(start){
		var i = start,
			that = this,
			toBeAppended = [];
		$(".searchResultBoxContainer").fadeOut();
		$(".searchResultBoxContainer").remove();
		for (i = start; i < this.entries; i++){
			toBeAppended[i] = this.singleSearchResultTemplate(this.messageList.at(i).toJSON());
		}
		this.domContainer.append(toBeAppended.join(""));
		for (i = start; i < this.entries; i++){
			$('#searchResultBox_' + this.messageList.at(i).id).on('click', that.transferURL(this.messageList.at(i).id));
		}


	},
	bindPageNumber: function() {
		var that = this;
		$(".pageNumber").off();
		$(".pageNumber").on("click",function(e){
			if (!e.target.id) return;
			that.render((Utilities.toInt(Utilities.getId(e.target.id)) -1 )*this.entries);
		});
	},
	transferURL: function(messageId){
		var that = this;
		return function(){
			if (app.sessionManager.hasSession()){
				app.navigate(that.user.id + "/message/" + messageId, true);
			} else {
				alert("请先登陆");
			}
		};
	},
	toPage: function(page){
		this.render((page-1)*6);
	},

	close: function(){
		for (i = 0; i < this.entries; i++){
			$('#searchResultBox' + this.messageList.at(i).id).off();
		}
		this.domContainer.empty();
	}


});