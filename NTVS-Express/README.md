scotch-RESTful-Express4
=======================

Based on blog post "Build a RESTful API Using Node and Express 4" http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4 . Implemented  with as on date latest version of express, mongoose & body-parser.

Text Editor used: Brackets (Brackets.io)

This branch contains code as mentioned at http://scotch.io/ in above blog post with some changes to incorporate version updates for the dependencies.

"dependencies": 
    {
		"express": "~4.8.3",
		"mongoose": "~3.8.14",
		"body-parser": "~1.6.3"
	}
  
Modified code use latest versions of dependencies. Like with Express 4.0, all middleware (except static) have been removed and will need to be called separately, 'logger' needs to be exchanged with 'morgan'. Here is nice post on ExpressJS 4.0: New Features and Upgrading from 3.0. (http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0)

bodyParser is deprecated express 4 (http://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4)

app.use(bodyParser()); //Now deprecated

Use:

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())


If you're still getting a warning with urlencoded you need to use

app.use(bodyParser.urlencoded({
  extended: true
}));


