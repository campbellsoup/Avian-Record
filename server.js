// included libraries
var express = require('express'),
	jade = require('jade'),
	mongoose = require('mongoose');

// access remote aviary database
mongoose.connect('mongodb://scaw76:collide76@ds047622.mongolab.com:47622/aviary')


var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use('/', express.static('public'));

// test a jade file  
app.get('/new', function (req,res)
{
	res.render('app/new');
});

// routes
app.use('/', require('./routes/appNode.routes.js'));


app.listen(8080, function()
{
	console.log('Server ready...');
});
