var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions
var tasks = [
  { id: 1,
    body: "roto-root shower drain",
    completed: true },
  { id: 2,
    body: "grease rear axle on the Biscayne",
    completed: false},
  { id: 3,
    body: "replant flag at Sea of Tranquility",
    completed: false},
]

app.get("/", function(req, res){
  res.json(tasks)
})

app.get("/tasks/:id", function(req, res){
  var id = parseInt(req.params.id) - 1;
  res.json(tasks[id])
})

app.post("/tasks", function(req, res){
  tasks.push(req.body)
  res.json(req.body)
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
