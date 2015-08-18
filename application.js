var express = require('express')
var app = express()

//==============something to do with CRUD, maybe?
// configure app to use body parser
var bodyParser = require("body-parser")
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions


//===================telling to go to controller for all the logic
var tasksController = require("./app/controllers/tasksController");

app.set("view engine", "hbs")

var tasks =
  [
    {
    id: 1, body: 'See the Disco Biscuits concert', completed: false
    }
    ,
    {
      id: 2, body: 'Go to the Sound Tribe show', completed: false
    }
    ,
    {
      id: 3, body: 'Rage The New Deal', completed: false
    }
    ,
    {
      id: 4, body: 'Throw down for Brothers Past', completed: false
    }
    ,
    {
      id: 5, body: 'Boogie all night long', completed: false
    }
  ]

//app.set("view", "hbs")

app.listen(4000, function(){
  console.log("4000");
});

//#root
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

//#index
app.get('/tasks', function(req, res) {
  res.json(tasks)
});

//#show
app.get('/tasks/:id', function(req, res) {
  for(var i = 0; i < tasks.length; i++)
    if (tasks[i].id == req.params.id) {
        res.json(tasks[i])
    }
});

//#new
app.post('/tasks', function() {
  tasks.push(req.body)
  res.json(req.body)
});

//#create
//==========CRUD, maybe?
app.post("/", function(req, res){
  res.send("")
})

//#delete
