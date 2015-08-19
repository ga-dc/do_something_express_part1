var Task = require("../models/task")
var tasks = [];

for (var i = 0; i < 5; i++){
  tasks.push(new Task("task no. " + (i + 1), tasks.length));
}

function setup(app){
  app.get('/tasks', function(req, res){
    res.json(tasks);
  });

  app.get('/tasks/:id', function(req, res){
    var task = tasks[req.params.id];
    res.json(task);
  });

  app.post('/tasks/:id/complete', function(req, res){
    var task = tasks[req.params.id];
    task.complete();
    res.json(task)
  });

  app.post('/tasks/:id/uncomplete', function(req, res){ //this seems repetitive
    var task = tasks[req.params.id];
    task.uncomplete();
    res.json(task);
  });


  app.post('/tasks', function(req, res){
    var newTask = new Task(req.body.body, tasks.length);
    tasks.push(newTask);
    res.json(tasks);
  });

}

exports.setupTasks = setup;
