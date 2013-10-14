var PersonalUtilityView = Backbone.View.extend({

	initialize: function (params) {
		_.bindAll(this, 'render', 'close', 'savePersonalInfo', 'saveFile', 
			'savePassword', 'passwordSuccess', 'passwordError', 'toggleNotificationMethods', 'testInput', 'bindEvents',
			'saveSuccess', 'saveError');
		this.isClosed = false;
		this.domContainer=$("#profilePage_content");
		this.template = _.template(tpl.get('personalPage/personalUtility'));
		this.sessionUser = app.sessionManager.getSessionUser();
		this.curUserId = params.intendedUserId;
		if (this.curUserId !== this.sessionUser.get("userId")) {
			throw "unexpected userId";
		}
		if (testMockObj.testMode === true) {
			this.sessionUser = testMockObj.sampleUser;
		}
		this.render();
		this.bindEvents();
		this.bindValidator();
	},

	bindEvents: function () {
		var that = this;
		$('#save_personalInfo').on('click',function(){
				debugger;
			if ($(".invalid_input").length === 0){
				that.savePersonalInfo();
			}
		});
		$('input[name=location]').on('click',function(){
			// that.editLocation();
		});
		$('#file_picture').fineUploader({
			request:{
				endpoint:'/upload'
			}
		});
		$('#basicInfo').on('click', function(){
			$('#utility_personalInfo').show();
			$('#utility_accountSetting').hide();
			$('#utility_password').hide();
			$('.invalid_input').removeClass('invalid_input');
		});
		$('#passwordInfo').on('click', function(){
			$('#utility_password').show();
			$('#utility_personalInfo').hide();
			$('#utility_accountSetting').hide();
			$('.invalid_input').removeClass('invalid_input');
		});
		$('#tradeInfo').on('click', function(){
			$('#utility_accountSetting').show();
			$('#utility_personalInfo').hide();
			$('#utility_password').hide();
			$('.invalid_input').removeClass('invalid_input');
		});
		$('#upload_picture').on('click',function(){
			//TODO:
		});
		$("#submit_password").on('click', function() {
			if ($('.invalid_input').length === 0 && $('input[name=oldPassword]').val().length && $('input[name=newPassword]').val().length && $('input[name=confirrmNewPassword]').val().length) {
				that.savePassword($("input[name=oldPassword]").val(),$("input[name=newPassword]").val(),$("input[name=confirmNewPassword]").val());
			}
		});
		$("#reset_password").on('click', function() {
			$("input[name=oldPassword]").val("");
			$("input[name=newPassword]").val("");
			$("input[name=confirmNewPassword]").val("");
		});

		$('input[name=qq]').on('keypress', function(e){
			that.testInput(e, "^[0-9]+$");
		});
		$('input[name=phone]').on('keypress', function(e){
			that.testInput(e, "^[0-9]+$");
		});
		$('input[name=location]').on('keypress', function(e){
			e.preventDefault();
		});

		$('input, textarea').on('focus', function(e){
			this.classList.add("selected_input");
		});
		$('input, textarea').on('blur', function(e){
			this.classList.remove("selected_input");
		});

		$('#toggleNotificationMethods').on('change', function(){
			that.toggleNotificationMethods(this.value);
		});
	},

	bindValidator: function(){
		var cmv, cdv, cyv;
		$('input[name=name]').on('blur', function(e){
			if (Utilities.isEmpty(this.value)){
				this.classList.add("invalid_input");
			} else {
				this.classList.remove("invalid_input");
			}
		});
		$('input[name=location]').on('blur', function(e){
			if (Utilities.isEmpty(this.value)){
				this.classList.add("invalid_input");
			} else {
				this.classList.remove("invalid_input");
			}
		});
		$('input[name=qq]').on('blur', function(e){
			if (!($.isNumeric(this.value)) ||  this.value.length>10 || this.value.length<5){
				this.classList.add("invalid_input");
			} else {
				this.classList.remove("invalid_input");
			}
		});
		$('input[name=phone]').on('blur', function(e){
			if (!($.isNumeric(this.value)) ||  this.value.length>11 || this.value.length<8){
				this.classList.add("invalid_input");
			} else {
				this.classList.remove("invalid_input");
			}
		});
		$('input[name=birthyear]').on('blur', function(e){
			
			if (!($.isNumeric(this.value)) || Utilities.toInt(this.value) < 1910 || Utilities.toInt(this.value) > 2012){
				this.classList.add("invalid_input");
			} else {
				this.classList.remove("invalid_input");
			}
		});
		$('input[name=birthmonth]').on('blur', function(e){
			cdv = Utilities.toInt($('input[name=birthday]').val()), 
			cmv =  Utilities.toInt(this.value);
			if (!($.isNumeric(this.value)) || cmv < 1 || cmv > 12){
				this.classList.add("invalid_input");
			} else if ((cmv === 4 || cmv === 6 || cmv === 9 || cmv === 11 ) && cdv > 30){
				this.classList.add("invalid_input");
			} else if (cmv === 2 && cdv > 29 || (cdv>28 && (cyv >= 1910 && ((cyv % 100 === 0) && (cyv % 400 !== 0)) || ((cyv % 100 !== 0) && (cyv % 4 !== 0))) )) {
				this.classList.add("invalid_input");
			} else {
				this.classList.remove("invalid_input");
				$('input[name=birthday]').removeClass("invalid_input");
			}
		});
		$('input[name=birthday]').on('blur', function(e){
			cmv = Utilities.toInt($('input[name=birthmonth]').val()), 
			cdv =  Utilities.toInt(this.value);
			cyv = Utilities.toInt($('input[name=birthyear]').val());
			if (!($.isNumeric(this.value)) || cdv < 1 || cdv > 31){
				this.classList.add("invalid_input");
			} else if ((cmv === 4 || cmv === 6 || cmv === 9 || cmv === 11 ) && cdv > 30){
				this.classList.add("invalid_input");
			} else if (cmv === 2 && cdv > 29 || (cdv>28 && (cyv >= 1910 && ((cyv % 100 === 0) && (cyv % 400 !== 0)) || ((cyv % 100 !== 0) && (cyv % 4 !== 0))) )) {
				this.classList.add("invalid_input");
			} else {
				$('input[name=birthmonth]').removeClass("invalid_input");
				this.classList.remove("invalid_input");
			}
		});
		$('input[name=oldPassword]').on('blur', function(e) {
			if (Utilities.isEmpty(this.value)){
				this.classList.add("invalid_input");	
			} else {
				this.classList.remove("invalid_input");
			}
		});
		$('input[name=newPassword]').on('blur', function(e) {
			if (Utilities.isEmpty(this.value) || this.value.length < 8){
				this.classList.add("invalid_input");	
			} else {
				this.classList.remove("invalid_input");
			}
		});
		$('input[name=confirmNewPassword]').on('blur', function(e) {
			if (Utilities.isEmpty(this.value) || this.value !== $('input[name=newPassword]').val()){
				this.classList.add("invalid_input");	
			} else {
				this.classList.remove("invalid_input");
			}
		});

	},
	render: function () {
		var that = this;
		this.domContainer.append(this.template);
		$('#utility_personalInfo>.utilityBoxContent>div>input').hide();
		$('input[name=name]').val(this.sessionUser.get("name"));
		$('input[name=phone]').val(this.sessionUser.get("phone"));
		$('input[name=qq]').val(this.sessionUser.get("qq"));
		$('input[name=location]').val(this.sessionUser.get("location").toUiString());
		$('input[name=gender][value='+this.sessionUser.get("gender")+']').prop("checked", true);
		$('#utility_password').hide();
		$('#utility_accountSetting').hide();
	},
	savePersonalInfo: function() {
		var that = this,
			date = new Date();
		date.setYear($('input[name=birthyear]'));
		date.setMonth($('input[name=birthmonth]'));
		date.setDate($('input[name=birthday]'));
		app.userManager.changeContactInfo(
			$('input[name=name]').val(), 
			$('input[name=gender]').val(), 
			$('input[name=phone]').val(), 
			$('input[name=qq]').val(), 
			date, 
			{
			"success": that.saveSuccess,
			"error": that.saveError
		});

		app.userManager.changeLocation(location, {
			"success": that.saveSuccess,
			"error": that.saveError
		});

	},

	saveSuccess: function(){
		alert("user contactInfo update successful");
	},
	saveError:function(){
		Info.warn("Personal info update failed");
	},
	saveFile: function( fileName ) {
		var fileTypes= ["png","jpg","jpeg","bmp"],
			dots, fileType;
		if (!fileName) {
			return;
		}
		dots = fileName.split(".");
		fileType = "." + dots[dots.length-1];
		return (fileTypes.join(".").indexOf(fileType.toLowerCase()) !== -1);
	},

	savePassword: function(oldPassword, newPassword, confirmNewPassword){
		app.userManager.changePassword(oldPassword, newPassword, confirmNewPassword, {"success":this.passwordSuccess,"error":this.passwordError});
	},
	passwordSuccess: function(){
		alert("Password changed");
	},
	passwordError: function(){
		Info.warn("password change failed");
	},
	toggleNotificationMethods: function(value){
		var shouldEmail = true, shouldPhone = true;
		switch (value){
			case "both":
				shouldEmail = shouldPhone = true;
				break;
			case "phone":
				shouldEmail = false;
				shouldPhone = true;
				break;
			case "email":
				shouldEmail = true;
				shouldPhone = false;
				break;
			default:
				return;
		}
		
		app.userManager.toggleNotices(shouldEmail, shouldPhone, 
			{"success": this.noticeSuccess,
			"error":this.noticeError});

	},
	noticeSuccess:function(){

	},
	noticeError:function(){
		Info.warn("notice setting change failed");
	},
	close: function () {
		if (!this.isClosed){
			$('#save_personalInfo').off();
			$('input[name=location]').off();
			$('input[name=phone]').off();
			$('input[name=qq]').off();
			$('input[name=name]').off();
			$('#upload_picture').off();
			$("#submit_password").off();
			$("#reset_password").off();
			$('#basicInfo').off();
			$('#passwordInfo').off();
			$('#tradeInfo').off();
			this.domContainer.empty();
			this.isClosed = true;
		}
	},

	testInput: function (event, regularEx) {
		var regex = new RegExp(regularEx),
		key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
		if (!regex.test(key)) {
			event.preventDefault();
			return false;
		}
		if (!regex.test(event.target.value)) {
			event.target.value = "";
			return false;
		}
	}

});

