var express = require("express")
var bodyParser = require("body-parser")
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
var tasks = [
  {id: 1, body:"my first todo",completed: false},
  {id: 2, body:"my second todo",completed: true},
  {id: 3, body:"my third todo",completed: false},
]

app.get("/tasks", function(req, res){
  res.json(tasks)
})

app.get("/tasks/:id", function(req, res){
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i].id == req.params.id){
      res.json(tasks[i])
    }
  }
})

app.post("/tasks", function(req,res){
  tasks.push(req.body)
  res.json(req.body)
})

app.listen(3000, function(){
  console.log("app listening on port 3000")
})