var identityView =  Backbone.View.extend({
    el: "#utility_identity",
    $content: $("#utility_identity_content"),
    initialize: function (params) {
        _.bindAll(this, 'close');
        this.isClosed = false;
        
        this.sessionUser = app.sessionManager.getSessionUser();
        this.curUserId = params.intendedUserId;
        if (this.curUserId !== this.sessionUser.get("userId")) {
            throw "unexpected userId";
        }
        
        this.render();
        this.bindEvents();
        this.bindValidator();
    },
    render: function() {
        this.form = new baseFormView({
            "template":this.formTemplate,
            "fields": this.fields,
            "el": this.el,
            "formElem": 'idForm',
            "action":  Constants.origin + '/api/v1.0/users/id/' + app.sessionManager.getUserId(),
            "callback": 'uploadTarget',
            "successCallback": this.successCallback
        });
        this.form.render();
    },
    successCallback: function() {

    },
    close: function(){

    }

});

var passengerIdentityVerificationView = identityView.extend({
    form:"idform",
    initialize: function (params) {
        _.bind(this, 'render', 'close');
        this.formTemplate = _.template(tpl.get('passengerIdentity'));
        this.render();
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
                fieldId: "image_personalId_1",
                type: "file",
                mandatory: true,
                validatorFunction: this.fileValid,
                failText: 
            }), 
            imageField2 = new baseField({
                name: "身份证背面扫描",
                fieldId: "image_personalId_1",
                type: "file",
                mandatory: true,
                validatorFunction: this.fileValid,
                failText: "身份证不能为空"
            });
        nameField.set()
        nameField
        this.fields = [nameField, idField, imageField1, imageField1];
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

    initialize: function (params) {
        _.bind(this, 'render', 'close');
        this.viewForm = _.template(tpl.get('driverIdentity'));
        this.render();
    },
    render: function () {
        identityView.prototype.render.call(this);
    }, 
    close: function() {
        
    }
});