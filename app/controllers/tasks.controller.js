var Task = require("../../app/models/tasks.model")

exports.get = function(req, res, next) {
    Task.run().then(function(result) {
        res.send(JSON.stringify(result));
    }).error(handleError(res));
}

exports.create = function (req, res, next) {
    var task = new Task(req.body);
    task.save().then(function(result) {
        res.send(JSON.stringify(result));
    }).error(handleError(res));
}

function handleError(res) {
    return function(error) {
        return res.send(500, {error: error.message});
    }
}