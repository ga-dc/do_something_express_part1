var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions
var tasks = [
  {id: 1, body: "task1", completed: true},
  {id: 2, body: "task2", completed: false},
  {id: 3, body: "task3", completed: false},
]

app.get("/tasks", function(req, res){
  res.json(tasks)
})

app.get("/tasks/:id", function(req, res){
  res.send("hello " + req.params.name)
})

app.post("/tasks", function(req, res){
  res.send("hello", {name: req.body.name})
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
