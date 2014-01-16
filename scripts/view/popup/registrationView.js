
/*dedicated view for user registration, deep linking will not be used for registrtion states, this view holds the session data*/
var RegistrationView = Backbone.View.extend({

	el: "",

	initialize: function(){
		_.bindAll(this, 'render', 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'renderForthPage', 'unbindStepEvents', 'finish','close');
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
		$("#register-modal-closeButton").on("click", function(){
			debugger;
			self.close();
		});
		this.registerPopup = true;
		this.render(1);

	},

	render: function(stepIndex){
		// --- events binding ---
		this.unbindStepEvents();

		this.contentContainer.empty();

		//validity of stepIndex is guranteed on the URL level, since deep linking is applied
		//reduncy of safety check is not necessary here because in development, we need to know where things go wrong

		if (stepIndex === 1){
			this.renderFirstPage();
		}
		else if (stepIndex === 2){
			this.renderSecondPage();
		}
		else if (stepIndex === 3){
			this.renderThirdPage();
		}
		else if (stepIndex === 4){
			this.renderForthPage();
		}

		this.previouStepIndex = stepIndex;
	},

	renderFirstPage: function(){
		// this.contentContainer.append(this.step1Template);
		var self = this;
		this.registerInfo.location = new UserLocation();
		this.registerContainer.attr("class", "registerContainer_step1");
		$(".registerNextStep").on("click", function(){
			app.navigate("register/step2");
			self.previousStepIndex = 1;
			self.render(2);
			self.restore(2);

		});
	},
	updateLocation: function (){
		
		$("#registerLocationInput").val(this.registerInfo.location.toUiString());
		$("#registerCustomizeInput").val(this.registerInfo.location.get("point"));
	},
	renderSecondPage: function(){
		var self = this;
		this.contentContainer.append(this.step2Template);
		this.registerContainer.attr("class", "registerContainer_step2");
		$(".registerNextStep").on("click", function(){
			app.navigate("register/step3");
			self.previousStepIndex = 2;
			self.render(3);
			self.restore(3);
		});

		$("#registerInputMaleContainer").on("click", function(){
			$("#femalecheckmark").hide();
			$("#malecheckmark").show();
			self.registerInfo.gender = Constants.gender.male;
		});
		$("#registerInputFemaleContainer").on("click", function(){
			$("#malecheckmark").hide();
			$("#femalecheckmark").show();
			self.registerInfo.gender = Constants.gender.female;
		});
		$(".registerPreviousStep").on("click", function(){
			app.navigate("register/step1");
			self.previousStepIndex = 2;
			self.render(1);
			self.restore(1);

		});
	},

	renderThirdPage: function(){
		this.contentContainer.append(this.step3Template);
		this.registerContainer.attr("class", "registerContainer_step3");
		var self = this;
		$(".registerNextStep").on("click", function(){
			
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
		$(".registerPreviousStep").on("click", function(){
			app.navigate("register/step2");
			self.previousStepIndex = 3;
			self.render(2);
			self.restore(2);
		});
	},

	renderForthPage: function(){
		var self = this;
		this.contentContainer.append(this.step4Template);
		this.registerContainer.attr("class", "registerContainer_step4");
		$('#registerYourEmail').html(this.emailCache);
		$(".registerFinish").on("click", function(){
			self.previousStepIndex = 4;
			
			self.close();
		});
	},

	unbindStepEvents: function(){
		if (this.previousStepIndex === 1){
			$("#registerLocationInput").off();
			$(".registerNextStep").off();
		}
		else if (this.previousStepIndex === 2){
			$(".registerNextStep").off();
		}
		else if (this.previousStepIndex === 3){
			$(".registerNextStep").off();
		}
		else if (this.previousStepIndex === 4){
			$(".registerFinish").off();
		}
	},
	restore: function(step){
		if (step === 1) {
			$("#registerLocationInput").val(this.registerInfo.location.get("university"));
		} else if (step === 2) {
			if (this.registerInfo.gender === Constants.gender.male) {
				$("#malecheckmark").show();
			} else if (this.registerInfo.gender === Constants.gender.female) {
				$("#femalecheckmark").show();
			}
		}
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