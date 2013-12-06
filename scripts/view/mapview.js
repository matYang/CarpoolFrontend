var MapView = Backbone.View.extend({
    el: "",

    initialize: function (config) {
        _.bindAll(this, 'render', 'mapInitialize', 'bindClickEvent', 'setLocation', 'drawCircle', 'getLatLng');
        this.isClosed = false;
        this.div = config.div;
        this.origin = config.originLocation || app.sessionManager.getSessionUser();
        this.dest = config.destLocation || app.sessionManager.getSessionUser();
        this.oLatLng = {};
        this.dLatLng = {};
        this.init = config.init;
        this.directionDisplay = new google.maps.DirectionsRenderer ();
        this.directionService = new google.maps.DirectionsService ();
        this.geocoder = new google.maps.Geocoder ();
        this.mapInitialize();
    },

    mapInitialize: function () {
        this.getLatLng(this.origin, this.oLatLng);
        this.getLatLng(this.dest, this.dLatLng);
        var center = new google.maps.LatLng (this.oLatLng.lat, this.oLatLng.lng);
        var myOptions = {
            center: center,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map (document.getElementById(this.div), myOptions);
        this.marker = undefined;
        this.oMarker = undefined;
        this.dMarker = undefined;
        this.directionDisplay.setMap(this.map);
        var that = this;
        if (this.origin instanceof Backbone.Model && this.dest instanceof Backbone.Model && this.origin.get("city") && this.dest.get("city") && !this.origin.equals(this.dest)) {
            that.getDirection(that.origin, that.dest);
        }
        this.bindClickEvent();
    },
    bindClickEvent: function () {
        var that = this,
            divSetOD = "<span class='markerButton' id='markerSetOrigin'><a>设为起点</a></span><span class='markerButton' id='markerSetDest'><a>设为终点</a></span>",
            contentString;
        google.maps.event.addListener(this.map, 'click', function (e) {
            if (that.infowindow) {
                that.infowindow.close();
            }
            if (that.marker) {
                that.marker.setMap(null);
            }
                
            that.marker = new google.maps.Marker({
                position: e.latLng,
                map: that.map
            });
            that.marker.setMap(that.map);

            $.ajax({
                  url: "http://maps.googleapis.com/maps/api/geocode/json?latlng=" + e.latLng.lat() + "," + e.latLng.lng() + "&sensor=false",
                  context: document.body
            }).done(function(json) {
                debugger;
                $("#markerButton").off();
                if (that.init){
                    contentString = "<div>" + json.results[0].formatted_address + "</div>" + divSetOD;
                } else {
                    contentString = "<div>" + json.results[0].formatted_address + "</div>";
                }
                that.infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    width: 250,
                    height: 80
                });
                that.infowindow.open(that.map, that.marker);
                if (that.init) {
                    google.maps.event.addListener(that.infowindow, 'domready', function() {
                        $(".markerButton").on('click', function(e){ 
                            if (e.delegateTarget.id === 'markerSetOrigin') 
                                that.setLocation("origin", json);
                            else if (e.delegateTarget.id === 'markerSetDest') 
                                that.setLocation("dest", json);
                        });
                    });
                }
            });

        });
    },
    setLocation: function (type, json) {
        if (type === "origin") {
            if (this.oMarker) this.oMarker.setMap(null);
            this.oMarker = this.marker;
        } else {
            if (this.dMarker) this.dMarker.setMap(null);
            this.dMarker = this.marker;
        }
        this.marker = null;
        if (this.init && this.init.updateByMapMarker) {
            this.init.updateByMapMarker(type, json);    
        }
        if (this.oMarker && this.dMarker) {
            this.getDirection(this.oMarker.getPosition(), this.dMarker.getPosition());
            this.oMarker.setMap(null);
            this.dMarker.setMap(null);
        }
    },
    getLatLng: function (location, latlng) {
        var request = {};
        var me = this;
        request.address = location.toUiString();
        var result = this.geocoder.geocode(request, function (geocodeResults, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                me.map.setCenter(geocodeResults[0].geometry.location);
                me.map.setZoom(13);
                latlng = geocodeResults[0].geometry.location.lat();
                latlng = geocodeResults[0].geometry.location.lng();
            } else {
                Info.warn('Geocode was not successful for the following reason: ' + status);
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
        if (origin instanceof UserLocation) {
            request.origin = origin.get("point") + " " + origin.get("city") + " " + origin.get("province");
        } else {
            request.origin = origin.lat()+","+origin.lng();
        }
        if (dest instanceof UserLocation) {
            request.destination = dest.get("point") + " " + dest.get("city") + " " + dest.get("province");
        } else {
            request.destination = dest.lat()+","+dest.lng();
        }
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
