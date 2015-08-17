var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(4000, function(){
  console.log("app listening on port 4000")
})


var tasks = [

{id: 1,
body: "Go shopping",
completed: false},

{id: 2,
body: "Clean Room",
completed: false},

{id: 3,
body: "Study",
completed: false},

{id: 4,
body: "Call your friend",
completed: false},

{id: 5,
body: "Read something",
completed: false}

]

app.get("/index", function(req, res){
  res.send(tasks)
})

app.get("/tasks/:id", function(req, res){
  res.send(tasks[req.params.id-1])
})

app.post("/", function(req, res){
  tasks.push(req.body)
  res.send(req.body)
})