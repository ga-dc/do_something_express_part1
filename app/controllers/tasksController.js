module.exports{

app.get("/", function(req, res){
  res.redirect("/tasks");
});

app.get("/tasks", function(req, res){
  res.json(tasks);
});

app.get("/tasks/new", function(req, res){
  res.send("POST to add new task");
})

app.get("/tasks/:id", function(req, res){
  res.json(tasks[req.params.id - 1].body);
});

app.post("/tasks/:id", function(req, res){
  console.log(req.body);
  res.send(req.body);
  // var task_id = parseInt(req.body.id);
  // var body = req.body.body;
  // var completed = req.body.completed;
  //
  // tasks.push(
  //   {"id" : "5",
  //     "body" : "task 6",
  //     "completed" : "false"
  //   });
});

// tasks#edit
app.get('/tasks/:id/edit', function (req, res) {
  res.send('GET to gather info to update task:' + req.params.id);
})

// tasks#update
app.patch('/tasks/:id', function (req, res) {
  res.send('PATCH to update task:' + req.params.id);
})

// tasks#delete
app.delete('/tasks/:id', function (req, res){
  res.send('DELETE task:' + req.params.id);
})

};
