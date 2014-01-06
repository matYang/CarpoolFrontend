/*dedicated view for Message post, deep linking will not be used for Message post states, this view holds the session
 * data*/
var MessagePostView = Backbone.View.extend({

    el: "",
    toSubmit: {
        "origin": new UserLocation (),
        "dest": new UserLocation (),
        "type": Constants.messageType.ask,
        "numberRequests": 0,
        "requests": [],
        "description": "",
        "priceList": [0],
        "departureSeats": 1,
        "returnSeats": 1,
        "priceListEntries": 1,
        "conditionalPrice": false
    },
    /**
     request
     {
     type:ask | help,
     dateStart:"",
     dateEnd:"",
     time:"000"-"111",
     round:true|false	//if round is false, ignore dateEnd
     }
     */
    initialize: function () {
        _.bindAll(this, 'render', 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'unbindStepEvents', 'onTypeSelect', 'onAddClick', 'adjustContainerHeight', 'toggleDateVisibility', 'updateValue', 'deleteSlot', 'validate', 'getId', 'toMessage', 'close');
        this.isClosed = false;
        this.baseTemplate = _.template(tpl.get('Publish_base'));
        this.step1Template = _.template(tpl.get('Publish_step1'));
        this.step2Template = _.template(tpl.get('Publish_step2'));
        this.step3Template = _.template(tpl.get('Publish_step3'));
        this.askSlotTemplate = _.template(tpl.get('Publish_singleSlotAsk'));

        this.user = app.sessionManager.getSessionUser();
        this.userId = this.user.get("userId");

        this.domContainer = $('#content');
        this.domContainer.append(this.baseTemplate);
    },

    render: function (stepIndex) {
        // --- events binding ---
        this.unbindStepEvents(stepIndex);
        $('#publish_requirement').empty();

        //validity of stepIndex is guranteed on the URL level, since deep linking is applied
        //reduncy of safety check is not necessary here because in development, we need to know where things go wrong
        if (stepIndex === 1) {
            this.stepIndex = 1;
            this.renderFirstPage();
        } else if (stepIndex === 2) {
            this.stepIndex = 2;
            this.renderSecondPage();
        } else if (stepIndex === 3) {
            this.stepIndex = 3;
            this.renderThirdPage();
        }
    },

    renderFirstPage: function () {
        $('#publish_requirement').append(this.step1Template());
        $("#publish_progress").attr("class", "publish publish_step_1");
        var that = this;
        $('#publish_type>div').on('click', function (e) {
            that.onTypeSelect(e);
        });
        $('#publish_originInput').on("click", function (e) {
            $(".wrong").remove();
            // that.locationPicker = new LocationPickerView (that.toSubmit.origin, that, "publish_originInput");
        });
        $('#publish_destInput').on("click", function (e) {
            $(".wrong").remove();
            // that.locationPicker = new LocationPickerView (that.toSubmit.dest, that, "publish_destInput");
        });
        this.restoreState(1);
        var mapConfig = {};
        mapConfig.div = "publish_map";
        mapConfig.originLocation = this.toSubmit.origin || this.user.get("location");
        mapConfig.destLocation = this.toSubmit.dest || this.user.get("location");
        mapConfig.init = this;
        if (!this.map) {
            this.map = app.storage.getViewCache("MapView", mapConfig);
        } else if ($("#mapcache").length){
            this.map.cacheConfig(mapConfig);
        }
    },
    updateByMapMarker: function (type, json) {
        if (type === "origin") {
            $('#publish_originAddress').val(json.results[0].formatted_address);
            this.toSubmit.origin.parseGoogleJson(json);
        } else {
            $('#publish_destAddress').val(json.results[0].formatted_address);
            this.toSubmit.dest.parseGoogleJson(json);
        }
    },
    updateLocation: function (flag, id) {
        $('#publish_originInput').val(this.toSubmit.origin.toUiString());
        $('#publish_destInput').val(this.toSubmit.dest.toUiString());
        if (this.map) {
            this.map.getDirection(this.toSubmit.origin, this.toSubmit.dest);
        }
    },
    refactorRequests: function () {
        var newRequests = [], counter = 0;

        var requests;
        requests = this.toSubmit.requests;

        for (var request = 0; request < requests.length; request++) {
            if (requests[request]) {
                newRequests[counter] = requests[request];
                newRequests[counter].id = counter + 1;
                counter++;
            }
        }
        this.toSubmit.requests = newRequests;
        this.toSubmit.numberRequests = counter;
    },
    renderSecondPage: function () {
        $('#publish_requirement').append(this.step2Template());
        $("#publish_progress").attr("class", "publish publish_step_2");
        var that = this;
        this.currentTemplate = this.askSlotTemplate;
        this.refactorRequests();
        if (this.toSubmit.requests.length === 0 || this.toSubmit.requests[0].type !== this.toSubmit.type) {
            this.toSubmit.requests = [];
            this.toSubmit.requests[0] = {};
            this.toSubmit.requests[0].timeAvailable = "";
            this.toSubmit.requests[0].departTime = 0;
            this.toSubmit.requests[0].returnTime = 0;
            this.toSubmit.requests[0].id = 1;
            this.toSubmit.requests[0].type = this.toSubmit.type;
            this.toSubmit.requests[0].round = true;
            this.toSubmit.numberRequests = 1;
            $('#publish_info').on('change', 'input[value=round]', function (e) {
                var id = Utilities.toInt(Utilities.getId(e.target.name));
                var maximumDate = $("input[name=publish_returnDate_" + id + "]").datepicker("getDate");
                if (this.checked) {
                    that.toggleDateVisibility(e, false);
                    $("input[name=publish_departDate_" + id + "]").datepicker("option", "maxDate", maximumDate);
                    that.toSubmit.requests[id - 1].round = true;
                } else {
                    that.toggleDateVisibility(e, true);
                    var date = $("input[name=publish_departDate_" + id + "]").datepicker("getDate");
                    $("input[name=publish_departDate_" + id + "]").datepicker("option", "maxDate", null);
                    if (date) {
                        $("input[name=publish_departDate_" + id + "]").val((date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear());
                    }
                    that.toSubmit.requests[id - 1].round = false;
                }
            });

            this.toSubmit.requests[0].timeAvailable = [false, false, false];
            $('#publish_time_slots').append(this.currentTemplate({
                id: 1
            }));
            $("input[name=publish_departDate_1]").datepicker({
                buttonImageOnly: true,
                buttonImage: "calendar.gif",
                buttonText: "Calendar",
                minDate: new Date (),
                onSelect: function (text, inst) {
                    var d = new Date ();
                    d.setDate(inst.selectedDay);
                    d.setMonth(inst.selectedMonth);
                    d.setYear(inst.selectedYear);
                    that.updateValue(this, d);
                    $("input[name=publish_returnDate_1]").datepicker("option", "minDate", d);
                }
            });
            $("input[name=publish_returnDate_1]").datepicker({
                buttonImageOnly: true,
                buttonImage: "calendar.gif",
                buttonText: "Calendar",
                minDate: new Date (),
                onSelect: function (text, inst) {
                    var d = new Date ();
                    d.setDate(inst.selectedDay);
                    d.setMonth(inst.selectedMonth);
                    d.setYear(inst.selectedYear);
                    that.updateValue(this, d);
                    $("input[name=publish_departDate_1]").datepicker("option", "maxDate", d);
                }
            });
            $("#depart_time_1").on("click", function (e) {
                $(".publish_time_menu").hide();
                if (e.target.tagName === "LI") {
                    debugger;
                    $(this).children().first().val(e.target.textContent);
                    that.updateValue(e);
                    return;
                }
                $(this).children().last().toggle();
            });
            $("#return_time_1").on("click", function (e) {
                $(".publish_time_menu").hide();
                if (e.target.tagName === "LI") {
                    $(this).children().first().val(e.target.textContent);
                    that.updateValue(e);
                    return;
                }
                $(this).children().last().toggle();
            });
            $("div[name=publish_round_1]").on("click", function (e) {
                if ($(this).hasClass("checked")) {
                    $(this).removeClass("checked");
                } else {
                    $(this).addClass("checked");
                }
                var maximumDate = $("input[name=publish_returnDate_1]").datepicker("getDate");
                if ($(this).hasClass("checked")) {
                   that.toSubmit.requests[0].round = true;
                    $("input[name=publish_departDate_1]").datepicker("option", "maxDate", maximumDate);
                    that.toggleDateVisibility(1, false);
                } else {
                    that.toSubmit.requests[0].round = false;
                    $("input[name=publish_departDate_1]").datepicker("option", "maxDate", null);
                    that.toggleDateVisibility(1, true);
                }
            });
        } else {
            for (var request = 0; request < this.toSubmit.requests.length; request++) {
                if (this.toSubmit.requests[request]) {
                    var index = request + 1;
                    $('#publish_time_slots').append(this.currentTemplate({
                        id: index
                    }));
                    $("input[name=publish_returnDate_" + index + "]").datepicker({
                        buttonImageOnly: true,
                        buttonImage: "calendar.gif",
                        buttonText: "Calendar",
                        onSelect: function (text, inst) {
                            var d = new Date ();
                            d.setDate(inst.selectedDay);
                            d.setMonth(inst.selectedMonth);
                            d.setYear(inst.selectedYear);
                            that.updateValue(this, d);
                            $("input[name=publish_departDate_" + index + "]").datepicker("option", "maxDate", d);
                        }
                    });

                    $("input[name=publish_departDate_" + index + "]").datepicker({
                        buttonImageOnly: true,
                        buttonImage: "calendar.gif",
                        buttonText: "Calendar",
                        minDate: new Date (),
                        defaultDate: this.toSubmit.requests[request].departDate,
                        onSelect: function (text, inst) {
                            var d = new Date ();
                            d.setDate(inst.selectedDay);
                            d.setMonth(inst.selectedMonth);
                            d.setYear(inst.selectedYear);
                            that.updateValue(this, d);
                            $("input[name=publish_returnDate_" + index + "]").datepicker("option", "minDate", d);
                        }
                    });
                    $("#depart_time_"+ index).on("click", function (e) {
                        $(".publish_time_menu").hide();
                        if (e.target.tagName === "LI") {
                            $(this).children().first().val(e.target.textContent);
                            that.updateValue(e);
                            return;
                        }
                        $(this).children().last().toggle();
                    });
                    $("#return_time_"+ index).on("click", function (e) {
                        $(".publish_time_menu").hide();
                        if (e.target.tagName === "LI") {
                            $(this).children().first().val(e.target.textContent);
                            that.updateValue(e);
                            return;
                        }
                        $(this).children().last().toggle();
                    });
                    $("div[name=publish_round_"+ index + "]").on("click", function (e) {
                        if ($(this).hasClass("checked")) {
                            $(this).removeClass("checked");
                        } else {
                            $(this).addClass("checked");
                        }
                        var maximumDate = $("input[name=publish_returnDate_1]").datepicker("getDate");
                        if ($(this).hasClass("checked")) {
                            that.toSubmit.requests[request].round = true;
                            $("input[name=publish_departDate_"+index+"]").datepicker("option", "maxDate", maximumDate);
                            that.toggleDateVisibility(index, false);
                        } else {
                            that.toSubmit.requests[request].round = false;
                            $("input[name=publish_departDate_"+index+"]").datepicker("option", "maxDate", null);
                            that.toggleDateVisibility(index, true);
                        }
                    });
                }
            }
            this.restoreState(2);
        }
        this.adjustContainerHeight();
        $(".input_date").on("keypress", function (e) {
            e.preventDefault();
        });
        $('#publish_time_add').on('click', function () {
            that.onAddClick();
        });
        $('.publish_delete').on('click', function (e) {
            that.deleteSlot(e);
        });
    },
    renderThirdPage: function () {
        var that = this;
        $('#publish_requirement').append(this.step3Template);
        $("#publish_priceList").hide();
        $("#priceList_minus").hide();
        $("#publish_progress").attr("class", "publish publish_step_3");
        this.restoreState(3);
        $("#seats").on("keypress", function (e) {
            if (e.keyCode < 48 || e.keyCode > 57) {
                e.preventDefault();
            }
            that.toSubmit.departureSeats = Utilities.toInt(e.target.value);
            that.toSubmit.returnSeats = Utilities.toInt(e.target.value);
            if (that.toSubmit.departureSeats>1) {
                if ($(".plus_disabled").length) {
                    $(".plus_disabled").attr("class","plus");
                }
            }
        });
        $(".add").on("click", function (e) {
            that.toSubmit.departureSeats++;
            that.toSubmit.returnSeats++;
            $("#seats").val(that.toSubmit.departureSeats);
            if (that.toSubmit.departureSeats>1) {
                if ($(".plus_disabled").length) {
                    $(".plus_disabled").attr("class","plus");
                }
            }
        });
        $(".plus,.plus_disabled").on("click", function (e) {
            debugger;
            if ($(e.target).hasClass("plus_disabled")) {
                return;
            }
            that.toSubmit.departureSeats--;
            that.toSubmit.returnSeats--;
            $("#seats").val(that.toSubmit.departureSeats);
            if (that.toSubmit.departureSeats<=1) {
                $(this).attr("class", "plus_disabled");
            }
        });
        $("#seats_1").on("blur", function (e) {
            that.toSubmit.priceList[0] = Utilities.toInt(e.target.value);
        });
        $('#publish_description_input').on('blur', function (e) {
            that.toSubmit.description = e.target.value;
        });
        $("#priceList_add").on("click", function (e) {
            if (that.toSubmit.priceListEntries < that.toSubmit.departureSeats) {
                var seatId = ++that.toSubmit.priceListEntries;
                $("#priceList_add").before("<div class='publish_priceEntry'>" + "人数" + seatId + "  每人<input id = 'seats_" + seatId + "' type = 'text' class='seat_price' pattern='[0-9]*' />元</div>");
                that.toSubmit.priceList[seatId - 1] = 0;
                $("#publish_priceList, #publish_pricelist_container").animate({
                    height: "+=30"
                }, 200);

                $("#seats_" + seatId).on("blur", function (e) {
                    that.toSubmit.priceList[seatId - 1] = Utilities.toInt(e.target.value);
                });
                $("#priceList_minus").show();
            }
        });
        $("#priceList_minus").on("click", function (e) {
            $(".publish_priceEntry").last().remove();
            var seatId = that.toSubmit.priceListEntries--;
            if (seatId == 2) {
                $("#priceList_minus").hide();
            }
            that.toSubmit.priceList[seatId - 1] = null;
            $("#publish_priceList, #publish_pricelist_container").animate({
                height: "-=30"
            }, 200);

        });
        $("#conditionalPriceSwitch").on("click", function (e) {
            if ($("#conditionalPriceSwitch").hasClass("publish_selected")) {
                $("#conditionalPriceSwitch").removeClass("publish_selected");
                $("#publish_singlePrice").fadeIn();
                $("#publish_priceList").hide();
                that.toSubmit.conditionalPrice = false;
            } else {
                $("#conditionalPriceSwitch").addClass("publish_selected");
                $("#publish_singlePrice").hide();
                $("#publish_priceList").fadeIn();
                that.toSubmit.conditionalPrice = true;
            }

        });
    },
    restoreState: function (page) {
        if (page === 1) {
            $('#publish_type>.active').removeClass('active');
            $('#publish_' + this.toSubmit.type).addClass('active');
            this.updateLocation(1);
        } else if (page === 2) {
            var r = this.toSubmit.requests;
            for (var request = 0; request < r.length; request++) {
                if (r[request]) {
                    var id = Utilities.toInt(request) + 1;
                    if (r[request.round]) {
                        $('div[name=publish_round_' + id + ']').attr("class", "checkbox checked");
                    } else {
                        $('div[name=publish_round_' + id + ']').attr("class", "checkbox");
                    }
                    if (r[request].departDate) {
                        var date = r[request].departDate;
                        $('input[name=publish_departDate_' + id + ']').val((1 + date.getMonth()) + "/" + date.getDate() + "/" + date.getFullYear());
                        $('input[name=publish_returnDate_' + id + ']').datepicker("option", "minDate", date);
                    }
                    if (r[request].round && r[request].returnDate) {
                        var date = r[request].returnDate;
                        $('input[name=publish_departDate_' + id + ']').datepicker("option", "maxDate", this.toSubmit.requests[request].returnDate);
                        $('input[name=publish_returnDate_' + id + ']').val((1 + date.getMonth()) + "/" + date.getDate() + "/" + date.getFullYear());
                    } else {
                        $('input[name=publish_returnDate_' + id + ']').prop("disabled", true);
                        $('#return_time_' + id).prop("disabled", true);
                    }
                    $('#depart_time_' + id).val(r[request].departTime);
                    $('#return_time_' + id).val(r[request].returnTime);
                }
            }
        } else if (page === 3) {
            $("#publish_description_input").val(this.toSubmit.description);
            $("#seats").val(this.toSubmit.departureSeats);
            $(".publish_priceEntry").remove();
            if (this.toSubmit.type === Constants.messageType.ask) {
                $("#publish_pricelist_container").remove();
            }
            if (this.toSubmit.conditionalPrice) {
                $("#conditionalPriceSwitch").addClass("publish_selected");
                $("#publish_singlePrice").hide();
                $("#publish_priceList").show();
                var entryNum = 0;
                for (var i = 0; i < this.toSubmit.priceList.length; i++) {
                    var id = i + 1;
                    entryNum++;
                    $("#priceList_add").before("<div class='publish_priceEntry'>人数"+ id + "  每人<input id = 'seats_" + id + "' type = 'text' class='seat_price' pattern='[0-9]*' />元</div>");
                    $("#seats_" + id).val(this.toSubmit.priceList[i]);
                }
                this.toSubmit.priceListEntries = entryNum;
                var height = 70 + (entryNum - 1 ) * 30;
                $("#publish_priceList, #publish_pricelist_container").css("height", height);

                if (entryNum > 1) {
                    $("#priceList_minus").show();
                }
            } else {
                $("#priceList_add").before("<div class='publish_priceEntry'>" + "人数1  每人<input id = 'seats_1' type = 'text' class='seat_price' pattern='[0-9]*' />元</div>");
                $("#seatsNumber_1").val(1);
                $("#seats_1").val(this.toSubmit.priceList[0]);
                $("#conditionalPriceSwitch").removeClass("publish_selected");
                $("#publish_singlePrice").show();
                $("#publish_priceList").hide();
            }
        }
    },

    unbindStepEvents: function (previousStepIndex) {
        if (previousStepIndex === 1) {
            $('#publish_type>div').off();
        } else if (previousStepIndex === 2) {
            $('#publish_time_add').off();
            $('.publish_delete').off();
            $('.select_item').off();
            var id;
            for ( id = 0; id < this.toSubmit.requests.length; id++) {
                $("#depart_time_" + id).off();
                $("#return_time_" + id).off();
                $("input[name=publish_departDate_" + id + "]").off();
                $("input[name=publish_returnDate_" + id + "]").off();
                $("div[name=publish_round_" + id + "]").off();
            }
        } else if (previousStepIndex === 3) {
            $("#seats").off();
            $("#seats_1").off();
            $('#publish_finish').off();
            $("#priceList_add").off();
            $("#priceList_minus").off();
            $("#conditionalPriceSwitch").off();
            $('#publish_description_input').off();
        }
    },

    onTypeSelect: function (e) {
        $('#publish_type>.active').removeClass('active');
        $(e.delegateTarget).addClass('active');
        this.toSubmit.type = e.delegateTarget.id === "publish_0" ? Constants.messageType.ask : Constants.messageType.help;
    },
    onAddClick: function () {
        var index = this.toSubmit.requests.length;
        var that = this;
        var id = index + 1;
        this.toSubmit.numberRequests++;
        this.toSubmit.requests[index] = {};
        this.toSubmit.requests[index].type = this.toSubmit.type;
        this.toSubmit.requests[index].id = id;
        this.toSubmit.requests[index].timeAvailable = [false, false, false];
        $('#publish_time_slots').append(this.currentTemplate({
            id: id
        }));
        $('#publish_delete_' + id).on('click', function (e) {
            that.deleteSlot(e);
        });
        $("#depart_time_" + id).on("click", function(e) {
            $(".publish_time_menu").hide();
            if (e.target.tagName === "LI") {
                $(this).children().first().val(e.target.textContent);
                that.updateValue(e);
                return;
            }
            $(this).children().last().toggle();
        });
        $("#return_time_" + id).on("click", function(e) {
            $(".publish_time_menu").hide();
            if (e.target.tagName === "LI") {
                $(this).children().first().val(e.target.textContent);
                that.updateValue(e);
                return;
            }
            $(this).children().last().toggle();
        });

        $('div[name=publish_round_' + id + ']').on('click', function (e) {
            if ($(this).hasClass("checked")) {
                $(this).removeClass("checked");
            } else {
                $(this).addClass("checked");
            }
            var maximumDate = $("input[name=publish_returnDate_" + id + "]").datepicker("getDate");
            if ($(this).hasClass("checked")) {
                that.toSubmit.requests[index].round = true;
                $("input[name=publish_departDate_" + id + "]").datepicker("option", "maxDate", maximumDate);
                that.toggleDateVisibility(id, false);
            } else {
                that.toSubmit.requests[index].round = false;
                $("input[name=publish_departDate_" + id + "]").datepicker("option", "maxDate", null);
                that.toggleDateVisibility(id, true);
            }
        });
        $("input[name=publish_departDate_" + id + "]").datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                that.updateValue(this, d);
                $("input[name=publish_returnDate_" + id + "]").datepicker("option", "minDate", d);
            }
        });
        $("input[name=publish_returnDate_" + id + "]").datepicker({
            buttonImageOnly: true,
            buttonImage: "calendar.gif",
            buttonText: "Calendar",
            minDate: new Date (),
            onSelect: function (text, inst) {
                var d = new Date ();
                d.setDate(inst.selectedDay);
                d.setMonth(inst.selectedMonth);
                d.setYear(inst.selectedYear);
                that.updateValue(this, d);
                $("input[name=publish_departDate_" + id + "]").datepicker("option", "maxDate", d);
            }
        });
        $("input[name=publish_returnDate_" + id + "]").on("keypress", function (e) {
            e.preventDefault();
        });
        $("input[name=publish_departDate_" + id + "]").on("keypress", function (e) {
            e.preventDefault();
        });
        this.adjustContainerHeight();
    },
    adjustContainerHeight: function () {
        var height = this.toSubmit.numberRequests * 204 + 20;
        $('#publish_time_container').css('height', height);
        $('#publish_requirement').css('height', height + 100);
    },
    toggleDateVisibility: function (id, state) {
        if (state) {
            $("#publish_time_"+id+">dl").last().addClass("disabled");
        } else {
            $("#publish_time_"+id+">dl").last().removeClass("disabled");
        }
        $('input[name=publish_returnDate_' + id + ']').prop('disabled', state);
        $('#return_time_' + id).prop('disabled', state);
    },
    updateValue: function (e, d) {
        var id;
        if (e.target && e.target.value !== "") {
            debugger;   
            var name = $(e.delegateTarget).attr("id");
            id = this.getId(name);
            if (name.indexOf("depart_time") > -1) {
                this.toSubmit.requests[Utilities.toInt(id) - 1].departTime = e.target.value;
            } else if (name.indexOf("return_time") > -1) {
                this.toSubmit.requests[Utilities.toInt(id) - 1].returnTime = e.target.value;
            }
        } else if (e.name && d) {
            id = this.getId(e.name);
            if (e.name.indexOf("publish_departDate_") === 0) {
                this.toSubmit.requests[Utilities.toInt(id) - 1].departDate = d;
                var round = $("div[name=publish_round_" + id + "]").hasClass("checked");
                this.toSubmit.requests[Utilities.toInt(id) - 1].round = round;

            } else if (e.name.indexOf("publish_returnDate_") === 0) {
                this.toSubmit.requests[Utilities.toInt(id) - 1].returnDate = d;
                this.toSubmit.requests[Utilities.toInt(id) - 1].round = true;
            }
        }
    },
    deleteSlot: function (e) {
        var id = this.getId(e.target.id);
        $('#publish_time_' + id).remove();
        this.toSubmit.numberRequests--;
        this.toSubmit.requests[Utilities.toInt(id) - 1] = null;
        this.adjustContainerHeight();
        $('#publish_delete_' + id).off();
        $("#depart_time_" + id).off();
        $("#return_time_" + id).off();

        $('div[name=publish_round_' + id + ']').off();
        $("input[name=publish_returnDate_" + id + "]").off();
        $("input[name=publish_departDate_" + id + "]").off();

    },

    getId: function (str) {
        var list = str.split("_");
        return list[list.length - 1];
    },
    validate: function (page) {

        var counter = 0;

        if (page === 1) {
            if (Utilities.isEmpty($("#publish_originInput").val())) {
                $("#publish_origin>dd").after('<dd class="wrong"><p>很抱歉，该地址无效，请输入正确的地址</p></dd>');
                return false;
            } else if (Utilities.isEmpty($("#publish_destInput").val())) {
                $("#publish_origin>dd").after('<dd class="wrong"><p>很抱歉，该地址无效，请输入正确的地址</p></dd>');
                return false;
            } else {
                return true;
            }
        } else if (page === 2) {
            var requests = this.toSubmit.requests;
            counter = 0;
            if (this.toSubmit.numberRequests === 0) {
                return false;
            }

            for (var request = 0; request < requests.length; request++) {
                if (!requests[request])
                    continue;
                counter++;
                if (requests[request].round) {
                    if (Utilities.isEmpty(requests[request].returnDate)) {
                        return false;
                    }
                } else if (Utilities.isEmpty(requests[request].departDate)) {
                    return false;
                }
            }
        } else {

        }
        if (counter > 0)
            return true;
    },

    toMessage: function () {
        //validate before finish
        var messages = new Messages (), i;
        if (this.toSubmit.type === Constants.messageType.ask) {
            this.toSubmit.priceList = [];
        } else {
            if (!this.toSubmit.conditionalPrice) {
                this.toSubmit.priceList[0] = Utilities.toInt($("#seats_single").val());
            } else {
                for ( i = 1; i <= this.toSubmit.departureSeats; i++) {
                    this.toSubmit.priceList[i] = 0;
                }
                for ( i = 1; i <= this.toSubmit.priceListEntries; i++) {
                    var seatNumber = $("#seatsNumber_" + i).val();
                    seatNumber = Utilities.toInt(seatNumber);
                    this.toSubmit.priceList[seatNumber - 1] = Utilities.toInt($("#seats_" + i).val()) || 0;
                }
            }
        }
        this.toSubmit.origin.reverseFill();
        this.toSubmit.dest.reverseFill();
        for (var r = 0; r < this.toSubmit.requests.length; r++) {
            if (this.toSubmit.requests[r]) {
                var t = new Transaction ();
                var m = new Message ();
                m.set("type", this.toSubmit.type === Constants.messageType.ask ? Constants.messageType.ask : Constants.messageType.help);
                m.set("ownerId", this.user.get("userId"));
                m.set("departure_location", this.toSubmit.origin);
                m.set("arrival_location", this.toSubmit.dest);
                m.set("note", this.toSubmit.description);
                m.set("departure_time", this.toSubmit.requests[r].departDate);
                m.set("departure_location", this.toSubmit.origin);
                m.set("departure_seatsNumber", this.toSubmit.departureSeats);
                m.set("departure_priceList", this.toSubmit.priceList);
                if (this.toSubmit.requests[r].round) {
                    m.set("isRoundTrip", true);
                    m.set("arrival_time", this.toSubmit.requests[r].returnDate);
                    m.set("arrival_location", this.toSubmit.dest);
                    m.set("arrival_seatsNumber", this.toSubmit.departureSeats);
                    m.set("arrival_priceList", this.toSubmit.priceList);
                }
                messages.add(m);
            }
        }
        return messages;
    },
    close: function () {
        if (!this.isClosed) {
            this.map.close();
            this.unbindStepEvents(this.stepIndex);
            this.domContainer.empty();
            this.isClosed = true;
            this.toSubmit = {
                "origin": new UserLocation (),
                "dest": new UserLocation (),
                "type": Constants.messageType.ask,
                "numberRequests": 0,
                "requests": [],
                "description": "",
                "priceList": [0],
                "departureSeats": 1,
                "returnSeats": 1,
                "priceListEntries": 1,
                "conditionalPrice": false
            };
        }
    }
});
