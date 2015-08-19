var express = require("express")
var app = express()

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

var tasks = [
  {id: 1, body:"buy a milk",completed: true},
  {id: 2, body:"wash the dishes",completed: true},
  {id: 3, body:"clean my room",completed: true},
  {id: 4, body:"do laundry",completed: false},
  {id: 5, body:"renew the license",completed: false}
]

app.get("/", function(req, res){
  res.send("hello world")
})
