(function () { 

    console.log("Hello World");
    console.log("Bye");

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/Articles');

    var FeedSource = require('./models/FeedSource');
    var FeedType = require('./models/FeedType');

    FeedType.findByName({ name : "dDD" }, function (err, item){
        if(err){
            console.log(err);
        }
        else if (item){
            console.log('found');
        }
        else {
            console.log('not found');
        }
    });

})();