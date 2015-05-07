'use strict';

var express = require('express');
var passport = require('passport');
var app = express();
var port = 3333;

var exphbs = require('express3-handlebars');
var hbs;

app.use(express.compress());

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: 'views/layouts/',
    partialsDir: 'views/partials/'
}));

app.set('views', __dirname + '/views');
    
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'handlebars');


app.get('/', function(request, response, next) {
    response.render('index');
});

app.get('/login', function(request, response, next) {
    response.render('login');
});

app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true }));


app.listen(process.env.PORT || port);
console.log('Express started on port ' + port);
