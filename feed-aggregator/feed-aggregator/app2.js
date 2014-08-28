var FeedParser = require('feedparser');
var http = require('http');

var feedMeta;
var items = [];

http.get('http://visualstudiomagazine.com/rss-feeds/c-corner.aspx', function (res) {
    res.pipe(new FeedParser({}))
     .on('error', function (error) {
        console.log(error);
                // TODO: Tell the user we just had a melt-down
     })
     .on('meta', function (meta) {
        // Store the metadata for later use
        feedMeta = meta;
     })
     .on('readable', function () {
        var stream = this, item;
        while (item = stream.read()) {
            // Each 'readable' event will contain 1 article
            // Add the article to the list of items
            var ep = {
                'title': item.title,
                'mediaUrl': item.link,
                'publicationDate': item.pubDate,
            };
            items.push(ep);
            }
     })
     .on('end', function () {
        var result = {
            'feedName': feedMeta.title,
            'feedArtist': feedMeta['itunes:author']['#'],
            'website': feedMeta.link,
            'albumArt': {
                'url': feedMeta.image.url,
                'width': parseInt(feedMeta['rss:image']['width']['#']),
                'height': parseInt(feedMeta['rss:image']['height']['#'])
            },
            'items': items
        }
        });

//    return result;
// TODO: return 'result' to the user in some fashion
});

//http://aceontech.com/howto/nodejs/2013/11/27/how-to-parse-rss-podcasts-with-nodejs.html