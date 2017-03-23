var mongoose = require('mongoose')

var schema = new mongoose.Schema({
	userId: { type: mongoose.Schema.ObjectId, ref: 'User' },
	species: String,
	subspecies: String,
	hybrid: String,
	band: String,
	hatch: String,
	gender: String,
	mutation: String,
	dad: String,
	mom: String,
	locate: String,
	acquired: String,
	origin: String,
	owner: String,
	pet: String,
	imported: String,
	chip: String,
	dna: String,
	available: String,
	notes: String
});
var Inventory = mongoose.model('Inventory', schema);

module.exports = Inventory;



