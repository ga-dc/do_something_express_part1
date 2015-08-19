var express = require("express")
var app = express()
var bodyParser = require("body-parser")
app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

var listsController = require('./app/controllers/listsController');
var tasksController = require('./app/controllers/tasksController');

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
