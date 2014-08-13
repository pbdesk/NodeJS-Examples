var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var logger = require('morgan');

var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path).use(nib());
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }));

app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    //res.end('Hello, World! from NodeJS');
    res.render('index', {title:'Hello, World! from NodeJS'});
});

var port = process.env.port || 1337;
app.listen(port);

//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);