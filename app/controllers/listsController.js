function setup(app, lists) {
  app.get("/", function(req, res){
    res.json(lists);
  });

  app.get("/lists/:id", function(req, res){
    res.json(lists[req.params.id]);
  });

  app.post("/lists", function(req, res){
    lists.push(req.body)
    res.json(req.body)
  });
}

exports.setup = setup;
