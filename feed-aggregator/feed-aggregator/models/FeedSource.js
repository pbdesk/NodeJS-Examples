var mongoose = require('mongoose');
var FeedType = require('./FeedType');
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
    },
    isActive: {type: Boolean, default: true}
}, { collection: 'FeedSources' });

/*
 * feedtype
 * 1 - Simple No Image
 * 
 */




module.exports = mongoose.model('FeedSource', FeedSourceSchema);