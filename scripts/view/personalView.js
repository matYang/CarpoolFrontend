var PersonalView = Backbone.View.extend({
    initialize: function (params) {
        _.bindAll(this, 'preRender', 'render', 'renderError', 'switchChildView', 'createChildView', 'getCurrentUserId', 'renderWatchButton', 'bindEvents', 'bindWatchEvent', 'bindDeWatchEvent', 'watchSuccess', 'watchError', 'deWatchSuccess', 'deWatchError', 'close');
        app.viewRegistration.register("personal", this, true);
        this.isClosed = false;

        this.template = _.template(tpl.get('personal'));
        //this curUserId is used to record the id of the user the personalPage is currently displaying
        this.curUserId = Utilities.toInt(params.intendedUserId);
        this.activeViewState = params.viewState;
        this.childrenViews = {};
        this.domContainer = $('#content');
        this.watched = false;
        this.sessionUser = app.sessionManager.getSessionUser();
        app.userManager.fetchUser(this.curUserId, {
            "success": this.preRender,
            "error": this.renderError
        });

    },

    preRender: function (user) {
        app.userManager.fetchWatchedUsers(this.sessionUser.id, {
            "success": this.renderWatchButton
        });
        var that = this;
        this.user = user;
        this.render();
        this.switchChildView(this.activeViewState);
        this.bindEvents();
    },
    renderWatchButton: function (socialList) {
        if (this.sessionUser.get("userId") !== this.curUserId) {

            for (var user = 0; user < socialList.length; user++) {
                if (socialList.at(user).get("userId") === this.curUserId) {
                    this.watched = true;
                    break;
                }
            }
            //if user has watched this user
            if (this.watched) {
                $("#profilePage_utilityTab").html(" + 已关注").append("<div id = 'deWatch'>取消关注</div>");
                this.bindDeWatchEvent();
            } else {
                $("#profilePage_utilityTab").html(" + 关注");
                this.bindWatchEvent();
            }

        }
    },
    render: function () {
        var userJson = this.user._toJSON();
        var today = new Date (), birthday = this.user.get('birthday');
        var age = today.getFullYear() - birthday.getFullYear();
        var month = today.getMonth() - birthday.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthday.getDate() )) {
            age--;
        }
        userJson.age = age;
        this.domContainer.append(this.template(userJson));
    },
    renderError: function () {
        Info.displayErrorPage("content", "个人页面加载失败，请稍后再试");
    },
    switchChildView: function (viewState) {

        //validity of viewState is guranteed on the URL level, since deep linking is applied
        //reduncy of safety check is not necessary here because in development, we need to know where things go wrong
        if ( viewState instanceof Object) {
            this.activeViewState = viewState.viewState;
        } else {
            this.activeViewState = viewState;
        }
        this.createChildView();
    },

    getCurrentUserId: function () {
        return this.curUserId;
    },

    createChildView: function () {
        if (this.activeChildView) {
            this.activeChildView.close();
        }
        var create = true;
        $('.selectedTabButton').removeClass('selectedTabButton').addClass('nonSelectedTabButton');
        switch (this.activeViewState) {
            case "social":
                $('#profilePage_socialTab').addClass('selectedTabButton');
                this.activeChildView = new PersonalSocialView ({
                    'intendedUserId': this.curUserId
                });
                break;
            case "message":
                $('#profilePage_messageTab').addClass('selectedTabButton');
                this.activeChildView = new PersonalMessageView ({
                    'intendedUserId': this.curUserId
                });
                break;
            case "history":
                $('#profilePage_historyTab').addClass('selectedTabButton');
                this.activeChildView = new PersonalHistoryView ({
                    'intendedUserId': this.curUserId
                });
                break;
            case "utility":
                if (this.sessionUser.get("userId") === this.curUserId) {
                    $('#profilePage_utilityTab').addClass('selectedTabButton');
                    this.activeChildView = new PersonalUtilityView ({
                        'intendedUserId': this.curUserId
                    });
                }
                break;
            default:
                Info.warn("PersonalView:: createChildView:: this.viewState matchin failed in switch, using Watch as default");
                this.activeChildView = new PersonalHistoryView ({
                    'intendedUserid': this.curUserId
                });
                break;
        }

        this.childrenViews[this.activeViewState] = this.activeChildView;
    },

    bindEvents: function () {
        var that = this;
        $('#profilePage_socialTab').on('click', function () {
            app.navigate("personal/" + that.curUserId + "/social");
            that.switchChildView("social");
        });

        $('#profilePage_messageTab').on('click', function () {
            app.navigate("personal/" + that.curUserId + "/message");
            that.switchChildView("message");
        });

        $('#profilePage_historyTab').on('click', function () {
            app.navigate("personal/" + that.curUserId + "/history");
            that.switchChildView("history");
        });

        $('#profilePage_utilityTab').on('click', function () {
            if (app.sessionManager.getUserId() === that.curUserId) {
                app.navigate("personal/" + that.curUserId + "/utility");
                that.switchChildView("utility");
            } else {

            }
        });
        $("#profilePage_sendLetter").on('click', function () {
            app.navigate("letter/" + that.curUserId, true);
        });
    },
    bindWatchEvent: function () {
        var that = this;
        if (this.sessionUser.get("userId") !== this.curUserId) {
            $('#profilePage_utilityTab').on("click", function () {
                app.userManager.watchUser(that.curUserId, {
                    "success": that.watchSuccess,
                    "error": that.watchError
                });
            });
        }
    },
    bindDeWatchEvent: function () {
        var that = this;
        $("#deWatch").on("click", function () {
            app.userManager.deWatchUser(that.curUserId, {
                "success": that.deWatchSuccess,
                "error": that.deWatchError
            });
        });
    },

    watchSuccess: function () {
        $("#profilePage_utilityTab").html("已关注").append("<div id = 'deWatch'>取消关注</div>").off();
        this.bindDeWatchEvent();
    },
    watchError: function () {
    },
    deWatchSuccess: function () {
        $("#deWatch").off().remove();
        this.bindWatchEvent();
    },
    deWatchError: function () {

    },
    close: function () {
        if (!this.isClosed) {
            if (this.activeChildView) {
                this.activeChildView.close();
            }
            $('#profilePage_messageTab').off();
            $('#profilePage_historyTab').off();
            $('#profilePage_utilityTab').off();

            this.unbind();
            this.domContainer.empty();
            this.isClosed = true;
        }
    }
});
