var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var env  = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'));

/*Mongoose/Mongo connect*/
mongoose.connect('mongodb://localhost/MeanDB')
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('MeanDB db opened');
});

app.get('/ngPartials/:partialPath',function(req, res){
    res.render('ngPartials/' + req.params.partialPath);
});

app.get('*', function(req, res){
    res.render('index');
});

var port = 3030;

app.listen(port);
console.log('now running on port ' + port);
