var express = require("express")
var app = exports.app = express()
// configure app to use body parser
var bodyParser = require("body-parser")

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

//add path
var path = require("path");

app.use("/app", express.static(path.join(__dirname + "/app")));

//set view engine to hbs
app.set("view engine", "hbs")


app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

//index route
app.get("/tasks", function(req, res){
  res.json(tasks)
})

//show route
app.get("/tasks/:id", function(req, res){
  res.json(tasks[req.params.id - 1])
})

//post route
app.post("/tasks", function(req, res){
  tasks.push(req.body)
  res.json(tasks)
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
