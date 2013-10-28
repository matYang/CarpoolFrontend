
var testMockObj = {
	"testMode": false,
	"sampleMessages": new Messages(),

	"sampleMessageA": (new Message()).set("messageId", 1001).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
															.set("departure_timeSlot", 15).set("arrival_timeSlot", 15).set("isRoundTrip", true)
															.set("departure_location", new UserLocation().set("province", "江苏").set("city","苏州"))
															.set("arrival_location", new UserLocation().set("province", "江苏").set("city","南京"))
															.set("departure_seatsNumber", 3).set("arrival_seatsNumber", 3)
															.set("departure_seatsBooked", 1).set("arrival_seatsBooked", 3)
															.set("departure_priceList", [30]).set("arrival_priceList", [30]),
	"sampleMessageB": (new Message()).set("messageId", 1002).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
															.set("departure_timeSlot", 15).set("arrival_timeSlot", 15).set("isRoundTrip", true)
															.set("departure_location", new UserLocation().set("province", "江苏").set("city","苏州"))
															.set("arrival_location", new UserLocation().set("province", "江苏").set("city","南京"))
															.set("departure_seatsNumber", 3).set("arrival_seatsNumber", 3)
															.set("departure_seatsBooked", 1).set("arrival_seatsBooked", 1)
															.set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
	"sampleMessageC": (new Message()).set("messageId", 1003).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
															.set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
															.set("departure_location", new UserLocation().set("province", "江苏").set("city","苏州"))
															.set("arrival_location", new UserLocation().set("province", "江苏").set("city","南京"))
															.set("departure_seatsNumber", 3).set("departure_seatsNumber", 3)
															.set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
															.set("departure_priceList", [30]).set("arrival_priceList", [30]),
	"sampleMessageD": (new Message()).set("messageId", 1004).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
															.set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
															.set("departure_location", new UserLocation().set("province", "江苏").set("city","苏州"))
															.set("arrival_location", new UserLocation().set("province", "江苏").set("city","南京"))
															.set("departure_seatsNumber", 3).set("departure_seatsNumber", 3)
															.set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
															.set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
	"sampleMessageE": (new Message()).set("messageId", 1005).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
															.set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
															.set("departure_location", new UserLocation().set("province", "江苏").set("city","苏州"))
															.set("arrival_location", new UserLocation().set("province", "江苏").set("city","南京"))
															.set("departure_seatsNumber", 3).set("departure_seatsNumber", 3)
															.set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
															.set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
	"sampleMessageF": (new Message()).set("messageId", 1006).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
															.set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
															.set("departure_location", new UserLocation().set("province", "江苏").set("city","苏州"))
															.set("arrival_location", new UserLocation().set("province", "江苏").set("city","南京"))
															.set("departure_seatsNumber", 3).set("departure_seatsNumber", 3)
															.set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
															.set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
	"sampleMessageG": (new Message()).set("messageId", 1007).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
															.set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
															.set("departure_location", new UserLocation().set("province", "江苏").set("city","苏州"))
															.set("arrival_location", new UserLocation().set("province", "江苏").set("city","南京"))
															.set("departure_seatsNumber", 3).set("departure_seatsNumber", 3)
															.set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
															.set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
	"sampleMessageH": (new Message()).set("messageId", 1008).set("ownerId",10000).set("departure_time", new Date()).set("arrival_time", new Date())
															.set("departure_timeSlot", 15).set("arrival_timeSlot", 15)
															.set("departure_location", new UserLocation().set("province", "江苏").set("city","苏州"))
															.set("arrival_location", new UserLocation().set("province", "江苏").set("city","南京"))
															.set("departure_seatsNumber", 3).set("departure_seatsNumber", 3)
															.set("departure_seatsBooked", 1).set("departure_seatsBooked", 3)
															.set("departure_priceList", [10, 9, 8]).set("arrival_priceList", [10, 9, 8]),
	"sampleUser": (new User()).set("userId", 1560198).set("name", "卢卡子").set("imgPath","http://tp3.sinaimg.cn/2018108150/180/40023913088/1"),
	"sampleUsers": new Users(),
	"sampleUserA": (new User()).set("userId", 1),
	"sampleUserB": (new User()).set("userId", 2),
	"sampleUserC": (new User()).set("userId", 3),
	"sampleUserD": (new User()).set("userId", 4),
	"sampleUserE": (new User()).set("userId", 5),
	"sampleUserF": (new User()).set("userId", 6),

	"sampleTransactions": new Transactions(),
	"sampleTransactionA": (new Transaction()).set("transactionId", 101).set("state",0).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),
	"sampleTransactionB": (new Transaction()).set("transactionId", 102).set("state",1).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),
	"sampleTransactionC": (new Transaction()).set("transactionId", 103).set("state",2).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),
	"sampleTransactionD": (new Transaction()).set("transactionId", 104).set("state",3).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]).set("customerId", 10000),
	"sampleTransactionE": (new Transaction()).set("transactionId", 105).set("state",4).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),
	"sampleTransactionF": (new Transaction()).set("transactionId", 106).set("state",5).set("type",1).set("departure_seatsBooked",2).set("arrival_seatsBooked",2).set("departure_priceList",[20,18, 15]),

	"sampleNotifications": new Notifications(),
	"sampleNotificationA": (new Notification()).set("notificationId", 1).set("messageSummary", "sample message"),
	"sampleNotificationB": (new Notification()).set("notificationId", 2).set("messageSummary", "sample message"),
	"sampleNotificationC": (new Notification()).set("notificationId", 3).set("messageSummary", "sample message"),
	"sampleNotificationD": (new Notification()).set("notificationId", 4).set("messageSummary", "sample message"),
	"sampleNotificationE": (new Notification()).set("notificationId", 5).set("messageSummary", "sample message"),
	"sampleNotificationF": (new Notification()).set
	("notificationId", 6).set("messageSummary", "sample message"),

	"sampleLocationSZ": new UserLocation().set("province", "江苏").set("city","苏州"),
	"sampleLocationNJ": new UserLocation().set("province", "江苏").set("city","南京"),
};

testMockObj.sampleTransactions.add([testMockObj.sampleTransactionA, testMockObj.sampleTransactionB, testMockObj.sampleTransactionC, testMockObj.sampleTransactionD, testMockObj.sampleTransactionE, testMockObj.sampleTransactionF]);
testMockObj.sampleMessages.add([testMockObj.sampleMessageA, testMockObj.sampleMessageB, testMockObj.sampleMessageC, testMockObj.sampleMessageD, testMockObj.sampleMessageE, testMockObj.sampleMessageF, testMockObj.sampleMessageG, testMockObj.sampleMessageH]);
testMockObj.sampleNotifications.add([testMockObj.sampleNotificationA, testMockObj.sampleNotificationB, testMockObj.sampleNotificationC, testMockObj.sampleNotificationD, testMockObj.sampleNotificationE, testMockObj.sampleNotificationF]);
testMockObj.sampleUsers.add([testMockObj.sampleUserA, testMockObj.sampleUserA, testMockObj.sampleUserC, testMockObj.sampleUserD, testMockObj.sampleUserE, testMockObj.sampleUserF]);