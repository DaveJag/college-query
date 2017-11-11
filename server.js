//College Query Application

// Require Node Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan'); // for debugging



// Initialize Express for debugging and body parsing
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));


// Serve Static Content
app.use(express.static(process.cwd() + '/public'));



// Database configuration with Mongoose:
// mongoose.connect('mongodb://localhost/collegeQueryDB');
mongoose.connect("mongodb://localhost/collegeQueryDB"); //Modify for heroku.
//mongoose.connect( 'mongodb://heroku_h4vhhl2w:8q6mj3hr9k1s0k46tklor55euh@ds251845.mlab.com:51845/heroku_h4vhhl2w');
var db = mongoose.connection;

// Show Mongoose errors
db.on('error', function(err) {
    console.log('Doh! Mongoose Error: ', err);
});

// Log success message once logged into db
db.once('open', function() {
    console.log('Woohoo! Mongoose connection successful.');
});

// Import College model
var College = require('./models/College.js');



// Import Routes/Controller
var router = require('./controllers/controller.js');
app.use('/', router);



// Launch App
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Running on port: ' + port);
});