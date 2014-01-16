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
        var that = this;
        this.$domContainer.append(this.template(this.json));
        this.$domContainer.show();


        $("#transaction_close, #closeButton").on("click", function () {
            that.close();
        });
        if (!this.editable) {
            $("#transaction_number").prop("disabled", true);
            $("#startButton").remove();
            $("#transaction_userNote").html(this.transaction.get("customerNote"));
        }

        if (this.userId === this.transaction.get("providerId")) {
            $("#transaction_number").prop("disabled", true);
            $("#transaction_userNote").prop("disabled", true);
            $("#reportButton").remove();
            $("#evaluateButton").remove();
            $("#startButton").remove();
        } else if (this.userId === this.transaction.get("customerId") && this.transaction.get("state") === Constants.transactionState.finished) {
            $("#startButton").remove();
            $("#reportButton").on("click", app.transactionManager.changeTransactionState({
                "transactionId": this.transaction.get("transactionId"),
                "stateChangeAction": Constants.transactionStateChangeAction.report
            }));
        } else if (this.userId === this.transaction.get("customerId") && this.transaction.get("state") !== Constants.transactionState.finished) {
            $("#reportButton").remove();
            $("#evaluateButton").remove();
        } else {
            $("#transaction_number").prop("disabled", true);
            $("#transaction_userNote").prop("disabled", true)
            $("#reportButton").remove();
            $("#evaluateButton").remove();
            $("#startButton").remove();
        }
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

            $("#transaction_number").on("change", function (e) {
                that.bookInfo.number = Utilities.toInt(e.target.value);
                if (that.bookInfo.go) {
                    that.transaction.set("departure_seatsBooked", that.bookInfo.number);
                }
                if (that.bookInfo.back) {
                    that.transaction.set("arrival_seatsBooked", that.bookInfo.number);
                }
                $("#transaction_number").removeClass("invalid_input");
                that.calculateTotal();
            });
            $("#startButton").on("click", function () {
                if (that.textareaClicked) {
                    that.transaction.set("userNote", $("#transaction_userNote").val());
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
                    $("#transaction_number").addClass("invalid_input");
                }
            });
        }
        $("#transaction_userNote").on("focus", function (e) {
            if (!that.textareaClicked) {
                that.textareaClicked = true;
                e.target.textContent = "";
            }
        });
        if (this.userId === this.transaction.get("customerId")) {
            $("#evaluation_container").hide();
            if (this.transaction.get("state") === Constants.transactionState.finished) {
                $("#evaluateButton").on("click", function () {
                    $("#evaluation_container").show();
                });
                $("#confirm_score").on("click", function () {
                    app.transactionManager.changeTransactionState({
                        "transactionId": that.transaction.id,
                        "stateChangeAction": Constants.transactionStateChangeAction.evaluate,
                        "score": Utilities.toInt($("#score_select").val())
                    }, {
                        "success": that.scoreSuccess,
                        "error": that.bookFail
                    });
                });
            }
        } else if (this.userId === this.transaction.get("providerId")) {
            if (this.transaction.get("state") === Constants.transactionState.finished) {
                $("#evaluateButton").on("click", function () {
                    $("#evaluation_container").show();
                });
                $("#confirm_score").on("click", function () {
                    app.transactionManager.changeTransactionState({
                        "transactionId": that.transaction.id,
                        "stateChangeAction": Constants.transactionStateChangeAction.evaluate,
                        "score": Utilities.toInt($("#score_select").val())
                    }, {
                        "success": that.scoreSuccess,
                        "error": that.bookFail
                    });
                });
            }
            $("#reportButton").remove();
            $("#startButton").remove();
        } else {
            $("#reportButton").remove();
            $("#evaluateButton").remove();
            $("#startButton").remove();
        }

        if (this.transaction.id !== -1) {
            $("#transaction_number").prop("disabled", true);
            $("#transaction_userNote").prop("disabled", true);
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
            $("#unitPriceValue").html(this.priceList[temp - 1]);
        }
        $("#transaction_totalPrice").html(total);
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

    close: function () {
        if (!this.isClosed) {
            $("#transaction_close").off();
            $("#startButton").off();
            $("#transaction_go, #transaction_back").off();
            $("#transaction_number").off();
            this.$domContainer.empty();
            this.$domContainer.hide();
            this.$mask.hide();
            this.isClosed = true;
        }
    }
});
