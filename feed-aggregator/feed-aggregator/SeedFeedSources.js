console.log('Seed FeedSource');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Articles');

var FeedSource = require('./models/FeedSource');
var FeedType = require('./models/FeedType');

/*
* feedtypeName, sourcename, url, tags, isActive
*
* */


function insOrUpdFeedSource(feedTypeName, sourceName, sourceUrl, tags, isActive){
    FeedType.findByName
}
FeedType.findOne({name: 'SimpleRSSWithNoImage'}, function(err, feedType){
    if (err) {
        console.log("Feed Type not found");
        return;
    }
    if(feedType){
        var fSource = new FeedSource();
        fSource.name = "test";
        fSource.url = "http://sssss";
        fSource.tags = ['Test1', 'Test2'];
        fSource.feedType = feedType;

        InsertFeedSource(fSource);
    }
});


function InsertFeedSource(feedSource) {
    if (feedSource) {
        FeedSource.findOne({ url : feedSource.url }, function (err, source) {
            if (err) {
                console.log("error");
                return;
            }
            if (source) {
                console.log("Source exists");
            }
            else {
                console.log("insert to proceed");
                feedSource.save(function (err, product, numberAffected) {
                    if (err) {
                        console.log("error while inserting");
                    }
                    console.log('record inserted. numberAffected: ' + numberAffected);
                });
            }
            return;


        });
    }
}