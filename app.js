var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

// app.use(express.static(__dirname + '/public'))
// this allows css styling if we were to use views


var tasks = [
  {
    "id": 1,
    "body": "Finish Project",
    "completed": false
  },
  {
    "id": 2,
    "body": "Clean",
    "completed": false
  },
  {
    "id": 3,
    "body": "Read",
    "completed": false
  },
  {
    "id": 4,
    "body": "Groceries",
    "completed": false
  },
  {
    "id": 5,
    "body": "Fix sink",
    "completed": false
  }
]
var lists = [
  {
    "name": "WDI",
    "todos": [1]
  },
  {
    "name": "Self",
    "todos": [2, 3, 5]
  },
  {
    "name": "Errands",
    "todos": [4]
  }
]


app.get("/", function(req,res){
  res.json(tasks)
})

app.get("/tasks", function(req, res){
  res.json(tasks)
})

app.get("/tasks/:id", function(req, res){
  var todo = parseInt(req.params.id) - 1
  res.json(tasks[todo])
})

app.post("/tasks", function(req, res){
  tasks.push(req.body)
  res.json(tasks)
})

app.put("/tasks/:id", function(req, res) {
  var todo = parseInt(req.params.id) - 1
  tasks[todo]["completed"] = req.body.completed
  res.json(tasks)
})

app.delete("/tasks/:id", function(req, res) {
  var todo = parseInt(req.params.id) - 1
  tasks.splice(todo, 1);
  res.json(tasks)
})

///////////////////////////////////////////

app.get("/lists", function(req, res){
  res.json(lists)
})

app.get("/lists/:id", function(req, res){
  var list_number = parseInt(req.params.id) - 1
  res.json(lists[list_number])
})

app.post("/lists", function(req, res){
  lists.push(req.body)
  res.json(lists)
})

app.put("/lists/:id", function(req, res) {
  var list_number = parseInt(req.params.id) - 1
  lists[list_number]["todos"].push(req.body.todo)
  res.json(lists)
})

app.delete("/lists/:id", function(req, res) {
  var list_number = parseInt(req.params.id) - 1
  lists.splice(list_number, 1);
  res.json(lists)
})

//////////////////////////////////////////


app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})
