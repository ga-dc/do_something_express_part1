var express = require("express");
var app = express();

app.listen(4000, function(){
  console.log("App is listening on port 4000");
});

var tasks = [
  {id: 1, body: "Clean the kitchen", completed: false},
  {id: 2, body: "Wash the clothes", completed: false},
  {id: 3, body: "Wash the car", completed: false},
  {id: 4, body: "Walk the doge", completed: false},
  {id: 5, body: "Finish the GA hw", completed: false}
];

app.get("/", function(req, res){
  res.json(tasks);
});

// app.get("/tasks?", function(req, res){
//
// });
