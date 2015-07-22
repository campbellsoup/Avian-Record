var mongoose = require('mongoose');

var schema = new mongoose.Schema({
		maleBand: String,
		femaleBand: String,
		//species: String,
		//coefficient: String,
		paired: String,
		locate: String,
		notes: String
});
var Pair = mongoose.model('Pair', schema);

module.exports = Pair;