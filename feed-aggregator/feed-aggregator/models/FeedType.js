var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedTypeSchema = new Schema({
    name: String
});

module.exports = mongoose.model('FeedType', FeedTypeSchema);