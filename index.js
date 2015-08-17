var express = require('express')
var app = exports.app = express()

app.listen(4000, function() {
  console.log("listening on port 4000")
})

var tasks = [
  {id: 1, body: "first item", completed: false},
  {id: 2, body: "second item", completed: false},
  {id: 3, body: "third item", completed: false}
]

app.get('/', function(req, res) {
  res.send("root")
  console.log("root")
})
