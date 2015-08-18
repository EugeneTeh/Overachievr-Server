process.env.NODE_ENV = process.env.NODE_ENV || 'development';


var config = require('./config/env/'+ process.env.NODE_ENV + '.config'),
	express = require('./config/express'),
	thinky = require('./config/thinky'),
	apn = require('./config/apn');

var app = express();
app.listen(config.express.port);

module.exports = app;
console.log(process.env.NODE_ENV + ' server running at http://ec2-52-25-48-116.us-west-2.compute.amazonaws.com:' + config.express.port);
