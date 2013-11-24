var UserSearchResultView = MultiPageView.extend({
  initialize:function(params){

    _.bindAll(this, "render", "entryEvent","bindEvents", "updateLocation", "close");
    app.viewRegistration.register("findUser", this, true);
    this.user = app.sessionManager.getSessionUser();  
    this.entryTemplate = _.template(tpl.get('personalPage/personalSocialCard'));
    this.pageNumberClass = "searchResultPageNumber";
    this.pageNumberId = "searchResultPageNumber";
    this.entryEvent = this.entryEvent;
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
        "success": this.render(userList),
        "error":undefined
      });
    } else {
      this.render(new Users());
    }
  },  
  render: function(userList){
    this.messages = userList;
    $("#content").append(_.template(tpl.get("userSearch")));
    $("#searchResultDisplayPanel").css("width",938);
    MultiPageView.prototype.render.call(this);
    $(".social_gender_0").html("♂");
    $(".social_gender_1").html("♀");
    this.bindEvents();
  },
  entryEvent: function(userId){
    app.navigate(this.user.id + "/personal/" + userId, true);
  },
  bindEvents: function(){
    var that = this;
      $("#searchLocationInput_from").on('click', function(e){
        that.locationPickerView = new LocationPickerView(that.sr.get("departureLocation"), that, "searchLocationInput_from");
      });
      $("#searchTypeContainer>div").on("click", function(e){
          $("#searchTypeContainer>.selected").removeClass("selected").addClass("notSelected");
          $("#"+e.target.id).removeClass("notSelected").addClass("selected");
      });
      $("#searchResultButton").on("click", function(){

      });
  },
  updateLocation: function () {
    var custTemp;
    $("#searchLocationInput_from").val(this.searchRepresentation.get("departureLocation").get("city"));
    cust = this.searchRepresentation.get("departureLocation").get("point");
    if (cust !== "undetermined"){
      $("#customizeLocationInput_from").val(cust);
    }
  },
  close: function() {
    if (!this.isClosed){
      $("#searchTypeContainer>div").off();
      $("#searchResultButton").off();
      MultiPageView.prototype.close.call(this);
      $("#content").empty();
      this.isClosed = true;
    }
  }
});