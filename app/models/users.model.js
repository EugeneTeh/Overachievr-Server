var	thinky = require("../../config/thinky"),
	type = thinky.type,
	r = thinky.r;
    
var User = thinky.createModel("Users", {
    	userPrimaryEmail: type.string(),
    	userMobile: type.string(),
    	userFBEmail: type.string(),
    	userFBFirstName: type.string(),
    	userFBLastName: type.string(),
    	userFBName: type.string(),
    	userFBToken: type.string(),
    	userGMail: type.string(),
    	userGMailToken: type.string(),
    	userIsRegistered: type.boolean(),
    	userRegisteredDateTime: type.string(),
    	userSessionID: type.string(),
    	userLastSessionDateTime: type.string().default(r.now()),
    	userAPNSToken: type.string(),
    	userLinkedEmails: [type.string()]
	}, {
		pk: "userPrimaryEmail"
});

module.exports = User;