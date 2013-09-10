var MapView = Backbone.View.extend({
	el:"",
	
	initialize:function(config){
		_.bindAll(this,'render','mapInitialize','drawCircle','getLatLng') ;
		this.div = config.div;
		this.location = config.location;
		this.geocoder = new google.maps.Geocoder();
		this.mapInitialize();
	},

	mapInitialize:function(){
		var myOptions = {
				zoom: 4,
				mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(document.getElementById(this.div), myOptions);
		if (this.location.get("university")){
			this.getLatLng(this.location);
		}
	},
	
	getLatLng: function(location){
		var request =  {};
		var me = this;
		this.location = location;
		request.address = this.location.get("university");
		var result = this.geocoder.geocode(request, function(geocodeResults, status){
			if (status == google.maps.GeocoderStatus.OK) {
				me.map.setCenter(geocodeResults[0].geometry.location);
				me.map.setZoom(13);
				me.lat = geocodeResults[0].geometry.location.lat();
				me.lgt = geocodeResults[0].geometry.location.lng();
				var marker = new google.maps.Marker({
					map: me.map,
					position: geocodeResults[0].geometry.location
				});
					me.drawCircle(me.lat, me.lgt);
			}
			else {
				alert('Geocode was not successful for the following reason: ' + status);
			}
		});
	},
	drawCircle:function(lat, lgt){
		var center = new google.maps.LatLng(lat, lgt);

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
		var userCircle = new google.maps.Circle(circleOptions);

		//add a marker at the center of the circle
		var userMarker = new google.maps.Marker({
			position: center,
			map: this.map,
		});
	}

});