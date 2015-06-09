
// set up ======================================================================
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var app            = express();
var port           = process.env.PORT || 3333;
var mongoose       = require('mongoose');
var passport       = require('passport');
var flash          = require('connect-flash');

var morgan         = require('morgan');
var cookieParser   = require('cookie-parser');
var bodyParser     = require('body-parser');
var session        = require('express-session');
var MongoStore     = require('connect-mongo')(session);

var configDB       = require('./config/database.js');

var fileRotator    = require('file-stream-rotator');
var fs             = require('fs');
var logger         = require('./app/log');

// Logging Init  ===============================================================

var logDirectory = __dirname + '/logs';

if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

var accessLogStream = fileRotator.getStream({
    filename: logDirectory + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false
});

logger.info(' ===== Starting ===== ');

// configuration ===============================================================

mongoose.connect(configDB.url);

require('./config/passport')(passport);

//app.use(express.compress());
app.use(morgan('dev', { stream: accessLogStream }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/assets'));
app.use(expressLayouts);

app.set('view engine', 'ejs');
app.set('layout', 'layouts/main');

app.use(session({ 
    secret: 'xlovescotchscotchyscotchscotch',
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());


// routes ======================================================================
require('./app/routes.js')(app, passport);


// launch ======================================================================
app.listen(port);
logger.log('The magic happens on port ' + port);
