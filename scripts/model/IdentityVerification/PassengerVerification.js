var PassengerVerification = Backbone.Model.extend({
    //TODO fill in Constants with enum int mapping
    defaults: function () {
        return {
            "type": 0,
            "verificationId": -1,
            "userId": -1,
            "realName": "default",
            "licenseNumber": "default",
            "licenseType": 0,

            "submissionDate": new Date(),
            "expireDate": new Date(),
            "state": 0,

            "reviewDate": new Date(),
            "reviewerId": -1,
            "recommenderId": -1,

            "frontImgLink": "default",
            "backImgLink": "default",
            "origin": 0
        };
    },

    idAttribute: "verificationId",

    urlRoot: Constants.origin + "/api/v1.0/users/passengerVerification/",

    initialize: function (urlRootOverride) {
        _.bindAll(this, 'overrideUrl', 'isNew', 'parse', 'toJSON');

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
        if ( typeof data !== 'undefined' && typeof data.userId !== 'undefined') {

            data.type = parseInt(data.state, 10);
            data.verificationId = parseInt(data.verificationId, 10);

            data.userId = parseInt(data.userId, 10);
            data.licenseType = parseInt(data.licenseType, 10);
            data.state = parseInt(data.state, 10);

            data.reviewerId = parseInt(data.reviewerId, 10);
            data.recommenderId = parseInt(data.recommenderId, 10);

            data.submissionDate = Utilities.castFromAPIFormat(data.submissionDate);
            data.expireDate = Utilities.castFromAPIFormat(data.expireDate);
            data.reviewDate = Utilities.castFromAPIFormat(data.reviewDate);
            data.realName = decodeURI(data.realName);

            data.origin = parseInt(data.origin, 10);
        }

        return data;
    },

    toJSON: function () {
        var json = _.clone(this.attributes);

        json.submissionDate = Utilities.castToAPIFormat(this.get('submissionDate'));
        json.expireDate = Utilities.castToAPIFormat(this.get('expireDate'));
        json.reviewDate = Utilities.castToAPIFormat(this.get('reviewDate'));
        json.realName = encodeURI(json.realName);
        return json;
    },

    _toJSON: function () {
        var json = this.toJSON();
        json.expireDate = Utilities.getDateString(this.get('expireDate'));
        json.submissionDate = Utilities.getDateString(this.get('submissionDate'));
        json.reviewDate = Utilities.getDateString(this.get('reviewDate'));
        return json;
    }
});
