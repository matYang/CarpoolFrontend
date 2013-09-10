var UserLocation = Backbone.Model.extend({

	defaults:{
        "province" : "江苏",
        "city" : "南京市",
        "region":"江宁区",
        "university" : "南京大学江宁校区"
	},

	initialize:function(stringCastingFlag, data){
		_.bindAll(this, 'toString', 'castFromString');


		if (stringCastingFlag && data !== null){
			this.castFromString(data);
		}
		else if (stringCastingFlag === false){
			this.set("province",data.province);
			this.set("city", data.city);
			this.set("region", data.region);
			this.set("university",data.university);
		}
		else if (stringCastingFlag === undefined){
			//Constants.dWarn("location constructor:: string casting flag not set");
			//do nothing, use defaults
		}
		else{
			Constants.dLog("location constructor invalid usage");
		}

	},

	toString: function() {
		var buffer = [
			this.get("province"),
			this.get("city"),
			this.get("region"),
			this.get("university")
			];
		return buffer.join(" ");
	},
	castToString:function(){
		//@deprecated
		return this.toString();
	},

	castFromString:function(locationString){
		if (locationString !== null){

			//type casting!
			var locationArray = String(locationString).split(" ");
			if (locationArray.length === 4){
				this.set("province",locationArray[0]);
				this.set("city", locationArray[1]);
				this.set("region", locationArray[2]);
				this.set("university", locationArray[3]);
			}
			else{
				Constants.dLog("location constructor error, current params: ");
				Constants.dLog(locationString);
			}
		}
		else{
			Constants.dLog("null pointer in Location");
		}
	},


	toServerJSON: function(){
		var buffer = {
			'province': this.get("province"),
			'city': this.get("city"),
			'region': this.get("region"),
			'university': this.get("university")
		};
		return buffer;
	}


});

var UserLocations = Backbone.Collection.extend({

	model: UserLocation,

	url: Constants.origin + "/api/v1.0/users/circleLocation",

	initialize:function(urlOverride){
		_.bindAll(this, 'overrideUrl');
		if (urlOverride !== null){
			this.url = urlOverride;
		}

	},

	overrideUrl:function(urlOverride){
		if (urlOverride !== null){
			this.url = urlOverride;
		}
	}


});
