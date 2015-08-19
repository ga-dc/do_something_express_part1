var express = require("express")
var app = express()
module.exports = "Tasks"

app.get('/', function(req, res){
  res.json('Huge to do Lists');
});

app.get('/lists', function(req, res){
  res.json("Lists created")
});

app.post("/lists", function(req, res){
  res.send("Post List")
})
