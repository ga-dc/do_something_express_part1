var express = require("express")
var app = express()
app.set("view engine", "hbs")

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

var tasks = [
  {id: 1, body:"buy a milk",completed: true},
  {id: 2, body:"wash the dishes",completed: true},
  {id: 3, body:"clean my room",completed: true},
  {id: 4, body:"do laundry",completed: false},
  {id: 5, body:"renew the license",completed: false}
]

// root route
app.get('/', function (req, res){
  res.redirect('/tasks');
});

//index route
app.get("/tasks", function(req, res){
  res.json(tasks)
})

//show route
app.get("/tasks/:id", function(req, res){
  res.json(tasks[req.params.id - 1])
})

//post route
app.post("/tasks", function(req, res){
  tasks.push(req.body)
  res.json(tasks)
})
