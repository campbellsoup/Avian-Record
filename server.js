// included libraries
var express = require('express'),
	jade = require('jade'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser');

// access remote aviary database
mongoose.connect('mongodb://scaw76:collide76@ds047622.mongolab.com:47622/aviary')


var app = express();
app.set('port', (process.env.PORT || 8080));

app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended:false }));
app.use('/', express.static('public'));

// test a jade file  
app.get('/new', function (req,res)
{
	res.render('app/new');
});

// routes
app.use('/app', require('./routes/appNode.routes.js'));


app.listen(app.get('port'), function()
{
	console.log('Server ready...');
});
