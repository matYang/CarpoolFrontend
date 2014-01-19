var Message = Backbone.Model.extend({
    //TODO fill in Constants with enum int mapping
    defaults: function () {
        return {
            "messageId": -1,
            "ownerId": -1,
            "owner": {},

            "transactionList": [], //new ArrayList<Transaction>(),

            "isRoundTrip": false,

            "departure_location": {},
            "departure_time": new Date (),
            "departure_timeSlot": 0,
            "departure_seatsNumber": 0,
            "departure_seatsBooked": 0,
            "departure_priceList": [], //If only single price is set, then priceList has length 1

            "arrival_location": {},
            "arrival_time": new Date (),
            "arrival_timeSlot": 0,
            "arrival_seatsNumber": 0,
            "arrival_seatsBooked": 0,
            "arrival_priceList": [],

            "paymentMethod": Constants.paymentMethod.offline,
            "note": "deault",
            "type": Constants.messageType.ask,
            "genderRequirement": Constants.gender.both,
            "state": Constants.messageState.normal,

            "creationTime": new Date (),
            "editTime": new Date (),
            "historyDeleted": false
        };
    },

    idAttribute: "messageId",

    urlRoot: Constants.origin + "/api/v1.0/dianming/dianming",

    initialize: function (urlRootOverride) {
        _.bindAll(this, 'overrideUrl', 'isNew', 'parse', 'toJSON', '_toJSON');

        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    overrideUrl: function (urlRootOverride) {
        if (typeof urlRootOverride !== 'undefined') {
            this.urlRoot = urlRootOverride;
        }
    },

    isNew: function () {
        return this.id === -1;
    },

    parse: function (data) {

        data.messageId = parseInt(data.messageId, 10);
        data.ownerId = parseInt(data.ownerId, 10);

        data.owner = new User (data.owner, {
            'parse': true
        });
        data.isRoundTrip = data.isRoundTrip;

        data.departure_location = new UserLocation (data.departure_location, {
            'parse': true
        });
        data.departure_time = Utilities.castFromAPIFormat(data.departure_time);
        data.departure_timeSlot = parseInt(data.departure_timeSlot, 10);
        data.departure_seatsNumber = parseInt(data.departure_seatsNumber, 10);
        data.departure_seatsBooked = parseInt(data.departure_seatsBooked, 10);

        data.arrival_location = new UserLocation (data.arrival_location, {
            'parse': true
        });
        data.arrival_time = Utilities.castFromAPIFormat(data.arrival_time);
        data.arrival_timeSlot = parseInt(data.arrival_timeSlot, 10);
        data.arrival_seatsNumber = parseInt(data.arrival_seatsNumber, 10);
        data.arrival_seatsBooked = parseInt(data.arrival_seatsBooked, 10);

        data.paymentMethod = parseInt(data.paymentMethod, 10);

        data.type = parseInt(data.type, 10);
        data.genderRequirement = parseInt(data.genderRequirement, 10);
        data.state = parseInt(data.state, 10);

        data.creationTime = Utilities.castFromAPIFormat(data.creationTime);
        data.editTime = Utilities.castFromAPIFormat(data.editTime);
        data.note = decodeURI(data.note);

        return data;
    },

    _toJSON: function () {
        var json = this.toJSON();
        // json.departure_location = this.get('departure_location').toUiString();
        json.departure_time = Utilities.getDateString(this.get('departure_time'));

        // json.arrival_location = this.get('arrival_location').toUiString();
        json.arrival_time = Utilities.getDateString(this.get('arrival_time'));

        //these 2 are actually ignored by server side, placing here for uniformity
        json.creationTime = Utilities.getDateString(this.get('creationTime'));
        json.editTime = Utilities.getDateString(this.get('editTime'));
        var priceList = this.get("departure_priceList");
        var currentPrice = 0;
        var bookedSeats = this.get("departure_seatsBooked");
        if (priceList.length === 1) {
            currentPrice = priceList[0];
        } else {
            for (var p = 0; p < priceList.length; p++) {
                if (priceList[p] === 0) {
                    priceList[p] = priceList[p - 1];
                }
            }
            if (priceList.length <= bookedSeats) {
                currentPrice = priceList[priceList.length - 1];
            } else {
                currentPrice = priceList[bookedSeats];
            }
        }
        json.currentPrice = currentPrice;
        if (this.get('departure_location') instanceof UserLocation) {
            json.departure_location = this.get('departure_location').toUiString();
        }
        if (this.get('arrival_location') instanceof UserLocation) {
            json.arrival_location = this.get('arrival_location').toUiString();
        }
        
        json.departure_timeSlot = Utilities.getDayTimeSlotText(this.get("departure_timeSlot"));
        json.arrival_timeSlot = Utilities.getDayTimeSlotText(this.get("arrival_timeSlot"));


        if ( typeof this.get('owner')._toJSON === 'function') {
            json.owner = this.get('owner')._toJSON();
        }

        json.note = decodeURI(json.note);

        return json;
    },

    toJSON: function () {
        var json = _.clone(this.attributes);
        if (this.get('owner') instanceof User) {
            json.owner = this.get('owner').toJSON();
        }
        //ignore user here, meaningless to do anything to user persistence from inside message
        if (this.get('departure_location') instanceof UserLocation) {
            json.departure_location = this.get('departure_location').toJSON();
        }
        json.departure_time = Utilities.castToAPIFormat(this.get('departure_time'));

        if (this.get('arrival_location') instanceof UserLocation) {
            json.arrival_location = this.get('arrival_location').toJSON();
        }
        json.arrival_time = Utilities.castToAPIFormat(this.get('arrival_time'));

        //these 2 are actually ignored by server side, placing here for uniformity
        json.creationTime = Utilities.castToAPIFormat(this.get('creationTime'));
        json.editTime = Utilities.castToAPIFormat(this.get('editTime'));

        json.note = encodeURI(json.note);

        return json;
    }
});

var Messages = Backbone.Collection.extend({

    model: Message,

    url: Constants.origin + "/api/v1.0/dianming/dianming",

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl');
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    },

    overrideUrl: function (urlOverride) {
        if ( typeof urlOverride !== 'undefined') {
            this.url = urlOverride;
        }
    }
});