var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes.js');
var tasks = [
  {
    "id":0,
    "body":"Do laundry",
    "completed":false
  },
  {
    "id":1,
    "body":"Walk dog",
    "completed":false
  },
  {
    "id":2,
    "body":"Clean kitchen",
    "completed":false
  },
  {
    "id":3,
    "body":"Learn Express",
    "completed":false
  },
  {
    "id":4,
    "body":"Take Excedrin",
    "completed":false
  },
];

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

routes.setup(app, tasks);

app.listen(4000, function(){
  console.log("app listening on port 4000");
});
