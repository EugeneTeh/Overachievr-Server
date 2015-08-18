var	thinky = require("../../config/thinky"),
	type = thinky.type;
    
var Task = thinky.createModel("Tasks", {
    	taskID: type.string(),
		taskCreatorName: type.string(),
		taskCreatorEmail: type.string(),
		taskName: type.string(),
		taskDescription: type.string(),
		taskStatus: type.string(),
		taskTip: type.number(),
		taskDueDateTime: type.string(),
		taskReminderDateTime: type.string(),
		taskCreatedDateTime: type.string(),
		taskAssignedDateTime: type.string(),
		taskCompletedDateTime: type.string(),
		taskVerifiedDateTime: type.string(),
		taskArchivedDateTime: type.string(),
		taskRedoDateTime: type.string(),
		taskAssignedTo: [{
			assigneeEmail: type.string(),
    		assigneeName: type.string()
		}]
	}, {
		pk: "taskID"
});


module.exports = Task;