var ServiceCenterView = Backbone.view.extend({
	el: "#content"
	initialize: function(params){
		this.currentTab = params ? params.tab || "about" : "about";
		this.isClosed = false;
		_.bindAll(this, "preRender", "render", "bindEvents", "close");
		this.baseTemplate = _.template(tpl.get('serviceCenter_base'));
		this.preRender();
		this.render();
	},
	preRender: function() {
		this.$el.append(this.baseTemplate);
	},
	render: function (){
		switch(this.currentTab){
			case "about":
			case "faq":
			case "career":
			case "terms":
			case "feedback":
			default:
			break;
		}
	},
	bindEvents: function (){
		var that = this;
		$("#serviceTab").on("click", "li", function (e) {
			that.currentTab = $(e.target).attr("data-id");
			that.render();
		});
	},
	close: function (){
		if (!this.isClosed){
			$("#serviceTab").off();
		}
	}

	