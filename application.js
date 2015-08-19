var express = require("express")
var app = express()

app.set("view engine", "hbs")

var bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var objects = [
  {id: 1, body: "taxes", completed: false}
  {id: 2, body: "exercise", completed: true}
  {id: 3, body: "cooking", completed: true}
  {id: 4, body: "cleaning", completed: true}
  {id: 5, body: "homework", completed: false}
]

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/tasks", function(req, res){
  res.json(tasks)
})

app.get("/tasks/:id", function(req, res){
  res.json(tasks[req.params.id])
})

app.post("/", function(req, res){
  tasks.push(req.body)
  res.json(req.body)
})
