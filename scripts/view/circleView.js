
var CircleView = Backbone.View.extend({

	el: $('#circles'),

	events: {


	},

	initialize:function(){
		_.bindAll(this, 'render', 'generateSingleDOM', 'updateLocation', 'close');
		app.viewRegistration.register("circle", this, true);
		this.isClosed = false;

		this.wrapperPre = "<ul id = 'circle'>";
		this.wrapperSuf = "</ul>";
		this.classResource = [
			"circleThemeBlue",
			"circleThemeBrown",
			"circleThemeYellow",
			"circleThemePurple",
			"circleThemeGreen",
			"circleThemeCherry"
		];


		var self = this;
		app.userManager.fetchCircleLocation(function(){
			self.render();
			self.locationArray = [];
		});
	},


	render: function(){

		this.userLocations = app.userManager.getTopBarUser().get('universityGroup');
		this.userLocationStrings = [];
		for ( var location in this.userLocations) {
			this.userLocationStrings[this.userLocationStrings.length] = this.userLocations.get("university");
		}

		this.circleAddDOM = "<li id = 'addCircle' class = 'university circleThemeGrey'>+添加圈子</li>";
		this.classTracker = 0;

		var i = 0,
			domString = "",
			self = this;

		for (i = 0; i < this.userLocations.length; i++){
			if (this.userLocations[i] !== undefined){
				domString += this.generateSingleDOM(this.userLocations[i]);
			}
		}

		//assembly of the entire dom object
		$(this.el).append(this.wrapperPre + domString + this.circleAddDOM + this.wrapperSuf);

		$("#addCircle").on('click', function(){
			self.locationObj = new UserLocation();
			self.locationView = new LocationPickerView(self.locationObj, self);
		});
	},

	generateSingleDOM: function(universityName){
		var domString = "<li class = 'university " + this.classResource[this.classTracker] + "'>" + universityName + "<li>";
		this.classTracker = this.classTracker < this.classResource.length-1 ? this.classTracker+1 : 0;
		return domString;
	},

	updateLocation: function(){
		if (jQuery.inArray(this.locationObj.get('university'), this.userLocationStrings) === -1) {
			// var newLocation = new UserLocation();
			// newLocation.set("province", this.locationArray[0]);
			// newLocation.set("city", this.locationArray[1]);
			// newLocation.set("university", this.locationArray[2]);
			//
			//this.userLocationStrings[this.userLocations.length] = this.locationObj.get('university');

			var self = this;
			app.userManager.addCircleLocation(this.locationObj, function(){
				$("#addCircle").before(self.generateSingleDOM(self.locationObj.get('university')));
			});
		}
	},
	close:function(){
		if (!this.isClosed){
			this.unbind();
			$(this.el).empty();
			$("#addCircle").off();
			this.isClosed = true;
		}
    }



});