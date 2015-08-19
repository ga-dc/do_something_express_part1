var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

var tasks = [
  {
    "id":1,
    "body": "Finish homework",
    "completed": false
  },
  {
    "id":2,
    "body": "clean",
    "completed": true
  },
  {
    "id":3,
    "body": "study",
    "completed": false
  },
  {
    "id":4,
    "body": "eat",
    "completed": true
  },
  {
    "id":5,
    "body": "fart",
    "completed": false
  }
]

//index
app.get("/index", function(req, res){
  res.json(tasks)
})

//show
app.get("/tasks/:id", function(req, res){
  res.json(tasks[req.params.id - 1])
})

//post
app.post("/", function(req, res){
  tasks.push(req.body)
  res.json(tasks)
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
