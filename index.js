var express = require("express")
var app = express()
app.set("view engine", "hbs")
var tasks = [
  {id: 1, body:"To-do 1", completed: "true" },
  {id: 2, body:"To-do 2", completed: "true" },
  {id: 3, body:"To-do 3", completed: "true" },
  {id: 4, body:"To-do 4", completed: "true" },
  {id: 5, body:"To-do 5", completed: "true" }
]

app.get('/tasks', function(req, res){
  res.json('Lots of Tasks to do');
});

app.get('/tasks/:id', function(req, res){

});

app.post("/tasks/body", function(req, res){
  res.json(req.tasks.body)
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

module.exports = "Tasks"
