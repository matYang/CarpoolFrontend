
/*dedicated view for user registration, deep linking will not be used for registrtion states, this view holds the session data*/
var RegistrationView = Backbone.View.extend({

	el: "",

	initialize: function(){
		_.bindAll(this, 'render', 'bindEvents', 'updateLocation', 'finish', 'acceptDefaultLocation', 'closeLocationDropDown', 'close');
		app.viewRegistration.register("registration", this, true);
		this.isClosed = false;

		this.baseTemplate = _.template(tpl.get('registration_base'));

		this.registerInfo = {'location': new UserLocation()};
		var self = this;
		this.render(1);

	},

	render: function(stepIndex){
		this.domContainer = $('#content');
		this.domContainer.append(this.baseTemplate);
		this.domContainer.show();
		this.registerContainer = $('#registerContainer');
		this.contentContainer = $('#registerContent');
		$("#loginBox").hide();

		// --- events binding ---
		this.bindEvents();
	},

	updateLocation: function (){
		//caputre custmized lcoation, geo look up, then fill in defaulLocation
	},

	bindEvents: function(){
		var self = this;
		$("#registerInputMaleContainer").on("click", function(){
			self.registerInfo.gender = Constants.gender.male;
		});
		$("#registerInputFemaleContainer").on("click", function(){
			self.registerInfo.gender = Constants.gender.female;
		});
		$('#registerLocationInput').on('click', function(){
			self.closeLocationDropDown();
			self.locationDropDownView = new LocationDropDownView($('#registerLocationInputContainer'), this);

			e.stopPropagation();
		});
		$("#complete").on("click", function(){
			
			self.registerInfo.email = $('#registerEmailInput').val();
			self.registerInfo.password = $('#registerPasswordInput').val();

			var user = new User();
			user.set('location', self.registerInfo.location);
			user.set('gender', self.registerInfo.gender);
			user.set('email', self.registerInfo.email);
			user.set('password', self.registerInfo.password);

			app.userManager.registerUser(user, {
				success: function(){
					self.emailCache = user.get('email');
					app.navigate("register/step4");
					self.previousStepIndex = 3;
					self.render(4);
					Info.alert('注册成功');
				},

				error: function(){
					Info.alert("注册失败，请稍后再试");
				}

			});
			
		});
	},

	finish: function(){
		Info.displayNotice("注册成功");
	},

	acceptDefaultLocation: function(defaultLocation){
        this.registerInfo.location = defaultLocation;
    },

    closeLocationDropDown: function(){
        if (typeof this.locationDropDownView !== 'undefined' && this.locationDropDownView !== null){
            this.locationDropDownView.close();
        }
    },

	close: function(){
		if (!this.isClosed){
			$("#register-modal-closeButton").off();
			this.domContainer.empty();
			this.isClosed = true;
		}
	}


});