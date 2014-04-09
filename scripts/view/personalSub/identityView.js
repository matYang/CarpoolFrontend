var identityView =  Backbone.View.extend({
    el: "#utility_identity",
    initialize: function (params) {
        _.bindAll(this, 'close');
        this.isClosed = false;
        this.curUserId = params.curUserId;
        this.sessionUser = app.sessionManager.getSessionUser();
        this.$content = $(this.container);
        this.loadVerificationStatus();
    },
    loadVerificationStatus: function (callback) {
        this.passengerVerification =  this.sessionUser.get("passengerVerification");
        this.driverVerification =  this.sessionUser.get("driverVerification");
    },
    render: function() {
        var that = this;
        if (this.type === Constants.VerificationType.passenger && !this.passengerVerification) {
            this.renderForm();
        } else if (this.type === Constants.VerificationType.driver && !this.driverVerification)   {
            this.renderForm();
        } else {
            if (this.formView) {
                this.formView.close();
            }
            if (this.type === Constants.VerificationType.passenger) {
                if (this.passengerVerification.get("origin") === 0) {
                    this.$content.empty().append(this.landingTemplate(this.passengerVerification._toJSON()));
                } else {
                    //TODO: inform user that he has passed the driver verification   
                }
            } else {
                this.$content.empty().append(this.landingTemplate(this.driverVerification._toJSON()));
            }
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
        this.formView = new baseFormView({
            "template":this.formTemplate,
            "fields": this.fields,
            "el": this.container,
            "formElem": this.form,
            "action": this.action,
            "callback": 'uploadTarget',
            "successCallback": this.successCallback,
            "submitButtonId": this.submitButtonId
        });
        this.formView.render();
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
    type: Constants.VerificationType.passenger,
    submitButtonId: "passenger_identity_submit",
    initialize: function (params) {
        // try {
            this.action = PassengerVerification.prototype.urlRoot + app.sessionManager.getUserId();
            identityView.prototype.initialize.call(this, params);
            _.bindAll(this, 'render', 'close');
            this.formTemplate = _.template(tpl.get('passengerIdentity_form'));
            this.landingTemplate = _.template(tpl.get('passengerIdentity_landing'));
            this.setValidator();
            this.render();
        // } catch (e) {
        //     debugger;
        //     app.navigate("front", true);
        //     this.remove();
        // }
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
                fieldId: "passengerIdImg1",
                type: "file",
                mandatory: true,
                validatorFunction: this.fileValid,
                failText: "身份证不能为空",
                previewId: "passengerIdPreview1"
            }), 
            imageField2 = new baseField({
                name: "身份证背面扫描",
                fieldId: "passengerIdImg2",
                type: "file",
                mandatory: true,
                validatorFunction: this.fileValid,
                failText: "身份证不能为空",
                previewId: "passengerIdPreview2"
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
    type: Constants.VerificationType.driver,
    submitButtonId: "driver_identity_submit",
    initialize: function (params) {
        try {
            this.action = DriverVerification.prototype.urlRoot + app.sessionManager.getUserId();
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
                fieldId: "driverIdImg",
                type: "file",
                mandatory: true,
                validatorFunction: this.fileValid,
                failText: "驾照不能为空",
                previewId: "driverIdPreview"
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