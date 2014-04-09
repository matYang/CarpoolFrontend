var UserSearchResultView = MultiPageView.extend({
    searchCriteria:"byLocation",
    initialize: function (params) {

        _.bindAll(this, "render", "entryEvent", "bindEvents", "acceptDefaultLocation", "close");
        app.viewRegistration.register("findUser", this, true);
        this.user = app.sessionManager.getSessionUser();
        this.entryTemplate = _.template(tpl.get('findUserEntry'));
        this.pageNumberClass = "searchResultPageNumber";
        this.pageNumberId = "searchResultPageNumber";
        this.pageNavigator = "findUserPageNavigator";
        this.pageNavigatorClass = "FindUserpage-searchResult-multiPage-pageNum clearfix";
        this.entryHeight = 135;
        this.pageEntryNumber = 10;
        this.minHeight = 405;
        this.entryClass = "findUserResultEntry";
        this.entryContainer = "findUserPageResultPanel";
        this.$domContainer = $("#findUserPageResultPanel");
        this.startIndex = 0;
        this.allMessages = new Users();
        this.messages = this.allMessages;
        $("#content").append(_.template(tpl.get("userSearch")));
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
        $("#result-num").html(this.allMessages.length);
        this.bindEvents();
    },
    render: function (userList) {
        this.allMessages = userList;
        this.messages = this.allMessages;
        MultiPageView.prototype.render.call(this);
    },
    entryEvent: function (userId, e) {
        var $target = $(e.target);
        if ($target.hasClass("add_follow")) {
            app.userMaanger.watchUser(userId, {
                success: function (e) {
                    $target.removeClass("add_follow").addClass("remove_follow").html("取消关注");
                }
            });
        } else if ($target.hasClass("sendMessage") && app.letterView && !app.letterView.isClosed){
            app.letterView.switchContact(userId);
        } else if ($target.hasClass("remove_follow")) {
            app.userMaanger.watchUser(userId, function (e) {
                $target.removeClass("remove_follow").addClass("addClass").html("关注TA");
            });
        } else {
            app.navigate("personal/" + userId, true);
        }
    },
    bindEvents: function () {
        var that = this;
        $("#searchCriteria").on("change", function (e) {
            that.searchCriteria = $(this).val();
            $("#userSearchInput").val("");
        });
        $("#userSearchInput").on("keypress", function (e) {
            if (that.searchCriteria === "byLocation") {
                e.preventDefault();
            }
            if (e.which === 13) {
                if (that.searchCriteria === "byName") {
                    that.sr.set("name", $("#userSearchInput").val());
                    that.sr.set("location", null);
                } 
                app.navigate("finduser/" + that.sr.toString());
                app.userManager.searchUsers(that.sr, {
                    "success": that.render,
                    "error": function(){}
                });
            }
        }).on("focus", function (e) {
            if (typeof that.locationDropDownView !== 'undefined' && that.locationDropDownView !== null){
                that.locationDropDownView.close();
            }
            if (that.searchCriteria === "byLocation") {
                that.locationDropdown = new LocationDropDownView($("#userSearchInputContainer"),that);
                $("#default-location-dropdown").css("margin-left","290px").css("margin-top","19px");
                e.stopPropagation();
            }
        }).on("click", function (e) {
            e.stopPropagation();
        });
        $("#searchButton").on("click", function () {
            if (that.searchCriteria === "byName") {
                that.sr.set("name", $("#userSearchInput").val());
                that.sr.set("location", null);
            } else {
                that.sr.set("location", $("#userSearchInput").val());
                that.sr.set("name", null);
            }
            app.navigate("finduser/" + that.sr.toString());
            app.userManager.searchUsers(that.sr, {
                "success": that.render,
                "error": function(){}
            });
        });
    },
    filter: function(){

    },
    acceptDefaultLocation: function(defaultLocation){
        $("#userSearchInput").val(this.departLocation.toUiString());
    },
    close: function () {
        if (!this.isClosed) {
            $("#searchTypeContainer>div").off();
            $("#searchButton").off();
            $("#nameInput").off();
            MultiPageView.prototype.close.call(this);
            $("#content").empty();
            this.isClosed = true;
        }
    }
});
