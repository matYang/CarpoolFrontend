var SearchResultView = Backbone.View.extend({


	initialize: function(messageList, isSearchResult){
		_.bindAll(this, 'render', 'transferURL', 'bindPageNumber', 'close');
		this.messageList = messageList;

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
		this.entries = 6;
		this.entries = (this.messageList.length - start) > this.entries ? this.entries : (this.messageList.length - start);
		for (i = start; i < start+this.entries ; i++){
			var message = this.messageList.at(i);
			message.set("simple_departure_time", Utilities.getDateString(message.get("departure_time"))).set("simple_arrival_time", Utilities.getDateString(message.get("arrival_time")))	;
			message.set("simple_creationTime", Utilities.getDateString(message.get("creationTime")));
			var priceList = message.get("departure_priceList");
			var currentPrice = 0;
			var bookeSeats = message.get("departure_seatsBooked")
			if (priceList.length === 1) {
				currentPrice = priceList[0];
			} else {
				for ( var p in priceList){
					if (priceList[p] == 0) {
						priceList[p] == priceList[p-1];
					}
				}
				if (priceList.length <= bookeSeats) {
					currentPrice = priceList[priceList.length-1];
				} else {
					currentPrice = priceList[bookeSeats];
				}
			}
			message.set("currentPrice",currentPrice);
			toBeAppended[i] = this.singleSearchResultTemplate(this.messageList.at(i).toJSON());
		}
		this.domContainer.append(toBeAppended.join(""));
		for (i = start; i < start+this.entries; i++){
			$('#searchResultBox_' + this.messageList.at(i).id).on('click',that.transferURL(this.messageList.at(i).id));
		}
		$("#searchResultDisplayPanel").css("height", 108*this.entries+"px")

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