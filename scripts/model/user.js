var User = Backbone.Model.extend({
    //TODO fill in Constants with enum int mapping
    defaults: function () {
        return {
            "userId": -1,
            "password": "default",
            "name": "default",
            "email": "default",
            "phone": "default",
            "qq": "default",
            "gender": Constants.gender.male,
            "birthday": new Date (),
            "imgPath": "default",
            "location": new UserLocation (), //new Location(),

            "lastLogin": new Date (),
            "creationTime": new Date (),

            "historyList": [],
            "watchList": [],
            "socialList": [],
            "transactionList": [],
            "notificationList": [],
            "universityGroup": [],

            "emailActivated": false,
            "phoneActivated": false,
            "emailNotice": true,
            "phoneNotice": false,
            "state": Constants.userState.normal,
            "searchRepresentation": new SearchRepresentation (),

            "level": 0,
            "averageScore": 0,
            "totalTranscations": 0,

            "passengerVerificationId": -1,
            "driverVerificationId": -1,
            "passengerVerification": null,
            "driverVerification": null,

            /*
            "verifications": [],
            "googleToken": "",
            "facebookToken": "",
            "twitterToken": "",
            "paypalToken": "",
            "id_docType": "",
            "id_docNum": "",
            "id_path": "",
            "id_vehicleImgPath": "",
            */

            "accountId": "",
            "accountPass": "",
            "accountToken": "",
            "accountValue": 0,

            "sessionCode": "default"
        };
    },

    idAttribute: "userId",

    urlRoot: Constants.origin + "/api/v1.0/users/user",

    initialize: function (urlRootOverride) {
        _.bindAll(this, 'overrideUrl', 'isNew', 'parse', '_toJSON', 'toJSON', 'toDropdownJSON');

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
    getAge: function () {
        var today = new Date (), birthday = this.get('birthday');
        var age = today.getFullYear() - birthday.getFullYear();
        var month = today.getMonth() - birthday.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthday.getDate() )) {
            age--;
        }
        return age;
    },
    parse: function (data) {
        if ( typeof data !== 'undefined' && typeof data.userId !== 'undefined') {
            data.userId = parseInt(data.userId, 10);

            data.gender = parseInt(data.gender, 10);
            data.birthday = Utilities.castFromAPIFormat(data.birthday);

            data.location = new UserLocation (data.location, {
                'parse': true
            });
            data.searchRepresentation = new SearchRepresentation (data.searchRepresentation, {
                'parse': true
            });

            data.lastLogin = Utilities.castFromAPIFormat(data.lastLogin);
            data.creationTime = Utilities.castFromAPIFormat(data.creationTime);

            data.state = parseInt(data.state, 10);
            data.searchState = parseInt(data.searchState, 10);

            data.level = parseInt(data.level, 10);
            data.averageScore = parseInt(data.averageScore, 10);
            data.totalTranscations = parseInt(data.totalTranscations, 10);

            data.passengerVerificationId = parseInt(data.passengerVerificationId, 10);
            data.driverVerificationId = parseInt(data.driverVerificationId, 10);
            if (typeof data.passengerVerification !== 'undefined' && !$.isEmptyObject(data.passengerVerification)){
                data.passengerVerification = new PassengerVerification(data.passengerVerification, {
                    'parse': true
                });
            }
            if (typeof data.driverVerification !== 'undefined' && !$.isEmptyObject(data.driverVerification)){
                data.driverVerification = new DriverVerification(data.driverVerification, {
                    'parse': true
                });
            }


            data.name = decodeURI(data.name);
            //this is just used for presentation, no direct API call to update it
            data.accountValue = parseFloat(data.accountValue);
        }
        return data;
    },
    _toJSON: function () {
        var json = this.toJSON();
        if (this.get('location') instanceof Backbone.Model) {
            json.location = this.get('location').toUiString();
        }
        json.name = decodeURI(json.name);
        json.age = this.getAge();
        return json;
    },
    toJSON: function () {
        var json = _.clone(this.attributes);

        json.birthday = Utilities.castToAPIFormat(this.get('birthday'));
        if (this.get('location') instanceof Backbone.Model) {
            json.location = this.get('location').toJSON();
        }
        if (this.get('searchRepresentation') instanceof Backbone.Model) {
            json.searchRepresentation = this.get('searchRepresentation').toJSON();
        }
        if (this.get('passengerVerification') instanceof Backbone.Model) {
            json.passengerVerification = this.get('passengerVerification').toJSON();
        }
        if (this.get('driverVerification') instanceof Backbone.Model) {
            json.driverVerification = this.get('driverVerification').toJSON();
        }
        //these 2 are actually ignored by server side, placing here for uniformity
        json.lastLogin = Utilities.castToAPIFormat(this.get('lastLogin'));
        json.creationTime = Utilities.castToAPIFormat(this.get('creationTime'));
        json.name = encodeURI(json.name);
        return json;
    },

    toDropdownJSON: function () {
        var json = {};

        json.userId = this.get('userId');
        json.imgPath = this.get('imgPath');
        json.name = this.get('name');
        json.gender = this.get('gender');
        json.averageScore = this.get('averageScore');
        json.location = this.get('location').toUiString();
        if (this.get('passengerVerification') instanceof Backbone.Model) {
            json.passengerVerification = this.get('passengerVerification').toJSON();
        }
        if (this.get('driverVerification') instanceof Backbone.Model) {
            json.driverVerification = this.get('driverVerification').toJSON();
        }
        return json;
    }
});

var Users = Backbone.Collection.extend({

    model: User,

    url: Constants.origin + "/api/v1.0/users/watchMessage",

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