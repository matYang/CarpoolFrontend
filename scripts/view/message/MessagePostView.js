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
        _.bindAll(this, 'render', 'acceptDefaultLocation', 'closeLocationDropDown', 'renderFirstPage', 'renderSecondPage', 'renderThirdPage', 'unbindStepEvents', 'onTypeSelect', 'onAddClick', 'toggleDateVisibility', 'updateValue', 'deleteSlot', 'validate', 'getId', 'toMessage',  'close');
        this.isClosed = false;
        this.baseTemplate = _.template(tpl.get('Publish_base'));
        this.step1Template = _.template(tpl.get('Publish_step1'));
        this.step2Template = _.template(tpl.get('Publish_step2'));
        this.step3Template = _.template(tpl.get('Publish_step3'));
        this.askSlotTemplate = _.template(tpl.get('Publish_singleSlotAsk'));
        this.priceEntryTemplate = ['<div class="publish_price_list_entry"><label>人数：', -1, '</label><input id = "seats_', -1, '" type="text" value=""/><label>元/人</label></div>'];

        this.user = app.sessionManager.getSessionUser();
        this.userId = this.user.get("userId");

        this.domContainer = $('#content');
        this.domContainer.append(this.baseTemplate);
        this.$publishContent = $('#publish_requirement');
        this.$progress = $('#publish_progress');
    },

    render: function (stepIndex) {
        // --- events binding ---
        this.unbindStepEvents(this.stepIndex);
        this.$publishContent.empty();

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
    closeLocationDropDown: function(){
        if (typeof this.locationDropDownView !== 'undefined' && this.locationDropDownView !== null){
            this.locationDropDownView.close();
        }
    },
    acceptDefaultLocation: function(defaultLocation){
        var addr,
            lat, lng;
        if (this.locationDirection === Constants.LocationDirection.from){
            lat = this.toSubmit.origin.get("lat");
            lng = this.toSubmit.origin.get("lng");
            addr = this.$page1originAddr.val();
            addr = "请输入具体地址" === addr ? "" : addr;
            this.toSubmit.origin = defaultLocation;
            if (addr) {
                this.toSubmit.origin.set("pointAddress", addr);
                this.toSubmit.origin.set("defaultId", -1);
                this.toSubmit.origin.set("lat", lat);
                this.toSubmit.origin.set("lng", lng);
            }
            this.$page1origin.val(this.toSubmit.origin.toUiString());
        }
        else if (this.locationDirection === Constants.LocationDirection.to){
            lat = this.toSubmit.dest.get("lat");
            lng = this.toSubmit.dest.get("lng");
            addr = this.$page1destAddr.val();
            addr = "请输入具体地址" === addr ? "" : addr;
            this.toSubmit.dest = defaultLocation;
            if (addr) {
                this.toSubmit.dest.set("pointAddress", addr);
                this.toSubmit.dest.set("defaultId", -1);
                this.toSubmit.dest.set("lat", lat);
                this.toSubmit.dest.set("lng", lng);
            }
            this.$page1dest.val(this.toSubmit.dest.toUiString());
        }
        if (this.map) {
            this.map.getDirection(this.toSubmit.origin, this.toSubmit.dest);
        }
    },

    renderFirstPage: function () {
        this.$publishContent.append(this.step1Template());
        this.$progress.attr("class", "publish publish_step_1");
        var that = this;
        this.$page1type = $('#publish_type>div').on('click', function (e) {
            that.onTypeSelect(e);
        });
        this.$page1origin = $('#publish_originInput').on("click", function (e) {
            $("#originWrong").remove();
            $("#destWrong").remove();
            that.closeLocationDropDown();
            that.locationDirection = Constants.LocationDirection.from;

            that.closeLocationDropDown();
            that.locationDropDownView = new LocationDropDownView($("#from"), that);
            e.stopPropagation();
        });
        this.$page1dest = $('#publish_destInput').on("click", function (e) {
            $("#originWrong").remove();
            $("#destWrong").remove();
            that.closeLocationDropDown();
            that.locationDirection = Constants.LocationDirection.to;

            that.closeLocationDropDown();
            that.locationDropDownView = new LocationDropDownView($("#to"), that);
            e.stopPropagation();
        });
        this.$page1originAddr = $('#publish_originAddress');
        this.$page1destAddr = $('#publish_destAddress');

        this.$page1originAddr.on("focus", function() {
            if ($(this).val() === "请输入具体地址") {
                $(this).val("");
            }
        }).on("blur", function () {
            if ($(this).val() === "") {
                $(this).val("请输入具体地址");
            } else {
                that.toSubmit.origin.set("pointAddress", $(this).val());
                that.buildGeocodeRequest(that.toSubmit.origin, "origin");
            }
        });
        this.$page1destAddr.on("focus", function() {
            if ($(this).val() === "请输入具体地址") {
                $(this).val("");
            }
        }).on("blur", function () {
            if ($(this).val() === "") {
                $(this).val("请输入具体地址");
            } else {
                that.toSubmit.dest.set("pointAddress", $(this).val());
                that.buildGeocodeRequest(that.toSubmit.dest, "dest");
            }
        });
        this.restoreState(1);
        var mapConfig = {};
        mapConfig.div = "publish_map";
        mapConfig.class = "publish_map";
        mapConfig.originLocation = this.toSubmit.origin || this.user.get("location");
        mapConfig.destLocation = this.toSubmit.dest || this.user.get("location");
        mapConfig.init = this;
        mapConfig.clickable = true;
        if (!this.map) {
            this.map = app.storage.getViewCache("MapView", mapConfig);
        } else if ($("#mapcache").length){
            this.map.cacheConfig(mapConfig);
        }
    },
    buildGeocodeRequest: function (location, point) {
        var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + location.get("pointAddress") + "," + location.get("city") + "&sensor=false", that = this;
        $.ajax({
              url: url,
              context: document.body
        }).done(function(json) {
            that.map.setMarker(json, point);
        });
    },
    updateByMapMarker: function (type, json) {
        if (type === "origin") {
            this.$page1originAddr.val(json.results[0].formatted_address.split(",")[0]);
            this.toSubmit.origin.parseGoogleJson(json);
        } else {
            this.$page1destAddr.val(json.results[0].formatted_address.split(",")[0]);
            this.toSubmit.dest.parseGoogleJson(json);
        }
    },
    updateLocation: function (flag, id) {
        this.$page1origin.val(this.toSubmit.origin.toUiString());
        this.$page1dest.val(this.toSubmit.dest.toUiString());
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
        this.$publishContent.append(this.step2Template());
        this.$progress.attr("class", "publish publish_step_2");
        var that = this;
        this.currentTemplate = this.askSlotTemplate;
        this.refactorRequests();
        this.$timeSlots = $('#publish_time_slots');
        if (this.toSubmit.requests.length === 0 || this.toSubmit.requests[0].type !== this.toSubmit.type) {
            this.toSubmit.requests = [];
            this.toSubmit.requests[0] = {};
            this.toSubmit.requests[0].departTime = 0;
            this.toSubmit.requests[0].returnTime = 0;
            this.toSubmit.requests[0].id = 1;
            this.toSubmit.requests[0].type = this.toSubmit.type;
            this.toSubmit.requests[0].round = true;
            this.toSubmit.numberRequests = 1;

            this.$timeSlots.append(this.currentTemplate({
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
        } else {
            for (var request = 0; request < this.toSubmit.requests.length; request++) {
                if (this.toSubmit.requests[request]) {
                    var index = request + 1;
                    this.$timeSlots.append(this.currentTemplate({
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
                }
            }
            this.restoreState(2);
        }
        this.$timeSlots.on("click", ".depart_time", function (e) {
            $(".publish_time_menu").hide();
            if (e.target.tagName === "LI") {
                $(this).children().first().val(e.target.textContent);
                that.updateValue(e);
                return;
            }
            $(this).children().last().toggle();
        });
        this.$timeSlots.on("click", ".return_time", function (e) {
            $(".publish_time_menu").hide();
            if (e.target.tagName === "LI") {
                $(this).children().first().val(e.target.textContent);
                that.updateValue(e);
                return;
            }
            $(this).children().last().toggle();
        });
        this.$timeSlots.on("click", ".checkbox", function (e) {
            if ($(this).hasClass("checked")) {
                $(this).removeClass("checked");
            } else {
                $(this).addClass("checked");
            }
            var boxId = Utilities.toInt(Utilities.getId($(e.target).attr("name")));
            var maximumDate = $("input[name=publish_returnDate_" + boxId + "]").datepicker("getDate");
            if ($(this).hasClass("checked")) {
               that.toSubmit.requests[0].round = true;
                $("input[name=publish_departDate_"+ boxId + "]").datepicker("option", "maxDate", maximumDate);
                that.toggleDateVisibility(boxId, false);
            } else {
                that.toSubmit.requests[0].round = false;
                $("input[name=publish_departDate_"+ boxId + "]").datepicker("option", "maxDate", null);
                that.toggleDateVisibility(boxId, true);
            }
        });
        this.$timeSlots.on('click', '.publish_delete', function (e) {
            that.deleteSlot(e);
        });
        $('#publish_time_add').find("input").on('click', function () {
            that.onAddClick();
        });
        this.$timeSlots.on("keypress", "input.date", function (e) {
            e.preventDefault();
        });

    },
    renderThirdPage: function () {
        var that = this;
        this.$publishContent.append(this.step3Template);
        this.$description = $('#publish_description_input');
        this.$seats = $("#seats");
        this.$upArrow = $("#seats_control>.add");
        this.$downArrow = $("#seats_control>.plus_disabled");
        if (this.$downArrow.length === 0) {
            this.$downArrow = $("#seats_control>.plus");
        }
        
        this.$priceListContainer = $("#publish_pricelist_container");
        if (this.toSubmit.type === Constants.messageType.help) {
            this.$priceList = $("#publish_priceList");
            this.$singlePrice = $("#publish_singlePrice");
            this.$conditionalPriceSwitch = $("#conditionalPriceSwitch");
            this.$priceAdd = $("#publish_price_add");
        }

        this.$priceListContainer.hide();

        this.$progress.attr("class", "publish publish_step_3");
        this.restoreState(3);
        this.$seats.on("keyup", function (e) {
            if (e.keyCode < 48 || e.keyCode > 57) {
                e.preventDefault();
            }
            that.toSubmit.departureSeats = Utilities.toInt(e.target.value);
            that.toSubmit.returnSeats = Utilities.toInt(e.target.value);
            if (that.toSubmit.departureSeats>1) {
                that.$downArrow.attr("class","plus");
            } else {
                that.$downArrow.attr("class","plus_disabled");
            }
        });
        this.$upArrow.on("click", function (e) {
            that.toSubmit.departureSeats++;
            that.toSubmit.returnSeats++;
            that.$seats.val(that.toSubmit.departureSeats);
            if (that.toSubmit.departureSeats>1) {
                that.$downArrow.attr("class","plus");
            }
            $("#publish_seats_full").remove();
        });
        that.$downArrow.on("click", function (e) {
            if ($(this).hasClass("plus_disabled")) {
                return;
            }
            that.toSubmit.departureSeats--;
            that.toSubmit.returnSeats--;
            that.$seats.val(that.toSubmit.departureSeats);
            if (that.toSubmit.departureSeats<=1) {
                $(this).attr("class", "plus_disabled");
            }
        });
        this.$description.on('blur', function (e) {
            that.toSubmit.description = e.target.value;
        });
        if (this.toSubmit.type === Constants.messageType.help) {
            this.$priceList.on("blur", "input", function (e) {
                that.toSubmit.priceList[Utilities.toInt(Utilities.getId(e.target.id))] = Utilities.toInt(e.target.value);
            });
            this.$priceAdd.on("click", function (e) {
                if (that.toSubmit.priceListEntries < that.toSubmit.departureSeats) {
                    var seatId = ++that.toSubmit.priceListEntries;
                    that.priceEntryTemplate[1] = seatId;
                    that.priceEntryTemplate[3] = seatId;
                    that.$priceList.append(that.priceEntryTemplate.join(""));
                    that.toSubmit.priceList[seatId - 1] = 0;
                    that.$entryClose.show();
                    that.$entryClose.appendTo(that.$priceList.children(".publish_price_list_entry").last());
                } else {
                    if ($("#publish_seats_full").length === 0) {
                        that.$priceListContainer.append('<div id="publish_seats_full" class="publish_price_notice" style="float:left">请添加更多座位</div>');
                    }
                }
            });
            this.$entryClose.on("click", function (e) {
                $(this).appendTo(that.$priceList.children(".publish_price_list_entry:nth-last-child(2)").last());
                that.$priceList.children(".publish_price_list_entry").last().remove();
                var seatId = that.toSubmit.priceListEntries--;
                if (seatId <= 2) {
                    that.$entryClose.hide();
                }
                that.toSubmit.priceList[seatId - 1] = null;
            });
            this.$conditionalPriceSwitch.on("click", function (e) {
                if ($(this).hasClass("checked")) {
                    $(this).removeClass("checked");
                    that.$singlePrice.fadeIn();
                    that.$priceListContainer.hide();
                    that.toSubmit.conditionalPrice = false;
                } else {
                    $(this).addClass("checked");
                    that.$singlePrice.hide();
                    that.$priceListContainer.fadeIn();
                    that.toSubmit.conditionalPrice = true;
                }

            });
        }
    },
    restoreState: function (page) {
        var date, id;
        if (page === 1) {
            $('#publish_type>.active').removeClass('active');
            $('#publish_' + this.toSubmit.type).addClass('active');
            this.updateLocation(1);
        } else if (page === 2) {
            var r = this.toSubmit.requests;
            for (var request = 0; request < r.length; request++) {
                if (r[request]) {
                    id = Utilities.toInt(request) + 1;
                    if (r[request.round]) {
                        $('div[name=publish_round_' + id + ']').attr("class", "checkbox checked");
                    } else {
                        $('div[name=publish_round_' + id + ']').attr("class", "checkbox");
                    }
                    if (r[request].departDate) {
                        date = r[request].departDate;
                        $('input[name=publish_departDate_' + id + ']').val((1 + date.getMonth()) + "/" + date.getDate() + "/" + date.getFullYear());
                        $('input[name=publish_returnDate_' + id + ']').datepicker("option", "minDate", date);
                    }
                    if (r[request].round && r[request].returnDate) {
                        date = r[request].returnDate;
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
            this.$description.val(this.toSubmit.description);
            this.$seats.val(this.toSubmit.departureSeats);
            if (this.toSubmit.type === Constants.messageType.ask) {
                $("#publish_price_container").remove();
                return;
            }
            this.$priceList.children(".publish_price_list_entry").remove();
            if (this.toSubmit.conditionalPrice) {
                this.$conditionalPriceSwitch.addClass("publish_selected");
                this.$singlePrice.hide();
                this.$priceListContainer.show();
                var entryNum = 0;
                id = 0;
                for (var i = 0; i < this.toSubmit.priceList.length; i++) {
                    d = i + 1;
                    entryNum++;
                    this.priceEntryTemplate[1] = id;
                    this.priceEntryTemplate[3] = id;
                    this.$priceList.append(this.priceEntryTemplate.join(""));
                    $("#seats_" + id).val(this.toSubmit.priceList[i]);
                }
                this.toSubmit.priceListEntries = entryNum;
                this.$priceList.children(".publish_price_list_entry").last().append('<div id="publish_entry_close" class="close">关闭</div>');
                this.$entryClose = $("#publish_entry_close");
                if (entryNum === 1) {
                    this.$entryClose.hide();
                }
            } else {
                this.priceEntryTemplate[1] = 1;
                this.priceEntryTemplate[3] = 1;
                this.$priceList.append(this.priceEntryTemplate.join(""));
                this.$priceList.children(".publish_price_list_entry").last().append('<div id="publish_entry_close" class="close">关闭</div>');
                this.$entryClose = $("#publish_entry_close");
                this.$entryClose.hide();
                $("#seatsNumber_1").val(1);
                $("#seats_1").val(this.toSubmit.priceList[0]);
                this.$conditionalPriceSwitch.removeClass("publish_selected");
                this.$singlePrice.show();
                this.$priceListContainer.hide();
            }
        }
    },

    unbindStepEvents: function (previousStepIndex) {
        if (previousStepIndex === 1) {
            this.$page1type.off();
            this.$page1originAddr.off();
            this.$page1destAddr.off();
        } else if (previousStepIndex === 2) {
            this.$timeSlots.off();
            $('#publish_time_add').off();
        } else if (previousStepIndex === 3) {
                this.$description.off();
                this.$seats.off();
                this.$upArrow.off();
                this.$downArrow.off();
            if (this.toSubmit.type === Constants.messageType.help) {
                $("#seats_1").off();
                $('#publish_finish').off();
                this.$priceAdd.off();
                this.$conditionalPriceSwitch.off();
                this.$priceList.off();
                this.$entryClose.off();
            }
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
        this.$timeSlots.append(this.currentTemplate({
            id: id
        }));
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
    },

    getId: function (str) {
        var list = str.split("_");
        return list[list.length - 1];
    },
    validate: function (page) {

        var counter = 0;

        if (page === 1) {
            if (Utilities.isEmpty($("#publish_originInput").val())) {
                $("#publish_origin>dd").after('<dd id="originWrong" class="wrong"><p>很抱歉，该地址无效，请输入正确的地址</p></dd>');
                return false;
            } else if (Utilities.isEmpty($("#publish_destInput").val())) {
                $("#publish_dest>dd").after('<dd id="destWrong" class="wrong"><p>很抱歉，该地址无效，请输入正确的地址</p></dd>');
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
            this.closeLocationDropDown();
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
