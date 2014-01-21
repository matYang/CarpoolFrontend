var LocationDropDownView = Backbone.View.extend({


    initialize: function ($parentContainer, parentView) {
        _.bindAll(this);
        this.isClosed = false;

        this.defaultLocations = app.locationService.getDefaultLocations();
        this.htmlContent = this.assembleHtml();
        this.$parentContainer = $parentContainer;
        this.parentView = parentView;

        this.render();
    },

    assembleHtml: function(){
        var htmlContent = '';
        this.defaultLocations.each(function(defaultLocation){
              htmlContent += '<li class="default-location-dropdown-li" data-defaultLocationId="' + defaultLocation.get('defaultId') + '">' + defaultLocation.toUiString() + '</li>';
        });
        htmlContent += '<ul id="default-location-dropdown">' + htmlContent + '</ul>';
        return htmlContent;
    },

    render: function () {
        this.$parentContainer.append(htmlContent);
        this.bindEvents();
    },

    bindEvents: function(){
        var self = this;
        this.$parentContainer.children('#default-location-dropdown').children('li').on('click', function (e) {
            self.notifyParent(parseInt(this.attr('data-defaultLocationId'), 10));
        });
    },

    notifyParent: function(defaultId){
        //TODO add parental listener
        this.parentView.acceptDefaultLocation(this.defaultLocations.where({'defaultId': defaultId})[0]);
        this.close();
    },

    _clearAll: function () {
        this.$parentContainer.children('#default-location-dropdown').children('li').off();
        this.$parentContainer.remove('#default-location-dropdown');
    },

    close: function () {
        if (!this.isClosed) {
            this._clearAll();
            this.isClosed = true;
            Backbone.View.prototype.remove.call(this);
        }
    }
});