var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedItemSchema = new Schema({
    title: {
        type: String,
        required: true,
        index: true
    },
    link: {
        type: String,
        required: true,
        index: true
    },
    description: String,
    pubDate: Date,
    categories: { type: [String], index: true },
    tags: { type: [String], index: true },
    imageUrl: String
});

module.exports = mongoose.model('FeedItem', FeedItemSchema);