var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedSourceSchema = new Schema({
    name: String,
    url: {
        type: String,
        required: true,
        index: true
    },
    tags: { type: [String], index: true },
    feedType: {
        type: Schema.ObjectId,
        ref: 'FeedType'
    }
}, { collection: 'FeedSources' });

/*
 * feedtype
 * 1 - Simple No Image
 * 
 */

module.exports = mongoose.model('FeedSource', FeedSourceSchema);