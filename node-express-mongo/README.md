**NodeJS-Examples**
===============

My NodeJS Examples & POCs

***Branch: cwbuecheler-node-express-mongo***
===========================================
Based on blog post "[THE DEAD-SIMPLE STEP-BY-STEP GUIDE FOR FRONT-END DEVELOPERS TO GETTING UP AND RUNNING WITH NODE.JS, EXPRESS, JADE, AND MONGODB][1]"  Implemented with latest versions as of date via Brackets.io editor.

 "dependencies": {
    "express": "~4.8.3",
    "serve-favicon": "~2.0.1",
    "morgan": "~1.2.2",
    "cookie-parser": "~1.3.2",
    "body-parser": "~1.6.3",
    "debug": "~1.0.4",
    "jade": "~1.5.0",
    "mongodb": "*",
    "monk": "*"
  }
Modified code use latest versions of dependencies. Like with Express 4.0, all middleware (except static) have been removed and will need to be called separately, 'logger' needs to be exchanged with 'morgan'. Here is nice post on [ExpressJS 4.0: New Features and Upgrading from 3.0][2]. 

"static-favicon" replaced with new "serve-favicon"

    var favicon = require('serve-favicon');
    ....
    app.use(favicon(__dirname + '/public/favicon.ico'));

----------

markdown file edited via [https://stackedit.io/][3] and [http://dillinger.io/][4]

----------


  [1]: http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/
  [2]: http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0
  [3]: https://stackedit.io/
  [4]: http://dillinger.io/
