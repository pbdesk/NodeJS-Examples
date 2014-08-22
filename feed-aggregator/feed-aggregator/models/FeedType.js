//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

//var FeedTypeSchema = new Schema({
//    name: String,
//    description: String
//});

//module.exports = mongoose.model('FeedType', FeedTypeSchema);

(function (FeedType) { 

    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    
    var FeedTypeSchema = new Schema({
        name: String,
        description: String
    });

    FeedType = mongoose.model('FeedType', FeedTypeSchema);

})(module.exports);