var express = require('express'),
	jade = require('jade');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/', express.static('public'));

// test a file  

app.get('/', function (req,res)
{
	res.render('app/singleShow');
});

// routes
app.use('/', require('./routes/appNode.routes.js'));


app.listen(8080, function()
{
	console.log('Server ready...');
});
