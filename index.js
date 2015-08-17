var express = require('express');
var app = exports.app = express();
var bodyParser = require('body-parser');

// middleware!
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// set up the local server
app.listen(4000, function() {
  console.log("listening on port 4000")
});

// create an array of objects
var tasks = [
  {id: 1, body: "first item", completed: false},
  {id: 2, body: "second item", completed: false},
  {id: 3, body: "third item", completed: false}
];

// root returns JSON file with all tasks
app.get('/', function(req, res) {
  res.json(tasks);
});

// show a single item on to-do list
app.get('/:id', function(req, res) {
  // FIXME should req.params.id be converted to int?
  var task = req.params.id - 1;
  res.json(tasks[task]);
});

app.post('/', function(req, res) {
  // convert id to int, completed to boolean
  tasks.push({id: parseInt(req.body.id), body: req.body.body, completed: req.body.completed == "true"})
});
