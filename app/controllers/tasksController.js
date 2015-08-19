module.exports = {
  app.get("/tasks", function(req, res) {
    res.json(tasks);
  });

  app.get("/tasks/:id", function(req, res){
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i].id == req.params.id){
        res.json(tasks[i]);
      }
    }
  });

  app.post("/tasks", function(req, res) {
    tasks.push(req.body);
    res.json(tasks[tasks.length - 1]);
  });
}
