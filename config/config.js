var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'bookrating'
    },
    port: process.env.PORT || 3000,
   // db: 'mongodb://localhost/bookrating-development'
  
   db: 'mongodb://raghu556:herokumongo@ds015995.mlab.com:15995/heroku_273pwkbl'
  }

 
};

module.exports = config[env];
