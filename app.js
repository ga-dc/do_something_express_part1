var express = require('express');
var app = express();

app.listen(4000, function(){
  console.log("app listening on port 4000")
});

var tasks = [
  {
    "id" : 1,
    "body" : "task 1",
    "completed" : false
  },
  {
    "id" : 2,
    "body" : "task 2",
    "completed" : false
  },
  {
    "id" : 3,
    "body" : "task 3",
    "completed" : false
  },
  {
    "id" : 4,
    "body" : "task 4",
    "completed" : false
  },
  {
    "id" : 5,
    "body" : "task 5",
    "completed" : false
  }
];

app.get("/", function(req, res){
  res.json(tasks);
});
