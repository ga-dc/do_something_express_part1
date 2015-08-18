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
var lists = [
  {id: 1, name: "List 1", tasks: [
    {id: 1, body: "first item", completed: false},
    {id: 2, body: "second item", completed: false},
    {id: 3, body: "third item", completed: false}
    ]
  }
];

// root returns JSON file with all to-do lists
app.get('/', function(req, res) {
  res.json(lists);
});

// show a single to-do list
app.get('/:id', function(req, res) {
  // FIXME should req.params.id be converted to int?
  // get index value of task by id
  var list = req.params.id - 1;
  res.json(lists[list].tasks);
});

// add a list to the 'lists' array
app.post('/', function(req, res) {
  // convert id to int, completed to boolean
  lists.push({id: lists.length + 1, name: req.body.name, tasks: []});
});

// add an task to a list
app.post('/:id', function(req, res) {
  var list = req.params.id - 1;
  // convert id to int, completed to boolean
  lists[list].tasks.push({id: lists[list].tasks.length + 1, body: req.body.body, completed: req.body.completed == "true"});
});

// update the completion status of a task
app.put('/:id/:task_id', function(req, res) {
  // get index value of task by id
  var list = req.params.id - 1;
  var task = req.params.task_id - 1;
  // change completion status, convert to boolean
  lists[list].tasks[task].completed = req.body.completed == "true"
});
