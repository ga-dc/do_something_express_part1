var express = require("express")
var app = express();

// Specify the "/".
app.get("/", function(req, res){
  res.send("Hello World! So sweet.")
});

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

// Use port 4000 to run application.
app.listen(4000, function(){
  console.log("app listening on port 4000")
});