var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var schema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String
	//aviary: String
	//bandId: String
	//species: String
	//member: String
});

schema.plugin(passportLocalMongoose);
var User = mongoose.model('User', schema);

module.exports = User;
