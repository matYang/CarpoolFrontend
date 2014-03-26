//Do not initialize this directly, extend it.
var baseFormView = Backbone.View.extend({
    el: "",
    form: true,
    template: ""
    fields:[],
    submitButtonId: "",
    initialize: function(){
        _.bindAll(this, "bindEvents", "render",, "submitAction");
        this.closed = false;
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
            $field.on("keydown", function (e) {
                if (fieldType === "number" && !(e.which >= 48 && e.which <= 57) && !(e.which >= 96 && e.which <= 105) && e.which > 13) {
                    e.preventDefault();
                } else if (fieldType == "file") {
                    e.preventDefault();
                } 
            }).on('blur', function (e) {
                var div, val = $(this).val();
                field.testValue(val);
            });
        },
        $("#"+this.submitButtonId).on("click", function (e) {
            var valid = true;
            for ( i = 0; i < that.fieldNum; i++ ){
                var field = that.fields[i], $field = $("#"+  field.get("fieldId");
                valid = valid && field.testValue($field.val());
            }
            if (valid) {
                that.submitAction();
            }
        });
    },
    close: function () {
        if (!this.closed) {
            $("#"+this.submitButtonId).off();
            for ( i = 0; i < this.fieldNum; i++ ){
                $("#"+ this.fields[i].get("fieldId")).off();
            }
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

    initialize: function (fieldId, fieldType, mandatory) {
        _.bindAll(this, 'buildValidatorDiv', 'removeValidatorDiv', 'testValue');
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
    testValue: function(val) {
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
        (this.validatorContainer) ? this.validatorContainer.append(div) : $this.after(div);
        return true;
    }
});