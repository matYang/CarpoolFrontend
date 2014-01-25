
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
        var request = {}, me = this;
        loc.set("defaultId", -1);
        request.address = loc.get("pointName") + "," + loc.get("city") + "," + loc.get("province");
        var result = this.geocoder.geocode(request, function (geocodeResults, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                loc.set("lat", geocodeResults[0].geometry.location.lat());
                loc.set("lng", geocodeResults[0].geometry.location.lng());
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
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            that = this;
        this.$email.on("blur", function (e) {
            $("#vemail").remove();
            if (re.test(that.$email.val())) {
                that.valid.email = true;
                that.$email.after('<span id="vemail" class="right"></span>');
            } else {
                that.valid.email = false;
                that.$email.after('<span id="vemail" class=""></span>');
            }

        });
        this.$password.add(this.$confirm).on("blur", function (e) {
            debugger;
            var p = that.$password.val();
            $("#vpass").remove();
            $("#vpass2").remove();
            if (p && p.length >= 6 && that.$password.val() === that.$confirm.val()) {
                that.$password.after('<span id="vpass" class="right"></span>');
                that.$confirm.after('<span id="vpass2" class="right"></span>');
                that.valid.password = true;
            } else {
                that.$password.after('<span id="vpass" class="wrong"></span>');
                that.$confirm.after('<span id="vpass2" class="wrong"></span>');
                that.valid.password = false;
            }
        });

    },
    bindEvents: function(){
        var self = this;
        $("#registerGenderSelect").on("click", function (e) {
            $(this).find(".radio_box_checked").removeClass("radio_box_checked");
            var g = $(e.target).addClass("radio_box_checked").attr("data-id");
            if (g === "male") {
                self.registerInfo.gender = Constants.gender.female;
            } else if (g === "male") {
                self.registerInfo.gender = Constants.gender.male;
            }
        });

        $('#pivotLocation').on('click', function (e) {
            self.closeLocationDropDown();
            self.locationDropDownView = new LocationDropDownView($('#pivotLocation'), self);
            e.stopPropagation();
        });
        $("#myAddress").on('blur', function (e) {
            self.getLatLng(self.registerInfo.location);
        });
        $("#complete").on("click", function(){
            if (!self.registerInfo.pivot) {
                return;
            }
            if (!self.registerInfo.pivot.isInRange(self.registerInfo.location)) {
                //TODO: notify user
                return;
            }
            self.registerInfo.email = $('#registerEmailInput').val();
            self.registerInfo.password = $('#registerPasswordInput').val();

            var user = new User();
            user.set('location', self.registerInfo.location);
            user.set('gender', self.registerInfo.gender);
            user.set('email', self.registerInfo.email);
            user.set('password', self.registerInfo.password);
            user.set()
            app.userManager.registerUser(user, {
                success: function(){
                    self.emailCache = user.get('email');
                    app.navigate("register/finish");
                    //self.render(4);
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