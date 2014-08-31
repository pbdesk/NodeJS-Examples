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
if(env === 'development'){
    mongoose.connect('mongodb://localhost/MeanDB');
}
else{
    mongoose.connect('mongodb://localhost/MeanDB'); // Prod con str
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('MeanDB db opened');
});

/*var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
    mongoMessage = messageDoc.message;
});*/


app.get('/ngPartials/:partialPath',function(req, res){
    res.render('ngPartials/' + req.params.partialPath);
});

app.get('*', function(req, res){
    res.render('index'/*,{mongoMessage: mongoMessage}*/);
});

var port = process.env.PORT || 3030;

app.listen(port);
console.log('now running on port ' + port);
