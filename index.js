var express = require("express");
var app = express();

var tasks = [];
var Task = function(body, index){
  this.body = body;
  this.completed = false;
  this.index = index;
}
Task.prototype.complete = function(){
  this.completed = true;
}
Task.prototype.uncomplete = function(){
  this.completed = false;
}
Task.prototype.count = 0;


for (var i = 0; i < 5; i++){
  tasks.push(new Task("task no. " + (i + 1), tasks.length));
}

app.get('/index', function(req, res){
  res.json(tasks);
});

app.get('/:id', function(req, res){
  res.json(tasks[req.params.id]);
});


var server = app.listen(4000, function(){
  var host = server.address().address;
  var port = server.address().port;

  console.log('do_something app listening at http://%s:%s', host, port); //From Express getting started
});
