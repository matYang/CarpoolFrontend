var TransactionDetailView = Backbone.View.extend({

    el: "",
    bookInfo: {
        "go": 0,
        "back": 0,
        "number": 1
    },
    initialize: function (transaction, info) {
        var i, that = this;
        _.bindAll(this, 'render', 'bindEvents', 'bookSuccess', 'scoreSuccess', 'calculateTotal', 'bookFail', 'scoreFail', 'bindEvaluationEvent', 'renderStar', 'close');
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
        this.textareaClicked = false;

        this.bindEvents();
        if (this.transaction.get("state") === 3) {
            this.bindEvaluationEvent(); 
        }
    },
    render: function () {
        this.$domContainer.append(this.template(this.json));
        this.$unitPrice = $("#unitPriceValue");
        this.$totalPrice = $("#transaction_totalPrice");
        this.$domContainer.show();
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
                    that.calculateTotal();
                    return;
                }
            });
            this.$transactionNumber = $("#transaction_book_number").on("blur", function (e) {
                that.bookInfo.number = Utilities.toInt(e.target.value);
                if ( isNaN(that.bookInfo.number) || that.bookInfo.number < 0) {
                    that.bookInfo.number = 1;
                }
                if (that.bookInfo.number > 1) {
                    that.$downarrow.attr("class", "plus");
                }
                if (that.bookInfo.number == 1) {
                    that.$downarrow.attr("class", "plus_disabled");
                }
                that.calculateTotal();
            });
            this.$transactionNote = $("#transaction_userNote").on("focus", function (e) {
                if (!that.textareaClicked) {
                    that.textareaClicked = true;
                    e.target.textContent = "";
                }
            });
            this.$controller = $("#transaction_control");
            this.$uparrow = this.$controller.find(".add");
            this.$downarrow = this.$controller.find(".plus_disabled");
            if (this.$downarrow.length === 0) {
                this.$downarrow = this.$controller.find(".plus");
            }

            this.$uparrow.on("click", function() {
                if (that.info.departure_seatsNumber <= that.bookInfo.number && that.info.arrival_seatsNumber <= that.bookInfo.number ) return;
                that.bookInfo.number++;
                if (that.bookInfo.number > 1) {
                    that.$downarrow.attr("class", "plus");
                }
                that.$transactionNumber.val(that.bookInfo.number);
                that.calculateTotal();
            });

            this.$downarrow.on("click", function() {
                if ($(this).hasClass("plus_disabled")) {
                    return;
                }
                that.bookInfo.number--;
                if (that.bookInfo.number == 1) {
                    that.$downarrow.attr("class", "plus_disabled");
                }
                that.$transactionNumber.val(that.bookInfo.number);
                that.calculateTotal();
            });
        }
        this.$functionButton;
        if (this.transaction.id === -1) {
            this.$functionButton = $("#startButton").on("click", function () {
                if (that.textareaClicked) {
                    that.transaction.set("userNote", that.$transactionNote.val());
                }
                that.transaction.set("departure_seatsBooked" , that.bookInfo.number);
                if ((that.info.departure_seatsNumber >= that.transaction.get("departure_seatsBooked") && that.bookInfo.go) || (that.info.arrival_seatsNumber >= that.transaction.get("arrival_seatsBooked") && that.bookInfo.back)) {
                    if (that.bookInfo.go === 1) {
                        $(this).val("预 约 中...").prop("disabled", true);
                        app.transactionManager.initTransaction(that.transaction, {
                            "success": that.bookSuccess,
                            "error": that.bookFail
                        });
                    }
                    if (that.bookInfo.back === 1) {
                        $(this).val("预 约 中...").prop("disabled", true);
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
        else if (this.transaction.get("state") === Constants.transactionState.init) {
            this.$functionButton = $("#cancelButton").on("click", function () {
                app.transactionManager.changeTransactionState({
                    "transactionId": that.transaction,
                    "stateChangeAction": Constants.transactionStateChangeAction.cancel
                }, {
                    "success": that.bookSuccess,
                    "error": that.bookFail
                });
            });
        } else {
            this.$functionButton = $("#contactButton").on("click", function () {
                var targetUserId = that.user.id === that.transaction.get("provider").id ? that.transaction.get("customer").id : that.transaction.get("provider").id;
                app.letterView.switchContact(targetUserId);
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
        $("#bookedStatus").show();
        this.$functionButton.off().html("预 约 成 功");
    },
    scoreSuccess: function () {
        
    },
    scoreFail: function () {
        
    },
    bookFail: function () {
        this.$functionButton.val("预约失败, 重试").removeAttr("disabled");
    },
    bindEvaluationEvent: function () {

        this.$providerStar = $("#providerStar");
        this.$customerStar = $("#customerStar");
        var submit = {
            "transactionId":this.transaction.id,
            "stateChangeAction":Constants.transactionStateChangeAction.evaluate
        }, that = this;
        if (this.transaction.providerId === this.user.id) {
            this.$customerStar.children(".star").on("mouseenter", function (e) {
                $(this).prevAll().addClass("on");
                $(this).addClass("on");
                $(this).nextAll().removeClass("on");
            }).on("mouseleave", function (e) {
                if (!$(e.toElement).hasClass("star")) {
                    that.renderStar(0);
                }
            }).on("click", function (e) {
                submit.score = that.$customerStar.children(".star").index(this);
                app.transactionManager.changeTransactionState(submit, {
                    "success":that.scoreSuccess,
                    "error":that.scoreFail
                });
            });
        } else if (this.transaction.customerId === this.user.id){
            this.$providerStar.children(".star").on("mouseenter", function (e) {
                $(this).prevAll().addClass("on");
                $(this).addClass("on");
                $(this).nextAll().removeClass("on");
            }).on("mouseleave", function (e) {
                if (!$(e.toElement).hasClass("star")) {
                    that.renderStar(1);
                }
            }).on("click", function (e) {
                submit.score = that.$providerStar.children(".star").index(this);
                app.transactionManager.changeTransactionState(submit, {
                    "success":that.scoreSuccess,
                    "error":that.scoreFail
                });
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
            this.$functionButton.off();
            if (this.$providerStar) {
                this.$providerStar.children(".star").off();
            } else if (this.$customerStar) {
                this.$customerStar.children(".star").off();
            }
            this.$domContainer.empty();
            this.$domContainer.hide();
            this.$mask.hide();
            this.isClosed = true;
        }
    }
});
