var TopBarView = Backbone.View.extend({

    el: $('#topBar'),

    events: {

    },

    initialize: function () {
        _.bindAll(this, 'render', 'reRender', 'bindEvents', 'renderNotificationDropdown', 'renderLetterDropdown', 'renderFavoriteDropdown', 'bindDropdownEvents', '_unbindDropdownEvents', 'updateProfileImg', 'close', 'logout', 'showNotificationDropdown', 'hideNotificationDropdown', 'showLetterDropdown', 'hideLetterDropdown', 'showFavoriteDropdown', 'hideFavoriteDropdown', '_clearAll');
        app.viewRegistration.register("topBar", this, true);
        this.isClosed = false;

        this.loggedInTemplate = _.template(tpl.get('topBar-loggedIn'));
        this.notLoggedInTemplate = _.template(tpl.get('topBar-notLoggedIn'));
        this.dropdown_notifiationTemplate = _.template(tpl.get('notificationDropdown'));
        this.dropdown_letterTemplate = _.template(tpl.get('letterDropdown'));
        this.dropdown_favoriteTemplate = _.template(tpl.get('favoriteDropdown'));

        this.sessionUser = app.sessionManager.getSessionUser();

        this.render();
    },

    render: function () {
        this.listenTo(this.sessionUser, 'change:userId', this.reRender);
        if (app.sessionManager.hasSession()) {
            $(this.el).append(this.loggedInTemplate(this.sessionUser._toJSON()));
            this.$alldropdowns = $("#dropdowns").find("dd").hide();
            this.$ndropdown = $('#notifications>dd');
            this.$ldropdown = $('#letters>dd');
            this.$fdropdown = $('#favorites>dd');
            this.$pdropdown = $('#profileDropdown>dd');
            this.bindEvents();

            //dropdown specific data binding
            this.listenTo(this.sessionUser, 'change:imgPath', this.updateProfileImg);
            this.notifications = app.sessionManager.getCurUserNotifications();
            this.listenTo(this.notifications, 'reset', this.renderNotificationDropdown);
            this.letters = app.sessionManager.getCurUserLetters();
            this.listenTo(this.letters, 'reset', this.renderLetterDropdown);
            this.favorites = app.sessionManager.getCurUserFavorites();
            this.listenTo(this.favorites, 'reset', this.renderFavoriteDropdown);

            this.renderNotificationDropdown();
            this.renderLetterDropdown();
            this.renderFavoriteDropdown();
        } else {
            $(this.el).append(this.notLoggedInTemplate);
            this.bindEvents();
        }

    },

    reRender: function () {
        this._clearAll();
        this.render();
    },

    renderNotificationDropdown: function (notifications) {
        // var i = 0, htmlContext = '';

        // for ( i = 0; i < this.notifications.length; i++) {
        //     htmlContext += this.dropdown_notifiationTemplate(this.notifications.at(i).toDropdownJSON());
        // }

        // this.notificationContainer.html(htmlContext);
        // this.bindDropdownEvents('notifications');
    },

    renderLetterDropdown: function () {
        // var i = 0, htmlContext = '';

        // for ( i = 0; i < this.letters.length; i++) {
        //     htmlContext += this.dropdown_letterTemplate(this.letters.at(i).toDropdownJSON());
        // }

        // this.letterContainer.html(htmlContext);
        // this.bindDropdownEvents('letter');
    },

    renderFavoriteDropdown: function () {
        // var i = 0, htmlContext = '';

        // for ( i = 0; i < this.favorites.length; i++) {
        //     htmlContext += this.dropdown_favoriteTemplate(this.favorites.at(i).toDropdownJSON());
        // }

        // this.favoriteContainer.html(htmlContext);
        // this.bindDropdownEvents('favorites');
    },

    bindDropdownEvents: function (dropdownName) {
        var self = this;
        this._unbindDropdownEvents(dropdownName);
        if (dropdownName === 'notifications') {
            this.$ndropdown.find('li').on('click', function (e) {
                var n_id = parseInt($(this).attr("data-notificationId"), 10);
                var n_model = self.notifications.get(n_id);
                var n_evt = n_model.get('notificationEvent');

                //async, don't care about result
                app.notificationManager.checkNotification(n_id);

                if (n_evt === Constants.notificationEvent.watched) {
                    app.navigate("personal/" + n_model.get('initUserId'), true);
                }
                //transaction related
                else if (n_evt < Constants.notificationEvent.watched) {
                    app.navigate("message/" + n_model.get('messageId'), true);
                }
            });
        } else if (dropdownName === 'letter') {
            this.$ldropdown.find('li').on('click', function (e) {
                var u_id = $(this).attr("data-userId");
                app.navigate("letter/" + u_id, true);
            });
        } else if (dropdownName === 'favorites') {
            this.$fdropdown.find('li').on('click', function (e) {
                var u_id = $(this).attr("data-userId");
                app.navigate("personal/" + u_id, true);
            });
        }
    },

    _unbindDropdownEvents: function (dropdownName) {
        if (dropdownName === 'notifications' && this.notificationContainer) {
            this.notificationContainer.find('.dropdownContent').off();
        } else if (dropdownName === 'letter' && this.letterContainer) {
            this.letterContainer.find('.dropdownContent').off();
        } else if (dropdownName === 'favorites' && this.favoriteContainer) {
            this.favoriteContainer.find('.dropdownContent').off();
        } else {
            //unbind all
            if (this.notificationContainer) {
                this.notificationContainer.find('.dropdownContent').off();
            }
            if (this.letterContainer) {
                this.letterContainer.find('.dropdownContent').off();
            }
            if (this.favoriteContainer) {
                this.favoriteContainer.find('.dropdownContent').off();
            }
        }
    },

    updateProfileImg: function (sessionUser) {
        $('#profilePictureImg').attr("src", this.sessionUser.get('imgPath'));
    },

    bindEvents: function () {
        var self = this;
        var username, password;

        /*  navigation events  */
        //main nav
        
        this.$nmain = $('#navigate_main').on('click', function () {
            app.navigate("main/" + self.sessionUser.get('searchRepresentation'), true);
        });
        if (!app.sessionManager.hasSession()) {
            this.$lb = $("#loginBox");
            this.$lbt = $("#loginBoxToggler").on("click", function (e) {
                self.$lb.toggle();
            });
            $('#signup_button').on('click', function () {
                app.navigate("/register", {trigger: true, replace: true});
            });
            this.$passwordInput = $("#login_password");
            this.$usernameInput = $("#login_username");
            var $wrong = $("#credentialWrong");
            this.$usernameInput.on("click", function (e){
                if  ($(this).val() === ("请输入邮箱") ) {
                    $(this).val("");
                }
                $wrong.hide();
                self.$usernameInput.removeClass('invalid_input');
                self.$passwordInput.removeClass('invalid_input');
            });
            this.$usernameInput.on("blur", function (e){
                if  ($(this).val() === ("") ) {
                    $(this).val("请输入邮箱");
                }
            });
            this.$passwordInput.on("focus", function (e){
                $wrong.hide();
                self.$usernameInput.removeClass('invalid_input');
                self.$passwordInput.removeClass('invalid_input');
            });
            this.$passwordInput.add(this.$usernameInput).on("keydown", function (e) {
                if (e.which == 13) {
                    username = self.$usernameInput.val();
                    password = self.$passwordInput.val();
                    app.sessionManager.login(username, password, {
                        success: function (response) {
                            Constants.dLog("server login response: ");
                            Constants.dLog(response);

                            //fetching session, with async flag to true
                            app.sessionManager.fetchSession(true, {
                                success: function () {
                                    app.userManager.sessionUser = app.sessionManager.getSessionUser();
                                    app.navigate("main", true);
                                },
                                error: function () {
                                    Info.displayNotice("登录失败，请稍后再试");
                                }
                            });
                        },

                        error: function (response) {
                            $wrong.show();
                            $('#credentialWrong').html(response.responseText);
                            self.$usernameInput.addClass('invalid_input');
                            self.$passwordInput.addClass('invalid_input');
                        }
                    });
                }
            });
            $("#forget_password").on("click", function (e) {
                e.preventDefault();
                app.navigate("lost", true);
                self.$lb.toggle();
            });
            this.remember = $("#remember_password").on("click", function (e) {
                if ($(this).hasClass("checked")){
                    $(this).removeClass("checked");
                } else {
                    $(this).addClass("checked");
                }
            });
            $('#login_button').on('click', function () {
                username = self.$usernameInput.val();
                password = self.$passwordInput.val();
                if (username !== "" && password !== "") {
                    app.sessionManager.login(username, password, {
                        success: function (response) {
                            Constants.dLog("server login response: ");
                            Constants.dLog(response);

                            //fetching session, with async flag to true
                            app.sessionManager.fetchSession(true, {
                                success: function () {
                                    app.userManager.sessionUser = app.sessionManager.getSessionUser();
                                    app.navigate("main", true);
                                },
                                error: function () {
                                    $wrong.show();
                                }
                            });
                        },

                        error: function (response) {
                            $wrong.show();
                            $('#credentialWrong').html(response.responseText);
                            self.$usernameInput.addClass('invalid_input');
                            self.$passwordInput.addClass('invalid_input');
                        }
                    });
                } else {
                    //请输入密码
                    $wrong.show();
                    self.$usernameInput.addClass('invalid_input');
                    self.$passwordInput.addClass('invalid_input');
                }
            });
            $("#login_username,#login_password").on('focus', function () {
                this.classList.remove('invalid_input');
            });
            $(document).mouseup(function (e)
            {
                var container = $("#loginBox");

                if (!container.is(e.target) // if the target of the click isn't the container...
                    && container.has(e.target).length === 0) // ... nor a descendant of the container
                {
                    container.hide();
                }
            });
        } else {
            this.$logo = $('#logo').on('click', function () {
                app.navigate("front", true);
            });

            this.$npersonal = $('#navigate_personal').on('click', function () {
                app.navigate("personal/" + app.sessionManager.getUserId(), true);
            });
            this.$nfeedback = $('#navigate_feedBack').on('click', function () {
                app.navigate("post", true);
            });
            this.$nusersearch = $("#navigate_usersearch").on('click', function () {
                app.navigate("finduser", true);
            });
            //personal nav
            this.$ndropdown.find('.dropdownTitleCheckAll').on('click', function () {
                app.navigate("personal/" + app.sessionManager.getUserId() + "/history", true);
            });
            this.$ldropdown.find('.dropdownTitleCheckAll').on('click', function () {
                app.navigate("letter", true);
            });
            this.$fdropdown.find('.dropdownTitleCheckAll').on('click', function () {
                app.navigate("personal/" + app.sessionManager.getUserId() + "/social", true);
            });

            /*  UI events  */
            this.$notifications = $('#notifications').on('mouseenter', function () {
                self.showNotificationDropdown();
            });
            this.$letters = $('#letters').on('mouseenter', function () {
                self.showLetterDropdown();
            });
            this.$favorites = $('#favorites').on('mouseenter', function () {
                self.showFavoriteDropdown();
            });
            this.$profilePicture = $('#profileDropdown').on('mouseenter', function () {
                self.showProfileDropdown();
            });
            this.$profilePicture.find('img').on("click", function () {
                app.navigate("personal/" + self.sessionUser.id, true);
            });
            this.$notifications.on('mouseleave', function (e) {
                if (!e.toElement || (e.toElement.id !== "notificationDropdown" && e.toElement.parentElement.id !== "notificationDropdown")) {
                    self.hideNotificationDropdown();
                }
            });
            this.$letters.on('mouseleave', function (e) {
                if (!e.toElement || (e.toElement.id !== "letterDropdown" && e.toElement.parentElement.id !== "letterDropdown")) {
                    self.hideLetterDropdown();
                }
            });
            this.$favorites.on('mouseleave', function (e) {
                if (!e.toElement || (e.toElement.id !== "favoriteDropdown" && e.toElement.parentElement.id !== "favoriteDropdown")) {
                    self.hideFavoriteDropdown();
                }
            });
            this.$profilePicture.on('mouseleave', function (e) {
                if (!e.toElement || (e.toElement.id !== "profileDropdown" && e.toElement.parentElement.id !== "profileDropdown")) {
                    self.hideProfileDropdown();
                }
            });
            this.$fdropdown.on('mouseleave', function (e) {
                if (!e.toElement || e.toElement.id !== "favorites" && e.toElement.parentElement.id !== "favorites") {
                    self.hideFavoriteDropdown();
                }
            });
            this.$ndropdown.on('mouseleave', function (e) {
                if (!e.toElement || e.toElement.id !== "notifications" && e.toElement.parentElement.id !== "notifications") {
                    self.hideNotificationDropdown();
                }
            });
            this.$ldropdown.on('mouseleave', function (e) {
                if (!e.toElement || e.toElement.id !== "letters" && e.toElement.parentElement.id !== "letters" ) {
                    self.hideLetterDropdown();
                }
            });
            $('#profileDropdown').on('mouseleave', function (e) {
                if (!e.toElement || e.toElement.id !== "profilePicture" && e.toElement.parentElement.id !== "profilePicture") {
                    self.hideProfileDropdown();
                }
            });
        //  $('#logout').on('mouseleave', function(e) {
        //      if (e.toElement.id !== "profilePicture") {
        //          self.hideLikes();
        //      }
        //  });
            $('#logout').on('click', function (e) {
                e.preventDefault();
                self.logout();
            });
            $("#topBar-avatar").add("#topBar-myPage").on('click', function (e) {
                e.preventDefault();
                app.navigate("personal/" + self.sessionUser.id + "/message", true);
            });
            $("#topBar-utility").on('click', function (e) {
                e.preventDefault();
                app.navigate("personal/" + self.sessionUser.id + "/utility", true);
            });
        }
        
    },

    logout: function () {
        app.sessionManager.logout({
            success: function (response) {
                Constants.dLog("server logout response: ");
                Constants.dLog(response);

                app.sessionManager.fetchSession(true, {
                    success: function () {
                        app.userManager.sessionUser = app.sessionManager.getSessionUser();
                        app.navigate("front", true);
                    },
                    error: function () {
                        Info.warn("Session fetch failed");
                        app.navigate("front", true);
                        app.userManager.sessionUser = app.sessionManager.getSessionUser();
                    }
                });
            },

            error: function (status) {
                Info.displayNotice("登出失败，请稍后再试");
            }
        });
    },

    showNotificationDropdown: function () {
        this.$alldropdowns.hide();
        this.$ndropdown.show();
    },
    hideNotificationDropdown: function () {
        this.$ndropdown.hide();
    },
    showFavoriteDropdown: function () {
        this.$alldropdowns.hide();
        this.$fdropdown.show();
    },
    hideFavoriteDropdown: function () {
        this.$fdropdown.hide();
    },
    showLetterDropdown: function () {
        this.$alldropdowns.hide();
        this.$ldropdown.show();
    },
    hideLetterDropdown: function () {
        this.$ldropdown.hide();
    },
    showProfileDropdown: function () {
        this.$alldropdowns.hide();
        this.$pdropdown.show();
    },
    hideProfileDropdown: function () {
        this.$pdropdown.hide();
    },

    _clearAll: function () {
        if (app.sessionManager.hasSession()) {
            this.$passwordInput.off();
            this.$usernameInput.off();
            $('#signup_button').off();
            $('#login_button').off();
            this.$lbt.off();
            $("#remember_password").off();
        }
        else{
            this.$logo.off();
            this.$npersonal.off();
            //this.$nfeedBack.off();
            this.$nusersearch.off();
            this.$notifications.off();
            this.$letters.off();
            this.$favorites.off();
            this.$ndropdown.off();
            this.$ldropdown.off();
            this.$fdropdown.off();
            this._unbindDropdownEvents();
            this.$profilePicture.off();
        }
        this.$nmain.off();
        this.stopListening();
        this.unbind();
        $(this.el).empty();
    },

    close: function () {
        if (!this.isClosed) {
            this._clearAll();

            this.isClosed = true;
        }
    }
});