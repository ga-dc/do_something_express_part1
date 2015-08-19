var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "hbs")

var listsController = require("./listsController.js");
var tasksController = require("./tasksController.js");
var list = require("./list.js");
var task = require("./task.js");


app.listen(4000, function(){
  console.log("app is listening on port 4000")
});

app.get('/tasks', tasksController.index);
app.post('/tasks', tasksController.create);
app.get('/tasks/:id', tasksController.show);
app.delete('/tasks/:id', tasksController.delete);


app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});
