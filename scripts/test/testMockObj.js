
var testMockObj = {
	"testMode": true,
	"sampleDMMessages": new DMMessages(),

	"sampleDMMessageA": (new DMMessage()).set("messageId", 1001).set("ownerId",10000).set("ownerName","路卡修").set("price",20).set("ownerPhone","18651210086").set("ownerQq", "812461202").set("ownerEmail", "badstudent@gmail.com"),
	"sampleDMMessageB": (new DMMessage()).set("messageId", 1002).set("ownerId",10000),
	"sampleDMMessageC": (new DMMessage()).set("messageId", 1003).set("ownerId",10000),
	"sampleDMMessageD": (new DMMessage()).set("messageId", 1004).set("ownerId",20001),
	"sampleDMMessageE": (new DMMessage()).set("messageId", 1005).set("ownerId",20001),
	"sampleDMMessageF": (new DMMessage()).set("messageId", 1006).set("ownerId",20001),

	"sampleUser": (new User()).set("userId", 1560198).set("userName", "卢卡子").set("imgPath","http://tp3.sinaimg.cn/2018108150/180/40023913088/1"),
	"sampleUsers": new Users(),
	"sampleUserA": (new User()).set("userId", 1),
	"sampleUserB": (new User()).set("userId", 2),
	"sampleUserC": (new User()).set("userId", 3),
	"sampleUserD": (new User()).set("userId", 4),
	"sampleUserE": (new User()).set("userId", 5),
	"sampleUserF": (new User()).set("userId", 6),

	"sampleTransactions": new Transactions(),
	"sampleTransactionA": (new Transaction()).set("transactionId", 101).set("initUserId",12).set("initUserName","路卡修").set("targetUserName","Simon").set("price",20).set("initUserLevel","10"),
	"sampleTransactionB": (new Transaction()).set("transactionId", 102).set("initUserId",12).set("initUserName","路卡修").set("targetUserName","Simon").set("price",20).set("initUserLevel","10"),
	"sampleTransactionC": (new Transaction()).set("transactionId", 103).set("initUserId",12).set("initUserName","路卡修").set("targetUserName","Simon").set("price",20).set("initUserLevel","10"),
	"sampleTransactionD": (new Transaction()).set("transactionId", 104),
	"sampleTransactionE": (new Transaction()).set("transactionId", 105),
	"sampleTransactionF": (new Transaction()).set("transactionId", 106),

	"sampleNotifications": new Notifications(),
	"sampleNotificationA": (new Notification()).set("notificationId", 1).set("messageSummary", "sample message"),
	"sampleNotificationB": (new Notification()).set("notificationId", 2).set("messageSummary", "sample message"),
	"sampleNotificationC": (new Notification()).set("notificationId", 3).set("messageSummary", "sample message"),
	"sampleNotificationD": (new Notification()).set("notificationId", 4).set("messageSummary", "sample message"),
	"sampleNotificationE": (new Notification()).set("notificationId", 5).set("messageSummary", "sample message"),
	"sampleNotificationF": (new Notification()).set("notificationId", 6).set("messageSummary", "sample message")
};

testMockObj.sampleTransactions.add([testMockObj.sampleTransactionA, testMockObj.sampleTransactionB, testMockObj.sampleTransactionC, testMockObj.sampleTransactionD, testMockObj.sampleTransactionE, testMockObj.sampleTransactionF]);
testMockObj.sampleDMMessages.add([testMockObj.sampleDMMessageA, testMockObj.sampleDMMessageB, testMockObj.sampleDMMessageC, testMockObj.sampleDMMessageD, testMockObj.sampleDMMessageE, testMockObj.sampleDMMessageF]);
testMockObj.sampleNotifications.add([testMockObj.sampleNotificationA, testMockObj.sampleNotificationB, testMockObj.sampleNotificationC, testMockObj.sampleNotificationD, testMockObj.sampleNotificationE, testMockObj.sampleNotificationF]);
testMockObj.sampleUsers.add([testMockObj.sampleUserA, testMockObj.sampleUserA, testMockObj.sampleUserC, testMockObj.sampleUserD, testMockObj.sampleUserE, testMockObj.sampleUserF]);