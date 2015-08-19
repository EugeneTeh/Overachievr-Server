var apn = require("apn");
var fs = require("fs");

exports.apnConnection = new apn.Connection({
  key: fs.readFileSync("./config/env/cert/" + process.env.NODE_ENV + "/key.pem"),
  cert: fs.readFileSync("./config/env/cert/" + process.env.NODE_ENV + "/cert.pem"),
  production: false
});

exports.note = new apn.Notification();




