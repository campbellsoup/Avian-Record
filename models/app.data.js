/*
var inventory = [
	'bob',
	'joe',
	'babbet'
];

var Inventory = {
	getAll: function (){
		return inventory;
	}
};

 module.exports = Inventory;
*/
var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	species: String,
	pet: String,
	location: String
});
var Inventory = mongoose.model('Inventory', schema);

module.exports = Inventory;