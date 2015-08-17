var express = require('express')
var app = express()
var tasks =
  [
    {
    id: 1, body: 'See the Disco Biscuits concert', completed: false
    }
    ,
    {
      id: 2, body: 'Go to the Sound Tribe show', completed: false
    }
    ,
    {
      id: 3, body: 'Rage The New Deal', completed: false
    }
    ,
    {
      id: 4, body: 'Throw down for Brothers Past', completed: false
    }
    ,
    {
      id: 5, body: 'Boogie all night long', completed: false
    }
  ]

//app.set("view", "hbs")

app.listen(4000, function(){
  console.log("4000");
});

//#index
app.get('/tasks', function(req, res) {
  res.json(tasks)
});

//#show
app.get('/tasks/:id', function(req, res) {
  for(var i = 0; i < tasks.length; i++)
    if (tasks[i].id == req.params.id) {
        res.json(tasks[i])
    }
});

//#new
app.post('/tasks', function() {
  tasks.push(req.body)
  res.json(req.body)
});

//#create
