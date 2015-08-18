var express = require('express'),
  app = exports.app = express();
var routes = require("./routes.js")

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

var hbs = require("hbs")
var tasks = [ {id: 1, body: 'toDo1', completed: false},
              {id: 2, body: 'toDo2', completed: true},
              {id: 3, body: 'toDo3', completed: false},
              {id: 4, body: 'toDo4', completed: true},
              {id: 5, body: 'toDo5', completed: false}, ]

// app.get('/', routes.index)

app.get('/', function(req, res) {
  res.json(tasks)
})

app.get("/tasks/:id", function(req, res){
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i].id == req.params.id){
      res.json(tasks[i])
    }
  }
})

app.post("/tasks", function(req,res){
  tasks.push(req.body)
  res.json(req.body)

// app.post('/', )

// app.get('/todo/:id', routes.show)

app.listen(3000, function(){
  console.log("app listening on port 3000");
});
