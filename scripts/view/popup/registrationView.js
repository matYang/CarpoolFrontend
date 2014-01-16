
/*dedicated view for user registration, deep linking will not be used for registrtion states, this view holds the session data*/
var RegistrationView = Backbone.View.extend({

	el: "",

	initialize: function(){
		_.bindAll(this, 'render', 'bindEvents', 'updateLocation', 'finish','close');
		app.viewRegistration.register("registration", this, true);
		this.isClosed = false;

		this.baseTemplate = _.template(tpl.get('registration_base'));
		this.step1Template = _.template(tpl.get('registration_step1'));
		this.step2Template = _.template(tpl.get('registration_step2'));
		this.step3Template = _.template(tpl.get('registration_step3'));
		this.step4Template = _.template(tpl.get('registration_step4'));
		this.domContainer = $('#content');
		this.domContainer.append(this.baseTemplate);
		this.domContainer.show();
		this.registerContainer = $('#registerContainer');
		this.contentContainer = $('#registerContent');
		$("#loginBox").hide();
		this.registerInfo = {};
		var self = this;
		this.registerPopup = true;
		this.render(1);

	},

	render: function(stepIndex){
		// --- events binding ---
		this.bindEvents();
	},

	updateLocation: function (){
		
		$("#registerLocationInput").val(this.registerInfo.location.toUiString());
		$("#registerCustomizeInput").val(this.registerInfo.location.get("point"));
	},

	bindEvents: function(){
		var self = this;
		$("#registerInputMaleContainer").on("click", function(){
			self.registerInfo.gender = Constants.gender.male;
		});
		$("#registerInputFemaleContainer").on("click", function(){
			self.registerInfo.gender = Constants.gender.female;
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

	close: function(){
		if (!this.isClosed){
			this.unbindStepEvents();
			$("#register-modal-closeButton").off();
			this.domContainer.empty();
			this.domContainer.hide();
			this.isClosed = true;
			app.navigate("front",true);
		}
	}


});