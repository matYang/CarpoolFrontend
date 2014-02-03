//IE 8 fallBack for placeholders
$('input, textarea').placeholder();

var AppRouter = Backbone.Router.extend({

    routes: {
        "": "defaultRoute",

        "front": "front",
        "main": "main",
        "main/*encodedSearchkey": "encodedMain",

        "personal/:intendedUserId": "personal",
        "personal/:intendedUserId/": "personal",
        "personal/:intendedUserId/*personalViewState": "personalWithState",

        "message/:messageId": "MessageDetail",
        "message/:messageId/": "MessageDetail",
        "message/:messageId/edit": "MessageEdit",
        "message/:messageId/edit/*editState": "MessageEdit",

        "post": "postMessage",
        "post/*postState": "postMessageWithState",

        "finduser": "finduser",
        "finduser/*encodedSearchkey": "finduser",

        "register": "register",
        "register/*registerState": "register",
        "lost/": "lost",
        "lost" : "lost",
        "forgetPassword/*token" : "lost",

        "emailActivation/*authKey": "emailActivation",

        "*default" : "front"
    },

    initialize: function () {
        //initializing the registration service, now views should be hooked to DOM via registration
        this.viewRegistration = new ViewRegistrationService ();
        //initializing the storage services, some resuable user information will be persisted by local storage
        this.storage = new StorageService ();

        this.locationService = new LocationService();
        this.eventClearService = new EventClearService();

        //initializing all the data managers
        this.sessionManager = new SessionManager ();
        this.userManager = new UserManager (this.sessionManager);
        this.messageManager = new MessageManager (this.sessionManager, this.userManager);
        this.transactionManager = new TransactionManager (this.sessionManager, this.userManager);
        this.notificationManager = new NotificationManager (this.sessionManager, this.userManager);
        this.generalManager = new GeneralManager (this.sessionManager, this.userManager);
        this.letterManager = new LetterManager (this.sessionManager);
        this.socketManager = new SocketManager (this.sessionManager, {
            'newNotification': this.sessionManager,
            'newLetter': this.sessionManager,
            'broadcast': {
                'handleSocket': function (eventName, data) {
                    Info.alert(data);
                }
            }
        });
        //determine if the user has logged in or not
        this.sessionManager.fetchSession(false, {
            success: function () {
                Info.log("session fetch success");
            },
            error: function () {
                Info.log("session fetch failed, user not logged in");
            }
        });

        //intializing search query states & filter states, look into localStorage to find previous history
        this.searchQueryState = this.storage.getSearchQueryState();
        this.searchFilterState = this.storage.getSearchFilterState();

        this.userLocation = new UserLocation ();
        this.curDate = new Date ();
        this.searchResult = new Messages ();
    },

    defaultRoute: function () {
        //if login, procees to main/:id, if not, proceed to front
        if (this.sessionManager.hasSession()) {
            this.navigate("main", {trigger: true});
        } else {
            this.navigate("front", {trigger: true});
        }
    },

    front: function () {
        this.frontPageVew = new FrontPageView();
    },

    main: function () {
        this.mainPageVew = new MainPageView();
    },

    encodedMain: function (encodedSearchKey) {
        this.mainPageVew = new MainPageView ({
            "searchKey": encodedSearchKey
        });
        // this.advertisementView = new AdvertisementView ();
    },

    personal: function (intendedUserId) {
        this.navigate("personal/" + intendedUserId + "/" + Config.getDefaultPersonalViewState(), {trigger: true, replace: true});

    },

    personalWithState: function (intendedUserId, personalViewState) {
        if (!this.sessionManager.hasSession()) {
            this.navigate("front", {trigger: true, replace: true});
            return;
        }

        if (!personalViewState || !Config.validatePersonalViewState(personalViewState)) {
            this.navigate("personal/" + intendedUserId + "/" + Config.getDefaultPersonalViewState(), {trigger: true, replace: true});
        } else {
            if (!this.personalView || this.personalView.isClosed || this.personalView.getCurrentUserId() !== Utilities.toInt(intendedUserId)) {
                if (personalViewState === "utility" && this.sessionManager.getSessionUser().id !== Utilities.toInt(intendedUserId))
                    personalViewState = "history";
                this.personalView = new PersonalView ({
                    'intendedUserId': intendedUserId,
                    'viewState': personalViewState
                });
            } else {
                this.personalView.switchChildView({
                    'viewState': personalViewState
                });
            }
        }
    },

    MessageDetail: function (messageId) {
        if (!this.sessionManager.hasSession()) {
            this.navigate("front", true);
            return;
        }

        this.MessageDetailView = new MessageDetailView ({
            'messageId': messageId
        });
    },

    MessageEdit: function (messageId) {
        if (!this.sessionManager.hasSession()) {
            this.navigate("front", true);
            return;
        }
        this.navigate("message/" + messageId + "/edit");

        if (this.MessagePostView) {
            delete this.MessagePostView;
            this.MessagePostView = null;
        }
        if (!this.MessageEditView) {
            this.MessageEditView = new MessageEditView ({
                'messageId': messageId
            });
        } else {
            this.MessageEditView.prototype.isColsed = false;
        }
    },

    postMessage: function (postState) {
        app.navigate("post/" + Config.getDefaultDMPostState(), {trigger: true, replace: true});
    },

    postMessageWithState: function (postState) {
        if (!this.sessionManager.hasSession()) {
            this.navigate("front", true);
            return;
        }

        app.navigate("post/" + Config.getDefaultDMPostState(), {trigger: false, replace: true});
        //if the post session not valid, start new session, creat brand new view
        // if (!this.MessagePostView || this.MessagePostView.isClosed) {
        //     if (this.MessageEditView) {
        //         delete this.MessagePostView;
        //         this.MessageEditView.close();
        //         this.MessageEditView = null;
        //     }
            this.MessagePostView = new MessagePublishView ({
                "method": "post"
            });
        // }
        // //if the post session did not end, keep using the same post session
        // else {
        //     this.MessagePostView.render(Config.getPostStateStepIndex(postState));
        //     this.MessagePostView.isColsed = false;
        // }

    },

    finduser: function (encodedSearchkey) {
        var sr = new UserSearchRepresentation ();
        if (encodedSearchkey) {
            sr.castFromString(encodedSearchkey);
            this.userSearchResultView = new UserSearchResultView ({
                "encodedSearchKey": sr
            });
        } else {
            this.userSearchResultView = new UserSearchResultView ();
        }
    },

    register: function (registrationState) {
        if (this.sessionManager.hasSession()) {
            this.navigate("main", true);
            return;
        }
        if (this.registrationView && !this.registrationView.isClosed) {
            this.registrationView.state = registrationState;
            this.registrationView.render();
        } else {
            this.registrationView = new RegistrationView ({"state":registrationState});
        }
        
    },

    lost: function (token) {
        this.findPasswordView = new FindPasswordView({"token":token});
    },

    emailActivation: function (authKey) {
        var self = this;
        this.userManager.activateAccount(authKey, {
            success: function () {
                self.sessionManager.fetchSession(false, {
                    success: function () {
                        Info.log("session fetch success");
                    },
                    error: function () {
                        Info.log("session fetch failed, user not logged in");
                    }
                });
                app.navigate("/main", true);
            },
            error: function (response) {
                Info.alert('Email验证失败');
            }
        });
    }
});

//warning: tpl is the global object for templating services, do not name any variable "tpl" in any context in any files
tpl.loadTemplates(Constants.templateResources, function () {
    app = new AppRouter ();
    app.topBarView = new TopBarView ();
    Backbone.history.start();
    if (app.sessionManager.hasSession()) {
    	// create letter view if use is logged in.
    	app.letterView = new LetterView();
    }
});

