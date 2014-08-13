// server.js

// BASE SETUP
// =============================================================================

// call the packages we need

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//MongoDB connection string
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');


var Bear = require('./models/bear');


// configure app to use bodyParser()
// this will let us get the data from a POST
//app.use(bodyParser()); ////Now deprecated
//app.use(bodyParser.urlencoded())

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

// set our localhost port
var port = process.env.PORT || 8080; 

// SET ROUTES FOR OUR API
var router = express.Router();

//Test root route
router.get('/', function(req, res){
    res.json({message: 'Welcome to NodeJS'});
});

// API Route
app.use('/api', router);

//Start web server
app.listen(port);
console.log("Server started at port " + port);