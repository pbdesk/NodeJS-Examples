var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedTypeSchema = new Schema({
    name: String,
    description: String
}, { collection: 'FeedTypes' });

module.exports = mongoose.model('FeedType', FeedTypeSchema);

//(function (FeedType) { 

//    var mongoose = require('mongoose');
//    var Schema = mongoose.Schema;
    
//    var FeedTypeSchema = new Schema({
//        name: String,
//        description: String
//    }, {collection: 'FeedTypes'});

//    FeedType = mongoose.model('FeedType', FeedTypeSchema);

//})(module.exports);