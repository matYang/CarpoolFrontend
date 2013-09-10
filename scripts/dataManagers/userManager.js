(function () {
	'use strict';


	this.UserManager = function(sessionManager){

		this.apis = new ApiResource();

		this.topBarUser = new User(this.apis.users_topBar);

		//time stamp updates when user data changes or sycns
		this.timeStamp = new Date();

		//thses time stamps records the time when the lastest data is fetches from server
		this.socialList_timeStamp = new Date();
		this.watchList_timeStamp = new Date();
		this.historyList_timeStamp = new Date();
		this.transactionList_timeStamp = new Date();
		this.notificationList_timeStamp = new Date();
		this.universityGroup_timeStamp = new Date();


		this.sessionManager = sessionManager;

		//used for personalPage and testing purpose mainly
		this.user = new User();

		this.sessionManager.resgisterManager(this);

	};

	UserManager.prototype.getTopBarUser = function() {
		return this.topBarUser;
	};

	UserManager.prototype.getUser = function() {
		return this.user;
	};

	//reset the manager state upon logout
	UserManager.prototype.release = function() {
		this.topBarUser = new User(this.apis.users_topBar);
		this.timeStamp = new Date();
		this.socialList_timeStamp = new Date();
		this.watchList_timeStamp = new Date();
		this.historyList_timeStamp = new Date();
		this.transactionList_timeStamp = new Date();
		this.notificationList_timeStamp = new Date();
		this.universityGroup_timeStamp = new Date();
	};

	//returns an array of locations represented by the user's universityGroup location strings
	UserManager.prototype.getUniversityGroupInLocations = function() {
		var locationStrings = this.topBarUser.get('universityGroup');
		var locations = [];
		for (var i = 0; i < locationStrings.length; i++){
			locations.push(new UserLocation(true, locationStrings.at(i)));
		}

		return locations;
	};

	UserManager.prototype.getUserLocation = function() {
		return this.topBarUser.get('location');
	};

	UserManager.prototype.getTimeStamp = function() {
		return this.timeStamp;
	};

	UserManager.prototype.getSocialListTimeStamp = function() {
		return this.socialList_timeStamp;
	};

	UserManager.prototype.getWatchListTimeStamp = function() {
		return this.watchList_timeStamp;
	};

	UserManager.prototype.getHistoryListTimeStamp = function() {
		return this.historyList_timeStamp;
	};

	UserManager.prototype.getTransactionListTimeStamp = function() {
		return this.transactionList_timeStamp;
	};

	UserManager.prototype.getNotificationListTimeStamp = function() {
		return this.notificationList_timeStamp;
	};

	UserManager.prototype.getUniversityGroupTimeStamp = function() {
		return this.universityGroup_timeStamp;
	};

	UserManager.prototype.fetchTopBarUser = function(callback){
		var self = this;

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::getTopBarUser::currentUser does not have session, exit");
			return;
		}

		this.topBarUser.overrideUrl(this.apis.users_topBar);
		this.topBarUser.set('userId', this.sessionManager.getUserId());
		//this will force to add id into api path, correcting it
		this.topBarUser.fetch({
            dataType:'json',

            success:function(model, response){
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::getTopBarUser:: fetch failed with response:");
                Constants.dLog(response);

            }
        });
	};

	UserManager.prototype.registerUser = function(newUser, callback) {
		var self = this;

		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::registerUser::currentUser already has session, conflict, exit");
			return;
		}

		newUser.overrideUrl(this.apis.users_user);
		newUser.set('userId', -1);
		//this will make sure no id is auto appended

		$.ajax({
			type: "POST",
			async: true,
			url: self.apis.users_user,
			data: JSON.stringify(newUser.toJSON()),
			dataType: 'json',
			contentType: 'text/json;charset=UTF-8',
			success: function(data){

				if(callback){
					callback.success(data);
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::registerUser:: action failed");

				if(callback){
					callback.error(data);
				}
			}
		});

	};

	//will be used to display personal informatiom page only
	UserManager.prototype.fetchUser = function(intendedUserId, callback){

		var self = this;

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::getUser::currentUser does not have session, exit");
			return;
		}

		this.user.overrideUrl(this.apis.users_user);
		this.user.set('userId', this.sessionManager.getUserId());
		//this will force to add id into api path, correcting it
		this.user.fetch({

			data: $.param({ 'intendedUserId': intendedUserId}),

            dataType:'json',

            success:function(model, response){

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::getUser:: fetch failed with response:");
                Constants.dLog(response);

            }
        });
	};
	//will be used for testing only
	UserManager.prototype.updateUser = function(updatedUser, callback) {
		if (!updatedUser){
			Constants.dWarn("UserManager::updateUser:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::updateUser:: session does not exist, exit");
			return;
		}

		var self = this;

		updatedUser.overrideUrl(this.apis.users_user);
		updatedUser.set('userId', this.sessionManager.getUserId());
		//this will force to add id into api path, correcting it
		updatedUser.save({},{

            dataType:'json',

            success:function(model, response){
				self.user = updatedUser;

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::updateUser:: update failed with response:");
                Constants.dLog(response);

            }
        });

	};
	//will be used for testing only
	UserManager.prototype.deleteUser = function(callback) {
		var self = this;

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::deleteUser::currentUser does not have session, exit");
			return;
		}

		this.user.overrideUrl(this.apis.users_user);
		this.user.set('userId', this.sessionManager.getUserId());
		//this will force to add id into api path, correcting it
		this.user.destroy({
            dataType:'json',

            success:function(model, response){

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::deleteUser:: delete failed with response:");
                Constants.dLog(response);

            }
        });

	};


	UserManager.prototype.fetchImgPath = function(callback) {
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::getImgPath:: session does not exist, exit");
			return;
		}

		var self = this;

		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_img + '/' + self.sessionManager.getUserId(),
			dataType: 'json',
			success: function(data){
				self.topBarUser.set('imgPath', data.val);

				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::getImgPath:: action failed");
			}
		});
	};

	/*
	//post new image
	UserManager.prototype.postImage = function(callback) {
		function fileUpload(form, action_url, div_id)
		{
		// Create the iframe...
		var iframe = document.createElement("iframe");
		iframe.setAttribute("id","upload_iframe");
		iframe.setAttribute("name","upload_iframe");
		iframe.setAttribute("width","0");
		iframe.setAttribute("height","0");
		iframe.setAttribute("border","0");
		iframe.setAttribute("style","width: 0; height: 0; border: none;");

		// Add to document...
		form.parentNode.appendChild(iframe);
		window.frames['upload_iframe'].name="upload_iframe";

		iframeId = document.getElementById("upload_iframe");

		// Add event...
		var eventHandler = function()  {

		if (iframeId.detachEvent)
		iframeId.detachEvent("onload", eventHandler);
		else
		iframeId.removeEventListener("load", eventHandler, false);

		// Message from server...
		if (iframeId.contentDocument) {
		content = iframeId.contentDocument.body.innerHTML;
		} else if (iframeId.contentWindow) {
		content = iframeId.contentWindow.document.body.innerHTML;
		} else if (iframeId.document) {
		content = iframeId.document.body.innerHTML;
		}

		document.getElementById(div_id).innerHTML = content;

		// Del the iframe...
		setTimeout('iframeId.parentNode.removeChild(iframeId)', 250);
		}

		if (iframeId.addEventListener)
		iframeId.addEventListener("load", eventHandler, true);
		if (iframeId.attachEvent)
		iframeId.attachEvent("onload", eventHandler);

		// Set properties of form...
		form.setAttribute("target","upload_iframe");
		form.setAttribute("action", action_url);
		form.setAttribute("method","post");
		form.setAttribute("enctype","multipart/form-data");
		form.setAttribute("encoding","multipart/form-data");

		// Submit the form...
		form.submit();

		document.getElementById(div_id).innerHTML = "Uploading...";
		}
	};
	*/

	//the call back should accept the return data (true or false)
	UserManager.prototype.verifyEmail = function(emailVal, callback) {
		//don't care about session
		if (!emailVal){
			Constants.dWarn("UserManager::verifyEmail:: invalid parameter");
			return;
		}

		var self = this;

		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_email,
			data: $.param({ email: emailVal}),
			dataType: 'json',
			success: function(data){
				Constants.dLog("email verification call succeeded with response:");
				Constants.dLog(data);

				if(callback){
					callback(data.val);
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::getImgPath:: action failed");
			}
		});
	};

	UserManager.prototype.changeEmail = function(emailVal, callback) {
		if (!emailVal){
			Constants.dWarn("UserManager::changeEmail:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::changeEmail:: session does not exist, exit");
			return;
		}

		var self = this;

		$.ajax({
			type: "PUT",
			async: true,
			url: self.apis.users_email + '/' + self.sessionManager.getUserId(),
			data: $.param({ email: emailVal}),
			dataType: 'json',
			success: function(data){
				self.topBarUser.set('email', emailVal);
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::changeEmail:: action failed");
			}
		});
	};

	//for password ,try to put them inside entity
	UserManager.prototype.changePassword = function(oldPassword, newPassword, confirmNewPassword, callback) {
		//if invalid input or is already logged in, can not change password
		if (!(oldPassword && newPassword && confirmNewPassword)){
			Constants.dWarn("UserManager::changePassword:: invalid parameter");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::changePassword:: session does not exist, exit");
			return;
		}

		var self = this;

		$.ajax({
			type: "PUT",
			async: true,
			url: self.apis.users_changePassword + '/' + self.sessionManager.getUserId(),
			data: JSON.stringify({ 'oldPassword': oldPassword, 'newPassword': newPassword, 'confirmNewPassword': confirmNewPassword}),
			dataType: 'json',
			contentType: 'application/json',	//setting this should be covering the data into PUT body
			success: function(data){
				//self.topBarUser.set('password', newPassword);

				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::changePassword:: action failed");
			}
		});
	};

	UserManager.prototype.changeContactInfo = function(name, age, gender, phone, qq, callback) {
		//if invalid input or is already logged in, can not change contact information
		if (!(name && age && (typeof gender === 'number') && phone && qq)){
			Constants.dWarn("UserManager::changeContackInfo:: invalid parameter");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::changeContactInfo:: session does not exist, exit");
			return;
		}

		var self = this;
		this.topBarUser.set('name', name);
		this.topBarUser.set('age', age);
		this.topBarUser.set('gender', gender);
		this.topBarUser.set('phone', phone);
		this.topBarUser.set('qq', qq);

		this.topBarUser.overrideUrl(this.apis.users_contactInfo);
		this.topBarUser.set('userId', this.sessionManager.getUserId());
		//this will force to add id into api path, correcting it
		this.topBarUser.save({},{

            dataType:'json',

            success:function(model, response){
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::updateUser:: update failed with response:");
                Constants.dLog(response);

            }
        });
	};

	UserManager.prototype.changeLocation = function(location, callback) {
		//if invalid input or is already logged in, can not change location
		if (!(location)){
			Constants.dWarn("UserManager::changeLocation:: invalid parameter");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::changeLocation:: session does not exist, exit");
			return;
		}

		var self = this;

		$.ajax({
			type: "PUT",
			async: true,
			url: self.apis.users_singleLocation + '/' + self.sessionManager.getUserId(),
			data: $.param({'location': location.toString()}),
			dataType: 'json',
			success: function(data){
				self.topBarUser.set('location', new UserLocation(false, data));

				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::changePassword:: action failed");
			}
		});
	};

	UserManager.prototype.fetchCircleLocation = function(callback) {
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchCircleLocation:: session does not exist, exit");
			return;
		}

		var self = this;

		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_circleLocation + '/' + self.sessionManager.getUserId(),
			dataType: 'json',
			success: function(data){

				var updatedUniversityGroup = [],
					eachIndex, tempLocation;

				for(eachIndex in data){
					tempLocation = new UserLocation(false, data[eachIndex]);
					updatedUniversityGroup.push(tempLocation.toString());
                }

                self.topBarUser.set('universityGroup', updatedUniversityGroup);

				this.universityGroup_timeStamp = new Date();
				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::fetchCircleLocation:: action failed");
			}
		});
	};

	UserManager.prototype.addCircleLocation = function(location, callback) {
		if (!(location)){
			Constants.dWarn("UserManager::addCircleLocation:: invalid parameter");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::addCircleLocation:: session does not exist, exit");
			return;
		}

		var self = this;

		$.ajax({
			type: "PUT",
			async: true,
			url: self.apis.users_circleLocation + '/' + self.sessionManager.getUserId() + Utilities.makeQueryString({'location': location.toString()}),
			data: $.param({'location': location.toString()}),
			dataType: 'json',
			success: function(data){
				var tempLocation = new UserLocation(false, data);
				var originalUniversityGroup = self.topBarUser.get('universityGroup');
				originalUniversityGroup.push(tempLocation);
				self.topBarUser.set('universityGroup', originalUniversityGroup);

				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::addCircleLocation:: action failed");
			}
		});
	};

	UserManager.prototype.deleteCircleLocation = function(location, callback) {
		var self = this;
		if (!(location)){
			Constants.dWarn("UserManager::deleteCircleLocation:: invalid parameter");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::deleteCircleLocation:: session does not exist, exit");
			return;
		}


		$.ajax({
			type: "DELETE",
			async: true,
			url: self.apis.users_circleLocation + '/' + self.sessionManager.getUserId() + Utilities.makeQueryString({'location': location.toString()}),
			data: $.param({'location': location.toString()}),
			dataType: 'json',
			success: function(data){
				var originalUniversityGroup = self.topBarUser.get('universityGroup');
				var spliced = false;

				for (var i = 0; i < originalUniversityGroup.length && !spliced; i++){
					if (originalUniversityGroup[i] === location.toString()){
						originalUniversityGroup.splice(i, 1);
						spliced = true;
					}
				}

				self.topBarUser.set('universityGroup', originalUniversityGroup);
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::deleteCircleLocation:: action failed");
			}
		});
	};


	UserManager.prototype.activateAccount = function(key, callback) {
		var self = this,
			newTopBarUser = new User();

		if (!(key)){
			Constants.dWarn("UserManager::activateAccount:: invalid parameter");
			return;
		}
		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::activateAccount:: session already exists, exit");
			return;
		}


		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_emailActivation,
			data: $.param({'key': key}),
			dataType: 'json',
			success: function(data){
				//update session
				if(callback){
					self.sessionManager.fetchSession(callback);
				}
				else{
					self.sessionManager.fetchSession();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::activateAccount:: action failed");
			}
		});
	};

	UserManager.prototype.resendActivationEmail = function(callback) {
		var self = this,
			newTopBarUser = new User();

		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::resendActivationEmail:: session already exists, exit");
			return;
		}


		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_resendActivationEmail + '/' + self.sessionManager.getUserId(),
			dataType: 'json',
			success: function(data){
				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::resendActivationEmail:: action failed");
			}
		});
	};

	UserManager.prototype.forgetPassword = function(email, callback) {
		var self = this;
		if (!(email)){
			Constants.dWarn("UserManager::forgetPassword:: invalid parameter");
			return;
		}
		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::forgetPassword:: session already exists, exit");
			return;
		}

		$.ajax({
			type: "GET",
			async: true,
			url: self.apis.users_forgetPassword,
			data: $.param({'email': email}),
			dataType: 'json',
			success: function(data){
				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::forgetPassword:: action failed");
			}
		});
	};

	UserManager.prototype.findPassword = function(key, newPassword, confirmNewPassword, callback) {
		var self = this;
		if (!(key && newPassword && confirmNewPassword)){
			Constants.dWarn("UserManager::findPassword:: invalid parameter");
			return;
		}
		if (this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::findPassword:: session already exists, exit");
			return;
		}


		$.ajax({
			type: "PUT",
			async: true,
			url: self.apis.users_forgetPassword,
			data: JSON.stringify({ 'key': key, 'newPassword': newPassword, 'confirmNewPassword': confirmNewPassword}),
			dataType: 'json',
			contentType: 'application/json',	//setting this should be covering the data into PUT body
			success: function(data){
				//update session
				if(callback){
					self.sessionManager.fetchSession(callback);
				}
				else{
					self.sessionManager.fetchSession();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::findPassword:: action failed");
			}
		});
	};

	UserManager.prototype.toggleEmailNotice = function(boolFlag, callback) {
		var self = this;
		if (typeof boolFlag !== 'boolean'){
			Constants.dWarn("UserManager::toggleEmailNotice:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::toggleEmailNotice:: session does not exist, exit");
			return;
		}


		$.ajax({
			type: "PUT",
			async: true,
			url: self.apis.users_toggleEmailNotice + '/' + self.sessionManager.getUserId() + Utilities.makeQueryString({'emailNotice': boolFlag}),
			dataType: 'json',
			success: function(data){
				self.topBarUser.set('emailNotice', data.val);
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::toggleEmailNotice:: action failed");
			}
		});
	};

	UserManager.prototype.togglePhoneNotice = function(boolFlag, callback) {
		var self = this;
		if (typeof boolFlag !== 'boolean'){
			Constants.dWarn("UserManager::togglePhoneNotice:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::togglePhoneNotice:: session does not exist, exit");
			return;
		}


		$.ajax({
			type: "PUT",
			async: true,
			url: self.apis.users_togglePhoneNotice + '/' + self.sessionManager.getUserId() + Utilities.makeQueryString({'phoneNotice': boolFlag}),
			dataType: 'json',
			success: function(data){
				self.topBarUser.set('phoneNotice', data.val);
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
			},
			error: function (data, textStatus, jqXHR){
				alert("请稍后再试");
				Constants.dWarn("UserManager::togglePhoneNotice:: action failed");
			}
		});
	};

	UserManager.prototype.watchUser = function(targetUserId, callback) {
		var self = this;
		if (typeof targetUserId !== 'number'){
			Constants.dWarn("UserManager::watchUser:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::watchUser:: session does not exist, exit");
			return;
		}


		var tempCurUser = new User();
		//set the id of the temp user to curUserId to confront to API requirements
		tempCurUser.overrideUrl(this.apis.users_watchUser);
		tempCurUser.set('userId', self.sessionManager.getUserId());

		//effective fetching the watched user
		tempCurUser.save({},{

			data: $.param({ 'targetUserId': targetUserId}),

            dataType:'json',

            success:function(model, response){
				//the returned is the watched user, add it to the social list
				self.topBarUser.get('socialList').add(tempCurUser);
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::watchUser:: update failed with response:");
                Constants.dLog(response);

            }
        });
	};

	UserManager.prototype.deWatchUser = function(targetUserId, callback) {
		var self = this;
		if (typeof targetUserId !== 'number'){
			Constants.dWarn("UserManager::deWatchUser:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::deWatchUser:: session does not exist, exit");
			return;
		}


		var tempCurUser = new User();
		//set the id of the temp user to curUserId to confront to API requirements
		tempCurUser.overrideUrl(this.apis.users_watchUser);
		tempCurUser.set('userId', self.sessionManager.getUserId());

		//effectively sending a delete to curUserId
		tempCurUser.destroy({

			data: $.param({ 'targetUserId': targetUserId}),

            dataType:'json',

            success:function(model, response){

				var watchedUsers = self.topBarUser.get('socialList');
				var found = false;

				//remove the deleted user from the socialList
				for (var i = 0; i < watchUsers.length && !found; i++){
					if (watchedUsers.at(i).id === targetUserId){
						self.topBarUser.get('socialList').remove(watchedUsers.at(i));
						found = true;
					}
				}
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::deWatchUser:: delete failed with response:");
                Constants.dLog(response);

            }
        });
	};




	UserManager.prototype.watchMessage = function(targetMessageId, callback) {
		var self = this;
		if (typeof targetMessageId !== 'number'){
			Constants.dWarn("UserManager::watchMessage:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::watchMessage:: session does not exist, exit");
			return;
		}


		var tempCurMessage = new DMMessage();
		//set the id of the temp user to curUserId to confront to API requirements
		tempCurMessage.overrideUrl(this.apis.users_watchDMMessage);
		//adding the userId to this message id to force a correct id append
		tempCurMessage.set('messageId', self.sessionManager.getUserId());

		//effective fetching the message
		tempCurMessage.save({},{

			data: $.param({ 'targetMessageId': targetMessageId}),

            dataType:'json',

            success:function(model, response){
				//the returned is the watched user, add it to the social list
				self.topBarUser.get('watchList').add(tempCurMessage);
				self.timeStamp = new Date();

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::watchMessage:: update failed with response:");
                Constants.dLog(response);

            }
        });
	};

	UserManager.prototype.deWatchMessage = function(targetMessageId, callback) {
		var self = this;
		if (typeof targetMessageId !== 'number'){
			Constants.dWarn("UserManager::deWatchMessage:: invalid parameter");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::deWatchMessage:: session does not exist, exit");
			return;
		}


		var tempCurMessage = new DMMessage();
		//set the id of the temp user to curUserId to confront to API requirements
		tempCurMessage.overrideUrl(this.apis.users_watchDMMessage);
		//adding the userId to this message id to force a correct id append
		tempCurMessage.set('messageId', self.sessionManager.getUserId());

		//effectively sending a delete to curMessageId
		tempCurMessage.destroy({

			data: $.param({ 'targetMessageId': targetMessageId}),

            dataType:'json',

            success:function(model, response){

				var watchedMessages = self.topBarUser.get('watchList');
				var found = false;

				//remove the deleted user from the socialList
				for (var i = 0; i < watchedMessages.length && !found; i++){
					if (watchedMessages.at(i).id === targetMessageId){
						self.topBarUser.get('watchList').remove(watchedMessages.at(i));
						found = true;
					}
				}

				self.timeStamp = new Date();

				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::deWatchMessage:: delete failed with response:");
                Constants.dLog(response);

            }
        });
	};






	UserManager.prototype.fetchWatchedUsers = function(intendedUserId, callback) {

		var self = this;

		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::fetchWatchedUsers:: invalid parameter, exit");
			return;
		}
		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchWatchedUsers:: session does not exist, exit");
			return;
		}


		var watchedUsers = new Users();
		//set the id of the temp user to curUserId to confront to API requirements
		watchedUsers.overrideUrl(this.apis.users_watchUser + '/' + self.sessionManager.getUserId());

		//effective fetching the entire socialList
		watchedUsers.fetch({

			data: $.param({ 'intendedUserId': intendedUserId}),

            dataType:'json',

            success:function(model, response){
				//TODO
				//the returned is the entire list of watched users
				self.user.set('socialList', watchedUsers);

				self.socialList_timeStamp = new Date();
				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::fetchWatchedUsers:: fetch failed with response:");
                Constants.dLog(response);

            }
        });
	};

	UserManager.prototype.fetchWatchedMessages = function(intendedUserId, callback) {

		var self = this;
		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::fetchWatchedMessages:: invalid parameter, exit");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchWatchedMessages:: session does not exist, exit");
			return;
		}


		var watchedMessages = new DMMessages();
		//confront to API requirements
		watchedMessages.overrideUrl(this.apis.users_watchDMMessage + '/' + self.sessionManager.getUserId());

		//effective fetching the entire watchList
		watchedMessages.fetch({

			data: $.param({ 'intendedUserId': intendedUserId}),

            dataType:'json',

            success:function(model, response){
				//TODO
				//the returned is the entire list of watched messages
				self.user.set('watchList', watchedMessages);

				self.watchList_timeStamp = new Date();
				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::fetchWatchedMessages:: fetch failed with response:");
                Constants.dLog(response);

            }
        });
	};



	UserManager.prototype.fetchMessageHistory = function(intendedUserId, callback) {


		var self = this;

		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::fetchMessageHistory:: invalid parameter, exit");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchMessageHistory:: session does not exist, exit");
			return;
		}


		var messageHistory = new DMMessages();
		//confront to API requirements
		messageHistory.overrideUrl(this.apis.users_messageHistory + '/' + self.sessionManager.getUserId());


		messageHistory.fetch({

			data: $.param({ 'intendedUserId': intendedUserId}),

            dataType:'json',

            success:function(model, response){
				//TODO
				self.user.set('historyList', messageHistory);

				self.historyList_timeStamp = new Date();
				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::fetchMessageHistory:: fetch failed with response:");
                Constants.dLog(response);

            }
        });
	};


	UserManager.prototype.fetchTransactionList = function(intendedUserId, callback) {

		var self = this;

		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::fetchTransactionList:: invalid parameter, exit");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchTransactionList:: session does not exist, exit");
			return;
		}


		var transactionList = new Transactions();
		//confront to API requirements
		transactionList.overrideUrl(this.apis.users_transaction + '/' + self.sessionManager.getUserId());


		transactionList.fetch({

			data: $.param({ 'intendedUserId': intendedUserId}),

            dataType:'json',

            success:function(model, response){
				//TODO
				self.user.set('transactionList', transactionList);


				self.transactionList_timeStamp = new Date();
				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::fetchTransactionList:: fetch failed with response:");
                Constants.dLog(response);

            }
        });
	};


	UserManager.prototype.fetchNotificationList = function(intendedUserId, callback) {

		var self = this;

		if (typeof intendedUserId !== 'number'){
			Constants.dWarn("UserManager::fetchNotificationList:: invalid parameter, exit");
			return;
		}

		if (!this.sessionManager.hasSession()){
			Constants.dWarn("UserManager::fetchNotificationList:: session does not exist, exit");
			return;
		}


		var notificationList = new Notifications();
		//confront to API requirements
		notificationList.overrideUrl(this.apis.users_notification + '/' + self.sessionManager.getUserId());


		notificationList.fetch({

			data: $.param({ 'intendedUserId': intendedUserId}),

            dataType:'json',

            success:function(model, response){
				//TODO
				self.user.set('notificationList', notificationList);


				self.notificationList_timeStamp = new Date();
				if(callback){
					callback();
				}
            },

            error: function(model, response){
                Constants.dWarn("UserManager::fetchNotificationList:: fetch failed with response:");
                Constants.dLog(response);

            }
        });
	};

}).call(this);