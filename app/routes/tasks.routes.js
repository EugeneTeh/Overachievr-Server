var tasks = require('../../app/controllers/tasks.controller');

module.exports = function(app) {
	
	app.route('/api/tasks/').get(tasks.get);                
	app.route('/api/tasks/create').post(tasks.create);
	//app.route('/api/tasks/update').put(update);
	//app.route('/api/tasks/delete').put(del);

};