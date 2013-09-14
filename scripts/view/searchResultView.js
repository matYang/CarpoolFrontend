var SearchResultView = Backbone.View.extend({


	initialize: function(messageList, isSearchResult){
		_.bindAll(this, 'render', 'transferURL', 'bindPageNumber', 'setPageNavigator', 'close');
		this.entries = 6 < messageList.length ? 6 : messageList.length;
		this.currentPage = 1;
		this.isSearchResult = isSearchResult;
		if (isSearchResult){
			this.singleSearchResultTemplate = _.template(tpl.get('DMModule/DMSimpleMessage'));
		} else {
			this.singleSearchResultTemplate = _.template(tpl.get('DMModule/DMFront'));
		}
		

		this.user = app.userManager.getTopBarUser();
		this.messageList = messageList;

		if (isSearchResult){
			this.domContainer = $(".searchResultDisplay");
		} else {
			this.domContainer = $("#quickStart_resultPanel");
		}
		this.render(0);
		this.bindPageNumber();
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
		if (this.isSearchResult){
			this.setPageNavigator();
		}
	},
	bindPageNumber: function() {
		var that = this;
		$(".pageNumber").off();
		$(".pageNumber").on("click",function(e){
			if (!e.target.id) return;
			debugger;
			that.render((Utilities.toInt(Utilities.getId(e.target.id)) -1 )*this.entries);
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
	setPageNavigator: function(){

		var pages = this.messageList.length / 6 + 1;
		var buf = [];
		buf[0] = "<span class = 'pageNumber' id='pageNumber_1'>"+ 1 +"</span>";

		if (this.currentPage>=5) {
			buf[1] =  "<span class = 'pageNumber' >...</span>";
		}

		for (var i = 0; i < 3; i++) {
			var pageNumber = this.currentPage - 1 + i;
			if (pageNumber < pages && pageNumber > 0){
				buf[buf.length] = "<span class = 'pageNumber' id='pageNumber_'"+ pageNumber + ">"+ pageNumber +"</span>";
			}
		}
		if (this.currentPage + 1 < pages) {
			buf[buf.length] =  "<span class = 'pageNumber' >...</span>";
			buf[buf.length] = "<span class = 'pageNumber' id='pageNumber_'"+pages+">"+ pages +"</span>";
		}
		var html = buf.join("");
		$("#pages").empty();
		$("#pages").append(html);
	},
	close: function(){
		for (i = 0; i < this.entries; i++){
			$('#searchResultBox' + this.messageList.at(i).id).off();
		}
		this.domContainer.empty();
	}


});