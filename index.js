var express = require("express")
var app = express()

var bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

var tasks = [
  {id: 1, body: "Do something!", completed: true},
  {id: 2, body: "Do something else!", completed: false},
  {id: 3, body: "Do another thing!", completed: true},
  {id: 4, body: "Just do it!", completed: false},
  {id: 5, body: "Do the right thing!", completed: true}
]

app.get("/", function(req, res) {
  res.json(tasks);
});

app.get("/:id", function(req, res){
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i].id == req.params.id){
      res.json(tasks[i]);
    }
  }
});

app.post("/", function(req, res) {
  tasks.push(req.body);
  res.json(tasks[tasks.length - 1]);
});

app.listen(5678, function(){
  console.log("app listening on port 5678");
})
