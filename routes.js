function setup(app, tasks) {
  app.get("/", function(req, res){
    res.json(tasks);
  });

  app.get("/todos/:id", function(req, res){
    res.json(tasks[req.params.id]);
  });

  app.post("/todos", function(req, res){
    tasks.push(req.body)
    res.json(req.body)
  });
}

exports.setup = setup;
