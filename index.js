// Create a to-do based application 
  // App setup
  var express = require("express")
  var app = express()
  // configure app to use body parser
  var bodyParser = require("body-parser")
  app.use(bodyParser.json()) //handles json post requests
  app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

  var tasks = [
    {id: 1, body: "Write final brand statement", completed: false},
    {id: 2, body: "Complete Resume worksheet", completed: false},
    {id: 3, body: "Write resume rough draft", completed: false},
    {id: 4, body: "Write resume final version", completed: false},
    {id: 5, body: "Build portfolio", completed: false}
  ]

  // Root to index of tasks
  app.get("/", function(req, res){
    console.log("Hit root");
    res.json(tasks)
  })
  // Index
  app.get("/tasks", function(req, res){
    console.log("Hit root");
    res.json(tasks)
  })

  // Show one tasks
  app.get("/tasks/:id", function(req, res){
    var id = parseInt(req.params.id) - 1;
    res.json(tasks[id])
  })

  // Post to tasks
  app.post("/tasks", function(req, res){
    // var newTask = {id: 6, body: "Apply for jobs", completed: false};
    console.log("Post request heard");
    tasks.push(req.body)
    res.json(req.body)
  })


  app.listen(4000, function(){
    console.log("app listening on port 4000")
  })
