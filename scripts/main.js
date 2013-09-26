//IE 8 fallBack for placeholders
$('input, textarea').placeholder();


var AppRouter = Backbone.Router.extend({
	testMode:true,
	routes:{
		"": "defaultRoute",

		"front": "front",
		":id/front" : "sessionFront",

		"main" : "main",
		"main/*encodedSearchkey" : "encodedMain",
		":id/main" : "sessionMain",
		":id/main/*encodedSearchkey" : "encodedSessionMain",

		":id/personal/:intendedUserId" : "personal",
		":id/personal/:intendedUserId/*personalViewState" : "personalWithState",

		":id/transaction/:transactionId/*link" : "transactionDetail",

		":id/Message/:messageId" : "MessageDetail",
		":id/Message/:messageId/edit" : "MessageEdit",

		":id/DMpost" : "postMessage",
		":id/DMpost/*postState" : "postMessageWithState",


		"register" : "register",
		"register/*registerState" : "register"
	},

	initialize: function(){
		//initializing the registration service, now views should be hooked to DOM via registration
		this.viewRegistration = new ViewRegistrationService();
		//initializing the storage services, some resuable user information will be persisted by local storage
		this.storage = new StorageService();

		//initializing all the data managers
		this.sessionManager = new SessionManager();
		this.userManager = new UserManager(this.sessionManager);
		this.messageManager = new MessageManager(this.sessionManager,  this.userManager);
		this.transactionManager = new TransactionManager(this.sessionManager, this.userManager);
		this.notificationManager = new NotificationManager(this.sessionManager, this.userManager);
		this.generalManager = new GeneralManager(this.sessionManager, this.userManager);

		//determine if the user has logged in or not
		this.sessionManager.fetchSession(false);

		//intializing search query states & filter states, look into localStorage to find previous history
		this.searchQueryState = this.storage.getSearchQueryState();
		this.searchFilterState = this.storage.getSearchFilterState();



		this.userLocation = new UserLocation();
		this.curDate = new Date();
		this.searchResult = new Messages();


		// //test login API, must obtain login status before proceeding
		// //here is just testing
		// this.isLogin = true;
		// this.topBarUser = new User();

		// var tempUniversityArray = ["滑铁卢大学", "傻逼多大", "lol"];
		// this.topBarUser.set({'universityGroup': tempUniversityArray});

		//always on page, using topBarView as a mean of global control
	},

	defaultRoute: function(){

		//if login, procees to main/:id, if not, proceed to front
		if (this.sessionManager.hasSession()){
			this.navigate(this.sessionManager.getUserId() + "/main", true);
		}
		else{
			this.navigate("front", true);
		}

	},

	front: function(){
		if (this.sessionManager.hasSession()) {
			this.navigate(this.sessionManager.getUserId() + "/front", true);
			//return here to prevent further execution of following logic
			return;
		}

		this.topBarView = new TopBarView();
		if (this.circleView){
			this.circleView.close();
		}
		this.frontPageVew = new FrontPageView();
	},

	sessionFront: function(id){
		if (!this.sessionManager.hasSession()){
			this.navigate("front", true);
			return;
		}

		this.topBarView = new TopBarView();
		this.circleView = new CircleView();
		this.frontPageVew = new FrontPageView();
	},


	main: function(){
		if (this.sessionManager.hasSession()){
			this.navigate(this.sessionManager.getUserId() + "/main", true);
			return;
		}
		this.topBarView = new TopBarView();
		this.mainPageVew = new MainPageView();
	},

	encodedMain: function(encodedSearchKey){
		if (this.sessionManager.hasSession()){
			this.navigate(this.sessionManager.getUserId() + "/main/" + encodedSearchKey, true);
			return;
		}
		this.topBarView = new TopBarView();
		this.mainPageVew = new MainPageView({"searchKey":encodedSearchKey});
		this.advertisementView = new AdvertisementView();
	},

	sessionMain: function(id){
		if (!this.sessionManager.hasSession()){
			this.navigate("main", true);
			return;
		}
		this.topBarView = new TopBarView();
		this.circleView = new CircleView();
		this.mainPageVew = new MainPageView();
		this.advertisementView = new AdvertisementView();
	},

	encodedSessionMain: function(id, encodedSearchKey){
		if (!this.sessionManager.hasSession()){
			this.navigate("main/" + encodedSearchKey, true);
			return;
		}

		this.topBarView = new TopBarView();
		this.circleView = new CircleView();
		this.mainPageVew = new MainPageView({"searchKey":encodedSearchKey});
		this.advertisementView = new AdvertisementView();

	},

	personal: function(id, intendedUserId){
		this.navigate(this.sessionManager.getUserId() + "/personal/" + intendedUserId + "/" + Config.getDefaultPersonalViewState() , true);

	},

	personalWithState: function(id, intendedUserId, personalViewState){
		if (!this.sessionManager.hasSession()){
			this.navigate("front", true);
			return;
		}

		this.topBarView = new TopBarView();

		if (!personalViewState || !Config.validatePersonalViewState(personalViewState)){
			this.navigate(this.sessionManager.getUserId() + "/personal/" + intendedUserId + "/" + Config.getDefaultPersonalViewState() , true);
		}
		else{
			this.circleView = new CircleView();

			if (!this.personalView || this.personalView.isClosed || this.personalView.getCurrentUserId() !== intendedUserId){
				this.personalView = new PersonalView({'intendedUserId': intendedUserId, 'viewState': personalViewState});
			}
			else{
				this.personalView.switchChildView(personalViewState);
			}
			this.advertisementView = new AdvertisementView();
		}
	},

	MessageDetail: function(id, messageId){
		if (!this.sessionManager.hasSession()){
			this.navigate("front", true);
			return;
		}

		this.topBarView = new TopBarView();
		this.circleView = new CircleView();
		this.dMMessageDetailView = new MessageDetailView();
		this.advertisementView = new AdvertisementView();
	},


	MessageEdit: function(id, messageId){
		if (!this.sessionManager.hasSession()){
			this.navigate("front", true);
			return;
		}

		this.topBarView = new TopBarView();
		this.circleView = new CircleView();
		this.dMMessageEditView = new MessageEditView();
		this.advertisementView = new AdvertisementView();
	},

	postMessage: function(id, postState){
		app.navigate(this.userManager.getTopBarUser().id + "/DMpost/" + Config.getDefaultDMPostState() , true);
	},

	postMessageWithState: function(id, postState){
		if (!this.sessionManager.hasSession()){
			this.navigate("front", true);
			return;
		}

		this.topBarView = new TopBarView();
		this.circleView = new CircleView();
		if (!postState || !Config.validateDMPostState(postState)){
			app.navigate(this.userManager.getTopBarUser().id + "/DMpost/" + Config.getDefaultDMPostState() , true);
		}
		else{
			//if the post session not valid, start new session, creat brand new view
			if (!this.dMMessagePostView || this.dMMessagePostView.isClosed){
				this.dMMessagePostView = new MessagePostView();
			}
			//if the post session did not end, keep using the same post session
			else{
				this.dMMessagePostView.render(Config.getPostStateStepIndex(postState));
			}
		}
	},

	transactionDetail: function(id, transactionId, link) {
		if (!this.sessionManager.hasSession()){
			this.navigate("front", true);
			return;
		}

		//we need to fetch the real transaction object from server
		var transaction = transactionId;
		if ( link === "personal/history"){

			this.personal(id, "history");
		}
		else if ( link.indexOf("Message") > -1) {

			this.MessageDetail(id, Utilities.getId(link,"/"));
		}
		this.transactionView = new TransactionDetailView({},{},link);
	},

	register: function(registrationState){
		if (this.sessionManager.hasSession()){
			this.navigate(this.sessionManager.getUserId() + "/main", true);
			return;
		}

		if (!registrationState || !Config.validateRegistrationState(registrationState)){
			app.navigate("register/" + Config.getDefaultRegistrationState() , true);
		}
		else{
			if (!this.registrationView || this.registrationView.isClosed){
				this.registrationView = new RegistrationView();
			}
			else{
				this.registrationView.render(Config.getRegistrationStateStepIndex(registrationState));
			}
		}
	}


});


//warning: tpl is the global object for templating services, do not name any variable "tpl" in any context in any files
tpl.loadTemplates(Constants.templateResources, function () {
    app = new AppRouter();
    Backbone.history.start();
});


