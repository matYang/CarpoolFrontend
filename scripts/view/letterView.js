var LetterView = Backbone.View.extend({
    el:"",
    initialize:function(params){
        var self = this;
        _.bindAll(this, 'render', 'fillRecentHistory', 'buildMessageBox', 'sendSuccess', 
            'renderContacts', 'switchContact', 'sendError', 'onNewLetter', 'fetchLetterError', 'fetchLetterUserError', 'close');
        app.viewRegistration.register("letter", this, true);
        this.isClosed = false;
        this.sessionUser = app.sessionManager.getSessionUser();
        var option = {
            "direction":2
        }
        if (params.toUserId) {
            this.toUserId = Utilities.toInt(params.toUserId);
            option.targetUserId = this.toUserId;
            option.targetType = "user";
            app.userManager.fetchUser(this.toUserId, {"success":function(user){
                self.toUser = user;
                $("#letter_toUser_name").html(user.get("name"));
                $("#letter_toUser_pic").html(user.get("imgPath"));
            }, "error":function(){}
        });
        } else {
            option.toUserId = -1;
            option.targetType = "system";
        }

        this.template = _.template(tpl.get('letter/letter'));
        this.domContainer = $('#content');
        this.domContainer.append(this.template);
        app.userManager.fetchLetters(option, {"success":this.fillRecentHistory, 
                                              "error":function(){}});
        //TODO: fetch letter by user-pair
        this.recentLetters = new Letters();
        this.messageBoxTemplate = ["<div class='letterBoxContainer ", null ,"'><img src='", null, "'/><div class='letterBoxMessage'><div class='letterBoxText letterId_", null,"'>",
                                     null, "</div><div class='letterBoxTime'>", null,
                                    "</div></div></div>"];
        this.dateSplitTemplate = ["<div class='letterDateSplit'>",null,"</div>"];
        this.contactListTemplate = ["<div class='letterContactListEntry' id='contactList_", null,"'><img src='",null,"'><span>",null,"</span></div>"];
        this.render();
        app.userManager.fetchLetterUsers({
            "success":this.renderContacts,
            "error":this.fetchLetterUserError
        });
    }, 
    render: function(){
        this.fillRecentHistory();
        this.bindEvent();
        $("#letter_flash").hide();
    },
    bindEvent: function(){
        var self = this;
        $("#letter_send_button").on("click", function(e){
            debugger;
            if (!$("#letter_input").val()) {
                $("#letter_flash").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
                return;
            }
            app.letterManager.sendLetter(self.toUserId, $("#letter_input").val(), {
                "success":self.sendSuccess,
                "error":self.sendError
            });
            $("#letter_message_panel").append(self.buildMessageBox(-1, $("#letter_input").val(), new Date(), true));
            $("#letter_message_panel").scrollTop($('#letter_message_panel')[0].scrollHeight);
            $("#letter_input").val("");
        });
        $("#letter_input").on("keydown", function(e) {
            if (e.which == 13) {
                e.preventDefault();
                if (!$("#letter_input").val()) {
                    $("#letter_flash").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100);
                    return;
                }
                $("#letter_message_panel").append(self.buildMessageBox(-1, $("#letter_input").val(), new Date(), true));
                app.letterManager.sendLetter(self.toUserId, $("#letter_input").val(), {
                    "success":self.sendSuccess,
                    "error":self.sendError
                });
                $("#letter_message_panel").scrollTop($('#letter_message_panel')[0].scrollHeight);
                $("#letter_input").val("");
            }
        });
    },
    renderContacts: function(list){
        this.letterUserList = list;
        var buf = [], len = list.length, bufLen = 0, self = this, user, id;
        if (this.toUser && !this.letterUserList.findWhere({"userId":this.toUserId}) ){
            this.letterUserList.unshift(this.toUser);
        }
        for ( i = 0; i < len; i++ ) {
            user = list.at(i);
            this.contactListTemplate[1] = user.get("userId");
            this.contactListTemplate[3] = user.get("imgPath");
            this.contactListTemplate[5] = user.get("name");
            buf[bufLen++] = this.contactListTemplate.join("");
        }
        $("#letter_user_list").append(buf.join(""));
        $("#letter_user_list>.letterContactListEntry").on("click", function(e){
            id = Utilities.toInt(Utilities.getId(e.delegateTarget.id));
            if ( id !== self.toUserId) {
                app.navigate(self.sessionUser.id+"/letter/"+id); //do not recreate view.
                self.switchContact(Utilities.getId(e.delegateTarget.id));
            }
        });
    },
    switchContact:function(id){
        var user = this.letterUserList.get(id);
        $("#letter_message_panel").empty();
        $("#letter_input").val("");
        this.toUser = user;
        this.toUserId = id;
        $("#letter_toUser_name").html(user.get("name"));
        $("#letter_toUser_pic").html(user.get("imgPath"));
        $(".highlitedUser.userNewMessage").removeClass("userNewMessage");
        $(".highlitedUser").removeClass("highlitedUser");
        $("#contactList_"+id).addClass("highlitedUser");
    },

    fillRecentHistory: function(letters){
        if (!letters) return;
        $("#letter_message_panel").empty();
        var len = letters.length, i = 0, buf = [], letter, bufLen = 0;
        var lastDay, send_time;
        for ( i = 0; i < len; i++ ) {
            letter = letters.at(i);
            send_time = new Date(letter.get("send_time")).set(0,0,0,0);
            if (!lastDay || lastDay<send_time) {
                this.dateSplitTemplate[1] = letter.get("send_time").toLocaleDateString();
                buf[bufLen++] = this.dateSplitTemplate.join("");
                lastDay = send_time;
            }
            buf[bufLen++] = this.buildMessageBox(letter.get("letterId"), letter.get("content"), letter.get("send_time"), letter.get("from_userId") === this.sessionUser.id);
        }
        $("#letter_message_panel").append(buf.join(""));
    },
    buildMessageBox: function(id, message, time, sendByMe){
        this.messageBoxTemplate[1] = sendByMe ? "sendByMe" : "sendByYou";
        this.messageBoxTemplate[3] = sendByMe ? this.sessionUser.get("imgPath") : this.toUser.get("imgPath");
        this.messageBoxTemplate[5] = id;
        this.messageBoxTemplate[7] = message;
        this.messageBoxTemplate[9] = time;
        return this.messageBoxTemplate.join("");
    },
    sendSuccess: function(letter){

        $( ".letterId_-1" ).each(function( index ) {
          if ($( this ).text() === letter.get("content")) {
            $(this).removeClass("letterId_-1").addClass("letterId_"+letter.get("letterId"));
          }
        });
    },
    sendError: function(letter){
        $( ".letterId_-1" ).each(function( index ) {
          if ($( this ).text() === letter.get("content")) {
            if ($( this ).parent().parent().find(".letterSendFail").length === 0) {
                $( this ).parent().parent().prepend($("<div>").addClass("letterSendFail"));
                return;
            }
          }
        });
    },
    fetchLetterUserError: function(){

    },
    fetchLetterError: function(){

    },
    onNewLetter: function(data){
        var self = this;
        if (data.to_userId == this.toUserId) {
            app.userManager.fetchLetters({
                "direction":1,
                "targetUserId":data.to_userId,
                "targetType":data.to_userId > -1 ? "user" : "system"
            },{
                "success":self.fillRecentHistory,
                "error":self.fetchLetterError
            });
        } else if ( this.letterUserList.findWhere({"userId":data.to_userId})) {
            $("#contactList_"+data.to_userId).addClass("userNewMessage");
        } else {
            app.userManager.fetchUser(to_userId, {"success":function(user){
                    self.contactListTemplate[1] = user.get("userId");
                    self.contactListTemplate[3] = user.get("imgPath");
                    self.contactListTemplate[5] = user.get("name");
                    $("#letter_user_list").prepend(self.contactListTemplate.join(""));
                    $("#contactList_"+user.get("userId")).addClass("userNewMessage");
                }, "error":function(){}
            });
        }
    },
    close: function(){
        if (!this.isClosed) {
            $("#letter_send_button").off();
            $("#letter_input").off();
            this.domContainer.empty();
            this.isClosed = true;
        }
    }
});