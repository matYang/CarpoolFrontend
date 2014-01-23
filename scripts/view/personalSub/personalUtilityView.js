var PersonalUtilityView = Backbone.View.extend({

    initialize: function (params) {
        _.bindAll(this, 'render', 'close', 'prepareImgUpload', 'savePersonalInfo', 'saveFile', 'savePassword', 'passwordSuccess', 'passwordError', 'toggleNotificationMethods', 'testInput', 'bindEvents', 'saveSuccess', 'saveError', 'updateLocation');
        this.isClosed = false;
        this.domContainer = $("#profilePage_content");
        this.template = _.template(tpl.get('personalUtility'));
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
        $('#save_personalInfo').on('click', function () {
            if ($(".invalid_input").length === 0) {
                that.savePersonalInfo();
            }
        });
        this.$location.on('click', function () {
            // that.editLocation();
        });
        $('#basicInfo').on('click', function () {
            that.$personalContent.show();
            that.$settingContent.hide();
            that.$passwordContent.hide();
            that.$dpContent.hide();
            $('.invalid_input').removeClass('invalid_input');
            $('#myPage_edit_control>.active').removeClass("active");
            $(this).addClass("active");

        });
        $('#passwordInfo').on('click', function () {
            that.$personalContent.hide();
            that.$settingContent.hide();
            that.$passwordContent.show();
            that.$dpContent.hide();
            $('.invalid_input').removeClass('invalid_input');
            $('#myPage_edit_control>.active').removeClass("active");
            $(this).addClass("active");
        });
        $('#tradeInfo').on('click', function () {
            that.$personalContent.hide();
            that.$settingContent.show();
            that.$passwordContent.hide();
            that.$dpContent.hide();
            $('.invalid_input').removeClass('invalid_input');
            $('#myPage_edit_control>.active').removeClass("active");
            $(this).addClass("active");
        });
        $('#changeDp').on('click', function () {
            that.$personalContent.hide();
            that.$settingContent.hide();
            that.$passwordContent.hide();
            that.$dpContent.show();

            $('.invalid_input').removeClass('invalid_input');
            $('#myPage_edit_control>.active').removeClass("active");
            $(this).addClass("active");
        });
        $('#upload_picture').on('click', function () {
            //TODO:
        });
        $("#submit_password").on('click', function () {
            if ($('.invalid_input').length === 0 && $('input[name=oldPassword]').val().length && $('input[name=newPassword]').val().length && $('input[name=confirmNewPassword]').val().length) {
                that.savePassword($("input[name=oldPassword]").val(), $("input[name=newPassword]").val(), $("input[name=confirmNewPassword]").val());
            }
        });
        $("#reset_password").on('click', function () {
            that.$oldPassword.val("");
            that.$newPassword.val("");
            that.$confirmPassword.val("");
        });

        this.$qq.on('keypress', function (e) {
            that.testInput(e, "^[0-9]+$");
        });
        this.$phone.on('keypress', function (e) {
            that.testInput(e, "^[0-9]+$");
        });
        this.$location.on('keypress', function (e) {
            e.preventDefault();
        });

        $('#toggleNotificationMethods').on('change', function () {
            that.toggleNotificationMethods(this.value);
        });

        this.prepareImgUpload(document.getElementById('uploadform'), Constants.origin + '/api/v1.0/users/img/' + app.sessionManager.getUserId());
    },

    prepareImgUpload: function (formElem, action, callback) {
        // we name a callback that will be called from inside the iframe
        var callbackName = 'iframe' + Math.ceil(Math.random() * 10000);
        var iframe = document.createElement('iframe');
        action = action + (action.indexOf('?') == -1 ? '?' : '&');

        // we create an iframe and use the callback as its name (why not).
        iframe.setAttribute('name', callbackName);
        iframe.style.display = 'none';

        // we add the target and edit the action of the form
        formElem.setAttribute('target', callbackName);
        formElem.setAttribute('action', action);

        // we add the hidden iframe after the form
        formElem.parentNode.appendChild(iframe);

        $(iframe).one("load", function () {
            Info.displayNotice("照片上传成功");
            app.sessionManager.fetchSession(true);
            app.navigate('/temp', {
                replace: true
            });
            app.navigate("personal/" + app.sessionManager.getUserId() + "/utility", {
                trigger: true
            });
        });

    },

    bindValidator: function () {
        var cmv, cdv, cyv, that = this;
        this.$name.on('blur', function (e) {
            if (Utilities.isEmpty(this.value)) {
                this.classList.add("invalid_input");
            } else {
                this.classList.remove("invalid_input");
            }
        });
        this.$location.on('blur', function (e) {
            if (Utilities.isEmpty(this.value)) {
                this.classList.add("invalid_input");
            } else {
                this.classList.remove("invalid_input");
            }
        });
        this.$qq.on('blur', function (e) {
            if (!($.isNumeric(this.value)) || this.value.length > 10 || this.value.length < 5) {
                this.classList.add("invalid_input");
            } else {
                this.classList.remove("invalid_input");
            }
        });
        this.$phone.on('blur', function (e) {
            if (!($.isNumeric(this.value)) || this.value.length > 11 || this.value.length < 8) {
                this.classList.add("invalid_input");
            } else {
                this.classList.remove("invalid_input");
            }
        });
        this.$birthyear.on('blur', function (e) {

            if (!($.isNumeric(this.value)) || Utilities.toInt(this.value) < 1910 || Utilities.toInt(this.value) > 2012) {
                this.classList.add("invalid_input");
            } else {
                this.classList.remove("invalid_input");
            }
        });
        this.$birthmonth.on('blur', function (e) {
            cdv = Utilities.toInt($('input[name=birthday]').val()), cmv = Utilities.toInt(this.value);
            if (!($.isNumeric(this.value)) || cmv < 1 || cmv > 12) {
                this.classList.add("invalid_input");
            } else if ((cmv === 4 || cmv === 6 || cmv === 9 || cmv === 11 ) && cdv > 30) {
                this.classList.add("invalid_input");
            } else if (cmv === 2 && (cdv > 29 || (cdv > 28 && (cyv >= 1910 && ((cyv % 100 === 0) && (cyv % 400 !== 0)) || ((cyv % 100 !== 0) && (cyv % 4 !== 0))) ))) {
                this.classList.add("invalid_input");
            } else {
                this.classList.remove("invalid_input");
                that.$birthday.removeClass("invalid_input");
            }
        });
        this.$birthday.on('blur', function (e) {
            cmv = Utilities.toInt(that.$birthmonth.val()), cdv = Utilities.toInt(this.value);
            cyv = Utilities.toInt(that.$birthyear.val());
            if (!($.isNumeric(this.value)) || cdv < 1 || cdv > 31) {
                this.classList.add("invalid_input");
            } else if ((cmv === 4 || cmv === 6 || cmv === 9 || cmv === 11 ) && cdv > 30) {
                this.classList.add("invalid_input");
            } else if (cmv === 2 && cdv > 29 || (cdv > 28 && (cyv >= 1910 && ((cyv % 100 === 0) && (cyv % 400 !== 0)) || ((cyv % 100 !== 0) && (cyv % 4 !== 0))) )) {
                this.classList.add("invalid_input");
            } else {
                that.$birthmonth.removeClass("invalid_input");
                this.classList.remove("invalid_input");
            }
        });

        this.$oldPassword.on('blur', function (e) {
            if (Utilities.isEmpty(this.value)) {
                this.classList.add("invalid_input");
            } else {
                this.classList.remove("invalid_input");
            }
        });
        this.$newPassword.on('blur', function (e) {
            if (Utilities.isEmpty(this.value) || this.value.length < 8) {
                this.classList.add("invalid_input");
            } else {
                this.classList.remove("invalid_input");
            }
        });
        this.$confirmPassword.on('blur', function (e) {
            if (Utilities.isEmpty(this.value) || this.value !== that.$newPassword.val()) {
                this.classList.add("invalid_input");
            } else {
                this.classList.remove("invalid_input");
            }
        });

    },
    render: function () {
        var that = this;
        this.domContainer.append(this.template);
        this.$name = $("input[name=name]").val(this.sessionUser.get("name"));
        this.$phone = $('input[name=phone]').val(this.sessionUser.get("phone"));
        this.$qq = $('input[name=qq]').val(this.sessionUser.get("qq"));
        this.$location = $('input[name=location]').val(this.sessionUser.get("location").toUiString());
        $('input[name=gender][value=' + this.sessionUser.get("gender") + ']').prop("checked", true);
        this.$birthyear = $('input[name=birthyear]');
        this.$birthmonth = $('input[name=birthmonth]');
        this.$birthday = $('input[name=birthday]'); 
        if (this.sessionUser.get("birthday").getFullYear() !== new Date ().getFullYear()) {
            this.$birthyear.val(this.sessionUser.get("birthday").getFullYear());
            this.$birthmonth.val(this.sessionUser.get("birthday").getMonth());
            this.$birthday.val(this.sessionUser.get("birthday").getDate());
        }
        this.$personalContent = $("#utility_personalInfo");
        this.$passwordContent = $('#utility_password').hide();
        this.$settingContent = $('#utility_accountSetting').hide();
        this.$dpContent = $('#utility_dp').hide();
        this.$dpContent.find('img').attr("src", this.sessionUser.get("imgPath"));

        var notificationMethod;
        if (this.sessionUser.get("emailNotice") && this.sessionUser.get("phoneNotice")) {
            notificationMethod = "both";
        } else if (this.sessionUser.get("emailNotice")) {
            notificationMethod = "email";
        } else if (this.sessionUser.get("phoneNotice")) {
            notificationMethod = "phone";
        }
        $("#toggleNotificationMethods").val(notificationMethod);
        this.editedLocation = this.sessionUser.get("location");
        this.$oldPassword = $('input[name=oldPassword]');
        this.$newPassword = $('input[name=newPassword]');
        this.$confirmPassword = $('input[name=confirmNewPassword]');
        this.$location.on('click', function (e) {
            if ( self.locationDropDownView ) {
                self.locationDropDownView.show();    
            } else {
                self.locationDropDownView = new LocationDropDownView($("#myPage_locatoin"), self);
                
            }
        });
    },
    acceptDefaultLocation: function(defaultLocation){
        this.sessionUser.set("location", defaultLocation);
        this.$from.val(this.defaultLocation.toUiString());
    },
    savePersonalInfo: function () {
        var that = this, date = new Date ();
        date.setYear(Utilities.toInt(this.$birthyear.val()));
        date.setMonth(Utilities.toInt(this.$birthmonth.val()));
        date.setDate(Utilities.toInt(this.$birthday.val()));
        app.userManager.changeContactInfo(this.$name.val(), Utilities.toInt($('input[name=gender]').val()), this.$phone.val(), this.$qq.val(), date, {
            "success": that.saveSuccess,
            "error": that.saveError
        });

        app.userManager.changeLocation(this.editedLocation, {
            "success": that.saveSuccess,
            "error": that.saveError
        });

    },

    saveSuccess: function () {
        Info.displayNotice("成功更新用户信息");
        app.navigate('/temp', {
            replace: true
        });
        app.navigate("personal/" + app.sessionManager.getUserId() + "/utility", {
            trigger: true
        });
    },
    saveError: function () {
        Info.warn("Personal info update failed");
    },
    saveFile: function (fileName) {
        var fileTypes = ["png", "jpg", "jpeg", "bmp"], dots, fileType;
        if (!fileName) {
            return;
        }
        dots = fileName.split(".");
        fileType = "." + dots[dots.length - 1];
        return (fileTypes.join(".").indexOf(fileType.toLowerCase()) !== -1);
    },

    savePassword: function (oldPassword, newPassword, confirmNewPassword) {
        app.userManager.changePassword(oldPassword, newPassword, confirmNewPassword, {
            "success": this.passwordSuccess,
            "error": this.passwordError
        });
    },
    passwordSuccess: function () {
        Info.displayNotice("密码修改成功");
        app.navigate('/temp', {
            replace: true
        });
        app.navigate("personal/" + app.sessionManager.getUserId() + "/utility", {
            trigger: true
        });
    },
    passwordError: function () {
        Info.displayNotice("密码修改失败，请重试");
    },
    toggleNotificationMethods: function (value) {
        var shouldEmail = true, shouldPhone = true;
        switch (value) {
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

        app.userManager.toggleNotices(shouldEmail, shouldPhone, {
            "success": this.noticeSuccess,
            "error": this.noticeError
        });

    },
    noticeSuccess: function () {
        app.navigate('/temp', {
            replace: true
        });
        app.navigate("personal/" + app.sessionManager.getUserId() + "/utility", {
            trigger: true
        });
    },
    noticeError: function () {
        Info.displayNotice("提示方式修改失败，请稍后再试");
    },

    updateLocation: function () {
        $("#personal_editLocation").val(this.editedLocation.toUiString());
    },
    close: function () {
        if (!this.isClosed) {
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
        var regex = new RegExp (regularEx), key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
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

