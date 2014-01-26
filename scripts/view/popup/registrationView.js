
/*dedicated view for user registration, deep linking will not be used for registrtion states, this view holds the session data*/
var RegistrationView = Backbone.View.extend({

    el: "",

    initialize: function(params){
        _.bindAll(this, 'render', 'bindEvents', 'finish', 'acceptDefaultLocation', 'closeLocationDropDown', 'close');
        app.viewRegistration.register("registration", this, true);
        this.isClosed = false; 
        this.state = params.state || "default";

        this.baseTemplate = _.template(tpl.get('registration'));
        this.finishTemplate = _.template(tpl.get('registration_finish'));
        this.registerInfo = {"location":new UserLocation()};
        this.out = false;
        this.geocoder = new google.maps.Geocoder();
        this.render(1);
    },
    getLatLng: function (loc) {
        var request = {}, that = this;
        loc.set("defaultId", -1);
        request.address = loc.get("pointName") + "," + loc.get("city") + "," + loc.get("province");
        var result = this.geocoder.geocode(request, function (geocodeResults, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                loc.set("lat", geocodeResults[0].geometry.location.lat());
                loc.set("lng", geocodeResults[0].geometry.location.lng());
                that.valid.location = false;
                if (!that.registerInfo.pivot) {
                    $("#pivotLocation").parent().addClass("wrong").append("<p id='vlocation' title='请选择一个地区'></p>");
                    return;
                }
                if (!that.registerInfo.pivot.isInRange(that.registerInfo.location)) {
                    $("#pivotLocation").parent().addClass("wrong").append("<p id='vlocation' title='对不起，该地区暂时不在服务区'></p>");
                    return;
                }
                that.valid.location = true;
            } else {
                Info.warn('Geocode was not successful for the following reason: ' + status);
            }
        });
    },
    render: function(){
        this.domContainer = $('#content');
        if (this.state !== "finish") {
            this.domContainer.empty();
            this.domContainer.append(this.baseTemplate);
            this.registerContainer = $('#registerContainer');
            this.contentContainer = $('#registerContent');
            $("#loginBox").hide();
            this.$password = $("#registerPasswordInput");
            this.$confirm = $("#registerPasswordConfirmInput");
            this.$email = $('#registerEmailInput');
            this.$year = $("#birthyear");
            this.$month = $("#birthmonth");
            this.$day = $("#birthday");
            this.bindEvents();
            this.bindValidator();
        } else {
            this.domContainer.append(this.finishTemplate);
            $("#emailValue").html(this.emailCache);
            var emailDomain = this.emailCache.split("@")[1];
            $("#gotoEmail").on("click", function (e) {
                window.open("http://"+emailDomain);
            });
        }

        // --- events binding ---
    },
    bindValidator: function(){
        this.valid = {};
        //email regex
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            that = this;
        this.$email.on("blur", function (e) {
            $("#vemail").remove();
            that.$email.parent().removeClass("wrong");
            if (re.test(that.$email.val())) {
                that.valid.email = true;
                that.registerInfo.email = that.$email.val();
                that.$email.after('<span id="vemail" class="right"></span>');
            } else {
                that.valid.email = false;
                that.$email.parent().addClass("wrong").append('<p id="vemail" title="邮箱地址有误"></p>');
            }

        });
        this.$password.add(this.$confirm).on("blur", function (e) {
            var p = that.$password.val();
            $("#vpass").remove();
            $("#vpass2").remove();
            that.$password.parent().removeClass("wrong");
            that.$confirm.parent().removeClass("wrong");
            if (p && p.length >= 8 && that.$password.val() === that.$confirm.val()) {
                that.$password.after('<span id="vpass" class="right"></span>');
                that.$confirm.after('<span id="vpass2" class="right"></span>');
                that.valid.password = true;
                that.registerInfo.password = that.$password.val();
            } else {
                if (!p || p.length < 8) {
                    that.$password.parent().addClass("wrong").append('<p id="vpass" title="密码长度至少为8位"></p>');
                } else {
                    that.$confirm.parent().addClass("wrong").append('<p id="vpass2" title="两次输入密码不匹配"></p>');
                }
                that.valid.password = false;
            }
        });
        this.$year.add(this.$month).add(this.$day).on("blur", function (e) {
            var y = that.$year.val(), m = that.$month.val(), d = that.$day.val(), bdvalid = true;
            debugger;
            if ( y && m && d ) {
                $(this).parent().removeClass("wrong");
                $("#vbirth").remove();
                y = Utilities.toInt(y);
                m = Utilities.toInt(m);
                d = Utilities.toInt(d);
                if ( y < 1910 || y > 2012 ) {
                    bdvalid = false;
                }
                if ( m < 1 || m > 12 ) {
                    bdvalid = false;
                }
                if (m < 1 || m > 31) {
                    bdvalid = false;
                } else if (m === 4 || m === 6 ||m === 9 || m === 11){
                    bdvalid = bdvalid && (d <= 30);
                } else if (m === 2) {
                    if ( y % 4 === 0 ) {
                        bdvalid = bdvalid && (d <= 29);
                    } else {
                        bdvalid = bdvalid && (d <= 28)
                    }
                }
                if (!bdvalid) {
                    $(this).parent().addClass("wrong").append("<p id='vbirth' title='请填写正确的日期'></p>");
                    that.registerInfo.birthday = null;
                    that.valid.birthday = false;
                } else {
                    $(this).parent().append("<span id='vbirth' class='right'></span>");
                    that.registerInfo.birthday = new Date();
                    that.registerInfo.birthday.setFullYear(y);
                    that.registerInfo.birthday.setMonth(m);
                    that.registerInfo.birthday.setDate(d);
                    that.valid.birthday = true;
                }
            } else {
                that.registerInfo.birthday = null;
            }
        });
    },
    bindEvents: function(){
        var that = this;
        $("#registerGenderSelect").on("click", function (e) {
            $(this).find(".radio_box_checked").removeClass("radio_box_checked");
            var g = $(e.target).addClass("radio_box_checked").attr("data-id");
            if (g === "male") {
                that.registerInfo.gender = Constants.gender.female;
            } else if (g === "male") {
                that.registerInfo.gender = Constants.gender.male;
            }
        });

        $('#pivotLocation').on('click', function (e) {
            that.closeLocationDropDown();
            that.locationDropDownView = new LocationDropDownView($('#pivotLocation'), that);
            e.stopPropagation();
        });

        $("#myAddress").on('blur', function (e) {
            if ($(this).val() && $(this).val() !== "请输入具体地址") {
                that.registerInfo.location.set("pointAddress", $(this).val())
            }
            that.getLatLng(that.registerInfo.location);
        }).on('focus', function() {
            if ($(this).val() === "请输入具体地址") {
                $(this).val("");
            }
        });
        $("#complete").on("click", function(){
            if (that.valid.email) {
            } else {
                if ($("#vemail").length === 0) {
                    that.$email.parent().addClass("wrong").append('<p id="vemail" title="请输入你的邮箱"></p>');
                }
                return;
            }
            if (that.valid.password) {
            } else {
                if ($("#vpass").length === 0) {
                    that.$password.parent().addClass("wrong").append('<p id="vpass" title="请输入一个密码"></p>');
                    that.$confirm.parent().addClass("wrong").append('<p id="vpass2" title="请输入一个密码"></p>');
                }
                return;   
            }
            if (that.valid.location) {
            } else {
                if ($("#vlocation").length === 0) {
                    $('#pivotLocation').parent().addClass("wrong").append('<p id="vlocation" title="请选择你的地址"></p>');
                }
                return;
            }
            // if (that.valid.birthday ) {

            // } else {
            //     return;
            // }
            that.registerInfo.email = $('#registerEmailInput').val();
            that.registerInfo.password = $('#registerPasswordInput').val();

            var user = new User();
            user.set('location', that.registerInfo.location);
            user.set('gender', that.registerInfo.gender);
            user.set('email', that.registerInfo.email);
            user.set('password', that.registerInfo.password);

            if (that.registerInfo.birthday) {
                user.set("birthday", that.registerInfo.birthday);
            }
            app.userManager.registerUser(user, {
                success: function(){
                    that.emailCache = user.get('email');
                    app.navigate("register/finish");
                    //that.render(4);
                    Info.alert('注册成功');
                },

                error: function(){
                    Info.alert("注册失败，请稍后再试");
                }

            });
            
        });
    },

    finish: function(){
        Info.displayNotice("注册成功");
    },

    acceptDefaultLocation: function(defaultLocation){
        this.registerInfo.pivot = defaultLocation;
        this.registerInfo.location.copy(this.registerInfo.pivot);
        this.registerInfo.location.set("pointName", $("#myAddress").val());
        $('#pivotLocation').val(defaultLocation.toUiString());
    },

    closeLocationDropDown: function(){
        if (typeof this.locationDropDownView !== 'undefined' && this.locationDropDownView !== null){
            this.locationDropDownView.close();
        }
    },

    close: function(){
        if (!this.isClosed){
            $("#register-modal-closeButton").off();
            this.domContainer.empty();
            this.isClosed = true;
        }
    }


});