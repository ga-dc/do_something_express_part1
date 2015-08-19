var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

// app.use(express.static(__dirname + '/public'))
// this allows css styling if we were to use views



app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

var task_controller = require("./controllers/tasksController")
task_controller.setup(app)


///////////////////////////////////////////

var list_controller = require("./controller/listsController")
list_controller.setup(app)
//////////////////////////////////////////


app.listen(3000, function(){
  console.log("app listening at http://localhost:3000/")
})
