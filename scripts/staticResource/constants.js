/**
 *   This is a special global object that will be instantiated only once, storing all constants
 */

var getEnvironmentServerOrigin = function () {
    var isOnLocal = C_ENV_VAR !== 'REMOTE';
    return {
        'httpOrigin': isOnLocal ? 'localhost:8015' : '..',
        'socketOrigin': isOnLocal ? 'localhost:3000' : '54.201.115.56:3000'
    };

};

var Constants = {

    //all console logs/warns should use these methods to help IE compatability
    dLog: function (message) {
        Info.log(message);
    },

    dWarn: function (err) {
        Info.warn(err);
    },

    origin: 'http://' + getEnvironmentServerOrigin().httpOrigin,
    socketOrigin: 'http://' + getEnvironmentServerOrigin().socketOrigin,

    miliSecInDay: 86400000,

    templateResources: [
    /* ---------  DM Modules  ----------*/
    "DetailMessage", "Publish_singleSlotAsk", "Publish_base", "Publish_step1", "Publish_step2", "Publish_step3", "SimpleMessage", "Edit", "Transaction",

    /*----------- dropdowns  ----------*/
    "notificationDropdown", "letterDropdown", "favoriteDropdown",

    /*-----------  modals  ---------*/
    "genderEditWindow", "hourRateEditWindow", "locationEditWindow", "timeDateEditWindow", "transactionDetail", "messageCancel", "locationPicker",

    /*-----------  person pages  -----------*/
    "personal", "personalWatch", "personalMessage", "personalHistory", "personalUtility", "personalSocial", "personalSocialCard", "personalSimpleUser", "personalTransactionHistory", "personalNotificationHistory",

    /*-----------  Registration  -----------*/
    "registration_base", "registration_step1", "registration_step2", "registration_step3", "registration_step4",

    /*-----------  topBar  ------------*/
    "topBar-loggedIn", "topBar-notLoggedIn",

    /*-----------  letter -------------*/
    "letter",
    
    /*-----------  top level moduels  ----------*/
    "tadv", "front", "main", "userSearch"],

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

    genderLookup: ["male", "female", "both"],

    paymentMethod: {
        "offline": 0,
        "paypal": 1,
        "all": 2
    },

    transactionState: {
        'init': 0,
        'cancelled': 1,
        'aboutToStart': 2,
        'finished': 3,
        'underInvestigation': 4,
        'invalid': 5
    },

    transactionStateChangeAction: {
        'init': 0,
        'cancel': 1,
        'report': 2,
        'evaluate': 3
    },

    transactionType: {
        'departure': 0,
        'arrival': 1
    },

    stateText: ["待确认", "已确认", "已拒绝", "即将开始", "已取消", "已评分", "审理中", "未评分", "卖方评分", "买方评分", "完成"],

    notificationState: {
        'unread': 0,
        'read': 1
    },

    notificationEvent: {
        'transactionInit': 0,
        'transactionCancelled': 1,
        'transactionAboutToStart': 2,
        'transactionEvaluated': 3,
        'tranasctionUnderInvestigation': 4,
        'transactionReleased': 5,
        'watched': 6
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
        "open": 2,
        "closed": 1,
        "deleted": 0
    },

    DayTimeSlot: {
        'n0': 0,
        'n1': 1,
        'n2': 2,
        'n3': 3,
        'n4': 4,
        'n5': 5,
        'n6': 6,
        'n7': 7,
        'n8': 8,
        'n9': 9,
        'n10': 10,
        'n11': 11,
        'n12': 12,
        'n13': 13,
        'n14': 14,
        'n15': 15,
        'n16': 16,
        'n17': 17,
        'n18': 18,
        'n19': 19,
        'n20': 20,
        'n21': 21,
        'n22': 22,
        'n23': 23
    },

    LetterType: {
        'user': 0,
        'system': 1
    },

    LetterState: {
        'unread': 0,
        'read': 1,
        'invalid': 2
    },

    LetterDirection: {
        'inbound': 0,
        'outbound': 1,
        'both': 2
    },

    LocationDirection: {
        'from': 0,
        'to': 1
    },

    weekDayArray: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],

    /*---------------  Personal view constants   --------------*/
    personalTemplateMapping: {
        'personalHistory': 'personalPage/personalHistory',
        'persoanlMessage': 'personalPage/personalMessage',
        'personalSocial': 'personalPage/personalSocial',
        'personalUtility': 'personalPage/personalUtility'
    },

    getDefaultUserLocation: function () {
        return new UserLocation();
    },


};
