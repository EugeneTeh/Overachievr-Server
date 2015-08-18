var express = require('express'),
	bodyParser = require('body-parser');
	
module.exports = function() {
	var app = express();

	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(bodyParser.json());

	require('../app/routes/tasks.routes.js')(app);
	require('../app/routes/users.routes.js')(app);

	return app;
};