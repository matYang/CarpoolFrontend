var SearchResultView = Backbone.View.extend({


	initialize: function(messageList, isSearchResult){
		_.bindAll(this, 'render', 'transferURL', 'bindMore', 'close');
		this.entries = 6 < messageList.length ? 6 : messageList.length;
		if (isSearchResult){
			this.singleSearchResultTemplate = _.template(tpl.get('DMModule/DMSimpleMessage'));
			this.showMoreResultsDOM = "<div id = 'searchResultMore' class = 'searchResultMore button'>查看更多</div>";
		} else {
			this.singleSearchResultTemplate = _.template(tpl.get('DMModule/DMFront'));
			this.showMoreResultsDOM = "";
		}
		

		this.user = app.userManager.getTopBarUser();
		this.messageList = messageList;

		if (isSearchResult){
			this.domContainer = $(".searchResultDisplay");
		} else {
			this.domContainer = $("#quickStart_resultPanel");
		}
		this.render(0);
		this.bindMore();
	},

	render: function(start){
		var i = start,
			that = this,
			toBeAppended = [];

		for (i = start; i < this.entries; i++){
			toBeAppended[i] = this.singleSearchResultTemplate(this.messageList.at(i).toJSON());
		}
		toBeAppended[toBeAppended.length]=this.showMoreResultsDOM;
		this.domContainer.append(toBeAppended.join(""));
		for (i = start; i < this.entries; i++){
			$('#searchResultBox_' + this.messageList.at(i).id).on('click', that.transferURL(this.messageList.at(i).id));
		}

	},
	bindMore: function() {
		var that = this;
		$("#searchResultMore").on("click",function(e){
			
			if (that.entries < that.messageLength) {
				var addNum = 6;
				if (that.messageLength - that.entries < 6){
					addNum = that.messageLength - that.entries;
				}
				that.entries = that.entries+ addNum;
				that.render(that.entries - addNum);
			} else {
				$("#searchResultMore").html("暂无更多消息");
			}
		});
	},
	transferURL: function(messageId){
		var that = this;
		return function(){
			if (app.sessionManager.hasSession()){
				app.navigate(that.user.id + "/DMMessage/" + messageId, true);
			} else {
				alert("请先登陆");
			}
		};
	},

	close: function(){
		for (i = 0; i < this.entries; i++){
			$('#searchResultBox' + this.messageList.at(i).id).off();
		}
		this.domContainer.empty();
	}


});