var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

var tasks = [{
  id: 1,
  body: "one",
  completed: true
}, {
  id: 2,
  body: "two",
  completed: false
}, {
  id: 3,
  body: "three",
  completed: true
}, {
  id: 4,
  body: "four",
  completed: false
}, {
  id: 5,
  body: "Wash dishes",
  completed: true
}];

app.get("/tasks", function(req, res){
  console.log("GGEetting");
  res.json(tasks)
});

app.get("/task/:id?", function(req, res){
  var task = {};
  for (i = 0; i < tasks.length; i++) {
    //find the right task
    if (tasks[i].id == req.params.id){
      task = tasks[i];
      break;
    }
  }
  res.json(task)
});

app.post("/tasks", function(req, res){
  console.log("pposting");
  console.log(req.body);
  tasks.push(req.body);
  res.send("Added to tasks");
});
