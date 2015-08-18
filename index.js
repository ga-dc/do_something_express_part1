var express = require('express');
var app = express();

var tasks = [
      {id: 1, body: "buy groceries", completed: false},
      {id: 2, body: "take the dog out", completed: false},
      {id: 3, body: "feed the dog", completed: false},
      {id: 4, body: "pet the dog", completed: false},
      {id: 5, body: "vacuum", completed: false},
]

app.get('/tasks', function(req, res) {
  res.json(tasks);
});

app.get('/tasks/:id', function(req, res){
  res.json(tasks[req.params.id - 1]); //-1 so that it shows the index of 0 item
});

app.post('/tasks', function(req, res){
  res.json(tasks[req.params.new]);
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
