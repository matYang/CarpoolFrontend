var adminLoginView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, "render", "bindEvents", "login", "close");
        this.messageTemplate = _.template(tpl.get('adminLogin'));
    },
    render: function () {
        $("body").attr("class","login").append();

    },
    bindEvents: function (){
        var that = this;
        $('#login_button').on("click", function() {
            that.login();
        });
        $('#login_password,#login_username').on("keyup", function (e) {
            if (e.which === 13) {
                that.login();
            }
        });
    },
    login: function () {
        var username = this.$usernameInput.val(), password = this.$passwordInput.val(), self = this;
        if (username !== "" && password !== "") {
            $('#login_button').val("登录中...").prop("disabled", true);
            app.adminManager.adminLogin(username, password, {
                success: function (response) {
                    Constants.dLog("server login response: ");
                    Constants.dLog(response);
                    //fetching session, with async flag to true
                    app.sessionManager.fetchSession(true, {
                        success: function () {
                            app.userManager.sessionUser = app.sessionManager.getSessionUser();
                            app.letterView = new LetterView({
                                "toUserId": app.storage.getLastContact()
                            });
                            $("#chat").show();
                        },
                        error: function () {
                            Info.displayNotice("登录失败，请稍后再试");
                        }
                    });
                },
                error: function (response) {
                    $('#login_button').val("登 录").prop("disabled", false);
                    self.$passwordInput.val("");
                }
            });
        } else if (username) {
            $('#login_password').focus();
        } else {
            
        }
    },
    close: function () {
        $("body").removeClass("login");
    }
});