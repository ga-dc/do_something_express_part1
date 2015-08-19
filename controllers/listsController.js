function setup(app) {

  app.get("/lists", function(req, res){
    res.json(lists)
  })

  app.get("/lists/:id", function(req, res){
    var list_number = parseInt(req.params.id) - 1
    res.json(lists[list_number])
  })

  app.post("/lists", function(req, res){
    lists.push(req.body)
    res.json(lists)
  })

  app.put("/lists/:id", function(req, res) {
    var list_number = parseInt(req.params.id) - 1
    lists[list_number]["todos"].push(req.body.todo)
    res.json(lists)
  })

  app.delete("/lists/:id", function(req, res) {
    var list_number = parseInt(req.params.id) - 1
    lists.splice(list_number, 1);
    res.json(lists)
  })
}

exports.setup = setup
