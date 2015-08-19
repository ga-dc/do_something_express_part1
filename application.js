var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.set("view engine", "hbs")
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions


var tasks = [
{ id: 1,body: "Blockbuster",completed: false },
{ id: 2,body: "Roy Rogers",completed: false },
{ id: 3,body: "Tower Records",completed: false },
{ id: 4,body: "McDonalds",completed: false },
{ id: 5,body: "Chucky Cheese",completed: false }
];

app.get("/", function(req, res){
  res.sendFile(__dirname + "/app/views/index.html");
});

app.get("/", function(req,res){
  res.redirect('/tasks');
})

app.get("/tasks", function(req, res){
  res.json(tasks);
});

app.get("/tasks/:id", function(req,res){
  for(var i = 0, i < tasks.length; i++){
    if(tasks[i].id == tasks[req.params.id]){
      res.json(tasks[i])
    }
  }
});

app.post("/tasks", function(req,res){
  tasks.push(req.body);
  res.json(req.body);
})

app.delete("tasks/:id", function(req, res){
  task.delete(req.params.id)
})

app.listen(4000, function(){
  console.log("app listening on port 4000");
})
