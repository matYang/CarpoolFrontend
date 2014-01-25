var MessageDetailView = Backbone.View.extend({

    el: "",

    initialize: function (messageIdWrapper) {
        _.bindAll(this, 'render', 'bindEvents', 'loadTransactions', 'createNewTransaction', 'openTransactionDetail', 'parseMessage', 'parseTransaction', 'renderPriceList', 'cancelSuccess', 'cancelError', 'close');
        app.viewRegistration.register("MessageDetail", this, true);
        this.isClosed = false;

        this.user = app.sessionManager.getSessionUser();
        this.userId = app.sessionManager.getUserId();
        var self = this;
        this.newTransaction = new Transaction ();
        this.quickmatchTemplate = _.template(tpl.get('SimpleMessage'));
        app.messageManager.fetchMessage(messageIdWrapper.messageId, {
            success: function (message) {
                self.message = message;
                self.pricelist = self.message.get("departure_priceList");
                self.bookInfo = {
                    "go": false,
                    "back": false,
                    "number": 1
                };
                self.parsedMessage = self.parseMessage(self.message);
                self.messageId = self.message.get("messageId");
                self.ownerId = self.message.get("ownerId") || -1;

                self.template = _.template(tpl.get('DetailMessage'));
                self.transactionTemplate = _.template(tpl.get('Transaction'));
                self.domContainer = $('#content');
                self.render();
                self.bindEvents();
                self.showTransaction = false;
                for ( i = 1; i < self.pricelist.length; i++) {
                    if (self.pricelist[i]) {
                        self.pricelist[i] = self.pricelist[i - 1];
                    }
                }
                self.createNewTransaction();
            },
            error: function () {
                Info.displayErrorPage("content", "信息读取失败, 请刷新页面");
            }
        });
    },

    render: function () {
        var mapParams = {
            div: "view_map",
            class: "messageDetail-map-content",
            originLocation: this.message.get("departure_location"),
            destLocation: this.message.get("arrival_location"),
            clickable: false
        };
        this.domContainer.append(this.template(this.parsedMessage));
        this.map = app.storage.getViewCache("MapView", mapParams);
        this.renderPriceList();
        if (this.message.get("isRoundTrip")) {
            $(".messageDetail-top-location").attr("class", "messageDetail-top-location clearfix back-and-forth");
        } else {
            $(".messageDetail-top-location").attr("class", "messageDetail-top-location clearfix one-way");
        }
        app.messageManager.fetchTransactionList(this.message.id, {
            "success": this.loadTransactions,
            "error": this.loadError
        });
        app.messageManager.fetchTransactionList(this.message.id, {
            "success": this.renderAutoMatch,
            "error": this.loadError
        });
    },
    loadTransactions: function (transactions) {
        var i, buffer = [], that = this;
        this.transactions = transactions;
        for ( i = 0; i < this.transactions.length; i++) {
            if (Utilities.isEmpty(this.transactions.at(i).targetUserName === null))
                continue;
            buffer[i] = this.transactionTemplate(this.transactions.at(i)._toJSON());
        }
        var $transactions = $("#view_transactions_content").append(buffer.join(""));
        // $transactions.children("li").on("click", function (e) {
        //     var id = Utilities.getId(e.delegateTarget.id);
        //     var transaction = that.transactions.get(Utilities.toInt(id));
        //     that.openTransactionDetail(transaction);
        // });
        $("#reservation_count").html(this.transactions.length);
    },
    loadError: function () {
        alert("加载失败");
    },
    renderAutoMatch: function (result) {
        var i, buf = [], len = result.length, that = this;
        len = len < 3 ? len : 3;
        for ( i = 0; i < len; i++) {
            buf[i] = this.quickmatchTemplate(result.at(i)._toJSON());
        }
        this.$automatch = $("#view_automatch").append(buf.join(""));
        this.$automatch.children(".messageDetail-middle-autoMatch-loading").remove();
        this.$messages = $automatch.children("message_simple").on('click', function (e) {
            var id = Utilities.getId(e.delegateTarget.id);
            app.navigate("message/" + id, true);
        });
    },
    bindEvents: function () {
        var that = this;

        if (this.ownerId === this.userId) {
            this.cancelWindowTpl = _.template(tpl.get('messageCancel'));
            var $popup = $("#popup").attr("class", "pop book_no").append(that.cancelWindowTpl());
            var $overlay = $("#overlay");
            this.$viewend = $("#view_end").on("click", function () {
                $popup.show();
                $overlay.show();
            });
            this.$viewendConfirm = $("#messageEndConfirm").on("click", function(){
                $(this).val("取 消 中 ...").prop("disabled", true);
                app.messageManager.deactivateMessage(that.message.id, {
                    "success": that.cancelSuccess,
                    "error": that.cancelError
                });
            });
            this.$viewendCancel = $("#messageEndClose,#messageEndCancel").on("click", function(){
                that.$viewendConfirm.val("确认");
                $popup.hide();
                $overlay.hide();
            });
        }

        var n = this.departureSeats < this.arrivalSeats ? this.departureSeats : this.arrivalSeats;
        this.$viewbook = $("#view_book");
        this.$viewcontact = $("#view_contact");
        this.$viewlink = $("#view_contactLink");
        if (this.departureSeats === 0 && this.arrivalSeats === 0) {
            this.$viewbook.text("座位已满").css("background-color", "#888888").css("width", "100%").off();
        } else if (this.parsedMessage.type === Constants.messageType.help) {
            this.$viewbook.on("click", function (e) {
                that.transactionView = new TransactionDetailView (that.newTransaction, {
                    "departure_seatsNumber": that.message.get("departure_seatsNumber") - that.message.get("departure_seatsBooked"),
                    "arrival_seatsNumber": that.message.get("arrival_seatsNumber") - that.message.get("arrival_seatsBooked")
                });
            });
        } else if (this.parsedMessage.type === Constants.messageType.ask) {
            this.$viewcontact.on('click', function () {
                app.navigate("letter/" + that.ownerId, true);
            });
        }
        this.$viewlink.on('click', function (e) {
            e.preventDefault();
            app.navigate("letter/" + that.ownerId, true);
        });
    },
    createNewTransaction: function () {
        this.newTransaction.set("providerId", this.ownerId);
        this.newTransaction.set("customerId", this.userId);
        this.newTransaction.set("messageId", this.messageId);
        this.newTransaction.set("provider", this.message.get("owner"));
        this.newTransaction.set("customer", this.user);
        this.newTransaction.set("message", this.message);
        this.newTransaction.set("paymentMethod", this.message.get("paymentMethod"));
        this.newTransaction.set("providerNote", this.message.get("note"));
        if (this.message.get("isRoundTrip")) {
            this.newTransaction.set("direction", 0);
        } else {
            this.newTransaction.set("direction", 1);
        }
        this.newTransaction.set("departure_location", this.message.get("departure_location"));
        this.newTransaction.set("departure_time", this.message.get("departure_time"));
        this.newTransaction.set("departure_timeSlot", this.message.get("departure_timeSlot"));

        this.newTransaction.set("departure_priceList", this.message.get("departure_priceList"));
        this.newTransaction.set("arrival_location", this.message.get("arrival_location"));
        this.newTransaction.set("arrival_time", this.message.get("arrival_time"));
        this.newTransaction.set("arrival_timeSlot", this.message.get("arrival_timeSlot"));

        this.newTransaction.set("arrival_priceList", this.message.get("arrival_priceList"));
        this.newTransaction.set("state", this.message.get("state"));
    },
    openTransactionDetail: function (transaction) {
        var that = this;
        this.transactionDetailView = new TransactionDetailView (transaction, {
            "departure_seatsNumber": that.message.get("departure_seatsNumber") - that.message.get("departure_seatsBooked"),
            "arrival_seatsNumber": that.message.get("arrival_seatsNumber") - that.message.get("arrival_seatsBooked")
        });

    },

    parseMessage: function (message) {
        var parsedMessage = message._toJSON();
        this.departureSeats = parsedMessage.departure_seatsNumber - parsedMessage.departure_seatsBooked;
        this.arrivalSeats = parsedMessage.arrival_seatsNumber - parsedMessage.arrival_seatsBooked;
        return parsedMessage;
    },

    parseTransaction: function (transaction, i) {
        var parsedTransaction = {};
        parsedTransaction.id = i;
        parsedTransaction.transactionId = transaction.get("transactionId");
        parsedTransaction.targetUserName = transaction.get("targetUserName");
        parsedTransaction.date = Utilities.getDateString(transaction.get("creationTime"));
        return parsedTransaction;
    },
    renderPriceList: function () {
        var pricelist = this.message.get("departure_priceList");
        var appender = [];
        for (var p = 0; p < pricelist.length; p++) {
            if (pricelist[p] !== 0) {
                var num = Utilities.toInt(p) + 1;
                appender.push("<li>"+ num +"人：" + pricelist[p] + "元/人 </li>");
            }
        }
        $("#pricelist").append(appender.join(""));
    },
    cancelSuccess: function(){
        this.$viewendConfirm.val("取消成功, 关闭").off().on("click", function (e) {
            $popup.empty();
            $overlay.hide();
        });
        this.$viewend.off();
    },
    cancelError: function(){
        this.$viewendConfirm.val("取消失败,请重试").removeAttr("disabled");
    },
    close: function () {
        if (!this.isClosed) {
            this.map.close();
//            $("#view_edit").off();
            this.$viewbook.off();
            this.$viewcontact.off();
            if (this.$messages) {
                this.$messages.off();
            }
            if ( typeof this.domContainer !== 'undefined') {
                this.domContainer.empty();
            }
            $("#popup").empty();
            this.isClosed = true;
        }
    }
});
