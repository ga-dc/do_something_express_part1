
//used some of solution branch code to learn/fix broken code in routes

//js express
var express = require("express");
var app = express();

//connects tasksController
var tasksController = require("./app/controllers/tasksController");

//configure app to use body parser
var bodyParser = require("body-parser")
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

//sets view engine to be handle bars inside this file
app.set("view engine", "hbs")

//todo tasks object array
//moved tasks to model
// var tasks = [{id: 0, body: "a", completed: false},
//             {id: 1, body: "b", completed: false},
//             {id: 2, body: "c", completed: false},
//             {id: 3, body: "d", completed: false},
//             {id: 4, body: "e", completed: false}];

//port 4000 for local testing
app.listen(4000, function(){
  console.log("app listening on port 4000")
})


//serves views/index.html
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});




//index route for tasks
app.get("/tasks", function(req,res){
  res.json(tasks);
})

//show route tor tasks
app.get("/tasks/:id", function( req, res ){
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i].id == req.params.id){
        res.json(tasks[i])
      }
    }
})

//post route for tasks
app.get("/tasks", function( req, res ){
  tasks.push(req.body)
  res.json(req.body)
})
