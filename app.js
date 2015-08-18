var express = require('express');
var app = express();

app.listen(4000, function(){
  console.log("app listening on port 4000")
});

var tasks = [
  {
    "id" : "1",
    "body" : "task 1",
    "completed" : "false"
  },
  {
    "id" : "2",
    "body" : "task 2",
    "completed" : "false"
  },
  {
    "id" : "3",
    "body" : "task 3",
    "completed" : "false"
  },
  {
    "id" : "4",
    "body" : "task 4",
    "completed" : "false"
  },
  {
    "id" : "5",
    "body" : "task 5",
    "completed" : "false"
  }
];

app.get("/", function(req, res){
  res.redirect("/tasks");
});

app.get("/tasks", function(req, res){
  res.json(tasks);
});

app.get("/tasks/:id", function(req, res){
  res.json(tasks[req.params.id - 1].body);
});

app.post("/tasks/:id", function(req, res){
  console.log(req.body);
  res.send(req.body);
  // var task_id = parseInt(req.body.id);
  // var body = req.body.body;
  // var completed = req.body.completed;
  //
  // tasks.push(
  //   {"id" : "5",
  //     "body" : "task 6",
  //     "completed" : "false"
  //   });
});
