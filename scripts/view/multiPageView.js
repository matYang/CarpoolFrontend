var MultiPageView = Backbone.View.extend({
    entryTemplate: "",
    entryContainer: "",
    entryClass: "",
    pageNavigator: "",
    pageNavigatorClass: "",
    pageEntryNumber: 10,
    startIndex: 0,
    currentPage: 1,
    pageNumberClass: "",
    pageNumberId: "",
    entryEvent: "",
    messages: [],
    entryHeight: -1,
    entryRowNum: 1,
    minHeight: 0,
    initialize: function () {
        _.bindAll(this, "render", "toPage", "bindEntryEvent", "setPageNavigator", "close");
        this.isClosed = false;
    },

    render: function () {
        if (this.messages.length > 0) {
            var buf = [], i, length = this.messages.length - this.startIndex;
            $("#" + this.entryContainer).empty();
            length = (length < this.pageEntryNumber) ? length : this.pageEntryNumber;
            for ( i = 0; i < length; i++) {
                var message;
                if (this.messages instanceof Backbone.Collection) {
                    message = this.messages.at(i + this.startIndex);
                } else {
                    message = this.messages[i + this.startIndex];
                }
                buf[i] = this.entryTemplate(message._toJSON());
            }
            $("#" + this.entryContainer).append(buf.join(""));
            $("#" + this.entryContainer + ">div").addClass(this.entryClass);
            if (this.bindEntryEvent) {
                this.bindEntryEvent();
            }
        } else {
            $("#" + this.entryContainer).append("<div id = 'mainPageNoMessage'>暂无消息</div>");
        }
        var height = Math.ceil(length / this.entryRowNum) * this.entryHeight;
        height = (height > this.minHeight) ? height : this.minHeight;
        $("#" + this.entryContainer).css("height", height + "px");
        if (this.messages.length > this.pageEntryNumber) {
            this.setPageNavigator();
        }
    },
    toPage: function (page) {
        this.currentPage = page;
        this.startIndex = this.pageEntryNumber * (page - 1);
        this.render();
    },
    bindEntryEvent: function () {
        var self = this;
        $("#" + this.entryContainer + ">." + this.entryClass).on("click", function (e) {
            var id = Utilities.getId(e.delegateTarget.id);
            self.entryEvent(id);
        });
    },
    setPageNavigator: function () {
        $("#" + this.pageNavigator + ">." + this.pageNumberClass).off();
        $("#" + this.pageNavigator + ">.pre").off();
        $("#" + this.pageNavigator + ">.next").off();
        $("#" + this.pageNavigator).remove();
        $("#" + this.entryContainer).after($("<div>").attr("id", this.pageNavigator));
        var length = this.messages ? this.messages.length : 0;
        var pages = Math.floor(length / this.pageEntryNumber) + 1;
        this.pages = pages;
        var buf = ['<a class="pre"></a>'];
        var divBuf = ["<a id='", this.pageNumberId, "_", 0, "' class='", this.pageNumberClass, "'> ", 0, "</a>"];
        for (var i = 1; i <= pages; i++) {
            divBuf[3] = i;
            divBuf[7] = i;
            buf.push(divBuf.join(""));
        }
        buf.push("<a class='next'></a>");
        var html = buf.join("");
        $("#" + this.pageNavigator).empty();
        $("#" + this.pageNavigator).append(html);
        $("#" + this.pageNavigator).addClass(this.pageNavigatorClass);
        
        var self = this;
        $("#" + this.pageNavigator + ">." + this.pageNumberClass).on("click", function (e) {
            var id = Utilities.toInt(Utilities.getId(e.target.id));
            self.toPage(id);
        });
        if (this.currentPage === 1) {
            $("#" + this.pageNavigator + ">.pre").addClass("pre-disabled");
        } else {
            $("#" + this.pageNavigator + ">.pre").on("click", function (e) {
                self.toPage(self.currentPage-1);
            });
        }
        if (this.currentPage === pages) {
            $("#" + this.pageNavigator + ">.next").addClass("next-disabled");
        } else {
            $("#" + this.pageNavigator + ">.next").on("click", function (e) {
                self.toPage(self.currentPage + 1);
            });
        }
    },
    close: function () {
        if (!this.isClosed) {
            $("#" + this.entryContainer + ">." + this.entryClass).off();
            $("." + this.pageNumberClass).off();
            $("#" + this.entryContainer).empty();
            this.isClosed = true;
        }
    }
});
