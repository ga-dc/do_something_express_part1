// Create a to-do based application
  // App setup
  var express = require("express")
  var app = express()
  app.set("view engine", "hbs")
  // configure app to use body parser
  var bodyParser = require("body-parser")
  app.use(bodyParser.json()) //handles json post requests
  app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

// Load dependencies and modules
  var task = require("./models/task.js")
  var list = require("./models/list.js")
  var tasks = require("./models/seeds.js")

  var taskRoutes = require("./controllers/tasksController.js")
  var listRoutes = require("./controllers/listsController.js")

  var tasks = [
    {id: 1, body: "Write final brand statement", completed: false},
    {id: 2, body: "Complete Resume worksheet", completed: false},
    {id: 3, body: "Write resume rough draft", completed: false},
    {id: 4, body: "Write resume final version", completed: false},
    {id: 5, body: "Build portfolio", completed: false}
  ]

  // Root
  app.get("/", function(req, res){
    res.render("index")
  })

// Tasks routes
  // Index of Tasks
  app.get("/tasks", taskRoutes.index)

  // Show one tasks
  app.get("/tasks/:id", taskRoutes.show)

  // Post to tasks
  app.post("/tasks", taskRoutes.create)

  // Update task
  app.put("/tasks/:id", taskRoutes.update)

// Lists routes

  // Index of lists
  app.get("/lists", listRoutes.index)

  // Show one lists
  app.get("/lists/:id", listRoutes.show)

  // Post to lists
  app.post("/lists", listRoutes.create)

  // Update list
  app.put("/lists/:id", listRoutes.update)

  app.listen(4000, function(){
    console.log("app listening on port 4000")
  })
