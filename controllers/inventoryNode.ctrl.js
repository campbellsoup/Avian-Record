var Inventory = require('../models/inventory.data.js');

var InventoryController = {
	//Create
	new: function (req,res)
	{
		res.render('inventory/new', {});
	},
	create: function (req,res)
	{
		var inventory = new Inventory({
			species: req.body.species,
			subspecies: req.body.subspecies,
			hybrid: req.body.hybrid,
			band: req.body.band,
			hatch: req.body.hatch,
			gender: req.body.gender,
			mutation: req.body.mutation,
			dad: req.body.dad,
			mom: req.body.mom,
			locate: req.body.locate,
			acquired: req.body.acquired,
			origin: req.body.origin,
			owner: req.body.owner,
			pet: req.body.pet,
			imported: req.body.imported,
			chip: req.body.chip,
			dna: req.body.dna,
			available: req.body.available,
			notes: req.body.notes
		});

		inventory.userId = req.user._id;

		inventory.save(function (err,inventory)
		{
			if (req.params.format =='json'){
				res.status(201).json(inventory);
			} else {
				res.redirect('/inventory');
			}
		});
	},
	
	//Read
	index: function (req,res)
	{
		console.log('inventory index');
		var dbQuery = {};
		if (req.user){
			dbQuery.userId = req.user._id;
		}
		Inventory.find(dbQuery, function (err, inventory)
		{
			if (req.params.format == 'json')
			{
				res.json(inventory);
			}else{
				res.render('inventory/index', {
					inventory: inventory
				});
			}
		});
	},
	show: function (req,res){
		console.log('inventory show');
		Inventory.findOne({_id: req.params.id}, function (err, item) 
		{
			if (req.params.format == 'json')
			{
				res.json(item);
			} else {
				res.render('inventory/show', {
					item: item
				});
			}
		});
	},
	//Update
	edit: function (req,res)
	{
		Inventory.findOne({_id: req.params.id}, function (err, item) 
		{
			res.render('inventory/edit', {
				item: item
			});
		});
		
	},
	update: function (req,res)
	{
		Inventory.findOneAndUpdate({_id: req.params.id},{
			species: req.body.species,
			subspecies: req.body.subspecies,
			hybrid: req.body.hybrid,
			band: req.body.band,
			hatch: req.body.hatch,
			gender: req.body.gender,
			mutation: req.body.mutation,
			dad: req.body.dad,
			mom: req.body.mom,
			locate: req.body.locate,
			acquired: req.body.acquired,
			origin: req.body.origin,
			owner: req.body.owner,
			pet: req.body.pet,
			imported: req.body.imported,
			chip: req.body.chip,
			dna: req.body.dna,
			available: req.body.available,
			notes: req.body.notes
		}, function (err, item) {
			if (req.params.format == 'json')
			{
				res.status(200).json(item);
			} else {
				res.redirect('/inventory/'+req.params.id);
			}
		});
	},
	//Delete
	destroy: function (req,res)
	{
		Inventory.remove({_id:req.params.id}, function (err)
		{
			if (req.params.format == 'json'){
				res.status(204).send('');
			} else {
				res.redirect('/inventory');
			}
		});
	} 
};
module.exports = InventoryController;
