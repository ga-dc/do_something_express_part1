var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var tasks = [
  {id: 1, body: "First thing to do", completed: false},
  {id: 2, body: "Second thing to do", completed: false},
  {id: 3, body: "Third thing to do", completed: false},
  {id: 4, body: "Fourth thing to do", completed: false},
  {id: 5, body: "Fifth thing to do", completed: false}
];

app.get("/",function(req, res){
  res.json(tasks);
});

app.get("/:id", function(req, res){
  var task = req.params.id;
  if (task < tasks.length + 1){
    res.json(tasks[task - 1]);
  }
  else {
    res.send("<a href='/'>Go to tasks List</a>");
  }
});

app.post("/", function(req,res){
  tasks.push(req.body);
  res.json(req.body);
});

app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});


app.listen(4567, function(){
  console.log("app listening on port 4567");
});
