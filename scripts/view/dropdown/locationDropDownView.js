var LocationDropDownView = Backbone.View.extend({


    initialize: function ($parentContainer, parentView) {
        _.bindAll(this, 'assembleHtml', 'render', 'bindEvents', 'notifyParent', '_clearAll', 'close');

        this.defaultLocations = app.locationService.getDefaultLocations();
        this.htmlContent = this.assembleHtml();
        this.$parentContainer = $parentContainer;
        this.parentView = parentView;

        this.render();
    },

    assembleHtml: function(){
        var self = this;
        this.htmlContent = '';
        this.defaultLocations.each(function(defaultLocation){
              self.htmlContent += '<li class="default-location-dropdown-li" data-defaultLocationId="' + defaultLocation.get('defaultId') + '">' + defaultLocation.toUiString() + '</li>';
        });
        // below for testing
        // for (var i = 0; i < 8; i++){
        //     self.htmlContent += '<li class="default-location-dropdown-li" data-defaultLocationId="' + "1" + '">' + 'blablabla' + '</li>';
        // }


        this.htmlContent = '<ul id="default-location-dropdown">' + this.htmlContent + '</ul>';
        return this.htmlContent;
    },

    render: function () {
        this.$parentContainer.append(this.htmlContent);
        this.bindEvents();
    },

    bindEvents: function(){
        var self = this;
        this.$parentContainer.children('#default-location-dropdown').children('li').on('click', function (e) {
            self.notifyParent(parseInt($(this).attr('data-defaultLocationId'), 10));
        });
    },

    notifyParent: function(defaultId){
        //TODO add parental listener
        Info.log("User selected default location: " + this.defaultLocations.where({'defaultId': defaultId})[0].toUiString());
        this.parentView.acceptDefaultLocation(this.defaultLocations.where({'defaultId': defaultId})[0]);
        this.close();
    },

    _clearAll: function () {
        this.$parentContainer.children('#default-location-dropdown').children('li').off();
        this.$parentContainer.children('#default-location-dropdown').remove();
    },

    close: function () {
        Info.log("Location Dropdown view close called");
        this._clearAll();
        Backbone.View.prototype.remove.call(this);
    }
});