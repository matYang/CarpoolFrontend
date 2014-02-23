var FindPasswordView = Backbone.View.extend({
    el: "#content",
    initialize: function (params) {
        _.bindAll(this, 'render', 'validatePassword', 'close');
        app.viewRegistration.register("findPassword", this, true);
        this.isClosed = false;
        this.template1 = _.template(tpl.get("findPassword_1"));
        this.template2 = _.template(tpl.get("findPassword_2"));
        this.template3 = _.template(tpl.get("findPassword_3"));
        if (params.token) {
            this.token = params.token;
            this.state = 3;
        } else {
            this.state = 1;
        }
        this.render(this.state);
    },
    render: function (state) {
        var that = this;
        this.state = state;
        this.$el.empty();
        if (state === 3) {
            this.$el.append(this.template3);
        } else if (state === 2) {
            this.$el.append(this.template2);
            $("#email_value").html(this.email);
            $("#go_to_email").on("click", function (e) {
                e.preventDefault();
                window.open("http://"+that.email.split("@")[1]);
            });
        } else {
            this.re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            this.$el.append(this.template1);
        }
        this.bindEvents(this.state);
    },
    bindEvents: function (state) {
        var that = this,
            email;
        if (state === 3) {
            this.$password = $("#newPassword");
            this.$confirm = $("#confirmPassword");
            this.valid = {password: false};
            this.$password.add(this.$confirm).on("blur", function (e) {
                that.validatePassword();
            });
            $("#confirmChange").on("click", function (e) {
                that.validatePassword();
                if (that.valid.password){
                    app.userManager.findPassword(that.token, that.$password.val(), that.$confirm.val(), {
                        "success": that.changeSuccess,
                        "error": that.changeError
                    });
                }
                
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
                email = $("#emailAddress").val();
                if (!email || !that.re.test(email)) {
                    $("#forgot_container").append("<div id='forgotWrong' class='wrong'><p>邮箱格式不正确，请输入正确的邮箱</p>邮箱格式不正确，请输入正确的邮箱</div>");
                    that.email = "";
                } else {
                    that.email = $(this).val();
                }
            });
            $("#resetButton").on("click", function() {
                email = $("#emailAddress").val();
                if (email && that.re.test(email)) {
                    that.email = $("#emailAddress").val();
                }

                app.userManager.forgetPassword(that.email, {
                    "success": that.render,
                    "error": that.forgetError
                });

            });
        }
    },
    validatePassword: function(){
        var p = this.$password.val();
        $("#vpass").remove();
        $("#vpass2").remove();
        this.$password.parent().removeClass("wrong");
        this.$confirm.parent().removeClass("wrong");
        if (p && p.length >= 6 && this.$password.val() === this.$confirm.val()) {
            this.$password.after('<span id="vpass" class="right"></span>');
            this.$confirm.after('<span id="vpass2" class="right"></span>');
            this.valid.password = true;
        } else {
            if (!p || p.length < 6) {
                this.$password.parent().addClass("wrong").append('<p id="vpass" title="密码长度至少为6位">密码长度至少为6位</p>');
            } else {
                if (this.$confirm.val().length !== 0){
                    this.$confirm.parent().addClass("wrong").append('<p id="vpass2" title="两次输入密码不匹配">两次输入密码不匹配</p>');
                }
            }
            this.valid.password = false;
        }
    },
    forgetError: function (response) {
        if (!$("#forgotWrong").length) {
            $("#forgot_container").append("<div id='forgotWrong' class='wrong'><p>"+response.responseText+"</p></div>");
        }
    },
    changeSuccess: function () {
        Info.alert("密码修改成功");
        app.navigate('front', {trigger: true});
    },
    changeError: function (data) {
        if (data.status == 401){
            $("#forgot_container").children('.wrong').remove();
            $("#forgot_container").append("<div class='wrong'><p>更改密码请求无效或已过期</p></div>");
        }
        else if (data.status == 400){
            $("#forgot_container").children('.wrong').remove();
            $("#forgot_container").append("<div class='wrong'><p>更改密码请求无效</p></div>");
        }
        else{
            $("#forgot_container").children('.wrong').remove();
            $("#forgot_container").append("<div class='wrong'><p>请稍后再试</p></div>");
        }
        
    },
    close: function () {
        if (!this.isClosed) {
            this.isClosed = true;
            this.$el.empty();
        }
    }

});
