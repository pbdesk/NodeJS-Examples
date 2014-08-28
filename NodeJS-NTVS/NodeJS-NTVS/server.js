var http = require('http');
var express = require('express');
var app = express();

var controllers = require("./controllers");

//View Engine
app.set('view engine', 'vash');


controllers.init(app);


app.get('/api/user', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send({name: 'asdf', group: 'admin'});

});

var server = http.createServer(app);


//var server = http.createServer(function (req, res) {
//    console.log(req.url);
//    res.write('<div>this is fun</div>');
//    res.write(req.url);
//    res.end();

//});
server.listen(3000);