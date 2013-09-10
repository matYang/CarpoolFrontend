
var Config = {

	//-------------- PersonalView state transfer -------------
	getDefaultPersonalViewState: function(){
		return "watch";
	},

	getPossiblePersonalViewStates: function(){
		return ['watch', 'message', 'history', 'utility'];
	},

	validatePersonalViewState: function(personalViewState){
		var possibleStates = this.getPossiblePersonalViewStates();

		for (var i = 0; i < possibleStates.length; i++){
			if (possibleStates[i] === personalViewState){
				return true;
			}
		}
		return false;
	},

	//-------------- DMPost state transfer --------------
	getDefaultDMPostState: function(){
		return "step1";
	},

	getPossibleDMPostStates: function(){
		return ['step1', 'step2', 'step3'];
	},

	validateDMPostState: function(postState){
		var possibleStates = this.getPossibleDMPostStates();

		for (var i = 0; i < possibleStates.length; i++){
			if (possibleStates[i] === postState){
				return true;
			}
		}
		return false;
	},

	getPostStateStepIndex: function(postState){
		var possibleStates = this.getPossibleDMPostStates();

		for (var i = 0; i < possibleStates.length; i++){
			if (possibleStates[i] === postState){
				return i+1;
			}
		}
		console.warn("Config::getPostStepIndex:: invalid postState, using the default step 1");
		return 1;
	},


	//-------------- Registration state transfer --------------
	getDefaultRegistrationState: function(){
		return "step1";
	},

	getPossibleRegistrationStates: function(){
		return ['step1', 'step2', 'step3', 'step4'];
	},

	validateRegistrationState: function(registrationState){
		var possibleStates = this.getPossibleRegistrationStates();

		for (var i = 0; i < possibleStates.length; i++){
			if (possibleStates[i] === registrationState){
				return true;
			}
		}
		return false;
	},

	getRegistrationStateStepIndex: function(registrationState){
		var possibleStates = this.getPossibleRegistrationStates();

		for (var i = 0; i < possibleStates.length; i++){
			if (possibleStates[i] === registrationState){
				return i+1;
			}
		}
		console.warn("Config::getRegistrationStateStepIndex:: invalid postState, using the default step 1");
		return 1;
	}


};