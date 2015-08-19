app.get("/", function(req, res){
  res.redirect("/tasks");
});

app.get("/tasks", function(req, res){
  res.json(tasks);
});

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
