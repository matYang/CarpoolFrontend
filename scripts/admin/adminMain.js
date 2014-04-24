//IE 8 fallBack for placeholders
$('input, textarea').placeholder();

var AppRouter = Backbone.Router.extend({

    routes: {
        "": "defaultRoute",
        "login": "login",
        "*default" : "defaultRoute"
    },

    initialize: function () {
        //initializing the registration service, now views should be hooked to DOM via registration
        this.viewRegistration = new ViewRegistrationService ();
        //initializing the storage services, some resuable user information will be persisted by local storage
        this.storage = new StorageService ();
        this.eventClearService = new EventClearService();

        //initializing all the data managers
        this.sessionManager = new SessionManager ();
        this.userManager = new UserManager (this.sessionManager);
        this.adminManager = new AdminManager ();

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
        this.bindGlobalLinks();
    },
    defaultRoute: function () {

    },
    login: function () {

    }
});

//warning: tpl is the global object for templating services, do not name any variable "tpl" in any context in any files
tpl.loadTemplates(AdminConstants.templateResources, 'scripts/admin/adminTemplate.js', function () {
    app = new AppRouter ();
    app.sideBarView = new sideBarView();
    Backbone.history.start();
});

