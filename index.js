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
  {id: 1, name: "List 1", items: [
    {id: 1, body: "first item", completed: false},
    {id: 2, body: "second item", completed: false},
    {id: 3, body: "third item", completed: false}
    ]
  }
];

// root returns JSON file with all to-do lists
app.get('/', function(req, res) {
  res.json(tasks);
});

// show a single to-do list
app.get('/:id', function(req, res) {
  // FIXME should req.params.id be converted to int?
  // get index value of item by id
  var task = req.params.id - 1;
  res.json(tasks[task].items);
});

// add a list to the 'tasks' array
app.post('/', function(req, res) {
  // convert id to int, completed to boolean
  tasks.push({id: tasks.length + 1, name: req.body.name, items: []});
});

// add an item to a list
app.post('/:id', function(req, res) {
  var task = req.params.id - 1;
  // convert id to int, completed to boolean
  tasks[task].items.push({id: tasks[task].items.length + 1, body: req.body.body, completed: req.body.completed == "true"});
});

// update the completion status of an item
app.put('/:id/:item_id', function(req, res) {
  // get index value of item by id
  var task = req.params.id - 1;
  var item = req.params.item_id - 1;
  // change completion status, convert to boolean
  tasks[task].items[item].completed = req.body.completed == "true"
});
