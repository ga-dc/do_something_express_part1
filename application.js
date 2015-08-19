var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var task = require("./app/models/task.js");
var list = require("./app/models/list.js");
var tasksController = require("./app/controllers/tasksController.js");
var listsController = require("./app/controllers/listsController.js");

app.set("view engine", "hbs");

app.get("/", tasksController.index);
//
// app.get("/", function(req, res){
//   res.sendFile(__dirname + "/app/views/index.html");
// });

app.listen(5678, function(){
  console.log("app listening on port 5678");
})
