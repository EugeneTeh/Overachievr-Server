var Task = require("../../app/models/tasks.model"),
	User = require("../../app/models/users.model"),
	apn = require("../../config/apn");



exports.get = function(req, res, next) {
    Task.run().then(function(result) {
        res.send(JSON.stringify(result));
    }).error(handleError(res));
}

exports.create = function (req, res, next) {
    var task = new Task(req.body);
    
    task.save().then(function(newTask) {
    	if (task.isSaved() === true) {
    		var note = apn.note;
    		
    		note.expiry = Math.floor(Date.now() / 1000) + 3600; // Expires 1 hour from now.
        	note.sound = "ping.aiff";
        	note.alert = newTask.taskCreatorName+" assigned you a task" ;
        	note.payload = {'messageFrom': newTask.taskCreatorName}
        	
			req.body.taskAssignedTo.forEach( function (assignee) {
    			User.get(assignee.assigneeEmail).then (function(user) {
    				apn.apnConnection.pushNotification(note, user.userAPNSToken);
    			});
    		});

        	
    		res.send(JSON.stringify(newTask));
    	}
    }).error(handleError(res));		
}



function handleError(res) {
    return function(error) {
        return res.send(500, {error: error.message});
    }
}