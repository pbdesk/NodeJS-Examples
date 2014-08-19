console.log('Hello world - Feed Aggregator');

var http = require('http');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Articles');

var FeedSource = require('./models/FeedSource');
var FeedItem = require('./models/FeedItem');

//seedFeedSources();

GetFeeds();

console.log("Done");

function GetFeeds() {
    var url = 'http://msdn.microsoft.com/en-us/magazine/rss/default.aspx?z=z&iss=1';

    var request = http.get(url, function (res) { 

        var buffer = "", 
            data,
            route;
        
        res.on("data", function (chunk) {
            buffer += chunk;
        });
        
        res.on("end", function (err) {
            // finished transferring data
            // dump the raw data
            console.log(buffer);
            console.log("\n");
            //data = JSON.parse(buffer);
            //route = data.routes[0];
            
            //// extract the distance and time
            //console.log("Walking Distance: " + route.legs[0].distance.text);
            //console.log("Time: " + route.legs[0].duration.text);
        }); 

    });
}

function seedFeedSources() {
    var fSource = new FeedSource();
    fSource.name = 'MSDN Magazine';
    fSource.url = 'http://msdn.microsoft.com/en-us/magazine/rss/default.aspx?z=z&iss=1';
    fSource.feedtype = 1;
    InsertFeedSource(fSource);

    fSource = new FeedSource();
    fSource.name = 'Visual Studio Magazine - Blogs';
    fSource.url = 'http://visualstudiomagazine.com/rss-feeds/blogs.aspx';
    fSource.feedtype = 1;
    InsertFeedSource(fSource);

    fSource = new FeedSource();
    fSource.name = 'Visual Studio Magazine - Practical.Net';
    fSource.url = 'http://visualstudiomagazine.com/rss-feeds/practical-net.aspx';
    fSource.feedtype = 1;
    InsertFeedSource(fSource);

    fSource = new FeedSource();
    fSource.name = 'Visual Studio Magazine - C# Corner';
    fSource.url = 'http://visualstudiomagazine.com/rss-feeds/c-corner.aspx';
    fSource.feedtype = 1;
    InsertFeedSource(fSource);

    fSource = new FeedSource();
    fSource.name = 'Visual Studio Magazine - Open Source .NET';
    fSource.url = 'http://visualstudiomagazine.com/rss-feeds/open-source-net.aspx';
    fSource.feedtype = 1;
    InsertFeedSource(fSource);

}

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
                feedSource.save(function (err, product,numberAffected) {
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