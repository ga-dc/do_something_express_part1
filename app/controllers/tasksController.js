function setup (app) {
  app.get('/tasks', function (req, res) {
    res.json(tasks);
  });

  app.get('/tasks/:id', function (req, res) {
    res.json(tasks[req.params.id])
  });

  app.post('/tasks', function (req, res) {
    tasks.push(req.body)
    res.json(req.body)
  });

};

exports.setup = setup
