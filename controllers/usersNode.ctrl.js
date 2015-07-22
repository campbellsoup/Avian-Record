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
	},
	show: function (req,res)
	{
		User.findOne({_id: req.params.id}, function (err, user)
		{
			res.render('users/show', {
					user: user
			});
		});
	},
	// Update
	edit: function (req,res)
	{
		User.findOne({_id: req.params.id}, function (err, user)
		{
			res.render('users/edit', {
				user: user
			});
		});
	},
	update: function (req,res)
	{
		User.findOneAndUpdate({_id: req.params.id},
		{
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			username: req.body.username
			//aviary: req.body.aviary
			//band7Id: req.body.bandId
			//species: req.body.
			//member: req.body.
		}, function (err, item)
		{
			res.redirect('/users/'+req.params.id);
		});

	},
	// Delete
	destroy: function (req,res)
	{
		User.remove({_id: req.params.id}, function (err)
		{
			if(err){
				console.log(err);
			}
			res.redirect('/users');
		});
	}
};

module.exports = UsersController;
