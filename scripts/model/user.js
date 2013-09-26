var User = Backbone.Model.extend({
	//TODO fill in Constants with enum int mapping
	defaults:{
        "userId": -1,
        "password": "default",
        "name": "default",
        "email": "default",
        "phone": "default",
        "qq": "default",
        "age": 0,
        "gender": Constants.gender.male,
        "birthday": new Date(),
        "imgPath": "default",
        "location": new UserLocation(),                 //new Location(),
        
        "lastLogin": new Date(),
        "creationTime": new Date(),

        "historyList": null,
        "watchList": null,
        "socialList": [],                       //ArrayList<User>(),
        "transactionList": new Transactions(),  //ArrayList<Transaction>(),
        "notificationList": new Notifications(),        //ArrayList<Notification>(),
        "universityGroup": [],                  //array of university names
        
        "emailActivated": false,
        "phoneActivated": false,
        "emailNotice": false,
        "phoneNotice": false,
        "state": Constants.userState.normal,
        "searchState": Constants.userSearchState.universityAsk,

        "level": 0,
        "averageScore": 0,
        "totalTranscations": 0,

        "googleToken":"",
        "facebookToken":"",
        "twitterToken":"",
        "paypalToken":"",
        "id_docType":"",
        "id_docNum":"",
        "id_path":"",
        "id_vehicleImgPath":"",

        "accountId":"",
        "accountPass":"",
        "accountToken":"",
        "accountValue":0,

        "sessionCode": "default",

	},

        idAttribute: "userId",

	urlRoot: Constants.origin + "/api/v1.0/users/user",

	initialize:function(urlRootOverride){
		_.bindAll(this, 'overrideUrl');

		if (urlRootOverride !== null){
			this.urlRoot = urlRootOverride;
		}
	},

	overrideUrl: function(urlRootOverride){
		if (urlRootOverride !== null){
			this.urlRoot = urlRootOverride;
		}
	},

        isNew: function () {
                return this.id === -1;
        },

        parse: function(response){

                var modelHash  = {},
                        eachIndex;

                modelHash.userId = response.userId;
                modelHash.password = "default";
                modelHash.sessionCode = response.sessionCode;

                modelHash.name = response.name;
                modelHash.level = response.level;
                modelHash.averageScore = response.averageScore;
                modelHash.totalTranscations = response.totalTranscations;

                this.get('historyList').reset( response.historyList);
                this.get('watchList').reset( response.watchList);

                modelHash.socialList = response.socialList;      //watch out for initialization here; try reset

                this.get('transactionList').reset( response.transactionList);
                this.get('notificationList').reset( response.notificationList);

                modelHash.universityGroup = [];
                for(eachIndex in response.univerityGroup){
                        modelHash.universityGroup.push(response.univerityGroup[eachIndex].val);
                }

                modelHash.age = response.age;
                modelHash.gender = Constants.gender[response.gender];
                modelHash.phone = response.phont;
                modelHash.email = response.email;
                modelHash.qq = response.qq;
                modelHash.imgPath = response.imgPath;

                this.set("location", new UserLocation(false, response.location));                 //new Location();

                modelHash.emailActivated = response.emailActivated;
                modelHash.phoneActivated = response.phoneActivated;
                modelHash.emailNotice = response.emailNotice;
                modelHash.phoneNotice = response.phoneNotice;

                modelHash.state = Constants.userState[response.state];
                modelHash.searchState = Constants.userSearchState[response.searchState];

                this.set("lastLogin", new Date(response.lastLogin));
                this.set("creationTime", new Date(response.creationTime));

                modelHash.paypal = response.paypal;

                return modelHash;
        }

});

var Users = Backbone.Collection.extend({

	model: User,

	url: Constants.origin + "/api/v1.0/users/watchMessage",

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