var express = require('express');
var app = express();

var hbs = require('hbs');
// var tasks = require("./app/models/task")
var tasks = [

  {'id': 1,
  'body': "string",
  'completed': false
  },

  {'id': 2,
   'body': "string",
   'completed': false
  },

  {'id': 3,
   'body': "string",
   'completed': false
  },

  {'id': 4,
   'body': "string",
   'completed': false
  },

  {'id': 5,
   'body': "string",
   'completed': false
  }
]

app.listen(4000, function(){
  console.log("app listening on port 4000")
});


// ROUTES
app.get("/", function(request, response){
  response.sendFile(__dirname + "/app/views/index.html");
});

// New
app.get('/tasks/new', function (req, res) {
  res.send('GET a NEW task')
});

// Create
app.post('/tasks', function (req, res) {
  res.send('POST new task')
  tasks.push(req.body)
  res.json(req.body)
});

// Read (Index)
app.get('/tasks', function (req, res) {
  res.json(tasks)
});

// Read (Show)
app.get('/tasks/:id', function (req, res) {
      for (var i = 0; i < tasks.length; i++) {
          if (tasks[i].id == req.params.id) {
              res.json(tasks[i])
          }
      }
  })
// Update
app.post('/tasks/:id', function (req, res) {
  res.send('EDIT task ' + req.params.id)
});
// Destroy
app.delete('/tasks/:id', function (req, res) {
  res.send('DELETE task ' + req.params.id)
});
