var LetterView = Backbone.View.extend({
    el:"",
    initialize:function(params){
        var self = this;
        _.bindAll(this, 'render', 'fillRecentHistory', 'buildMessageBox', 'sendSuccess', 'sendError', 'close');
        this.isClosed = false;
        this.sessionUser = app.sessionManager.getSessionUser();
        if (params.targetUserId) {
            this.toUserId = params.targetUserId;
        }
        app.userManager.fetchUser(this.toUserId, function(user){
            this.toUser = user;
            $("#letter_toUser_name").html(user.get("name"));
            $("#letter_toUser_pic").html(user.get("imgPath"));
        });
        //TODO: fetch letter by user-pair
        this.recentLetters = new Letters();
        this.domContainer = $('#content');
        this.messageBoxTemplate = ["<div class='letterBoxContainer ", null ,"'><div class='letterBoxMessage'>",
                                     null, "<div class='letterBoxTime'>", null,
                                    "</div></div><img src='", null, "'/></div>"];
        this.dateSplitTemplate = ["<div class='letterDateSplit'>",null,"</div>"];
        this.contactListTemplate = ["<div class='letterContactListEntry' id='contactList_", null,"'><img src='",null,"'><span>",null,"</span></div>"];
        this.template = _.template(tpl.get('letter'));
        this.render();
        app.userManager.fetchWatchedUsers(this.sessionUser.id, function(list){
            this.sessionUser.set("watchList", list);
            self.renderContacts(list);
        });
    }, 
    render: function(){
        this.domContainer.append(this.template());
        this.fillRecentHistory();
        this.bindEvent();
    },
    bindEvent: function(){
        var self = this;
        $("#letter_send_button").on("click", function(e){
            app.letterManager.sendLetter($("letter_input").val(), self.toUser, {
                "success":self.sendSuccess,
                "error":self.sendError
            });
            $("#letter_message_panel").append(self.buildMessageBox($("letter_input").val(), new Date(), true));
            $("letter_input").val("");
        });
        $("letter_input").on("keydown", function(e) {
            if (e.which == 13) {
                e.preventDefault();
                app.letterManager.sendLetter($("letter_input").val(), self.toUser, {
                    "success":self.sendSuccess,
                    "error":self.sendError
                });
                $("#letter_message_panel").append(self.buildMessageBox($("letter_input").val(), new Date(), true));
                $("letter_input").val("");
            }
        });
    },
    renderContacts: function(list){
        var buf = [], len = list.length, bufLen = 0, self = this, user;

        for ( i = 0; i < len; i++ ) {
            user = list.at(i);
            this.contactListTemplate[1] = user.get("userId");
            this.contactListTemplate[3] = user.get("imgPath");
            this.contactListTemplate[5] = user.get("name");
            buf[bufLen++] = this.contactListTemplate.join("");
        }
        $("#letter_user_list").append(buf.join(""));
        $("#letter_user_list>.letterContactListEntry").on("click", function(e){
            app.navigate(this.sessionUser.id+"/letter/"+Utilities.getId(e.delegateTarget.id)); //do not recreate view.
            self.switchContact(Utilities.getId(e.delegateTarget.id));
        });
    },
    switchContact:function(id){
        var watchList = this.sessionUser.get("watchList"), user = watchList.get(id);
        $("#letter_message_panel").empty();
        $("#letter_input").val("");
        this.toUser = user;
        this.toUserId = id;
        $("#letter_toUser_name").html(user.get("name"));
        $("#letter_toUser_pic").html(user.get("imgPath"));
    }

    fillRecentHistory: function(){
        var len = this.recentLetters.length, i = 0, buf = [], letter, bufLen = 0;
        var lastDay, send_time;
        for ( i = 0; i < len; i++ ) {
            letter = this.recentLetters.at(i);
            send_time = new Date(letter.get("send_time")).set(0,0,0,0);
            if (!lastDay || lastDay<send_time {
                this.dateSplitTemplate[2] = letter.get("send_time").toLocaleDateString();
                buf[bufLen++] = this.dateSplitTemplate.join("");
                lastDay = send_time;
            }
            buf[bufLen++] = this.buildMessageBox(letter.get("content"), letter.get("send_time"), letter.get("from_userId") === this.sessionUser.id);
        }
        $("#letter_message_panel").append(buf.join(""));
    },
    buildMessageBox: function(message, time, sendByMe){
        this.messageBoxTemplate[1] = sendByMe ? "sendByMe" : "sendByYou";
        this.messageBoxTemplate[3] = message;
        this.messageBoxTemplate[5] = time;
        this.messageBoxTemplate[7] = sendByMe ? this.sessionUser.get("imgPath") : this.toUser.get("imgPath");
        return this.messageBoxTemplate.join("");
    },
    sendSuccess: function(){

    },
    sendError: function(){

    },
    close: function(){
        if (!this.isClosed) {
            $("#letter_send_button").off();
            $("letter_input").off();
            this.domContainer.empty();
            this.isClosed = true;
        }
    }
});