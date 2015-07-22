var Pair = require('../models/pairs.data.js');

var PairController = {
//Create
	new: function (req,res)
	{
		res.render('pairs/new', {});
	},
	create: function (req,res)
	{
		var pair = new Pair({
			maleBand: req.body.maleBand,
			femaleBand: req.body.femaleBand,
		//both items below need coding to be auto generated on form	
			//species: req.body.species,
			//coefficient:req.body.coefficient,
			paired: req.body.paired,
			locate: req.body.locate,
			notes: req.body.notes
		});

		pair.save(function (err,pair)
		{
			if (req.params.format =='json'){
				res.status(201).json(pair);
			} else {
				res.redirect('/pairs');
			}
		});
	},
	
	//Read
	index: function (req,res)
	{
		Pair.find({},function (err, pairs)
		{
			if (req.params.format == 'json')
			{
				res.json(pairs);
			}else{
				res.render('pairs/index', {
					pairs: pairs
				});
			}
		});
	},
	show: function (req,res){
		Pair.findOne({_id: req.params.id}, function (err, pair)
		{
			if (req.params.format == 'json')
			{
				res.json(pair);
			} else {
				res.render('pairs/show', {
					pair: pair
				});
			}
		});
	},
	//Update
	edit: function (req,res)
	{
		Pair.findOne({_id: req.params.id}, function (err, pair) 
		{
			res.render('pairs/edit', {
				pair: pair
			});
		});
		
	},
	update: function (req,res)
	{
		Pair.findOneAndUpdate({_id: req.params.id},{
			maleBand: req.body.maleBand,
			femaleBand: req.body.femaleBand,
		//both items below need coding to be auto generated on form
			//species: req.body.species,
			//coefficient:req.body.coefficient,
			paired: req.body.paired,
			locate: req.body.locate,
			notes: req.body.notes
		}, function (err, pair) {
			if (req.params.format == 'json')
			{
				res.status(200).json(pair);
			} else {
				res.redirect('/pairs/' + req.params.id);
			}
		});
	},
	//Delete
	destroy: function (req,res)
	{
		Pair.remove({_id:req.params.id}, function (err)
		{
			if (req.params.format == 'json'){
				res.status(204).send('');
			} else {
				res.redirect('/pairs');
			}
		});
	} 
};
module.exports = PairController;