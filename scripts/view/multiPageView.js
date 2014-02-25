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
    noMessage: "暂无消息",
    filters:[],
    eventBound: false,
    $domContainer: null,
    initialize: function () {
        _.bindAll(this, "render", "toPage", "bindEntryEvent", "setPageNavigator", "close");
        this.isClosed = false;
    },

    render: function () {
        this.unregisterFilterEvent();
        this.$domContainer = this.$domContainer || $("#"+this.entryContainer);
        this.$domContainer.empty();
        if (this.messages.length > 0) {
            var buf = [], i, length = this.messages.length - this.startIndex;
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
            this.$domContainer.append(buf.join(""));
            this.$domContainer.children("div").addClass(this.entryClass);
            if (this.entryEvent && !this.eventBound) {
                this.bindEntryEvent();
            }
        } else {
            this.$domContainer.append("<div class = 'noMessage'>"+this.noMessage+"</div>");
        }
        if (this.entryHeight) {
            var height = Math.ceil(length / this.entryRowNum) * this.entryHeight;
            height = (height > this.minHeight) ? height : this.minHeight;
            this.$domContainer.css("height", height + "px");
        }
        if (this.messages.length > this.pageEntryNumber) {
            this.setPageNavigator();
        }
        if (this.afterRender) {
            this.afterRender();
        }
        this.eventBound = true;
    },
    toPage: function (page) {
        this.currentPage = page;
        this.startIndex = this.pageEntryNumber * (page - 1);
        this.render();
    },
    bindEntryEvent: function () {
        var self = this;
        this.$domContainer.on("click", "." + this.entryClass, function (e) {
            e.preventDefault();
            var id = Utilities.getId($(this).attr("id"));
            self.entryEvent(id);
        });
    },
    setPageNavigator: function () {
        if (this.$pn && this.$pn.length) {
            this.$pn.children("." + this.pageNumberClass).off();
            this.$pn.children(".pre").off();
            this.$pn.children(".next").off();
            this.$pn.remove();
        }
        this.$domContainer.after($("<div>").attr("id", this.pageNavigator).attr("class", "mainPage-searchResult-multiPage-pageNum clearfix"));
        this.$pn = $("#" + this.pageNavigator);
        var length = this.messages ? this.messages.length : 0;
        var pages = Math.floor(length / this.pageEntryNumber) + 1;
        this.pages = pages;
        pages = pages > 10 ? 10 : pages;
        var buf = ['<a class="pre"></a>'];
        var divBuf = ["<a id='", this.pageNumberId, "_", 0, "' class='", this.pageNumberClass, "'> ", 0, "</a>"];
        for (var i = 1; i <= pages; i++) {
            divBuf[3] = i;
            divBuf[7] = i;
            buf.push(divBuf.join(""));
        }
        if (this.pages > 10) {
            buf.push("<span>...</span>");
        }
        buf.push("<a class='next'></a>");
        var html = buf.join("");
        this.$pn.empty()
                .append(html)
                .addClass(this.pageNavigatorClass);
        this.$pre = this.$pn.children(".pre");
        this.$next = this.$pn.children(".next");
        var self = this;
        this.$pn.on("click", "." + this.pageNumberClass, function (e) {
            var id = Utilities.toInt(Utilities.getId(e.target.id));
            self.toPage(id);
        });
        if (this.currentPage === 1) {
            this.$pre.addClass("pre-disabled");
        } else {
            this.$pre.on("click", function (e) {
                self.toPage(self.currentPage-1);
            });
        }
        if (this.currentPage === pages) {
            this.$next.addClass("next-disabled");
        } else {
            this.$next.on("click", function (e) {
                self.toPage(self.currentPage + 1);
            });
        }
    },
    registerFilterEvent: function ($selector, filter, inst, callback) {
        var that = this;
        $selector.on("click", function (e) {
            
            $selector.siblings().removeClass("active");
            $selector.addClass("active");
            if (that.allMessages) {
                if (filter) {
                    that.messages = that.allMessages.clone();
                    that.messages.reset(that.messages.filter(filter));
                } else {
                    that.messages = that.allMessages;
                }
            }
            inst.render();
            if (callback){
                callback.call(inst);
            }
        });
        this.filters.push($selector);
    },
    unregisterFilterEvent: function() {
        for (var i = 0; i < this.filters.length; i++) {
            this.filters[i].off();
        }
        this.filters = [];
    },
    close: function () {
        if (!this.isClosed) {
            if (this.$pn) {
                this.$pn.children("." + this.pageNumberClass).off();
            }
            this.unregisterFilterEvent();
            this.$domContainer.off();
            this.$domContainer.empty();
            this.isClosed = true;
        }
    }
});
