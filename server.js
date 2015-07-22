// included libraries
var express = require('express'),
	jade = require('jade'),
	mongoose = require('mongoose'),
	bodyParser = require('body-parser')
	methodOverride = require('method-override'),
	session = require('express-session'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

// access remote aviary database
mongoose.connect('mongodb://mongodb.cs.dixie.edu/scawley');
//mongoose.connect('mongodb://scaw76:collide76@ds047622.mongolab.com:47622/aviary');


var app = express();
app.set('port', (process.env.PORT || 8080));

app.set('views', './views');
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));
app.use(methodOverride('_method'));
app.use(session({
	secret:'putsomthinsuperdupersecrethere',
	resave: false,
	saveUninitialized: true
}));
app.use('/', express.static('public'));

app.use(passport.initialize());
app.use(passport.session());

var User = require('./models/users.data.js');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



// test a jade file  
app.get('/', function (req,res)
{
	res.render('hello');
});


// routes
app.use('/', require('./routes/inventoryNode.routes.js'));
app.use('/', require('./routes/usersNode.routes.js'));
//app.use('/', require('./routes/sessionsNode.routes.js'));

app.listen(app.get('port'), function()
{
	console.log('Server ready...');
});
