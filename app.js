var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var tasks = [
{
  id: 1,
  body: "wash dishes",
  completed: false
},
{
  id: 2,
  body: "clean clothes",
  completed: false
},
{
  id: 3,
  body: "vacuum carpet",
  completed: false
},
{
  id: 4,
  body: "make bed",
  completed: false
},
{
  id: 5,
  body: "dust tables",
  completed: false
}
];

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

app.get("/", function(req, res){
  res.json(tasks)
})

app.get("/:id", function(req, res){
  var todoID = (req.params.id) - 1
  res.json(tasks[todoID])
})

app.post("/", function(req, res){
  tasks.push(req.body)
  res.json(req.body)
  })

app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})
