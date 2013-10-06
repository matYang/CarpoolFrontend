var LocationPickerView = Backbone.View.extend({

	tagName: 'div',

	initialize:function(locationRep, initiator, id, callback){
		_.bindAll(this, 'render','getProvinces','getCities', 'getCustomNameList', 'provinceDOMGenerator', 'cityDOMGenerator', 'complete','close', 'highLight');
		app.viewRegistration.register("locationPicker", this, true);
		this.isClosed = false;
		this.id = id;
		this.apis = new ApiResource();
		this.location = locationRep || new UserLocation();
		this.callback = callback;

		this.countryName = this.location.get('country');
		this.provinceName = this.location.get('province');
		this.cityName = this.location.get('city');


		if (initiator){
			this.initiator = initiator;
		}
		modalOpen = true;   //tell window that there is a modal view in place
		doubleModalOpen = true;
		this.firstLoad = true;
		this.render();

		this.getProvinces();
		this.getCities();
	},

	render:function(){
		$('#popup').append("<div class='popupPanel' id='locationSearchPanel'><div id='popupBoxLocation'><div class='popUpCloseButton' id='location-modal-closeButton'></div><div id='location-modal-titleContainer'><p>请选择城市</p><div></div></div><div id='location-modal-provinceContainer'></div><div id='location-modal-cityContainer'></div></div></div>");

		$('#location-modal-closeButton').bind('click', this.close);

		$('#popup').show();
		$("#locationSearchPanel").show();
	},

	getProvinces:function(){
		var provinceContainer = $('#location-modal-provinceContainer');
		var self = this;
		$.ajax({
			type: "GET",
			async: true,
			data: {'depth': 0, 'name': self.countryName},
			url: self.apis.location_location,
			dataType: 'json',
			success: function(data){
				var totalDomString = "",
					index = 0;
				for (index = 0; index < data.length; index++){
					totalDomString += self.provinceDOMGenerator(data[index]);
				}
				provinceContainer.append(totalDomString);
				self.highLight($(".location-modal-province:contains(" + self.provinceName +  ")").first(),"province");
				self.highLightedProvince = $(".location-modal-province:contains(" + self.provinceName +  ")").first();

				$('.location-modal-province').bind('click', function(){
					self.firstLoad = false;
					var selectedProvince = $(this).html();
					if (selectedProvince != self.provinceName){
						self.provinceName = selectedProvince;
						self.getCities();

						self.highLight($(this),"province");
						self.highLightedProvince = $(this);
					}
				});
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				console.log(data);
			}
		});
	},



	getCities:function(){
		var cityContainer = $('#location-modal-cityContainer'),
			self = this;

		cityContainer.unbind();
		cityContainer.empty();

		$.ajax({
			type: "GET",
			async: true,
			data: {'depth': 1, 'name': self.provinceName},
			url: self.apis.location_location,
			dataType: 'json',
			success: function(data){
				var totalDomString = "",
					index = 0;
				for (index = 0; index < data.length; index++){
					totalDomString += self.cityDOMGenerator(data[index]);
				}
				cityContainer.append(totalDomString);
				self.highLight($(".location-modal-city:contains(" + self.cityName +  ")").first(),"city");
				self.highLightedCity = $(".location-modal-city:contains(" + self.cityName +  ")").first();

				$('.location-modal-city').bind('click', function(){
					self.firstLoad = false;
					var selectedCity = $(this).html();
					if (selectedCity != self.cityName){
						self.cityName = selectedCity;

						self.highLight($(this),"city");
						self.highLightedCity = $(this);

						self.getCustomNameList();
					}
			
				});
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				console.log(data);
			}
		});
	},

	provinceDOMGenerator:function(province){
		return "<div class = 'location-modal-province location-modal-entry' id = >" + province + "</div>";
	},

	cityDOMGenerator:function(city){
		return "<div class = 'location-modal-city location-modal-entry'>" + city + "</div>";
	},


	getCustomNameList: function(){
		var self = this;

		$.ajax({
			type: "GET",
			async: true,
			data: {'depth': 2, 'name': self.cityName},
			url: self.apis.location_location,
			dataType: 'json',
			success: function(data){
				self.customNameList = data;
				self.complete();
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				console.log(data);
			}
		});
	},

	
	complete:function(){
		this.location = new UserLocation({'hierarchyNameList': [this.countryName, this.provinceName, this.cityName, 'undetermined'], 'customDepthIndex': Config.defaultCustomDepthIndex, 'customNameList': this.customNameList}, {'parse': true});
		console.log(new UserLocation(this.location.toJSON(), {'parse': true}).toString());
		if (typeof this.callback === 'function'){
			this.callback();
		}
		else{
			this.initiator.updateLocation(this.id);
		}
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