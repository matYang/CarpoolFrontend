/**
*   This is a special global object that will be instantiated only once, storing all constants
*/

var Constants = {

	//all console logs/warns should use these methods to help IE compatability
	dLog: function(message){
		Info.log(message);
	},

	dWarn: function(err){
		Info.warn(err);
	},

	origin: 'http://localhost:8015',

	miliSecInDay: 86400000,

	templateResources: [
		/* ---------  DM Modules  ----------*/
		"Module/DetailMessage",
		"Module/Publish_singleSlotAsk",
		"Module/Publish_singleSlotHelp",
		"Module/Publish_base",
		"Module/Publish_step1",
		"Module/Publish_step2",
		"Module/Publish_step3",
		"Module/SimpleMessage",
		"Module/Edit",
		"Module/Transaction",
		"Module/Front",

			/*-----------  modals  ---------*/
		"modal/genderEditWindow",
		"modal/hourRateEditWindow",
		"modal/locationEditWindow",
		"modal/timeDateEditWindow",
		"modal/transactionDetail",
		"modal/locationPicker",


		/*-----------  person pages  -----------*/
		"personalPage/personal",
		"personalPage/personalWatch",
		"personalPage/personalMessage",
		"personalPage/personalHistory",
		"personalPage/personalUtility",
		"personalPage/personalSocial",
		"personalPage/personalSimpleMessage",
		"personalPage/personalDetailMessage",
		"personalPage/personalSimpleUser",
		"personalPage/personalTransactionHistory",
		"personalPage/personalNotificationHistory",


		/*-----------  Registration  -----------*/
		"registration/registration_base",
		"registration/registration_step1",
		"registration/registration_step2",
		"registration/registration_step3",
		"registration/registration_step4",


		/*-----------  topBar  ------------*/
		"topBar/topBar-loggedIn",
		"topBar/topBar-notLoggedIn",


		/*-----------  top level moduels  ----------*/
		"advertisement",
		"front",
		"main"
	],

	messageType: {
		"ask": 0,
		"help": 1,
		"both": 2
	},

	gender: {
		"male": 0,
		"female": 1,
		"both": 2
	},

	genderLookup: [
		"male",
		"female",
		"both"
	],

	paymentMethod: {
		"offline": 0,
		"paypal": 1,
		"all": 2
	},

	transactionState: {
		"init": 0,
		"confirm": 1,
		"refused": 2,
		"aboutToStart": 3,
		"cancelled": 4,
		"finishedToEvaluate": 5,
		"underInvestigation": 6,
		"success_noEvaluation": 7,
		"success_initUserEvaluated": 8,
		"success_targetUserEvaluated": 9,
		"success": 10
	},

	stateText:[
		"待确认",
		"已确认",
		"已拒绝",
		"即将开始",
		"已取消",
		"已评分",
		"审理中",
		"未评分",
		"卖方评分",
		"买方评分",
		"完成"
	],

	notificationType: {
		"on_user": 0,
		"on_message": 1,
		"on_transaction": 2
	},

	notificationEvent: {
		"messageWatched": 0,
		"watchingMessageModified": 1,
		"watchingMessageDeleted": 2,
		"watchingMessageAboutToExpire": 3,
		"followerNewPost": 4,
		"followed": 5,
		"transactionPending": 6,
		"transactionConfrimed": 7,
		"transactionRefused": 8,
		"transactionAboutToStart": 9,
		"transactionCancelled": 10,
		"transactionFinishedToEvaluate": 11,
		"tranasctionUnderInvestigation": 12,
		"transactionEvaluated": 13,
		"transactionAboutToAutoMark": 14,
		"transactionAutoMarked": 15
	},

	userState: {
		"normal": 0,
		"invalid": -1
	},

	userSearchState: {
		"universityAsk": 0,
		"universityHelp": 1,
		"regionAsk": 2,
		"regionHelp": 3,
		"universityGroupAsk": 4,
		"universityGroupHelp": 5
	},

	messageState: {
		"normal": 0,
		"expired": -1,
		"deleted": -2
	},


	timeSlot:{
		"morning": 0,
		"afternoon": 1,
		"night": 2,
		"unspecified": 3
	},

	DayTimeSlot:{
		'all': 0,
		'morning': 1,
		'afternoon': 2,
		'night': 3,
		'specific': 4
	},

	weekDayArray: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],

	/*---------------  Personal view constants   --------------*/
	personalTemplateMapping: {
		'personalHistory': 'personalPage/personalHistory',
		'persoanlMessage': 'personalPage/personalMessage',
		'personalWatch': 'personalPage/personalWatch',
		'personalUtility': 'personalPage/personalUtility'
	},

	getDefaultUserLocation: function(){
		return new UserLocation({'hierarchyNameList': ['Canada', 'Ontario', 'Waterloo', 'undetermined'], 'customDepthIndex': 3});
	}

};