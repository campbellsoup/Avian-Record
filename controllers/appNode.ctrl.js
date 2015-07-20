var Inventory = require('../models/app.data.js');

var AppController = {
	//Create
	new: function (req,res)
	{
		res.render('app/new', {});
	},
	create: function (req,res)
	{
		var inventory = new Inventory({
			species: req.body.species,
			pet: req.body.pet,
			location: req.body.location
		});
		inventory.save(function (err,inventory){
			res.redirect('/app');
		});
	},
	
	//Read
	index: function (req,res)
	{
		Inventory.find({},function (err, inventory)
		{
			res.render('app/index', {
				inventory: inventory
			});
		});
	},
	show: function (req,res){
		Inventory.findOne({_id: req.params.id}, function (err, item) 
		{
			res.render('app/show', {
				item: item
			});
		});
	},
	//Update
	edit: function (req,res)
	{
		Inventory.findOne({_id: req.params.id}, function (err, item) 
		{
			res.render('app/edit', {
				item: item
			});
		});
		
	},
	update: function (req,res)
	{
		Inventory.findOneAndUpdate({_id: req.params.id},{
			species: req.body.species,
			pet: req.body.pet,
			location: req.body.location
		}, function (err, item) {
			res.redirect('/app')
		});
	}/*,
	
	//Delete
	destroy: function (req,res)
	{
		res.send('destroy connected')
	}*/
};
module.exports = AppController;
