// server.js

// BASE SETUP
// =============================================================================

// call the packages we need

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//MongoDB connection string
mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o');


var Bear = require('./models/bear');


// configure app to use bodyParser()
// this will let us get the data from a POST
//app.use(bodyParser()); ////Now deprecated
//app.use(bodyParser.urlencoded())

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())

// set our localhost port
var port = process.env.PORT || 8080; 

// SET ROUTES FOR OUR API
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next){
    console.log('something is happening');
    next();
});



//Test root route
router.get('/', function(req, res){
    res.json({message: 'Welcome to NodeJS'});
});

// /api/bears
router.route('/bears')
    .post(function(req, res){
        
        var bear = new Bear();
        bear.name = req.body.name;
        if(bear.name){
        
        
                //Save
                bear.save(function(err){
                    if(err){
                        res.send(err);
                    }
                    res.json({message: 'Bear Created'});
                });
        }
    })
    .get(function(req, res){
        Bear.find(function(err, bears){
            if(err){
                res.send(err);
            }
            res.json(bears);
        });
    });


// /api/bears/:bear_id
router.route('/bears/:bear_id')
    .get(function(req, res){
        Bear.findById(req.params.bear_id, function(err, bear){
            if(err){
                res.send(err);
            }
            res.json(bear);
        });
    })
    .put(function(req, res) {

		// use our bear model to find the bear we want
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name; 	// update the bears info

			// save the bear
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
	})
    .delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});





// API Route
app.use('/api', router);

//Start web server
app.listen(port);
console.log("Server started at port " + port);