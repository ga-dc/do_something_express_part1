var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var tasks = [
  {id: 1, body: "task1body", completed: true},
  {id: 2, body: "task2body", completed: false},
  {id: 3, body: "task3body", completed: true},
  {id: 4, body: "task4body", completed: true},
  {id: 5, body: "task5body", completed: false}
]

//index
app.get("/tasks", function(req, res){
  res.json(tasks)
})

//show
app.get("/tasks/:id", function(req, res){
  //index = req.params.id
  //request the task with the selected id and respond in json format
  res.json(tasks[req.params.id])
})

//post
app.post("/tasks", function(req, res){
  tasks.push(req.body)
  res.json(req.body)
})


app.listen(4000, function(){
  console.log("app listening on port 4000")
})
