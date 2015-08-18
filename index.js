var express = require("express")
var app = express()

app.set("view engine", "hbs")

app.get("/", function(req, res){
  res.send("hello world")
})

app.get("/:name", function(req, res){
  res.send("hello " + req.params.name)
})

app.post("/", function(req, res){
  res.send("hello " + req.params.name)
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
