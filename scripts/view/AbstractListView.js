var AbstractListView = Backbone.View.extend({

	initialize:function(){
		this.currentEntries = 0;
		this.defaultAddNum = 5;
	},
	render:function(){
		var sampleMessage;
		this.domContainer = $("#"+this.domContainerId);
		if (list instanceof Backbone.Collection) {
			this.collection = true;
			sampleMessage = list.at(0);
		} else {
			this.collection = false;
			sampleMessage = list[0];
		}
		if (sampleMessage instanceof Backbone.Model) {
			this.model = true;
		} else {
			this.model = false;
		}
		var number = this.list.length < this.defaultAddNum ? this.list.length : this.defaultAddNum;
		this.domContainer.append(this.moreButton);
		this.addMessage(number);
		var that = this;
		$("#"+this.moreButtonId).on("click", function(){
			that.addMessage(this.defaultAddNum);
		})

	},
	bindMessage: function(){
		$("#"+this.domContainerId+">."+this.singleMessageClass).off();
		$("#"+this.domContainerId+">."+this.singleMessageClass).on("click", this.clickEvent);
	},
	addMessage:function(num){
		var that = this,
			toBeAppended = [];
		if (this.collection) {
			for (i = this.currentEntries; i < this.currentEntries + num; i++){
				var m = this.list.at(i);
				if (this.model) {
					toBeAppended[i] = this.singleMessageTemplate(m.toJSON());
				} else {
					toBeAppended[i] = this.singleMessageTemplate(m);
				}
			}
		} else {
			for (i = this.currentEntries; i < this.currentEntries + num; i++){
				var m = this.list[i];
				if (this.model) {
					toBeAppended[i] = this.singleMessageTemplate(m.toJSON());
				} else {
					toBeAppended[i] = this.singleMessageTemplate(m);
				}
			}
		}
		$("#"+this.moreButtonId).before(toBeAppended.join(""));
		this.bindMessage();
	},
	setDomContainerId:function(d){
		this.domContainerId = d;
	},
	setMoreButtonHtml:function(m){
		this.moreButtonHtml = m;
	},
	setMoreButtonId:function(id){
		this.moreButtonId = id;
	},
	setSingleMessageTemplate:function(t){
		this.singleMessageTemplate = t;
	},
	setSingleMessageClass:function(c){
		this.singleMessageClass = c;
	},
	clickEvent: function(id){

	}

});