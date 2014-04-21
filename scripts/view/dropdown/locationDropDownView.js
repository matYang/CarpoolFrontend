var LocationDropDownView = baseDropDownView.extend({
    dataIdName:"defaultLocationId",
    dataAttribute: "defaultId",
    ulId: "default-location-dropdown",
    ulClass: "search_down",
    selectionClass: "default-location-dropdown-li",

    initialize: function ($parentContainer, parentView) {
        _.bindAll(this, 'assembleHtml', 'render', 'doEvent', 'notifyParent');
        this.defaultLocations = app.locationService.getDefaultLocations();
        this.selections = this.defaultLocations;
        this.htmlContent = this.assembleHtml();
        this.$parentContainer = $parentContainer;
        this.parentView = parentView;
        baseDropDownView.prototype.initialize.call(this);
        this.render();
        app.eventClearService.registerView(this);
    },

    assembleHtml: function(){
        return baseDropDownView.prototype.assembleHtml.call(this);
    },

    render: function () {
        baseDropDownView.prototype.render.call(this);
        baseDropDownView.prototype.bindEvents.call(this);
    },

    doEvent: function(e){
        this.notifyParent(parseInt($(e.target).attr('data-defaultLocationId'), 10));
    },

    notifyParent: function(defaultId){
        Info.log("User selected default location: " + this.defaultLocations.where({'defaultId': defaultId})[0].toUiString());
        this.parentView.acceptDefaultLocation(this.defaultLocations.where({'defaultId': defaultId})[0]);
    }
});

var SearchLocationDropDownView = baseDropDownView.extend({
    url: "http://api.map.baidu.com/place/v2/suggestion/q={0}&region=全国&output=json&ak="+Constants.baiduAK,
    dataIdName: "locationId",
    dataAttribute: "",
    ulId: "",
    inputBoxId: "",
    initialize: function(){
        this.$input = $("#"+this.inputBoxId);
    },
    render: function() {

    },
    bindEvents: function(){
        var that = this;
        this.$input.on("change", function(){
            that.placeSuggestCall($(this).val());

        });
    },
    placeSuggestCall: function(val) {
        var that = this;

        $.ajax({
            url: this.url.replace("{0}", val),
            success: function(data, textStatus) {
                if (data.status === 0) {
                    that.parseJson(data.result);
                }
            },
            error: function(){

            }
        });

    },
    parseJson: function (data) {
        this.selections = data;

    },
    assembleDropdown: function(){
        baseDropDownView.prototype.assembleHtml.call(this);
    },
    close: function(){

    }

});