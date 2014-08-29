console.log('Seed FeedSource');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Articles');

var FeedSource = require('./models/FeedSource');
var FeedType = require('./models/FeedType');

/*
* feedtypeName, sourcename, url, tags, isActive
*
* */


insOrUpdFeedSource("SimpleRSSWithNoImage","MSDN Magazine", "http://msdn.microsoft.com/en-us/magazine/rss/default.aspx?z=z&iss=1", ['MSDN Magazine'], true, function(err, item){
});
insOrUpdFeedSource("SimpleRSSWithNoImage","Visual Studio Magazine - Blogs", "http://visualstudiomagazine.com/rss-feeds/blogs.aspx", ['Visual Studio Magazine'], true, function(err, item){
});
insOrUpdFeedSource("SimpleRSSWithNoImage","Visual Studio Magazine - Practical.Net", "http://visualstudiomagazine.com/rss-feeds/practical-net.aspx", ['Visual Studio Magazine', '.Net'], true, function(err, item){
});
insOrUpdFeedSource("SimpleRSSWithNoImage","Visual Studio Magazine - C# Corner", "http://visualstudiomagazine.com/rss-feeds/c-corner.aspx", ['Visual Studio Magazine', 'C#'], true, function(err, item){
});
insOrUpdFeedSource("SimpleRSSWithNoImage","Visual Studio Magazine - Open Source .NET", "http://visualstudiomagazine.com/rss-feeds/open-source-net.aspx", ['Visual Studio Magazine', '.Net'], true, function(err, item){
});

function insOrUpdFeedSource(feedTypeName, sourceName, sourceUrl, tags, isActive, callback){
    FeedType.findByName(feedTypeName, function(err, fType){
        if(err){
            callback(err);
        }
        else if(fType){
            var fSource = new FeedSource();
            fSource.name = sourceName;
            fSource.url = sourceUrl;
            fSource.tags = tags;
            fSource.isActive = isActive;
            fSource.feedType = fType;
            FeedSource.upsert(fSource, callback);
        }
    });
}
/*FeedType.findOne({name: 'SimpleRSSWithNoImage'}, function(err, feedType){
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
});*/


/*
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
}*/
