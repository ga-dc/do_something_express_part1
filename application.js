var express = require("express");
var app = express();
app.set("view engine", "hbs");
var bodyParser = require("body-parser");
app.use(bodyParser.json());  // for json post requests
// app.use(bodyParser.urlencoded({extended:true}));  // for forms

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.hbs");
});

var task = require("./models/task.js");
var tasksController = require("./controllers/tasksController.js");

app.listen(3000), function(){
  console.log("app listening on port 3000");
};
