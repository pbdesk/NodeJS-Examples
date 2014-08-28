﻿var http = require('http');
var express = require('express');
var path = require('path');

var app = express();


var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);