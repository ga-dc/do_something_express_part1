
var express = require('express')
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))
app.set("view engine", "hbs")
var taskModel = require('/app/models/task.js')
var tasksController = require('/app/models/tasksController.js')
tasksController.setup(app)

  app.listen(4000, function(){
    console.log("app listening on port 4000");
  });

var tasks = [ {id: 0, body: "clean room", completed: false}, {id: 1, body: "wash shirts", completed: false}, {id: 2, body: "do WDI homework", completed: false}, {id: 3, body: "eat dinner", completed: false}, {id: 4, body: "sleep", completed: false} ]

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});
