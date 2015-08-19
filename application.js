var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json()) //handles json post requests (ajax calls)
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

// sets view engine to hbs
app.set("view engine", "hbs")

var tasks = [
  {id:1, body:"Run $ npm init to initialize a new NodeJS application.", completed:true },
  {id:2, body:"Install the express node module by running $ npm install --save express", completed:true },
  {id:3, body:"Make a new file $ touch application.js", completed:true },
  {id:4, body:"Run $ npm install -g nodemon so you don't have to restart the server every time you update a file.", completed:false },
  {id:5, body:"Start up your by running $ nodemon application.js", completed:false }
];

// index
app.get("/", function(req, res){
  res.json(tasks)
})

// show
app.get("/tasks/:id", function(req, res){
  var toDo = req.params.id - 1
  res.json("To Do: ", tasks[toDo])
})

// post
app.post("/", function(req, res){
  tasks.push(req.body)
  res.json(tasks)
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
