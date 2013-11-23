var UserSearchResultView = MultiPageView.extend({
  initialize:function(params){
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
    this.entryContainer = "searchResultDisplayPanel";
    this.domContainer = $("#searchResultDisplayPanel");
    this.startIndex = 0;
    if (params.users) {
      this.messages = params.users;
    }
    this.render();
    
  },  
  render: function(){
    MultiPageView.prototype.render.call(this);
    $(".social_gender_0").html("♂");
    $(".social_gender_1").html("♀");
  },
  entryEvent: function(userId){
    app.navigate(this.user.id + "/personal/" + userId, true);
  },  close: function() {
    if (!this.isClosed){

      this.domContainer.empty();
      this.isClosed = true;
    }
  }
});