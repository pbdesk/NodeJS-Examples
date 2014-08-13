**NodeJS-Examples**
===============

My NodeJS Examples & POCs

***Branch: clock-NodeJS-Simple-WebSite***
===========================================
Based on blog post "[A SIMPLE WEBSITE IN NODE.JS WITH EXPRESS, JADE AND STYLUS][1]" http://clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus. Implemented via NodeJS Tools for Visual Studio 2013

This branch contains code as mentioned by Ben Gourley in his above blog post with some changes to incorporate version updates for the dependencies.

    "dependencies": {
        "express": "^4.7.4",
        "jade": "^1.5.0",
        "morgan": "^1.2.2",
        "nib": "^1.0.3",
        "stylus": "^0.47.3"
      }

  
Modified code use latest versions of dependencies. Like with Express 4.0, all middleware (except static) have been removed and will need to be called separately, 'logger' needs to be exchanged with 'morgan'. Here is nice post on [ExpressJS 4.0: New Features and Upgrading from 3.0][2]. (http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0)


***Branch: scotch-RESTful-Express4***
===================================

Based on blog post "[Build a RESTful API Using Node and Express 4][3]" http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4 . Implemented  with as on date latest version of express, mongoose & body-parser.

Text Editor used: Brackets (Brackets.io)

This branch contains code as mentioned at http://scotch.io/ in above blog post with some changes to incorporate version updates for the dependencies.

    "dependencies": 
        {
    		"express": "~4.8.3",
    		"mongoose": "~3.8.14",
    		"body-parser": "~1.6.3"
    	}

  
Modified code use latest versions of dependencies. Like with Express 4.0, all middleware (except static) have been removed and will need to be called separately, 'logger' needs to be exchanged with 'morgan'. Here is nice post on [ExpressJS 4.0: New Features and Upgrading from 3.0][4]. (http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0)

bodyParser is deprecated express 4 (http://stackoverflow.com/questions/24330014/bodyparser-is-deprecated-express-4)

    app.use(bodyParser()); //Now deprecated

Use:

    app.use(bodyParser.urlencoded())
    app.use(bodyParser.json())


If you're still getting a warning with urlencoded you need to use

    app.use(bodyParser.urlencoded({
      extended: true
    }));


***Branch: NodeJS-NTVS***
=======================

NodeJS Tools for Visual Studio


----------

markdown file edited via [https://stackedit.io/][5] and [http://dillinger.io/][6]

----------


  [1]: http://clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus
  [2]: http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0
  [3]: http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4
  [4]: http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0
  [5]: https://stackedit.io/
  [6]: http://dillinger.io/
