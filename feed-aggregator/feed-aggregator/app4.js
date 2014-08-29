/**
 * Created by Pinal on 8/23/2014.
 */

console.log('Hello world - Feed Aggregator');

var http = require('http');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Articles');

var FeedSource = require('./models/FeedSource');
var FeedItem = require('./models/FeedItem');

process.exit(0);