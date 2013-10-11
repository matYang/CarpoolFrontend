var MultiPageView = Backbone.View.Extend({
	entryTemplate:"",
	entryContainer:"",
	entryClass:"",
	pageNavigator:"",
	pageEntryNumber:10,
	startIndex:0,
	currentPage:0,
	pageNumberClass:"",
	pageNumberId:"",
	entryEvent:"",
	messages:[];
	initialize: function () {

	},

	render: function(){
		$("#"+this.entryContainer).empty();
		var buf = [];
		for (var i = 0; i < this.pageEntryNumber; i++) {
			var message;
			if (this.messages instanceof Backbone.Collection){
				message = this.messages.at(i+this.startIndex);
			} else {
				message = this.messages[i+this.startIndex];
			}
			buf[i] = entryTemplate(message._toJSON());
		}
		$("#"+this.entryContainer).append(buf.join(""));
	},
	toPage: function(page){
		this.startIndex = (pageEntryNumber-1)*page;
		this.render();
	},
	bindEntryEvent: function(){
		$("#"+this.entryContainer+">."+this.entryClass).on("click", function(e){
			var id = Utilities.getId(e.delegateTarget.id);
			this.entryEvent(id);				
		});
	},
	setPageNavigator: function(){
		$("."+this.pageNumberClass).off();
		$("#"+this.pageNavigator).empty();
		var length = this.messages ? this.messages.length : 0;
		var pages =  Math.floor(length / this.pageEntryNumber) + 1;
		this.pages = pages;
		var buf = [];
		var divBuf = ["<div id='", this.pageNumberId, "_", 0, "' class='", this.pageNumberClass, "'> ", 0, "</div>"];
		for (var i = 1; i<=pages; i++) {
			divBuf[3] = i;
			divBuf[7] = i;
			buf[i-1] = divBuf.join("");
		}
		var html = buf.join("");
		this.pageNavigator.empty();
		this.pageNavigator.append(html);
		var that = this;
		$("."+pageNumberClass).on("click", function(e){
			var id = Utilities.toInt(Utilities.getId(e.target.id));
			this.toPage(id);
		});
	},
	close: function(){
		if (!this.closed){
			$("#"+this.entryContainer+">."+this.entryClass).off();
			$("#"+this.entryContainer).empty();
			this.closed = true;
		}
	}
});