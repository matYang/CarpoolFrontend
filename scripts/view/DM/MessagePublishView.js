
/*dedicated view for Message post, deep linking will not be used for Message post states, this view holds the session data*/
var MessagePublishView = MessagePostView.extend({
	initialize: function (id, message) {
		_.bindAll(this, 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'close');
		app.viewRegistration.register("MessagePost", this, true);
		MessagePostView.prototype.initialize({"method":"post"});
		this.renderFirstPage();
	},
	renderFirstPage: function(){
		var that = this;
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
		var that = this;
		MessagePostView.prototype.render(2);
		$('#publish_nextStep').off();
		$('#publish_nextStep').on('click', function(){
			debugger;
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
			app.navigate(that.user.id + "/post/step1");
			that.renderSecondPage();
		});
	},
	close: function (){
		$('#publish_nextStep').off();
		$('#publish_back').off();
		MessagePostView.prototype.close();
	}
});
