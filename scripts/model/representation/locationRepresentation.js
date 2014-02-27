var UserLocation = Backbone.Model.extend({
    urlRoot: Constants.origin + "/api/v1.0/location/default",
    defaults: function () {
        return {
            //first 3 reserved for default locations only
            'defaultId': -1,
            'radius': -1,
            'synonyms': '',

            'id': -1,

            'province': 'Ontario',
            'city': 'Waterloo',
            'region': 'Waterloo',
            'pointName': 'Waterloo',

            'pointAddress':'Waterloo, On',
            'lat': 43.479332,
            'lng': -80.533272,

            'match_Id': -1
        };
    },

    initialize: function () {
        _.bindAll(this, 'isNew', 'isDefault','toUiString', 'toJSON',  'equals', 'isEquivalentTo', 'parse', 'parseGeocodeResult', 'parseBaiduJson', 'isInRange', '_getDistanceFromLatLon', '_deg2rad');
    },

    isNew: function (){
        return typeof this.get('id') === 'undefined' || this.get('id') === -1;
    },

    clone: function () {
        var newLocation = new UserLocation();
        var json = _.clone(this.attributes);
        $.each(json, function(key, value) {
            newLocation.set(key, value);
        });
        return newLocation;
    },
    copy: function (val) {
        var json = _.clone(this.attributes);
        $.each(json, function(key, value) {
            val.set(key, value);
        });
    },
    isDefault: function(){
        return typeof this.get('defaultId') === 'number' && this.get('defaultId') > 0;
    },

    toUiString: function () {
        return this.get('pointName');
    },

    equals: function (val) {
        if ( val instanceof Backbone.Model) {
            if (this.isDefault() && val.isDefault()){
                return this.get('defaultId') === val.get('defaultId');
            }
            else if (!this.isDefault() && !val.isDefault()){
                return this.get('province') === val.get('province') &&
                    this.get('city') === val.get('city') &&
                    this.get('region') === this.get('region') &&
                    this.get('pointName') === val.get('pointName') &&
                    this.get('pointAddress') === val.get('pointAddress');
            }
            return false;
        }
        return false;
    },


    isEquivalentTo: function (val) {
        if ( val instanceof UserLocation) {
            return this.get('city') === val.get('city');
        }
        return false;
    },


    parse: function (json) {
        if (typeof json.defaultId !== 'undefined' && json.defaultId >= 0){
            json.defaultId = parseInt(json.defaultId, 10);
            json.radius = parseInt(json.radius, 10);
            json.synonyms = decodeURI(json.synonyms);
        }
        json.id = parseInt(json.id, 10);
        json.province = decodeURI(json.province);
        json.city = decodeURI(json.city);
        json.region= decodeURI(json.region);
        json.pointName = decodeURI(json.pointName);
        json.pointAddress = decodeURI(json.pointAddress);
        json.lat = parseFloat(json.lat);
        json.lng = parseFloat(json.lng);
        json.match_Id = parseInt(json.match_Id, 10);

        return json;
    },

    toJSON: function () {
        var json = _.clone(this.attributes);
        json.province = encodeURI(json.province);
        json.city = encodeURI(json.city);
        json.region= encodeURI(json.region);
        json.pointName = encodeURI(json.pointName);
        json.pointAddress = encodeURI(json.pointAddress);
        return json;
    },

    parseGeocodeResult: function (result) {
        return this.parseBaiduJson(result);
    },
    //TODO
    //also need to get lat and lng
    parseBaiduJson: function (json) {
        var ac = json.addressComponent;
        this.set('region', ac.district);
        this.set('city', ac.city);
        this.set('province', ac.province);
        this.set('pointAddress', ac.street + ac.streetNumber);
        this.set('lat', json.point.lat);
        this.set('lng', json.point.lng);
        return this.get('pointAddress');
    },

    isInRange: function(loc){
        //TODO
        return true;
        if (this.get('radius') <= 0 && loc.get('radius') <= 0){
            Info.alert("无效地理位置比较，确认是否在服务区内必须和默认位置比较");
        }

        var radius = this.get('radius') > 0 ? this.get("radius") : loc.get("radius");
        var distance = this._getDistanceFromLatLon(this.get('lat'), this.get('lng'), loc.get('lat'), loc.get('lng'));
        
        return distance <= radius;
    },

    
    _getDistanceFromLatLon: function(lat1,lon1,lat2,lon2){
        var R = 6371; // Radius of the earth in km
        var dLat = this._deg2rad(lat2-lat1);  // deg2rad below
        var dLon = this._deg2rad(lon2-lon1);
        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(this._deg2rad(lat1)) * Math.cos(this._deg2rad(lat2)) * Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c; // Distance in km
        return d;
    },

    _deg2rad: function(deg) {
        return deg * (Math.PI/180);
    }

});

var DefaultUserLocations = Backbone.Collection.extend({
    model: UserLocation,

    url: Constants.origin + "/api/v1.0/location/default",

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl', 'findMatch');
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }

    },

    overrideUrl: function (urlOverride) {
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    },

    //TODO
    findMatch: function(locKeyStr){
        return this;
    }

});
