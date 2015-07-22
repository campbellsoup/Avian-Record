// included libraries
var express = require('express'),
	jade = require('jade'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser')
	methodOverride = require('method-override');

// access remote aviary database
//mongoose.connect('mongodb://mongodb.cs.dixie.edu/scawley');
mongoose.connect('mongodb://scaw76:collide76@ds047622.mongolab.com:47622/aviary');


var app = express();
app.set('port', (process.env.PORT || 8080));

app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(methodOverride('_method'));
app.use('/', express.static('public'));

// test a jade file  
app.get('/', function (req,res)
{
	res.render('pairs/index');
});

// routes
app.use('/', require('./routes/appNode.routes.js'));
app.use('/', require('./routes/pairsNode.routes.js'));


app.listen(app.get('port'), function()
{
	console.log('Server ready...');
});
