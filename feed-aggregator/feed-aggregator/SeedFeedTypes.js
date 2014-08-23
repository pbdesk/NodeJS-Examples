console.log('Seed FeedTypes');



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Articles');

var FeedType = require('./models/FeedType');


var fType = new FeedType();
fType.name = 'SimpleRSSWithNoImage';
fType.description = 'Simple RSS feeds with No Image';
InsertFeedType(fType);

fType = new FeedType();
fType.name = 'SimpleRSSWithImageInEnclosure';
fType.description = 'Simple RSS feeds with Image In Enclosure';
InsertFeedType(fType);

fType = new FeedType();
fType.name = 'SimpleRSSWithImage';
fType.description = 'Simple RSS feeds with Image';
InsertFeedType(fType);


function InsertFeedType(feedType){
    FeedType.insert(feedType,function (err, feedType, numberAffected, action) {
        if (err) {
            console.log("error while inserting");
        }
        console.log('Action : ' + action + ' numberAffected: ' + numberAffected);
    });
}

/*
function InsertFeedType(feedType) {
    if (feedType) {
        FeedType.findOne({ name : feedType.name }, function (err, source) {
            if (err) {
                console.log("Opps some error: " + err);
                return;
            }
            if (source) {
                console.log("Name already exists");
            }
            else {
                console.log("insert to proceed");
                feedType.save(function (err, feedType, numberAffected) {
                    if (err) {
                        console.log("error while inserting");
                    }
                    console.log('record inserted. numberAffected: ' + numberAffected);
                });
            }
            return;


        });
    }
}*/
