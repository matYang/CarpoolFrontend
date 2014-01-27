var FindPasswordView = Backbone.View.extend({
    el: $("#content"),
    initialize: function (params) {
        _.bindAll(this, 'render', 'close');
        app.viewRegistration.register("findPassword", this, true);
        this.isClosed = false;
        this.template1 = _.template(tpl.get("findPassword_1"));
        this.template2 = _.template(tpl.get("findPassword_2"));
        this.template3 = _.template(tpl.get("findPassword_3"));
        this.$domContainer = $("#content");
        this.$domContainer.empty();
        if (params.token) {
            this.token = params.token;
            this.state = 3;
        } else {
            this.state = 1;
        }
        this.render();
    },
    render: function (state) {
        if (this.state === 3) {
            this.$domContainer.append(this.template3);
        } else if (this.state === 2) {
            this.$domContainer.append(this.template2);
            $("#email_value").html(this.email);
        } else {
            this.re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.$domContainer.append(this.template1);
        }
        this.bindEvents(this.state);
    },
    bindEvents: function (state) {
        var that = this;
        if (state === 3) {
            this.$password = $("#newPassword");
            this.$confirm = $("#confirmPassword");
            this.$password.add(this.$confirm).on("blur", function (e) {
                var p = that.$password.val();
                $("#vpass").remove();
                $("#vpass2").remove();
                that.$password.parent().removeClass("wrong");
                that.$confirm.parent().removeClass("wrong");
                if (p && p.length >= 8 && that.$password.val() === that.$confirm.val()) {
                    that.$password.after('<span id="vpass" class="right"></span>');
                    that.$confirm.after('<span id="vpass2" class="right"></span>');
                    that.valid.password = true;
                    that.registerInfo.password = that.$password.val();
                } else {
                    if (!p || p.length < 8) {
                        that.$password.parent().addClass("wrong").append('<p id="vpass" title="密码长度至少为8位"></p>');
                    } else {
                        that.$confirm.parent().addClass("wrong").append('<p id="vpass2" title="两次输入密码不匹配"></p>');
                    }
                    that.valid.password = false;
                }
            });
            $("#confirmChange").on("click", function (e) {
                if ($("#vpass").length+$("#vpass2").length) {
                    return;
                }
                app.userManager.findPassword(that.token, that.$password.val(), that.$confirm.val(), {
                    "success": that.changeSuccess,
                    "error": that.changeError
                });
            });
        } else if (state === 2) {
            $("#go_to_email").on("click", function (e) {
                e.preventDefault();
                window.open("http://"+that.email.split("@")[1]);
            });
        } else {
            $("#emailAddress").on("blur", function (e) {
                if ($("#forgotWrong").length) {
                    $("#forgotWrong").remove();
                }
                if (!email || !that.re.test(email)) {
                    $("#forgot_container").append("<div id='forgotWrong' class='wrong'><p>邮箱格式不正确，请输入正确的邮箱</p></div>");
                    this.email = "";
                } else {
                    this.email = $(this).val();
                }
            });
            $("#resetButton").on("click", function() {
                if (that.email) {
                    app.userManager.forgetPassword(that.email, {
                        "success": that.render,
                        "error": that.forgetError
                    });
                } else {
                    
                }
            });     
        }
    },
    forgetError: function (response) {
        if (!$("#forgotWrong").length) {
            $("#forgot_container").append("<div id='forgotWrong' class='wrong'><p>"+response+"</p></div>");
        }
    },
    changeSuccess: function () {

    },
    changeError: function (response) {

    },
    close: function () {
        if (!this.isClosed) {
            this.isClosed = true;
            this.el.empty();

        }
    }

});