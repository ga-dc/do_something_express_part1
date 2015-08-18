var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var tasks = [
  {id: 1, body: "was the car", completed: true},
  {id: 2, body: "water the plants", completed: true},
  {id: 3, body: "feed the fish", completed: false},
  {id: 4, body: "pay the electric bill", completed: true},
  {id: 5, body: "call brother", completed: true}
];

app.listen(4000, function(){
  console.log("app is listening on port 4000")
});

app.get('/', function(req, res){
  res.send("hello world")
});

// Create an index route that shows a list of all of the objects
// each todo should have a link to its corresponding show page.
app.get('/tasks', function(req, res){
  res.json(tasks)
});
// each todo will have its body and its completed status
// Create a show route that shows one single todo
app.get('/tasks/:id', function(req, res){
  for(i=0; i < tasks.length; i ++){
    if(tasks[i].id == req.params.id){
      res.json(tasks[i])
    }
  }
})
// Create a POST route that allows you to add an object to the array
app.post('/tasks', function(req, res){
  tasks.push(req.body)
  res.json(req.body)
})
