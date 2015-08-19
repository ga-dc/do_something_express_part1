var express = require('express');
var app = express();

app.set("view engine", "hbs");

app.listen(4000, function(){
  console.log("app listening on port 4000")
});

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
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

require('listsController.js');
require('tasksController.js');
require('list.js');
require('task.js');
