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


app.get("/", function(req,res){
  res.json(tasks)
})

app.get("/:id", function(req, res){
  var todo = parseInt(req.params.id) - 1
  res.json(tasks[todo])
})

app.post("/", function(req, res){
  tasks.push(req.body)
})

app.put("/:id", function(req, res) {
  var todo = parseInt(req.params.id) - 1
  tasks[todo]["completed"] = req.body.completed
  res.json(tasks)
})


app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})
