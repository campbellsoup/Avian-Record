var Inventory = require('../models/app.data.js');

var AppController = {
	//Create
	new: function (req,res)
	{
		res.render('app/new', {});
	},/*
	create: function (req,res)
	{
		res.send('create connected')
	},
	*/
	//Read
	index: function (req,res)
	{
		var records = Inventory.getAll();
		res.render('app/index', {
			records: records
		});
	}/*
	show: function (req,res)
	{
		res.send('show connected')
	},

	//Update
	edit: function (req,res)
	{
		res.send('edit connected')
	},
	update: function (req,res)
	{
		res.send('update connected')
	},

	//Delete
	destroy: function (req,res)
	{
		res.send('destroy connected')
	}*/
};
module.exports = AppController;
