var UserLocation = Backbone.Model.extend({

	defaults:{
        
        'hierarchyNameList': [],
        'customDepthIndex': Config.defaultCustomDepthIndex,

        //@Deprecated. left here to provide compability
        'country': 'Canada',
        'province' : 'Ontario',
        'city' : 'Waterloo',
        'point': "Matthew's Sweet Little Home",

        //optional, returned by licationPicker to track default custom locations
        'customNameList': []
	},

	initialize:function(){
		_.bindAll(this, 'toString', 'castToString', 'castFromString', 'equals', 'autoFill');
		this.autoFill();
	},

	toString: function(){
		var str = '',
			index = 0;
		if (this.get('hierarchyNameList').length === 0) {
			var buffer = [];
			if (this.get("contry")) buffer.push(this.get("contry"));
			if (this.get("province")) buffer.push(this.get("province"));
			if (this.get("city")) buffer.push(this.get("city"));
			if (this.get("point")) buffer.push(this.get("point"));
			return buffer.join(Config.locationSeperator);
		}
		for (index = 0; index < this.get('hierarchyNameList').length; index++){
			str += this.get('hierarchyNameList')[index] + Config.locationSeperator;
		}
		str += this.get('customDepthIndex');
		return str;
	},

	castToString:function(){
		//@deprecated, don't use
		return this.toString();
	},

	castFromString:function(str){
		var strArray = str.split(Config.locationSeperator),
			index = 0;
		for (index = 0; index < strArray.length - 1; index++){
			this.set('hierarchyNameList', this.get('hierarchyNameList').push(strArray[index]));
		}
		this.set('customDepthIndex', parseInt(strArray[index], 10));
		this.autoFill();
	},

	//parse: no nested data structure, default parse is good enough
	//toJSON: same as above

	equals: function (val) {
		if (val instanceof Backbone.Model) {
			return this.get('hierarchyNameList').compare(val.get('hierarchyNameList')) && this.get('customDepthIndex') === val.get('customDepthIndex');
		}
		return false;
	},
	isEquivalentTo: function (val) {
		if (val instanceof Backbone.Model) {
			return this.get('hierarchyNameList').compare(val.get('hierarchyNameList'));
		}
		return false;
	},

	autoFill: function(){
		if (this.get('hierarchyNameList').length !== 0){
			this.set('country', this.get('hierarchyNameList')[0]);
			this.set('province', this.get('hierarchyNameList')[1]);
			this.set('city', this.get('hierarchyNameList')[2]);
			this.set('point', this.get('hierarchyNameList')[3]);
		}
	},

	//@Depracated, providing parsing support for legacy
	parse: function(json){
		json.customDepthIndex = parseInt(json.customDepthIndex, 10);

		json.country = json.hierarchyNameList[0];
		json.province = json.hierarchyNameList[1];
		json.city = json.hierarchyNameList[2];
		json.point = json.hierarchyNameList[3];

		return json;
	}

});

var UserLocations = Backbone.Collection.extend({
	//@Deprecated
});
