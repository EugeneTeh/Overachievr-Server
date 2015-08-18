var config = require("./env/"+ process.env.NODE_ENV +".config");
var thinky = require('thinky')(config.rethinkdb);

module.exports = thinky;
require('../app/models/tasks.model');
require('../app/models/users.model');
	


