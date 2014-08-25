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


FeedSourceSchema.statics.insert = function(fSource, cb){
    fSource.save(function (err1, item1, numberAffected) {
        if (err1) {
            console.log("error while inserting");
            cb(err1);
        }
        else {
            console.log('record inserted. numberAffected: ' + numberAffected);
            cb(null, item1, numberAffected, "insert");
        }
    });
}

module.exports = mongoose.model('FeedSource', FeedSourceSchema);