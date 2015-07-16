var express = require('express'),
	jade = require('jade');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/', express.static('public'));

// test hello world  
app.get('/', function (req,res)
{
	res.render('hello');
});

app.listen(8080, function()
{
	console.log('Server ready...');
});