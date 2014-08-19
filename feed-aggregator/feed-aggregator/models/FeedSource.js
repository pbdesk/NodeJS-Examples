var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedSourceSchema = new Schema({
    name: String,
    url: String,
    feedtype: Number
});

/*
 * feedtype
 * 1 - Simple No Image
 * 
 */

module.exports = mongoose.model('FeedSource', FeedSourceSchema);