var LetterView = Backbone.View.extend({
    el: "",
    messageBoxTemplate: ["<li class='",
                        null,
                        "'><div class='date'>", 
                        null,
                        "</div><dl><dt><img src='",
                        null,
                        "' width='35' height='35'/></dt><dd><div class='arrow'></div><p>",
                        null,
                        "</p></dd></dl></li>"],
    initialize: function (params) {
        var self = this;
        _.bindAll(this, 'render', 'fillRecentHistory', 'buildMessageBox', 'sendSuccess', 'renderContacts', 'switchContact', 'sendError', 'onNewLetter', 'fetchLetterError', 'displayNewLetters', 'fetchLetterUserError', 'close');
        app.viewRegistration.register("letter", this, true);
        this.isClosed = false;
        this.sessionUser = app.sessionManager.getSessionUser();
        var option = {
            "direction": 2
        };
        this.template = _.template(tpl.get('letter'));
        this.domContainer = $('#chat');
        this.domContainer.append(this.template);
        this.$historyPanel = $("#letter_message_panel>#letter_history");
        this.$messagePanel = $("#letter_message_panel>#letter_new");
        this.$letterInput = $("#letter_input");
        this.$userList = $("#letter_user_list");
        if (params.toUserId && params.toUserId !== -1) {
            this.toUserId = params.toUserId;
            option.targetUserId = this.toUserId;
            option.targetType = Constants.LetterType.user;
            app.userManager.fetchUser(this.toUserId, {
                "success": function (user) {
                    self.toUser = user;
                    $("#letter_toUser_name").html(user.get("name"));

                    if (!self.letterUserList) {
                        self.letterUserList = new Users ();
                    }
                    self.letterUserList.add(user);
                    self.renderContacts(self.letterUserList);
                },
                "error": function () {
                }
            });
        } else {
            this.toUserId = -1;
            option.targetUserId = -1;
            option.targetType = Constants.LetterType.system;
        }

        if (this.toUserId === -1) {
            $("#letter_toUser_name").html("系统");
        }
        app.userManager.fetchLetters(option, {
            "success": this.fillRecentHistory,
            "error": function () {
            }
        });
        //TODO: fetch letter by user-pair
        this.recentLetters = new Letters ();
        this.render();
        app.userManager.fetchLetterUsers({
            "success": this.renderContacts,
            "error": this.fetchLetterUserError
        });
    },
    render: function () {
        this.fillRecentHistory();
        this.bindEvent();
        $("#chat_left").hide();
    },
    bindEvent: function () {
        var self = this;
        $("#letter_send_button").on("click", function (e) {
            if (!self.$letterInput.val()) {
                return;
            }
            app.letterManager.sendLetter(self.toUserId, self.$letterInput.val(), {
                "success": self.sendSuccess,
                "error": self.sendError
            });
            self.$messagePanel.append(self.buildMessageBox(-1, self.$letterInput.val(), new Date (), true));
            self.$messagePanel.scrollTop($('#letter_message_panel')[0].scrollHeight);
            self.$letterInput.val("");
        });
        this.$letterInput.on("keydown", function (e) {
            if (e.which == 13) {
                e.preventDefault();
                if (!self.$letterInput.val()) {
                    return;
                }
                self.$messagePanel.append(self.buildMessageBox(-1, self.$letterInput.val(), new Date (), true));
                app.letterManager.sendLetter(self.toUserId, self.$letterInput.val(), {
                    "success": self.sendSuccess,
                    "error": self.sendError
                });
                self.$messagePanel.scrollTop($('#letter_message_panel')[0].scrollHeight);
                self.$letterInput.val("");
            }
        });
        $("#letter_user_list").on("click", 'li', function (e) {
            id = Utilities.toInt(Utilities.getId(e.target.id));
            self.switchContact(id);
            
        });
        $("#chat_hide, #chat_box_left_title").on("click", function (e) {
            e.preventDefault();
            var style = $("#chat_left").attr("style");
            if (style && style.indexOf("390px") >= 0) {
                $("#chat_left").attr("style","margin-top: 0px;");
            } else {
                $("#chat_left").attr("style","margin-top: 390px;");
            }
            e.stopPropagation();
        });
        $("#chat_close").on("click", function (e) {
             e.preventDefault();
             $("#chat_left").hide();
             self.toUserId = null;
             e.stopPropagation();
        });
        $("#chat_contact_min, #chat_box_right_title").on("click", function(e){
            e.preventDefault();
            var style = $("#chat_right").attr("style");
            if (style && style.indexOf("390px") >= 0) {
                $("#chat_right").attr("style","margin-top: 0px;");
            } else {
                 $("#chat_right").attr("style","margin-top: 390px;");
            }
            e.stopPropagation();
        });
        $("#failed_to_send>a").on("click", function (e) {
            e.preventDefault();
            app.letterManager.sendLetter(self.toUserIdResend, self.messageResend, {
                "success": self.sendSuccess,
                "error": self.sendError
            });
            self.toUserIdResend = null;
            self.messageResend = null;
            $("#failed_to_send").hide();
        });
    },
    renderContacts: function (list) {
        var i;
        if (this.$userList) {
            this.$userList.empty();
        } else {

        }
        if (!this.letterUserList) {
            this.letterUserList = list;
        } else if (list && this.letterUserList !== list) {
            for ( i = 0; i < list.length; i++) {
                this.letterUserList.add(list.at(i));
            }
        }
        var buf = [], len = this.letterUserList.length, bufLen = 1, self = this, user, id;
        buf[0] ="<li id='letter_contact_-1'><img src='style/images/default-avatar-male.png' width='30' height='30'/> 系统</li>";
        for ( i = 0; i < len; i++) {
            user = this.letterUserList.at(i);
            buf[bufLen++] = "<li id='letter_contact_" + user.id + "'>" + "<img src='" + user.get("imgPath") + "' width='30' height='30'/>"+ user.get("name")+ "</li>";
        }
        this.$userList.append(buf.join(""));
    },
    switchContact: function (id) {
        var inList = (id === -1), that = this;
        if (!inList) {
            for ( i = 0, len = this.letterUserList.length; i < len; i++) {
                user = this.letterUserList.at(i);
                if (user.id === id) {
                    inList = true;
                    break;
                }
            }
        }
        if (!inList) {
            app.userManager.fetchUser(id, {
                "success": function (user) {
                    self.toUser = user;
                    self.toUserId = id;
                    if (!self.letterUserList) {
                        self.letterUserList = new Letters ();
                    }
                    self.letterUserList.add(user);
                    $("#letter_toUser_name").html(user.get("name"));
                    that.$userList.prepend("<li id='letter_contact_" + id + "'><img src='" + user.get("imgPath")+ "' width='30' height='30'/>" + user.get("name") + "</li>");
                },
                "error": function () {
                }
            });
        }
        $("#chat_left").show().attr("style","margin-top: 0;");
        $("#letter_input").focus();
        this.$messagePanel.empty();
        this.$letterInput.val("");
        this.toUserIdResend = null;
        this.messageResend = null;
        $(".userNewMessage").removeClass("userNewMessage");
        this.toUserId = id;
        if (this.toUserId === -1) {
            $("#letter_toUser_name").html("系统");
        }
        var user = this.letterUserList.get(id), option = {
            "direction": 2,
            "targetUserId": id,
            "targetType": id > -1 ? Constants.LetterType.user : Constants.LetterType.system
        };
        this.toUser = user;
        $("#letter_toUser_name").html(user.get("name"));

        app.userManager.fetchLetters(option, {
            "success": this.fillRecentHistory,
            "error": function () {
                
            }
        });
        app.storage.setLastContact(id);
    },

    fillRecentHistory: function (letters) {
        this.$messagePanel.empty();
        if (!letters || !letters.length) {
            this.$historyPanel.hide();
            return;
        }
        this.$historyPanel.empty();
        this.$historyPanel.show();
        this.letterHistories = letters;
        var len = letters.length, i = 0, buf = [], letter, bufLen = 0;
        var lastDay, send_time;
        var start = len < 10 ? 0 : len - 10;
        for ( i = start; i < len; i++) {
            letter = letters.at(i);
            send_time = new Date (letter.get("send_time"));
            send_time.setHours(0);
            send_time.setMinutes(0);
            send_time.setSeconds(0);
            send_time.setMilliseconds(0);
            buf[bufLen++] = this.buildMessageBox(letter.get("letterId"), letter.get("content"), letter.get("send_time"), letter.get("from_userId") === this.sessionUser.id);
        }
        this.$historyPanel.append(buf.join(""));
        this.$historyPanel.after('<div class="blank1" style="text-align:center; color:#ccc;">以上是历史信息</div>');
    },
    buildMessageBox: function (id, message, time, sendByMe) {
        this.messageBoxTemplate[1] = (sendByMe ? "me " : "other ") + "letterId_"+id;
        this.messageBoxTemplate[3] = time.toLocaleString();
        this.messageBoxTemplate[5] = sendByMe ? this.sessionUser.get("imgPath") : this.toUser.get("imgPath");
        this.messageBoxTemplate[7] = message;
        return this.messageBoxTemplate.join("");
    },
    sendSuccess: function (letter) {

        $(".letterId_-1").each(function (index) {
            if ($(this).text() === letter.get("content")) {
                $(this).removeClass("letterId_-1").addClass("letterId_" + letter.get("letterId"));
                this.letterHistories.add(letter);
                return;
            }
        });
    },
    sendError: function (letter) {
        $("#failed_to_send").show();
        this.toUserIdResend = letter.get("to_userId");
        this.messageResend = letter.get("content");
    },
    fetchLetterUserError: function () {

    },
    fetchLetterError: function () {

    },
    displayNewLetters: function (letters) {
        //receiving only inbound letters;
        var i = letters.length - 1, letter, buf = [], j = 0;
        for (; len > 0; len--) {
            letter = letters.at(len);
            if (!this.letterHisotries.get(letter.id)) {
                buf[j] = this.buildMessageBox(letter.id, letter.get("content"), letter.get("send_time"), false);
                break;
            }
        }
        this.$messagePanel.append(buf.join(""));
    },
    onNewLetter: function (data) {
        var self = this;
        if (data.to_userId == this.toUserId) {
            app.userManager.fetchLetters({
                "direction": 2,
                "targetUserId": data.to_userId,
                "targetType": data.to_userId > -1 ? Constants.LetterType.user : Constants.LetterType.system
            }, {
                "success": self.displayNewLetters,
                "error": self.fetchLetterError
            });
        } else if (this.letterUserList.findWhere({
            "userId": data.to_userId
        })) {
            $("#contactList_" + data.to_userId).addClass("userNewMessage");
        } else {
            if (to_userId !== -1) {
                app.userManager.fetchUser(to_userId, {
                    "success": function (user) {
                        self.$userList.prepend("<dd id='letter_contact_" + user.id + "'>" + user.get("name")+ "</dd>");
                        $("#letter_contact_" + user.get("userId")).addClass("userNewMessage");
                    },
                    "error": function () {
                    }
                });
            } else {
                $("#contactList_-1").addClass("userNewMessage");
            }
        }
    },
    close: function () {
        if (!this.isClosed) {
            $("#letter_send_button").off();
            this.$letterInput.off();
            $("#letter_user_list").off();
            this.domContainer.empty();
            this.isClosed = true;
        }
    }
});
