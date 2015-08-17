var express = require('express');
var app = exports.app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.listen(4000, function() {
  console.log("listening on port 4000")
});

var tasks = [
  {id: 1, body: "first item", completed: false},
  {id: 2, body: "second item", completed: false},
  {id: 3, body: "third item", completed: false}
];

// root returns JSON file with all tasks
app.get('/', function(req, res) {
  res.json(tasks)
});
