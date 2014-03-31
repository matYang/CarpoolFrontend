//TODO: test
//Do not initialize this directly, extend it.
//workflow:
//  Initialize, append form to the active view.
//  bind validators to all fields
//  If it's a form (using <form>), then prepare iframe for post action

var baseFormView = Backbone.View.extend({
    el: "",
    form: true,
    template: "",
    fields:[],
    submitButtonId: "",
    initialize: function(params){
        _.bindAll(this, "bindEvents", "render", "unbindValidators", "submitAction", "formReady");
        this.closed = false;
        this.el = params.el;
        this.template = params.template;
        this.fields = params.fields;
        this.formElem = params.formElem;
        this.action = params.action;
        this.callback = params.callback;
        this.successCallback = params.successCallback;
        this.submitButtonId = params.submitButtonId;
    },
    submitAction: function(){},
    render: function () {
        this.$el.empty().append(this.template);
        this.bindEvents();
    },
    bindEvents: function() {
        this.fieldNum = this.fields.length;
        var i, that = this;
        for ( i = 0; i < this.fieldNum; i++ ){

            var field = this.fields[i], $field = $("#"+ field.get("fieldId")), fieldType = field.get("fieldType");
            if (fieldType !== "select") {
                $field.on("keydown", function (e) {
                    if (fieldType === "number" && !(e.which >= 48 && e.which <= 57) && !(e.which >= 96 && e.which <= 105) && e.which > 13) {
                        e.preventDefault();
                    } else if (fieldType == "file") {
                        e.preventDefault();
                    } 
                }).on('blur', function (e) {
                    var val = $(this).val();
                    field.testValue(val, $(e.target));
                });
            } else {
                $field.on("change", function (e) {
                    var val = $(this).val();
                    field.testValue(val, $(e.target));
                });
            }
        }
        $("#"+this.submitButtonId).on("click", function (e) {
            var valid = true;
            for ( i = 0; i < that.fieldNum; i++ ){
                var field = that.fields[i], $field = $("#"+  field.get("fieldId"));
                valid = valid && field.testValue($field.val(), $field);
            }
            if (valid) {
                that.submitAction();
            } else {
                e.preventDefault();
            }
        });
        if (this.form) {
            this.formReady(document.getElementById(this.formElem), this.action, this.callback);
        }
    },
    formReady: function (formElem, action, callback) {

        var iframe = document.createElement('iframe'), that = this;
        action = action + (action.indexOf('?') == -1 ? '?' : '&');

        // we create an iframe and use the callback as its name (why not).
        iframe.setAttribute('name', callback);
        iframe.style.display = 'none';

        // we add the target and edit the action of the form
        formElem.setAttribute('target', callback);
        formElem.setAttribute('action', action);

        // we add the hidden iframe after the form
        formElem.parentNode.appendChild(iframe);

        $(iframe).one("load", function () {
            app.sessionManager.fetchSession(true, {
                "success": function () {
                    that.successCallback();
                },
                "error":function(response) {
                    location.reload();
                }
            });
        });
    },
    unbindValidators: function () {
        $("#"+this.submitButtonId).off();
        for ( i = 0; i < this.fieldNum; i++ ){
            $("#"+ this.fields[i].get("fieldId")).off();
        }
    },
    close: function () {
        if (!this.closed) {
            this.unbindValidators();      
            this.$el.empty();
        }
    }
    
});

var baseField = Backbone.Model.extend({
    defaults: function () {
        return {
            fieldId: "",
            fieldType: "",
            mandatory: false,
            regex: null,
            validatorFunction: null,    //return in the following format {"valid":true, "text":""}
            errorText: "",
            errorClass: "wrong",
            validClass: "right",
            validatorContainer: null,
            name: "", //Used for error Text
        }
    },
    idAttribute: "fieldId",

    initialize: function (params) {
        _.bindAll(this, 'buildValidatorDiv', 'removeValidatorDiv', 'testValue');
        this.fieldId = params.fieldId;
        this.fieldType = params.fieldType;
        this.mandatory = params.mandatory || this.mandatory;
        this.regex = params.regex;
        this.errorText = params.errorText;
        this.errorClass = params.errorClass || this.errorClass;
        this.validClass = params.validClass || this.validClass;
        this.validatorContainer = params.validatorContainer;
        this.name = params.name;
    },

    buildValidatorDiv: function (valid, type, text) {
        if (valid) {
            return "<div class='" + this.validClass + "' id='"+this.fieldId+"_right'></div>";
        } else if (type === "empty") {
            return "<div class='" + this.errorClass + "' id='"+this.fieldId+"_wrong' title='"+this.name+"不能为空'>"+this.name+"不能为空</div>";
        } else if (text) {
            return "<div class='" + this.errorClass + "' id='"+this.fieldId+"_wrong' title='"+text+"'>"+text+"</div>";
        } else {
            return "<div class='" + this.errorClass + "' id='"+this.fieldId+"_wrong' title='"+this.errorText+"'>"+this.errorText+"</div>";
        }
    }, 
    removeValidatorDiv: function () {
        $("#"+this.fieldId+"_right").remove();
        $("#"+this.fieldId+"_wrong").remove();
    },
    testValue: function(val, $input) {
        var div, valid;
        var valid = false;
        if (this.mandatory && !val ) {
            div = this.buildValidatorDiv(false, "empty");
        }
        if (this.regex) {
            if (this.regex.test(val) ) {
                div = this.buildValidatorDiv(true);
                valid = true;
            } else {
                div = this.buildValidatorDiv(false, "regex", this.errorText);
            }
        } else if (this.validatorFunction){
            var validResult = this.validatorFunction(val);
            if (validResult) {
                div = this.buildValidatorDiv(true);
                valid = true;
            } else {
                div = this.buildValidatorDiv(false, "other", validResult.text);
            }
        } else {
            valid = true;
        }
        this.removeValidatorDiv();
        (this.validatorContainer) ? this.validatorContainer.append(div) : $input.after(div);
        return true;
    }
});