var util = require('util');
/* main.js
 * All calls here are publicly exposed as REST API endpoints.
 * - all parameters must be passed in a single JSON paramater.
 * - the return 'callback' method signature is 'callback (error, data)', where 'data' is a JSON object.
 */


var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;


var user = "bmackey",
	password = "doireann",
	upString = (typeof user === 'string' && typeof password === 'string') ? user + ":" + password : "",
	database = "xpoit",
	host = "ds039487.mongolab.com:39487";
/* 'getConfig' server side REST API method.
 * Trivial example of pulling in a shared config file.
 */
exports.getConfig = function(params, callback) {
	console.log("In getConfig() call");
	var cfg = require("config.js");
	return callback(null, {
		config: cfg.config
	});
};

exports.findAll = function(params, cb) {

	console.log("I am here!!!");

	MongoClient.connect('mongodb://' + upString + '@' + host + '/' + database, function(err, db) {
		if (err) {
			return cb(err);
		}

		var collection = db.collection("records");
		collection.find().sort({
			project: 1
		}).toArray(
			function(error, items) {
				var studentList = [];
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					studentList.push({
						project: item.project,
						fname: item.fname,
						lname: item.lname,
						email: item.email,
						course: item.course,
						title: item.title,
						commercial: item.commercial,
						desc: item.description,
						disciplines: item.disciplines
					});
				}
				if (studentList) {
					return cb(error, studentList);
				}

			});
	});
};