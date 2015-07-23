var SessionsController = {
	new: function (req, res){
		res.render('sessions/new', {});
	},
	create: function (req, res){
		//res.send('Signed in');
		res.redirect('/inventory')
	}
};
module.exports = SessionsController;