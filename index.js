var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.listen(4000, function(){
  console.log("app listening on port 4000");
});

app.get("/", function(req, res){
  res.send("hello world");
});

var tasks = [
  {id: 1, body: 'Work through my Rough Draft of my resume', Complete: false},
  {id: 2, body: 'Add design to my final resume', Complete: false},
  {id: 3, body: 'Get a Job', Complete: false},
  {id: 4, body: 'Complete Portfolio', Complete: false},
  {id: 5, body: 'Create Linkedin', Complete: true }
];

app.get("/tasks", function(request, response){
  response.send(tasks);
});

app.get("/tasks/:id", function(request, response){
  var id = parseInt(request.params.id) - 1;
  var task = tasks[id];
  response.json(task)
  response.send()
});


// app.post("/", function(req, res){
//   response.render("Task", {Taskid: request.body.tasks})
// })
