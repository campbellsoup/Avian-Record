var express = require('express'),
	jade = require('jade');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/', express.static('public'));

// test 
app.get('/login', function (req,res)
{
	res.render('sessions/loginForm');
});



app.listen(8080, function()
{
	console.log('Server ready...');
});
