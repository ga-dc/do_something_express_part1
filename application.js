var express = require("express")
var app = express()

var tasks =[
  {id: 1,  body: "Wash dishes", completed: true},
  {id: 2,  body: "Make lunch", completed: true},
  {id: 3,  body: "Take out the trash", completed: true}
  {id: 4,  body: "Go grocery shopping", completed: true}
  {id: 5,  body: "Call grandparents", completed: true}

]

var bodyParser = require("body-parser")

app.listen(4000, function(){
  console.log("app listening on port 4000")

})

app.get("/index" function (req, res){
  res.send(tasks)
})
app.get("/task/:id", function(req, res){
  res.send(req.params.id)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.post("/", function(req, res){
  res.render(id: req.body.id)
})
