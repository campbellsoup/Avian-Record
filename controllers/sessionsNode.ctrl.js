var SessionsController = {
	new: function (req, res){
		res.render('sessions/new', {});
	},
	create: function (req, res){
		//res.send('Signed in');
		res.redirect('/inventory')
	},
	destroy: function (req,res){
		req.logout();
		res.redirect('/');
	}
};
module.exports = SessionsController;