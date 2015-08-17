var express = require('express');
var tasks = require('./tasks');
var app = express();

// index
app.get('/', function(req, res){
  res.json(tasks.tasks);
});

// get specific task
app.get('/:id', function(req, res){
  res.json(tasks.tasks[req.params.id]);
});

// update to completed
app.put('/:id', function(req, res){
  tasks.tasks[req.params.id].completed = true;
  res.json(tasks.tasks[req.params.id]);
});

// post new todo
app.post('/:task', function(req, res){

  var newTask = tasks.tasks.push({
    id: tasks.tasks.length,
    body: req.params.task,
    completed: false
  });

  res.json(newTask);
});

app.listen(4000, function(){
  console.log("app listening on port 4000");
});
