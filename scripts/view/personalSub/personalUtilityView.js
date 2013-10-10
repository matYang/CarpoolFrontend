var PersonalUtilityView = Backbone.View.extend({

	initialize: function (user) {
		_.bindAll(this, 'render', 'close', 'toggleBox', 'editPersonalInfo', 
			'savePersonalInfo', 'cancelPersonalInfo', 'editLocation', 'saveFile', 
			'savePassword', 'toggleNotificationMethods', 'testInput', 'bindEvents',
			'saveSuccess', 'saveError');
		this.isClosed = false;
		this.domContainer=$("#profilePage_content");
		this.template = _.template(tpl.get('personalPage/personalUtility'));
		this.user = user;
		if (testMockObj.testMode === true) {
			this.user = testMockObj.sampleUser;
		}
		this.editingPersonalInfo = false;
		this.render();
		this.bindEvents();
	},

	bindEvents: function () {
		var that = this;
		$('.expandableHeader').on('click', function(e){
			that.toggleBox(e);
		});
		$('#edit_personalInfo').on('click',function(){
			that.editPersonalInfo();
		});
		$('#save_personalInfo').on('click',function(){
			that.savePersonalInfo();
		});
		$('#cancel_personalInfo').on('click',function(){
			that.cancelPersonalInfo();
		});
		$('input[name=location]').on('click',function(){
			that.editLocation();
		});
		$('#file_picture').fineUploader({
			request:{
				endpoint:'/upload'
			}
		});
		$('#upload_picture').on('click',function(){
			//TODO:
		});
		$("#submit_password").on('click', function() {
			var valid = that.savePassword($("input[name=oldPassword]").val(),$("input[name=newPassword]").val(),$("input[name=confirmNewPassword]").val());
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
		$("#utility").validate({
			onKeyup:true,
			onFocusOut:true,
			errorContainer:"#name_validator, #qq_validator, #phone_validator",
			rules: {
				name: {
					"required":true,
					"minlength":2,

				},
				qq: {
					"required": true,
					"minlength": 5,
					"maxlength": 10,
					"digits":true
				},
				phone: {
					"required":true,
					"minlength": 11,
					"maxlength": 11,
					"digits":true
				}
			},
			messages: {
				name:{
					required:"名字必须填写",
					minlength:"名字必须两字以上"
				},
				qq:{
					"required": "QQ号必须填写",
					"minlength": "QQ号必须是5到10位数字",
					"maxlength": "QQ号必须是5到10位数字",
					"digits":"QQ号必须是5到10位数字"
				},
				phone:{
					"required": "电话必须填写",
					"minlength": "电话必须是5到10位数字",
					"maxlength": "电话必须是5到10位数字",
					"digits":"电话必须是5到10位数字"
				}
			},
			errorPlacement: function ($error, $element) {
				var name = $element.attr("name");
				var messages = $("#" + name + "_validator_message").html();
				if (!messages.indexOf($error)>-1){
					$("#" + name + "_validator_message").empty();
					$("#" + name + "_validator_message").append($error);
				}
			},
			highlight: function(element, errorClass) {
				$(element).css("background-color:#d1d1d1;");
			}
		});

		$('#toggleNotificationMethods').on('change', function(){
			that.toggleNotificationMethods(this.value);
		});
	},
	render: function () {
		var that = this;
		this.domContainer.append(this.template);
		$(".utilityBoxContent").hide();
		$('#cancel_personalInfo').hide();
		$('#save_personalInfo').hide();
		$('#utility_personalInfo>.utilityBoxContent>div>input').hide();
		$('input[name=name]').val(this.user.get("name"));
		$('input[name=phone]').val(this.user.get("phone"));
		$('input[name=qq]').val(this.user.get("qq"));
		$('input[name=location]').val(this.user.get("location"));

		$(".validator").hide();


	},

	toggleBox: function (e) {
		var id = e.delegateTarget.parentElement.id;
		if ($("#"+id+">.expandableHeader>.collapsed").length>0){
			$("#"+id+">.expandableHeader>.collapsed").removeClass('collapsed').addClass('expanded');
			$("#"+id+">.utilityBoxContent").slideDown();
			$(":not(#"+id+")>.utilityBoxContent").slideUp();
			$(":not(#"+id+")>.expandableHeader>.expanded").removeClass('expanded').addClass('collapsed');
			this.current = id;
		} else {
			$("#"+id+">.expandableHeader>.expanded").removeClass('expanded').addClass('collapsed');
			$("#"+id+">.utilityBoxContent").slideUp();
			this.current = "";
		}
	},
	editPersonalInfo: function() {
		this.editingPersonalInfo = true;
		$('#edit_personalInfo').hide();
		$('#cancel_personalInfo').show();
		$('#save_personalInfo').show();
		$('#utility_personalInfo>.utilityBoxContent>div>input').show();
		$('#utility_personalInfo>.utilityBoxContent>div>.value').hide();
	},
	cancelPersonalInfo: function() {
		this.editingPersonalInfo = false;
		$('#edit_personalInfo').show();
		$('#cancel_personalInfo').hide();
		$('#save_personalInfo').hide();
		$('#utility_personalInfo>.utilityBoxContent>div>input').hide();
		$('#utility_personalInfo>.utilityBoxContent>div>.value').show();

	},
	savePersonalInfo: function() {
		var that = this;	
		app.userManager.changeContactInfo(
			$('#utility_name>input').val(), 
			app.sessionManager.getSessionUser().get("age"), 
			app.sessionManager.getSessionUser().get("gender"), 
			$('#utility_phone>input').val(), 
			$('#utility_QQ>input').val(), 
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
		this.editingPersonalInfo = false;
		$('#edit_personalInfo').show();
		$('#cancel_personalInfo').hide();
		$('#save_personalInfo').hide();
		$('#utility_personalInfo>.utilityBoxContent>div>input').hide();
		$('#utility_personalInfo>.utilityBoxContent>div>.value').show();
	},
	saveError:function(){
		Info.warn("Personal info update failed");
	},
	editLocation: function() {
		this.locationPickerView = new LocationPickerView();
	},

	saveFile: function( fileName ) {
		var fileTypes= ["png","jpg","jpeg","bmp"];
		if (!fileName) {
			return;
		}
		var dots = fileName.split(".");
		var fileType = "." + dots[dots.length-1];
		return (fileTypes.join(".").indexOf(fileType.toLowerCase()) !== -1);
	},

	savePassword: function(oldPassword, newPassword, confirmNewPassword){
		var valid = false;
		if (newPassword.length<8) {
			valid = false;
		}
		if(newPassword !== confirmNewPassword){
			valid = false;
		}
		else{
			valid = true;
		}

		if (valid){
			app.userManager.changePassword(oldPassword, newPassword, confirmNewPassword, {"success":this.passwordSuccess,"error":this.passwordError});
		} else {
			alert("new password does not match");
		}

	},
	passwordSuccess: function(){
		alert("Password changed");
	},
	passwordError: function(){
		Info.warn("password change failed");
	},
	toggleNotificationMethods: function(value){
		var shouldEmail = true;
		var shouldPhone = true;
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
			$('.expandableHeader').off();
			$('#edit_personalInfo').off();
			$('#save_personalInfo').off();
			$('#cancel_personalInfo').off();
			$('input[name=location]').off();
			$('input[name=phone]').off();
			$('input[name=qq]').off();
			$('input[name=name]').off();
			$('#upload_picture').off();
			$("#submit_password").off();
			$("#reset_password").off();
			this.domContainer.empty();
			this.isClosed = true;
		}
	},

	testInput: function (event, regularEx) {
		var regex = new RegExp(regularEx);
		var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
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
