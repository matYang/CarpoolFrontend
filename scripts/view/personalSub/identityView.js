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
        this.$content.empty().append(this.viewForm);
        this.formReady(document.getElementById('idForm'), Constants.origin + '/api/v1.0/users/id/' + app.sessionManager.getUserId(), "uploadTarget");
    },
    formReady: function (formElem, action, callback) {
        var iframe = document.createElement('iframe');
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

                },
                "error":function(response) {
                    location.reload();
                }
            });
        });
    },
    bindValidators: function (validators) {
        var $form = $("#"+this.form), len = validators.length, i;
        for (i=0; i<len; i++) {
            $form.find("input[name=" + validators[i].name + "]").on("blur", function (e) {
                var field = $(this);
                if (validators[i].valid(field, validators[i].type)) {
                    $("#" + validators[i].name + "_wrong").remove();
                    if ($("#" + validators[i].name + "_right").length == 0) {
                        $(this).append("<div id='" + validators[i].name + "_right' class='right'></div>");
                    }
                } else {
                    $("#" + validators[i].name + "_right").remove();
                    if ($("#" + validators[i].name + "_wrong").length == 0) {
                        $(this).append("<div id='" + validators[i].name + "_wrong' class='wrong'>"+validators[i].failText+"</div>");
                    }
                }
            });
        }
    },
    close: function(){

    }

});

var passengerIdentityVerificationView = identityView.extend({
    form:"idform",
    initialize: function (params) {
        _.bind(this, 'render', 'close');
        this.viewForm = _.template(tpl.get('passengerIdentity'));
        this.render();
    }, 
    render: function () {
        identityView.prototype.render.call(this);
    },
    setValidator: function() {
        this.validators = [
            {
                name: "name",
                type: "text",
                required: true,
                valid: this.textValid,
                failText: "名字不能为空"
            },
            {
                name: "id_number",
                type: "number",
                required: true,
                valid: this.textValid,
                failText: "身份证号不能为空"
            },
            {
                name: "image_personalId_1",
                type: "file",
                required: true,
                valid: this.fileValid,
                failText: "身份证不能为空"
            },
            {
                name: "image_personalId_1",
                type: "file",
                required: true,
                valid: this.fileValid,
                failText: "身份证不能为空"
            }
        ];
    },
    textValid: function ($selector, type) {
        if (type === "name") {
            return (name.length);
        } else {
            return 
        }
    },
    fileValid: function ($selector) {
        var file = $selector.val();
        if (file === '') {
            return false;
        } else {
            //Check file extension
            var ext = file.split('.').pop().toLowerCase();   //Check file extension if valid or expected
            if ($.inArray(ext, ['png', 'jpg', 'jpeg', 'bmp']) === -1) {
                return false;
            }
            return true;
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