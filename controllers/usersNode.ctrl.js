var User = require('../models/user.js');

var UsersController = {
	// Create
	new: function (req, res)
	{
		res.render('users/new',{});
	},
	create: function (req,res)
	{
		var user = new User(
		{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			username: req.body.username
			//aviary: req.body.aviary
			//band7Id: req.body.bandId
			//species: req.body.
			//member: req.body.
		});
		User.register(user, req.body.password, function (err)
		{
			if (err)
			{
				res.send('Error registering', err);
			}
			else 
			{
				res.send('you have been registered');
			}
		});
	},
	// Read	
	
	index: function (req, res)
	{
		User.find( {}, function (err, users)
		{
			res.render('users/index', {
				users: users
			});
		});
	}
/*
	index: function (req,res)
	{
		Inventory.find({}, function (err, inventory)
		{
			if (req.params.format == 'json')
			{
				res.json(inventory);
			}else{
				res.render('app/index', {
					inventory: inventory
				});
			}
		});
	},*/
	// Update
	// Delete
};

module.exports = UsersController;
