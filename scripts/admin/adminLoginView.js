var adminLoginView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, "render", "bindEvents", "login", "close");

    },
    render: function () {

    },
    bindEvents: function (){

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
                    self.$wrong.show().html(response.responseText || "服务器好像睡着了，请稍后再试");
                    $('#login_button').val("登 录").prop("disabled", false);
                    self.$passwordInput.val("");
                }
            });
        } else {
            //请输入密码
            self.$wrong.show().html("输入有误，请重新输入");
        }
    },
    close: function () {

    }
});