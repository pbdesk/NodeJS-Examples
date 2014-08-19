var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedItemSchema = new Schema({
    title: String,
    link: String,
    description: String,
    pubDate: Date,
    categories: String,
    imageUrl: String
});

module.exports = mongoose.model('FeedItem', FeedItemSchema);