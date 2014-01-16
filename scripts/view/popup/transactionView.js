var TransactionDetailView = Backbone.View.extend({

    el: "",
    bookInfo: {
        "go": 0,
        "back": 0,
        "number": 0
    },
    initialize: function (transaction, info) {
        var i, that = this;
        _.bindAll(this, 'render', 'load', 'bindEvents', 'bookSuccess', 'scoreSuccess', 'calculateTotal', 'bookFail', 'close');
        app.viewRegistration.register("transactionDetail", this, true);
        this.isClosed = false;
        this.transaction = transaction;
        this.info = info;
        this.json = this.transaction._toJSON();
        for (i in info) {
            this.json[i] = info[i];
        }
        this.priceList = this.transaction.get("departure_priceList");
        for ( i = 0; i < this.priceList.length; i++) {
            if (this.priceList[i] === 0 && i > 0) {
                this.priceList[i] = this.priceList[i - 1];
            }
        }
        this.user = app.sessionManager.getSessionUser();
        // if (testMockObj.testMode){
        // 	this.transaction = testMockObj.sampleTransactionA;
        // 	//To allow edit
        // }
        this.user = app.sessionManager.getSessionUser();
        this.editable = transaction.get("transactionId") === -1;
        this.userId = this.user.get("userId");
        this.template = _.template(tpl.get('transactionDetail'));
        this.$domContainer = $('#popup').addClass("message_reservation");
        this.$mask = $('#overlay').show();
        this.render();
        this.load();
        this.textareaClicked = false;

        this.bindEvents();
    },
    render: function () {
        this.$domContainer.append(this.template(this.json));
        this.$unitPrice = $("#unitPriceValue");
        this.$totalPrice = $("#transaction_totalPrice");
        this.$domContainer.show();
    },
    load: function () {
        if (this.transaction.get("arrival_seatsBooked")) {
            this.bookInfo.number = this.transaction.get("departure_seatsBooked") > this.transaction.get("arrival_seatsBooked") ? this.transaction.get("departure_seatsBooked") : this.transaction.get("arrival_seatsBooked");
        } else {
            this.bookInfo.number = this.transaction.get("departure_seatsBooked");
        }
        $("#transaction_number").val(this.bookInfo.number);
        if (this.transaction.get("myDirection") === 0) {
            this.bookInfo.go = 1;
            this.bookInfo.back = 1;
        } else if (this.transaction.get("myDirection") === 1) {
            this.bookInfo.go = 1;
        } else if (this.transaction.get("myDirection") === 2) {
            this.bookInfo.back = 1;
        }
        if (this.bookInfo.go === 1) {
            $("#transaction_go").addClass("direction_selected");
        }
        if (this.bookInfo.back === 1) {
            $("#transaction_back").addClass("direction_selected");
        }
        this.calculateTotal();
    },

    bindEvents: function () {
        var that = this, temp;
        this.$directionSelect = $("#transaction_direction_select");
        this.$directionSelectBox = $("#transaction_direction_box");
        this.$closeButton = $("#closeButton").on("click", function () {
            that.close();
        });
        if (this.editable) {
            this.$directionSelect.on("click", function (e) {
                that.$directionSelectBox.toggle();
                if (e.target.tagName === "LI") {
                    $(this).children().first().val(e.target.textContent);
                    if (e.target.id === "transaction_go") {
                        that.bookInfo.go = 1;
                        that.bookInfo.back = 0;
                    } else if (e.target.id === "transaction_back"){
                        that.bookInfo.go = 0;
                        that.bookInfo.back = 1;
                    } else if (e.target.id === "transaction_round"){
                        that.bookInfo.go = 1;
                        that.bookInfo.back = 1;
                    } 
                    return;
                }
                that.calculateTotal();
            });
            this.$transactionNumber = $("#transaction_book_number").on("change", function (e) {
                that.bookInfo.number = Utilities.toInt(e.target.value);
                if (that.bookInfo.go) {
                    that.transaction.set("departure_seatsBooked", that.bookInfo.number);
                }
                if (that.bookInfo.back) {
                    that.transaction.set("arrival_seatsBooked", that.bookInfo.number);
                }
                $(this).removeClass("invalid_input");
                that.calculateTotal();
            });
            this.$transactionNote = $("#transaction_userNote").on("focus", function (e) {
                if (!that.textareaClicked) {
                    that.textareaClicked = true;
                    e.target.textContent = "";
                }
            });
            this.$startButton = $("#startButton").on("click", function () {
                if (that.textareaClicked) {
                    that.transaction.set("userNote", that.$transactionNote.val());
                }
                if ((that.info.departure_seatsNumber >= that.transaction.get("departure_seatsBooked") && that.bookInfo.go) || (that.info.arrival_seatsNumber >= that.transaction.get("arrival_seatsBooked") && that.bookInfo.back)) {
                    if (that.bookInfo.go === 1) {
                        app.transactionManager.initTransaction(that.transaction, {
                            "success": that.bookSuccess,
                            "error": that.bookFail
                        });
                    }
                    if (that.bookInfo.back === 1) {
                        var temp = that.transaction.get("arrival_location");
                        that.transaction.set("arrival_location", that.transaction.get("departure_location"));
                        that.transaction.set("departure_location", temp);
                        app.transactionManager.initTransaction(that.transaction, {
                            "success": that.bookSuccess,
                            "error": that.bookFail
                        });
                    }
                } else {
                    that.$transactionNumber.addClass("invalid_input");
                }
            });
        }
    },
    calculateTotal: function () {
        var total, temp;
        if (this.editable) {
            temp = this.priceList.length < this.bookInfo.number ? this.priceList.length : this.bookInfo.number;
            if (this.bookInfo.number > 0) {
                this.bookInfo.total = (this.bookInfo.go + this.bookInfo.back) * this.bookInfo.number * (this.priceList[temp - 1]);
            } else {
                this.bookInfo.total = 0;
            }
            total = this.bookInfo.total;
            if ( total === 0 ) {
                // should not occur

            }
        } else {
            temp = this.priceList.length < this.transaction.get("departure_seatsBooked") ? this.priceList.length : this.transaction.get("departure_seatsBooked");
            total = this.transaction.get("departure_seatsBooked") * this.priceList[temp - 1];
            this.$unitPrice.html(this.priceList[temp - 1]);
        }
        this.$totalPrice.html(total);
    },
    bookSuccess: function () {
        this.close();
    },
    scoreSuccess: function () {
        this.close();
    },
    bookFail: function () {
        Info.warn("unable to connect to server");
    },
    bindEvaluationEvent: function () {
        this.$providerStar = $("#providerStar");
        this.$customerStar = $("#customerStar");
        var submit = {
            "transactionId":this.transaction.id,
            "stateChangeAction":Constants.transactionStateChangeAction.evaluate
        };
        if (this.transaction.provider.id === this.user.id) {
            this.$customerStar.on({
                "mouseenter", ".star", function (e) {
                    $(this).prevAll().addClass("on");
                    $(this).addClass("on");
                    $(this).nextAll().removeClass("on");
                }
            }, {
                "mouseleave", ".star", function (e) {
                    if (!$(e.toElement).hasClass(star)) {
                        renderStar(0);
                    }
                }
            }, {
                "click", ".star", function (e) {
                    submit.score = that.$customerStar.children(".star").index(this);
                    app.transactionManager.changeTransactionState(options);
                }
            });
        } else if (this.transaction.customer.id === this.user.id){
            this.$providerStar.on({
                "mouseenter", ".star", function (e) {
                    $(this).prevAll().addClass("on");
                    $(this).addClass("on");
                    $(this).nextAll().removeClass("on");
                }
            }, {
                "mouseleave", ".star", function (e) {
                    if (!$(e.toElement).hasClass(star)) {
                        renderStar(1);
                    }
                }
            }, {
                "click", ".star", function (e) {
                    submit.score = that.$providerStar.children(".star").index(this);
                    app.transactionManager.changeTransactionState(options);
                }
            });
        }
    },
    renderStar: function(flag) {
        var pevaluation = this.transaction.get("providerEvaluation"),
            cevaluation = this.transaction.get("customerEvaluation"),
            pstars = this.$providerStar.children(".star"), 
            cstars = this.$customerStar.children(".star"),
            i;
        if (flag === 0) {
            if ( cevaluation > 0) {
                cstars.slice( 0, cevaluation-1).addClass("on");
                cstars.slice( cevaluation-1, 5).removeClass("on");
            }
        } else if (flag === 1) {
            if ( pevaluation > 0) {
                pstars.slice( 0, pevaluation-1).addClass("on");
                pstars.slice( pevaluation-1, 5).removeClass("on");
            }
        } else {

        }
    },
    close: function () {
        if (!this.isClosed) {
            this.$closeButton.off();
            this.$startButton.off();
            this.$transactionNumber.off();
            this.$domContainer.empty();
            this.$domContainer.hide();
            this.$mask.hide();
            this.isClosed = true;
        }
    }
});
