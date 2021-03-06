var User = require("../../app/models/users.model")

exports.get = function(req, res, next) {
    User.run().then(function(result) {
        res.send(JSON.stringify(result));
    }).error(handleError(res));
}

exports.checkExist = function (req, res, next, userPrimaryEmail) {
    var user = new User(req.body);
    User.get(userPrimaryEmail).then(function(result) {
        res.send(JSON.stringify(result));
    }).error(handleError(res));
}

exports.create = function (req, res, next) {
    var user = new User(req.body);
    user.save().then(function(result) {
        res.send(JSON.stringify(result));
    }).error(handleError(res));
}

exports.update = function (req, res, next) {
	var user = new User(req.body);
	User.get(user.userPrimaryEmail).update(user).execute().then(function(user) {
		res.send(JSON.stringify(user));
	}).error(handleError(res));
}

function handleError(res) {
    return function(error) {
        return res.send(500, {error: error.message});
    }
}