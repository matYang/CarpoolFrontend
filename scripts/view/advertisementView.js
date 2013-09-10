

var AdvertisementView = Backbone.View.extend({

	el: "",

	initialize: function(){
		_.bindAll(this, 'render', 'close');
		app.viewRegistration.register("advertisement", this, true);
		this.isClosed = false;

	},

	render: function(){

	},

	close: function(){
		if (!this.isClosed){

			this.isClosed = true;
		}
	}



});