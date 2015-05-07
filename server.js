
// set up ======================================================================
var express      = require('express');
var app          = express();
var port         = process.env.PORT || 3333;
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB     = require('./config/database.js');

// configuration ===============================================================

mongoose.connect(configDB.url);

require('./config/passport')(passport);

//app.use(express.compress());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use(session({ 
    secret: 'ilovescotchscotchyscotchscotch',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());


// routes ======================================================================
require('./app/routes.js')(app, passport);


// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);
