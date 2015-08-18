var express = require("express")
var bodyParser = require("body-parser")
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Use port 4000 to run application.
app.listen(4000, function(){
  console.log("app listening on port 4000")
});

// Specify the "/".
// app.get("/", function(req, res){
//   res.send("Hello World! So sweet.")
// });

// Create a varable with 5 object in an array.
var tasks = [{
              id: "1", 
              body: "Task One", 
              completed: false
            },

            {
              id: "2", 
              body: "Task Two", 
              completed: true
            },

            {
              id: "3", 
              body: "Task Three", 
              completed: true
            },

                        {
              id: "4", 
              body: "Task Four", 
              completed: true
            },

            {
              id: "5", 
              body: "Task Five", 
              completed: true
            }]

// Create an index route that responds with a list of all of the objects.
// Use Andy's tip about using JSON.
app.get("/tasks", function(req, res){
  res.json(tasks)
});

// Create a show route that shows one single todo.
app.get("/tasks/:id", function(req, res){
  // Create a for loop to create a show route for EACH todo.
  for(var i = 0; i < tasks.length; i++)
    if (tasks[i].id == req.params.id) {
      res.json(tasks[i])
    };
});

// Create a post route that allows you to add an object to the array.
app.post("/tasks", function(req,res){
  tasks.push(req.body)
  res.json(req.body)
});