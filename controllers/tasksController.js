function setup(app) {

  app.get("/tasks", function(req, res){
    res.json(tasks)
  })

  app.get("/tasks/:id", function(req, res){
    var todo = parseInt(req.params.id) - 1
    res.json(tasks[todo])
  })

  app.post("/tasks", function(req, res){
    tasks.push(req.body)
    res.json(tasks)
  })

  app.put("/tasks/:id", function(req, res) {
    var todo = parseInt(req.params.id) - 1
    tasks[todo]["completed"] = req.body.completed
    res.json(tasks)
  })

  app.delete("/tasks/:id", function(req, res) {
    var todo = parseInt(req.params.id) - 1
    tasks.splice(todo, 1);
    res.json(tasks)
  })
}
exports.setup = setup
