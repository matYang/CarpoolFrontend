
/*dedicated view for user registration, deep linking will not be used for registrtion states, this view holds the session data*/
var RegistrationView = Backbone.View.extend({

	el: "",

	initialize: function(){
		_.bindAll(this, 'render', 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'renderForthPage', 'unbindStepEvents', 'finish','close');
		app.viewRegistration.register("registration", this, true);
		this.isClosed = false;

		this.baseTemplate = _.template(tpl.get('registration/registration_base'));
		this.step1Template = _.template(tpl.get('registration/registration_step1'));
		this.step2Template = _.template(tpl.get('registration/registration_step2'));
		this.step3Template = _.template(tpl.get('registration/registration_step3'));
		this.step4Template = _.template(tpl.get('registration/registration_step4'));
		this.domContainer = $('#overlay');
		this.domContainer.append(this.baseTemplate);
		this.domContainer.show();
		this.registerContainer = $('#registerContainer');
		this.contentContainer = $('#registerContent');
		this.registerInfo = {};
		var that = this;
		$("#register-modal-closeButton").on("click",function(){
			that.close();
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
		this.contentContainer.append(this.step1Template);
		var that = this;
		this.registerInfo.location = new UserLocation();
		this.registerContainer.attr("class", "registerContainer_step1");
		$("#registerLocationInput").on("mouseup", function(){
			that.locationPicker = new LocationPickerView(that.registerInfo.location, that);
		});
		$(".registerNextStep").on("click", function(){
			app.navigate("register/step2");
			that.previousStepIndex = 1;
			that.render(2);
			that.restore(2);

		});
	},
	updateLocation: function (){
		$("#registerLocationInput").val(this.registerInfo.location.get("university"));
	},
	renderSecondPage: function(){
		var that = this;
		this.contentContainer.append(this.step2Template);
		this.registerContainer.attr("class", "registerContainer_step2");
		$(".registerNextStep").on("click", function(){
			app.navigate("register/step3");
			that.previousStepIndex = 2;
			that.render(3);
			that.restore(3);
		});

		$("#registerInputMaleContainer").on("click", function(){
			$("#femalecheckmark").hide();
			$("#malecheckmark").show();
			that.registerInfo.gender = Constants.gender.male;
		});
		$("#registerInputFemaleContainer").on("click", function(){
			$("#malecheckmark").hide();
			$("#femalecheckmark").show();
			that.registerInfo.gender = Constants.gender.female;
		});
		$(".registerPreviousStep").on("click", function(){
			app.navigate("register/step1");
			that.previousStepIndex = 2;
			that.render(1);
			that.restore(1);

		});
	},

	renderThirdPage: function(){
		this.contentContainer.append(this.step3Template);
		this.registerContainer.attr("class", "registerContainer_step3");
		var that = this;
		$(".registerNextStep").on("click", function(){

			that.registerInfo.email = $('#registerEmailInput').val();
			that.registerInfo.password = $('#registerPasswordInput').val();

			var user = new User();
			user.set('location', that.registerInfo.location);
			user.set('gender', that.registerInfo.gender);
			user.set('email', that.registerInfo.email);
			user.set('password', that.registerInfo.password);

			app.userManager.registerUser(user, {
				success: function(){
					app.navigate("register/step4");
					that.previousStepIndex = 3;
					that.render(4);
				},

				error: function(){
					alert("注册失败，请稍后再试");
				}

			});

			
		});
		$(".registerPreviousStep").on("click", function(){
			app.navigate("register/step2");
			that.previousStepIndex = 3;
			that.render(2);
			that.restore(2);
		});
	},

	renderForthPage: function(){
		var that = this;
		this.contentContainer.append(this.step4Template);
		this.registerContainer.attr("class", "registerContainer_step4");
		$(".registerFinish").on("click", function(){
			that.previousStepIndex = 4;
			
			that.close();
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
		alert("should POST");
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