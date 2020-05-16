sd

var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose');

mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();
app.set('port',process.env.PORT||3000)
require('./config/express')(app, config);

app.listen(app.get('port'),function(){
  console.log("Started on PORT 3000");
})

