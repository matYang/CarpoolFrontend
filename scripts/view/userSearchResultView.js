var UserSearchResultView = MultiPageView.extend({
    initialize: function (params) {

        _.bindAll(this, "render", "entryEvent", "bindEvents", "updateLocation", "close");
        app.viewRegistration.register("findUser", this, true);
        this.user = app.sessionManager.getSessionUser();
        this.entryTemplate = _.template(tpl.get('personalSocialCard'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "searchResultPageNumber";
        this.pageNavigator = "pageNavigator";
        this.entryHeight = 117;
        this.pageEntryNumber = 18;
        this.minHeight = 648;
        this.entryHeight = 105;
        this.entryClass = "social_card";
        this.entryContainer = "searchResultDisplayPanel";
        this.domContainer = $("#searchResultDisplayPanel");
        this.startIndex = 0;
        if (params && params.userSearchRepresentation) {
            this.sr = params.userSearchRepresentation;
            app.userManager.searchUsers(this.sr, {
                "success": this.render,
                "error": undefined
            });
        } else {
            this.sr = new UserSearchRepresentation ();
            this.render(new Users ());
        }
    },
    render: function (userList) {
        this.messages = userList;
        $("#content").append(_.template(tpl.get("userSearch")));
        $("#searchResultDisplayPanel").css("width", 938);
        MultiPageView.prototype.render.call(this);
        $(".social_gender_0").html("♂");
        $(".social_gender_1").html("♀");
        this.bindEvents();
    },
    entryEvent: function (userId) {
        app.navigate(this.user.id + "/personal/" + userId, true);
    },
    bindEvents: function () {
        var that = this;
        $("#searchLocationInput_from").on('click', function (e) {
            that.locationPickerView = new LocationPickerView (that.sr.get("location"), that, "searchLocationInput_from");
        });
        $("#searchTypeContainer>div").on("click", function (e) {
            $("#searchTypeContainer>.selected").removeClass("selected").addClass("notSelected");
            $("#" + e.target.id).removeClass("notSelected").addClass("selected");
            if (e.target.id === "male") {
                that.sr.set("gender", Constants.gender.male);
            } else if (e.target.id === "female") {
                that.sr.set("gender", Constants.gender.female);
            } else {
                that.sr.set("gender", Constants.gender.both);
            }
        });
        $("#nameInput").on("keypress", function (e) {
            if (e.which === 13) {
                that.sr.set("name", $("#nameInput").val());
                app.navigate(app.sessionManager.getUserId() + "/finduser/" + that.sr.toString());
                app.userManager.searchUsers(that.sr, {
                    "success": that.render,
                    "error": undefined
                });
            }
        });
        $("#searchResultButton").on("click", function () {
            that.sr.set("name", $("#nameInput").val());
            app.navigate(app.sessionManager.getUserId() + "/finduser/" + that.sr.toString());
            app.userManager.searchUsers(that.sr, {
                "success": that.render,
                "error": undefined
            });
        });
    },
    updateLocation: function () {
        var custTemp;
        $("#searchLocationInput_from").val(this.searchRepresentation.get("location").get("city"));
        custTemp = this.searchRepresentation.get("departureLocation").get("point");
        if (custTemp !== "undetermined") {
            $("#customizeLocationInput_from").val(custTemp);
        }
    },
    close: function () {
        if (!this.isClosed) {
            $("#searchTypeContainer>div").off();
            $("#searchResultButton").off();
            $("#nameInput").off();
            MultiPageView.prototype.close.call(this);
            $("#content").empty();
            this.isClosed = true;
        }
    }
});
