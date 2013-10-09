
/*dedicated view for Message post, deep linking will not be used for Message post states, this view holds the session data*/
var MessagePublishView = MessagePostView.extend({
	initialize: function (id, message) {

		_.bindAll(this, 'render','renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'finish', 'close');
		app.viewRegistration.register("MessagePost", this, true);
		MessagePostView.prototype.initialize({"method":"post"});
		this.renderFirstPage();

	},
	render:function(step){
		if (step === 1) {
			this.renderFirstPage();
		} else if (step === 2) {
			this.renderSecondPage();
		} else if (step === 3) {
			this.renderThirdPage();
		}

	},
	renderFirstPage: function(){
		var that = this;
		$("#publish_finish").off();
		MessagePostView.prototype.render(1);
		$('#publish_nextStep').off();
		$('#publish_nextStep').on('click', function(){
			if (MessagePostView.prototype.validate(1)) {
				app.navigate(that.user.id + "/post/step2");
				that.renderSecondPage();
			}
		});
	},
	renderSecondPage: function(){
		debugger;
		var that = this;
		MessagePostView.prototype.render(2);
		$('#publish_nextStep').off();
		$("#publish_finish").off();
		$('#publish_nextStep').on('click', function(){
			if (MessagePostView.prototype.validate(2)) {
				app.navigate(that.user.id + "/post/step3");
				that.renderThirdPage(3);
			}
		});
		$('#publish_back').on('click', function(){
			app.navigate(that.user.id + "/post/step1");
			that.renderFirstPage(1);
		});
	},
	renderThirdPage: function(){
		var that = this;
		MessagePostView.prototype.render(3);
		$('#publish_nextStep').off();
		$('#publish_back').off();
		$('#publish_back').on('click', function(){
			app.navigate(that.user.id + "/post/step2");
			that.renderSecondPage();
		});
		$("#publish_finish").on("click", function(e) {
			that.finish();
		});
	},
	finish: function() {
		var messages = this.toMessage();
		var length = messages.length;
		for (var r = 0; r < length; r++){
			app.messageManager.postMessage(messages.at(r), {"success":this.success, "error":this.error});
		}
	},
	success: function(){
		alert("Message Post successful");
		app.navigate(app.sessionManager.getUserId() + "/Message/" + app.messageManager.getMessage().id, true);
	},
	error:function(){
		
	},
	close: function (){
		$('#publish_nextStep').off();
		$('#publish_back').off();
		$("#publish_finish").off();
		debugger;
		MessagePostView.prototype.close();
	}
});
