var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var server = app.listen(4000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('do_something app listening at http://%s:%s', host, port); //From Express getting started
});


var tasksRoutes = require('./controllers/tasksController');
var listsRoutes = require('./controllers/listsController');

tasksRoutes.setupTasks(app);
listsRoutes.setupLists(app);
