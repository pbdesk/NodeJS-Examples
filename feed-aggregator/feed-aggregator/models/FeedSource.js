var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedSourceSchema = new Schema({
    name: String,
    url: String,
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