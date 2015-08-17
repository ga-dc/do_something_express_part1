var express = require('express');
var app = express();



/************************************************
* Tasks: Should be exported to their own module *
*************************************************/
tasks = [
  {
    id: 0,
    body: "Do better",
    completed: false
  },
  {
    id: 1,
    body: "Be better",
    completed: false
  },
  {
    id: 2,
    body: "Read",
    completed: false
  },
  {
    id: 3,
    body: "Write",
    completed: false
  },
  {
    id: 4,
    body: "Meditate",
    completed: false
  }
];
//Tasks End



/*********
* Routes *
**********/

// index
app.get('/', function(req, res){
  res.json(tasks);
});

// get specific task
app.get('/:id', function(req, res){
  res.json(tasks[req.params.id]);
});

// post new todo
app.post('/:task', function(req, res){

  var newTask = tasks.push(
    {
      id: tasks.length,
      body: req.params.task,
      completed: false
    }
  );

  res.json(newTask);
});

app.listen(4000, function(){
  console.log("app listening on port 4000");
});
