console.log('Hello world - google-feed-api');

var gfeed = require('google-feed-api');

var feed = new gfeed.Feed('https://pipes.yahoo.com/pipes/pipe.run?_id=52e840be9deda37107df2310ce287c29&_render=rss');
feed.setNumEntries(100);
feed.includeHistoricalEntries();
feed.setResultFormat(feed.JSON_FORMAT);

var rss = {};

feed.load(function (result) {
    if (result == null || result === 'Feed could not be loaded.') {
        console.log("Error loading feeds");
    }
    else {
        if (result != null && result.feed != null) {
            rss = result.feed;
            console.log(rss.title);
            console.log(rss.entries.length);
            for (item in rss.entries) {
                console.log('--------------------------');
                console.log(rss.entries[item].title);
            }

        }
    }
});

//feed.listItems(function (items) {
//    console.log(items.length);
//    console.log(items);
//});
