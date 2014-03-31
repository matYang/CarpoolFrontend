var identityView =  Backbone.View.extend({
    el: "#utility_identity",
    $content: $("#utility_identity_content"),
    initialize: function (params) {
        _.bindAll(this, 'close');
        this.isClosed = false;
        this.curUserId = params.curUserId;
        this.sessionUser = app.sessionManager.getSessionUser();
        if (this.curUserId !== this.sessionUser.get("userId")) {
            throw "invalid user exception";
        }
        this.loadVerificationStatus();
    },
    loadVerificationStatus: function (callback) {
        var vs = this.sessionUser.get("verifications");
        for (var i = 0; i < vs.length; i++) {
            if (verifications[i].get("type") === this.type ){
                this.verification = verifications[i];
            }
        }
    },
    render: function() {
        var that = this;
        if (!this.verification) {
            this.renderForm();
        } else {
            this.form.close();
            this.$content.empty().append(this.landingTemplate(this.verification._toJSON()));
            $("#re-verify").on("click", function() {
                that.renderForm();
            });
        }
    },
    successCallback: function() {
        this.loadVerificationStatus();
        this.$content.empty().append(this.landingTemplate(this.verification._toJSON()));
    },
    renderForm: function () {
        this.form = new baseFormView({
            "template":this.formTemplate,
            "fields": this.fields,
            "el": this.container,
            "formElem": this.form,
            "action": this.action,
            "callback": 'uploadTarget',
            "successCallback": this.successCallback,
            "submitButtonId": "driver_identity_submit"
        });
        this.form.render();
        var that = this;
        $('#id_type_select').on('focus', function (e) {
            if (that.idDropDown){
                that.idDropDown.close();
            }
            that.idDropDown = new idTypeDropdownView($("#id_dropdown_container"), this);
            e.stopPropagation();
        }).on('click', function (e) {
            e.stopPropagation();
        }).on('keypress', function (e) {
            e.preventDefault();
        }).on('change', function (e) {

        });
    },
    close: function(){

    }

});

var passengerIdentityVerificationView = identityView.extend({
    container:"#utility_passengerIdentity",
    form:"passengerIdForm",
    action: PassengerVerification.prototype.urlRoot,
    type: Constants.VerificationType.passenger,
    initialize: function (params) {
        try {
            identityView.prototype.initialize.call(this, params);
            _.bindAll(this, 'render', 'close');
            this.formTemplate = _.template(tpl.get('passengerIdentity_form'));
            this.landingTemplate = _.template(tpl.get('passengerIdentity_landing'));
            this.setValidator();
            this.render();
        } catch (e) {
            app.navigate("front", true);
            this.remove();
        }
    }, 
    render: function () {
        identityView.prototype.render.call(this);
    },
    setValidator: function() {
        var nameField = new baseField({
                name: "姓名",
                fieldId: "name",
                type: "text",
                mandatory: true,
                validatorFunction: this.textValid
            }), 
            idField = new baseField({
                name: "身份证号",
                fieldId: "id_number",
                type: "number",
                mandatory: true,
                validatorFunction: this.textValid
            }),
            imageField1 = new baseField({
                name: "身份证正面扫描",
                fieldId: "image_personalId_0",
                type: "file",
                mandatory: true,
                validatorFunction: this.fileValid,
                failText: "身份证不能为空"
            }), 
            imageField2 = new baseField({
                name: "身份证背面扫描",
                fieldId: "image_personalId_1",
                type: "file",
                mandatory: true,
                validatorFunction: this.fileValid,
                failText: "身份证不能为空"
            });
        this.fields = [nameField, idField, imageField1, imageField2];
    },
    textValid: function (val, type) {
        return true;
    },
    fileValid: function (file) {
        if (file === '') {
            return { "valid":false, "text":"身份证不能为空" };
        } else {
            //Check file extension
            var ext = file.split('.').pop().toLowerCase();   //Check file extension if valid or expected
            if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'bmp']) === -1) {
                return { "valid":false, "text":"后缀名必须是png, jpg, jpeg, 或者bmp" };
            }
            return  { "valid":true};
        }
    },
    close: function() {

    }
});

var driverIdentityVerificationView = identityView.extend({
    container:"#utility_driverIdentity",
    form: "driverIdForm",
    action: DriverVerification.prototype.urlRoot,
    initialize: function (params) {
        try {
            identityView.prototype.initialize.call(this, params);
            _.bindAll(this, 'render', 'close');
            this.formTemplate = _.template(tpl.get('driverIdentity_form'));
            this.landingTemplate = _.template(tpl.get('driverIdentity_landing'));
            this.setValidator();
            this.render();
        } catch (e) {
            app.navigate("front", true);
            this.remove();
        }
    },
    render: function () {
        identityView.prototype.render.call(this);
    }, 
    setValidator: function() {
        var nameField = new baseField({
                name: "姓名",
                fieldId: "name",
                type: "text",
                mandatory: true,
                validatorFunction: this.textValid
            }), 
            idField = new baseField({
                name: "驾照号码",
                fieldId: "id_number",
                type: "number",
                mandatory: true,
                validatorFunction: this.textValid
            }),
            typeField = new baseField({
                name: "驾照类型",
                fieldId: "id_type",
                type: "select",
                mandatory: true,
                validatorFunction: this.textValid
            }),
            imageField1 = new baseField({
                name: "驾照扫描",
                fieldId: "image_personalId_0",
                type: "file",
                mandatory: true,
                validatorFunction: this.fileValid,
                failText: "驾照不能为空"
            });
        this.fields = [nameField, idField, typeField, imageField1];
    },
    textValid: function (val, type) {
        return true;
    },
    fileValid: function (file) {
        if (file === '') {
            return { "valid":false, "text":"身份证不能为空" };
        } else {
            //Check file extension
            var ext = file.split('.').pop().toLowerCase();   //Check file extension if valid or expected
            if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'bmp']) === -1) {
                return { "valid":false, "text":"后缀名必须是png, jpg, jpeg, 或者bmp" };
            }
            return  { "valid":true};
        }
    },
    close: function() {
        
    }
});