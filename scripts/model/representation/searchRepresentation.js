
var SearchRepresentation = Backbone.Model.extend({

	defaults:{
		'isRoundTrip': false,
		'departureLocation': {},
		'arrivalLocation': {},
		'departureDate': new Date(),
		'arrivalDate': new Date(),
		'targetType': -1,
		'departureTimeSlot': -1,
		'arrivalTimeSlot': -1
	},

	initialize: function(){
		_.bindAll(this, 'toString', 'castFromString', 'parse', 'toJSON');
	},

	toString: function(){
		return this.get('isRoundTrip') + Config.urlSeperator + this.get('departureLocation').toString() + Config.urlSeperator +
				this.get('arrivalLocation').toString() + Config.urlSeperator + Utilities.castToAPIFormat(this.get('departureDate')) +
				Config.urlSeperator + Utilities.castToAPIFormat(this.get('arrivalDate')) + Config.urlSeperator +
				this.get('targetType') + Config.urlSeperator + this.get('departureTimeSlot') + Config.urlSeperator + this.get('arrivalTimeSlot');
	},

	castFromString: function(str){
		var strArray = str.split(Config.urlSeperator);
		this.set('isRoundTrip', strArray[0] === 'true');

		var d_l = new UserLocation();
		d_l.castFromString(strArray[1]);
		var a_l = new UserLocation();
		a_l.castFromString(strArray[2]);
		this.set('departureLocation', d_l);
		this.set('arrivalLocation', a_l);

		this.set('departureDate', Utilities.castFromAPIFormat(strArray[3]));
		this.set('arrivalDate', Utilities.castFromAPIFormat(strArray[4]));

		this.set('targetType', parseInt(strArray[5], 10));
		this.set('departureTimeSlot', parseInt(strArray[6], 10));
		this.set('arrivalTimeSlot', parseInt(strArray[7], 10));
	},

	parse: function(data){
		data.departureLocation = new UserLocation(data.departureLocation, {parse: true});
		data.arrivalLocation = new UserLocation(data.arrivalLocation, {parse: true});
		data.departureDate = Utilities.castFromAPIFormat(data.departureDate);
		data.arrivalDate = Utilities.castFromAPIFormat(data.arrivalDate);
		return data;
	},

	toJSON: function(){
		var json = _.clone(this.attributes);
		json.departureLocation = json.departureLocation.toJSON();
		json.arrivalLocation = json.arrivalLocation.toJSON();
		json.departureDate = Utilities.castToAPIFormat(json.departureDate);
		json.arrivalDate = Utilities.castToAPIFormat(json.arrivalDate);
		return json;
	}


});