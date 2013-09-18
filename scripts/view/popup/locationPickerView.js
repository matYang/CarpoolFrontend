var LocationPickerView = Backbone.View.extend({

	tagName: 'div',

	initialize:function(locationObj, initiator, id){
		_.bindAll(this, 'render','getProvinces','getCities', 'getUniversities','provinceDOMGenerator', 'cityDOMGenerator', 'universityDOMGenerator', 'complete','close', 'highLight');
		app.viewRegistration.register("locationPicker", this, true);
		this.isClosed = false;
		this.id = id;
		this.apis = new ApiResource();
		this.location = locationObj || new UserLocation();
		this.provinceName = this.location.get("province");
		this.cityName = this.location.get("city");
		this.region = this.location.get("region");
		this.universityName = this.location.get("university");

		if (initiator){
			this.initiator = initiator;
		}
		modalOpen = true;   //tell window that there is a modal view in place
		doubleModalOpen = true;
		this.firstLoad = true;
		this.render();

		this.getProvinces();
		this.getCities();
		this.getUniversities();
	},

	render:function(){
		$('#popup').append("<div class='popupPanel' id='locationSearchPanel'><div id='popupBoxLocation'><div class='popUpCloseButton' id='location-modal-closeButton'></div><div id='location-modal-titleContainer'><p>请选择大学</p><div></div></div><div id='location-modal-provinceContainer'></div><div id='location-modal-cityContainer'></div><div id='location-modal-universityContainer'></div></div></div>");

		$('#location-modal-closeButton').bind('click', this.close);
		// this.getProvinces();
		// this.getCities();
		// this.getUniversities();
		$('#popup').show();
		$("#locationSearchPanel").show();
	},

	getProvinces:function(){
		var provinceContainer = $('#location-modal-provinceContainer');
		var self = this;
		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.location_location,
			dataType: 'json',
			success: function(data){
				var totalDomString = "";
				for(var eachIndex in data){
					totalDomString += self.provinceDOMGenerator(data[eachIndex]);
				}
				provinceContainer.append(totalDomString);
				$('.location-modal-province').bind('click', function(){
					self.firstLoad = false;
					var selectedProvince = $(this).html();
					if (selectedProvince != self.provinceName){
						self.provinceName = selectedProvince;
						self.getCities(self.provinceName);

						self.highLight($(this),"province");
						self.highLightedProvince = $(this);
					}
				});

				//self.provinceName = $('.location-modal-province').first().html();
				//self.getCities();
				self.highLight($(".location-modal-province:contains(" + self.provinceName +  ")").first(),"province");
				self.highLightedProvince = $(".location-modal-province:contains(" + self.provinceName +  ")").first();
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
			}
		});
	},



	getCities:function(){
		$('.location-modal-city').unbind();
		var cityContainer = $('#location-modal-cityContainer');
		cityContainer.empty();
		var self = this;

		$.ajax({
			type: "GET",
			async: true,
			data: {province : self.provinceName},
			url: self.apis.location_location,
			dataType: 'json',
			success: function(data){
				var totalDomString = "";
				for(var each in data){
					totalDomString += self.cityDOMGenerator(data[each]);
				}
				cityContainer.append(totalDomString);
				$('.location-modal-city').bind('click', function(){
					self.firstLoad = false;
					var selectedCity = $(this).html();
					if (selectedCity != self.cityName){
						self.cityName = selectedCity;
						self.getUniversities(self.cityName);

						self.highLight($(this),"city");
						self.highLightedCity = $(this);
					}
			
				});

				if (!self.firstLoad){
					self.cityName = $('.location-modal-city').first().html();
					self.getUniversities();
				}
				self.highLight($(".location-modal-city:contains(" + self.cityName +  ")").first(),"city");
				self.highLightedCity = $(".location-modal-city:contains(" + self.cityName +  ")").first();
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
			}
		});
	},

	getUniversities:function(){
		$('.location-modal-university').unbind();
		var universityContainer = $('#location-modal-universityContainer');
		universityContainer.empty();
		var self = this;

		$.ajax({
				type: "GET",
				async: true,
				data: { province: self.provinceName, city: self.cityName},
				url: self.apis.location_location,
				dataType: 'json',
				success: function(data){
					var totalDomString = "";
					for(var each in data){
						var jsonGroup = data[each];
						for (var region in jsonGroup){
							totalDomString += self.universityDOMGenerator(region, jsonGroup[region]);
						}
					}
					universityContainer.append(totalDomString);

					$('.location-modal-university').bind('click', function(){
						self.firstLoad = false;
						self.universityName = $(this).children('span').html();
						self.complete();
						self.highLight($(this));
					});

					self.universityName = $('.location-modal-university').first().html();

				},
				error: function (data, textStatus, jqXHR){
					alert("请稍后再试");
				}
		});
	},

	provinceDOMGenerator:function(province){
		return "<div class = 'location-modal-province location-modal-entry' id = >" + province + "</div>";
	},

	cityDOMGenerator:function(city){
		return "<div class = 'location-modal-city location-modal-entry'>" + city + "</div>";
	},

	universityDOMGenerator:function(region, universityList){
		var tempDOMString = "";
		tempDOMString += "<div>" + region + "</div>";
		for (var uni in universityList){
			tempDOMString += "<div class = 'location-modal-university location-modal-entry'><span>" + universityList[uni] + "</span></div>";
		}
		return tempDOMString;
	},
	
	complete:function(){
		this.location.set("province", this.provinceName);
		this.location.set("city", this.cityName);
		this.location.set("region", this.pronvinceName);
		this.location.set("university", this.universityName);

		if (this.supportStorage){
			var locationString = this.location.get("province")
						 + " " + this.location.get("city") 
						 + " " + this.location.get("university");
			localStorage.locationString = locationString;
		}

		this.initiator.updateLocation(this.id);
		this.close();
	},


	highLight:function(targetDOM, type){
		if (type == "province"){
			targetDOM.css({'border-color': 'black'});
			targetDOM.css({'background-color': '#E4EBF5'});
			if (this.highLightedProvince){
				this.highLightedProvince.css({'border-color': 'white'});
				this.highLightedProvince.css({'background-color': ''});
			}
		}
		else if (type == "city"){
			targetDOM.css({'border-color': 'black'});
			targetDOM.css({'background-color': '#E4EBF5'});
			if (this.highLightedCity){
				this.highLightedCity.css({'border-color': 'white'});
				this.highLightedCity.css({'background-color': ''});
			}
		}

	},

	show: function () {
		$('#popup').show();
		$("#locationSearchPanel").show();
	},

	close:function(){
		if (!this.isClosed){
			$("#locationSearchPanel").hide();
			$('#location-modal-closeButton').unbind();
			$('.location-modal-province').unbind();
			$('.location-modal-city').unbind();
			$('.location-modal-university').unbind();
			$('#locationSearchPanel').empty();
			$('#locationSearchPanel').remove();
			$('#popup').hide();
			modalOpen = false;
			doubleModalOpen = false;
			this.unbind();
			this.remove();

			Backbone.View.prototype.remove.call(this);

			this.isClosed = true;
		}
		
	}

 });