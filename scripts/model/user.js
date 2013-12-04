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

            "verifications": [],
            "googleToken": "",
            "facebookToken": "",
            "twitterToken": "",
            "paypalToken": "",
            "id_docType": "",
            "id_docNum": "",
            "id_path": "",
            "id_vehicleImgPath": "",

            "accountId": "",
            "accountPass": "",
            "accountToken": "",
            "accountValue": 0,

            "sessionCode": "default",
        };
    },

    idAttribute: "userId",

    urlRoot: Constants.origin + "/api/v1.0/users/user",

    initialize: function (urlRootOverride) {
        _.bindAll(this, 'overrideUrl', 'isNew', 'parse', '_toJSON', 'toJSON', 'toDropdownJSON');

        if (urlRootOverride !== null) {
            this.urlRoot = urlRootOverride;
        }
    },

    overrideUrl: function (urlRootOverride) {
        if (urlRootOverride !== null) {
            this.urlRoot = urlRootOverride;
        }
    },

    isNew: function () {
        return this.id === -1;
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
        return json;
    }
});

var Users = Backbone.Collection.extend({

    model: User,

    url: Constants.origin + "/api/v1.0/users/watchMessage",

    initialize: function (urlOverride) {
        _.bindAll(this, 'overrideUrl');
        if (urlOverride !== null) {
            this.url = urlOverride;
        }

    },

    overrideUrl: function (urlOverride) {
        if (urlOverride !== null) {
            this.url = urlOverride;
        }
    }
}); 