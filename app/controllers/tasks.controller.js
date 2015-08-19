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
				if (assignee.assigneeEmail !== newTask.taskCreatorEmail) { // don't send push notification to self
				console.log(assignee.assigneeEmail+ "   " +newTask.taskCreatorName );
    				User.get(assignee.assigneeEmail).then(function(user) {
    					var token = user.userAPNSToken.replace(/[<> ]/g, "");
    					apn.apnConnection.pushNotification(note, token);
    					console.log("Push Notification sent to " + assignee.assigneeEmail +" "+ token);
    				});
    			}
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