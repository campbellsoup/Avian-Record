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
/*
var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	species: String,
	pet: String,
	location: String
});
 var Iventory = mongoose.model('Inventory', schema);

*/