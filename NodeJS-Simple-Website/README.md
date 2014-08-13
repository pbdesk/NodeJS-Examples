clock-NodeJS-Simple-WebSite
============================

Based on blog post "A SIMPLE WEBSITE IN NODE.JS WITH EXPRESS, JADE AND STYLUS" http://clock.co.uk/blog/a-simple-website-in-nodejs-with-express-jade-and-stylus. Implemented via NodeJS Tools for Visual Studio 2013

This branch contains code as mentioned by Ben Gourley in his above blog post with some changes to incorporate version updates for the dependencies.

"dependencies": {
    "express": "^4.7.4",
    "jade": "^1.5.0",
    "morgan": "^1.2.2",
    "nib": "^1.0.3",
    "stylus": "^0.47.3"
  }
  
Modified code use latest versions of dependencies. Like with Express 4.0, all middleware (except static) have been removed and will need to be called separately, 'logger' needs to be exchanged with 'morgan'. Here is nice post on ExpressJS 4.0: New Features and Upgrading from 3.0. (http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0)
