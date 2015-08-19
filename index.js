var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var tasks = [
  {id: 1, body: "first", completed: true},
  {id: 2, body: "second", completed: false},
  {id: 3, body: "third", completed: false},
  {id: 4, body: "fourth", completed: false},
  {id: 5, body: "fifth", completed: false}
]

app.get("/tasks", function(req, res) {
  res.json(tasks);
})

app.get("tasks/:id", function(req, res) {
    res.json({
      id: req.params.id
  });
})

app.post("/tasks", funcntion(req, res) {
  res.push(req.body);
  res.json(req.body);
})

app.use("/app", express.static(path.join(__dirname + "/app"_)));

app.get("/", function(req, res) {
  response.sendFile(__dirname + "/app/views/index.html");
})

app.get("/routes", function(req, res) {
  response.json(app._router.stack);
})

app.get("/tasks", tasksController.index);
app.post("/tasks"), tasksController.create;
app.get("/tasks/:id", tasksController.show);
app.delete("/tasks/:id", tasksController.delete);

app.listen(4000, function() {
  console.log("app listening on port 4000")
})

app.set("view engine", "hbs")
