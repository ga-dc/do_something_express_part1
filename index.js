// Create a to-do based application
  // App setup
  var express = require("express")
  var app = express()
  // configure app to use body parser
  var bodyParser = require("body-parser")
  app.use(bodyParser.json()) //handles json post requests
  app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

  var task = require("./models/task.js")
  var list = require("./models/list.js")

  var taskRoutes = require("./controllers/tasksController.js")
  var listRoutes = require("./controllers/listsController.js")
  // Root
  app.get("/", function(req, res){
    console.log("Hit root");
    res.json(tasks)
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
  app.get("/tasks", listRoutes.index)

  // Show one lists
  app.get("/lists/:id", listRoutes.show)

  // Post to lists
  app.post("/lists", listRoutes.create)

  // Update list
  app.put("/lists/:id", listRoutes.update)

  app.listen(4000, function(){
    console.log("app listening on port 4000")
  })
