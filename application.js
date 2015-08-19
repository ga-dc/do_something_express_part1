var express = require("express");
var app = express();
var taskModule = require("./models/list.js")
var taskModule = require("./models/task.js")


app.listen(4000, function(){
  console.log("App is listening on port 4000");
});
