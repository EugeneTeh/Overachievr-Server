var users = require('../../app/controllers/users.controller');

module.exports = function(app) {

	app.route('/api/users/').get(users.get);
	app.route('/api/users/:userPrimaryEmail').get(users.checkExist);             
	app.route('/api/users/create').post(users.create);
	app.route('/api/users/update').put(users.update);
	
	
	app.param('userPrimaryEmail', users.checkExist)

	//app.route('/api/users/delete').put(del);


};