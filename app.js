var tasks = [
dishes = {
  id: 1,
  body: "wash dishes",
  completed: false
},
laundry = {
  id: 2,
  body: "clean clothes",
  completed: false
},
vacuum = {
  id: 3,
  body: "vacuum carpet",
  completed: false
},
bed = {
  id: 4,
  body: "make bed",
  completed: false
},
dust = {
  id: 5,
  body: "dust tables",
  completed: false
}
]

var express = require("express")
var app = express()

app.get("/", function(req, res){
  res.json(tasks)
})

app.get("/:id", function(req, res){
  res.json(tasks[req.params.id])
})

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})
