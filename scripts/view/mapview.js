var MapView = Backbone.View.extend({
    el: "",

    initialize: function (config) {
        _.bindAll(this, 'render', 'mapInitialize', 'drawCircle', 'getLatLng');
        this.isClosed = false;
        this.div = config.div;
        this.origin = config.originLocation;
        this.dest = config.destLocation;
        this.oLatLng = {};
        this.dLatLng = {};
        this.directionDisplay = new google.maps.DirectionsRenderer ();
        this.directionService = new google.maps.DirectionsService ();
        this.geocoder = new google.maps.Geocoder ();
        this.mapInitialize();
    },

    mapInitialize: function () {
        if (this.origin instanceof Backbone.Model && !(this.dest instanceof Backbone.Model)) {
            this.getLatLng(this.origin, this.oLatLng);
        }
        var center = new google.maps.LatLng (this.oLatLng.lat, this.oLatLng.lng);
        var myOptions = {
            center: center,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map (document.getElementById(this.div), myOptions);
        this.directionDisplay.setMap(this.map);
        var that = this;
        if (this.origin instanceof Backbone.Model && this.dest instanceof Backbone.Model && this.origin.get("city") && this.dest.get("city") && !this.origin.equals(this.dest)) {
            that.getDirection(that.origin, that.dest);
        }
    },

    getLatLng: function (location, latlng) {
        var request = {};
        var me = this;
        request.address = location.get("university");
        var result = this.geocoder.geocode(request, function (geocodeResults, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                me.map.setCenter(geocodeResults[0].geometry.location);
                me.map.setZoom(13);
                latlng = geocodeResults[0].geometry.location.lat();
                latlng = geocodeResults[0].geometry.location.lng();
            } else {
                alert('Geocode was not successful for the following reason: ' + status);
            }
        });
    },
    drawCircle: function (lat, lgt) {
        var center = new google.maps.LatLng (lat, lgt);

        // var marker = new google.maps.Marker({
        // 	map: me.map,
        // 	position: geocodeResults[0].geometry.location
        // });
        //drawing the circle
        var circleOptions = {
            strokeColor: '#2E8AE6',
            strokeOpacity: 0.8,
            strokeWeight: 1,
            fillColor: '#2E8AE6',
            fillOpacity: 0.25,
            map: this.map,
            center: center,
            radius: 500,     //******note that this sets the radius of the circle area
        };
        var userCircle = new google.maps.Circle (circleOptions);

        //add a marker at the center of the circle
        var userMarker = new google.maps.Marker ({
            position: center,
            map: this.map,
        });
    },
    getDirection: function (origin, dest) {
        var request = {}, that = this;
        request.origin = origin.get("point") + " " + origin.get("city") + " " + origin.get("province");
        request.destination = dest.get("point") + " " + dest.get("city") + " " + dest.get("province");
        request.travelMode = google.maps.TravelMode.DRIVING;
        request.unitSystem = google.maps.UnitSystem.METRIC;
        this.directionService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                that.directionDisplay.setDirections(response);
            }
        });
    },
    close: function () {
        if (!this.isClosed) {
            $("#" + this.div).empty();
            this.isClosed = true;
        }
    }
}); 