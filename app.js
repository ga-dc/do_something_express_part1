var express = require('express'),
  app = exports.app = express();
var routes = require("./routes.js")
var bodyParser = require("body-parser")
var hbs = require("hbs");

app.set('view engine', 'hbs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.redirect('/tasks')
})

app.get('/tasks', routes.index)
  // res.json(tasks))

app.get("/tasks/:id", function(req, res){
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i].id == req.params.id){
      res.json(tasks[i])
    }
  }
})


app.post("/tasks", function(req,res){
  res.send(req.params.id + req.params.body + req.params.complete)
  tasks.push(req.body)
  res.json(req.body)

})

// app.get('/tasks/:id', routes.show)

app.listen(3000, function(){
  console.log("app listening on port 3000");
});
