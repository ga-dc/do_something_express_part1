var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/app", express.static(path.join(__dirname + "/app")));

var tasks = [
  {id: 1, body: "Do something!", completed: true},
  {id: 2, body: "Do something else!", completed: false},
  {id: 3, body: "Do another thing!", completed: true},
  {id: 4, body: "Just do it!", completed: false},
  {id: 5, body: "Do the right thing!", completed: true}
]

var tasks_controller = require("/app/controllers")
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});


app.listen(5678, function(){
  console.log("app listening on port 5678");
})
