var User = require('../models/users.data.js');

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
			if (err){
				res.send('Error registering', err);
			}
			else if(req.params.format =='json'){
				res.json(user);
			}else{
				res.redirect('/session/new');
				//res.send('you have been registered');
			}
		});
	},
	// Read	
	index: function (req, res)
	{
		User.find({}, function (err, users)
		{
			if(req.params.format == 'json'){
				res.json(users);
			}else{
				res.render('users/index', {
					users: users
				});
			}
		});
	},
	show: function (req,res)
	{
		User.findOne({_id: req.params.id}, function (err, user)
		{
			if(req.params.format == 'json'){
				res.json(user);
			}else{
				res.render('users/show', {
					user: user
				});
			}
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
		}, function (err, user)
		{
			if(req.params.format =='json'){
				res.status(200).json(user);
			}else{
			res.redirect('/users/'+req.params.id);
			}
		});
	},
	// Delete
	destroy: function (req,res)
	{
		//res.send('delete conntected') 
		User.remove({_id:req.params.id},function (err)
		{
			if(err){
				console.log(err, "mine");
			}else if(req.params.format =='json'){
				res.status(204).send('');
			}else{
				res.redirect('/users');
			}
		});
	}
};

module.exports = UsersController;
