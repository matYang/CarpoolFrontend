var UserLocation = Backbone.Model.extend({

	defaults:{
        "province" : "江苏",
        "city" : "南京市",
        "customized":""
	},

	initialize:function(stringCastingFlag, data){
		_.bindAll(this, 'toString', 'castFromString');
		if (stringCastingFlag && data !== null){
			this.castFromString(data);
		}
		else if (stringCastingFlag === false){
			this.set("province",data.province);
			this.set("city", data.city);
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
		return this.get("province")+" "+this.get("city");
	},
	castToString:function(){
		//@deprecated
		return this.toString();
	},

	castFromString:function(locationString){
		if (locationString !== null){

			//type casting!
			var locationArray = String(locationString).split(" ");
			if (locationArray.length === 2){
				this.set("province",locationArray[0]);
				this.set("city", locationArray[1]);
			} else if (locationArray.length === 3){
				this.set("province",locationArray[0]);
				this.set("city", locationArray[1]);
				this.set("customized", locationArray[2]);
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
			'customized': this.get('customized')
		};
		return buffer;
	},

	equals: function (val) {
		if (!val) return false;
		return (this.get("province") == val.get("province")) && (this.get("city") == val.get("city")) && (this.get("customized") == val.get("customized"));
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
