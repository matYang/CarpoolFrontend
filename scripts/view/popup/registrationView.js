
/*dedicated view for user registration, deep linking will not be used for registrtion states, this view holds the session data*/
var RegistrationView = Backbone.View.extend({

    el: "",

    initialize: function(){
        _.bindAll(this, 'render', 'bindEvents', 'finish', 'acceptDefaultLocation', 'closeLocationDropDown', 'close');
        app.viewRegistration.register("registration", this, true);
        this.isClosed = false;

        this.baseTemplate = _.template(tpl.get('registration_base'));

        this.registerInfo = {"registerInfo":new UserLocation()};
        this.out = false;
        this.geocoder = new google.maps.Geocoder();
        this.render(1);

    },
    getLatLng: function (location) {
        var request = {}, me = this;
        location.set("defaultId", -1);
        request.address = location.get("pointName") + "," + location.get("city") + "," + location.get("province");
        var result = this.geocoder.geocode(request, function (geocodeResults, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                locationlocation.set("lat", geocodeResults[0].geometry.location.lat());
                location.set("lng", geocodeResults[0].geometry.location.lng());
            } else {
                Info.warn('Geocode was not successful for the following reason: ' + status);
            }
        });
    },
    render: function(stepIndex){
        this.domContainer = $('#content');
        this.domContainer.append(this.baseTemplate);
        this.domContainer.show();
        this.registerContainer = $('#registerContainer');
        this.contentContainer = $('#registerContent');
        $("#loginBox").hide();

        // --- events binding ---
        this.bindEvents();
    },

    bindEvents: function(){
        var self = this;
        $("#registerInputMaleContainer").on("click", function (e) {
            self.registerInfo.gender = Constants.gender.male;
        });
        $("#registerInputFemaleContainer").on("click", function (e) {
            self.registerInfo.gender = Constants.gender.female;
        });
        $('#registerLocationInput').on('click', function (e) {
            self.closeLocationDropDown();
            self.locationDropDownView = new LocationDropDownView($('#registerLocationInputContainer'), self);
            e.stopPropagation();
        });
        $("#registerCustomizeInput").on('blur', function (e) {
            self.getLatLng(self.registerInfo.location);
        });
        $("#complete").on("click", function(){
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

            app.userManager.registerUser(user, {
                success: function(){
                    self.emailCache = user.get('email');
                    app.navigate("register/step4");
                    self.previousStepIndex = 3;
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
        this.registerInfo.set("pointName", $("#registerCustomizeInput").val());
        $('#registerLocationInput').val(defaultLocation.toUiString());
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