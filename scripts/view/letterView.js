var LetterView = Backbone.View.extend({
    el:"",
    initialize:function(params){
        _.bindAll(this, 'render', 'fillRecentHistory', 'buildMessageBox', 'sendSuccess', 'sendError', 'close');
        this.isClosed = false;
        this.sessionUser = app.sessionManager.getSessionUser();
        if (params.toUser) {
            this.toUser = params.toUser;
        }
        this.domContainer = $('#content');
        this.messageBoxTemplate = ["<div class='letterBoxContainer ", null ,"'><div class='letterBoxMessage'>",
                                     null, "<div class='letterBoxTime'>", null,
                                    "</div></div><img src='", null, "'/></div>"];
        this.dateSplitTemplate = ["<div class='letterDateSplit'>",null,"</div>"];
        this.template = _.template(tpl.get('letter'));
        this.render();
    }, 
    render: function(){
        this.domContainer.append(this.template());
        this.fillRecentHistory();
    },
    bindEvent: function(){
        $("#letter_send_button").on("click", function(e){
            var letter = new Letter();
            letter.set("from_userId", this.sessionUser.id).set("to_userId", this.toUser.id);
            letter.set("content", $("letter_input").val());

            app.prototype.sendLetter(letter, {
                "success":this.sendSuccess,
                "error":this.sendError
            });
        });
    },
    fillRecentHistory: function(){
        var len = this.recentLetters.length, i = 0, buf = [], letter, bufLen = 0;
        var lastDay, send_time;
        for ( i = 0; i < length; i++ ) {
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
            this.domContainer.empty();
            this.isClosed = true;
        }
    }
});