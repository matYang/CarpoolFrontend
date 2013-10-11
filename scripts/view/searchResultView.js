var SearchResultView = MultiPageView.extend({


	initialize: function(messageList, isSearchResult){
		_.bindAll(this, 'render', 'transferURL', 'close');
		MultiPageView.prototype.messages = messageList;

		if (testMockObj.testMode ) {
			MultiPageView.prototype.messages = testMockObj.sampleMessages;
		}
		MultiPageView.prototype.isSearchResult = isSearchResult;
		MultiPageView.prototype.entryTemplate = _.template(tpl.get('Module/SimpleMessage'));
		MultiPageView.prototype.pageEntryNumber = 6;
		MultiPageView.prototype.pageNumberClass = "searchResultPageNumber";
		MultiPageView.prototype.pageNumberId = "searchResultPageNumber";
		MultiPageView.prototype.entryEvent = this.transferURL;
		MultiPageView.prototype.pageNavigator = "pageNavigator";
		MultiPageView.prototype.user = app.sessionManager.getSessionUser();
		MultiPageView.prototype.entryHeight = 108;
		if (isSearchResult){
			MultiPageView.prototype.entryClass = "searchResultBoxContainer";
			MultiPageView.prototype.entryContainer = "searchResultDisplayPanel";
			MultiPageView.prototype.domContainer = $("#searchResultDisplayPanel");
		} else {
			MultiPageView.prototype.entryClass = "frontBoxContainer";
			MultiPageView.prototype.entryContainer = "quickStart_resultPanel";
			MultiPageView.prototype.domContainer = $("#quickStart_resultPanel");
		}

		MultiPageView.prototype.render();

	},

	render: function(start){
		// var i = start,
		// 	that = this,
		// 	toBeAppended = [];
		// $(".searchResultBoxContainer").fadeOut();
		// $(".searchResultBoxContainer").remove();
		// this.entries = 6;
		// this.entries = (this.messageList.length - start) > this.entries ? this.entries : (this.messageList.length - start);
		// for (i = start; i < start+this.entries ; i++){
		// 	var message = this.messageList.at(i);
		// 	message.set("simple_departure_time", Utilities.getDateString(message.get("departure_time"))).set("simple_arrival_time", Utilities.getDateString(message.get("arrival_time")))	;
		// 	message.set("simple_creationTime", Utilities.getDateString(message.get("creationTime")));
		// 	var priceList = message.get("departure_priceList");
		// 	var currentPrice = 0;
		// 	var bookeSeats = message.get("departure_seatsBooked")
		// 	if (priceList.length === 1) {
		// 		currentPrice = priceList[0];
		// 	} else {
		// 		for ( var p = 0; p < priceList.length; p++){
					
		// 			if (priceList[p] == 0) {
		// 				priceList[p] == priceList[p-1];
		// 			}
		// 		}
		// 		if (priceList.length <= bookeSeats) {
		// 			currentPrice = priceList[priceList.length-1];
		// 		} else {
		// 			currentPrice = priceList[bookeSeats];
		// 		}
		// 	}
		// 	message.set("currentPrice",currentPrice);
		// 	toBeAppended[i] = this.singleSearchResultTemplate(this.messageList.at(i).toJSON());
		// }
		// this.domContainer.append(toBeAppended.join(""));
		// for (i = start; i < start+this.entries; i++){
		// 	$('#searchResultBox_' + this.messageList.at(i).id).on('click',that.transferURL(this.messageList.at(i).id));
		// }
		// $("#searchResultDisplayPanel").css("height", 108*this.entries+"px")
		// if (!isSearchResult){
		// 	$(".searchResultBoxContainer").removeClass("searchResultBoxContainer").addClass("frontBoxContainer");
		// }
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