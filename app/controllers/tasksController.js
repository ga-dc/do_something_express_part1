var tasks = require("../models/task")

module.exports = {
  index: function(req, res) {
    res.json(tasks.all)
  },
  show: function(req, res) {
    var id = req.params.task_id - 1;
    var task = tasks.find(id)
    res.json(task);
  },
  create: function(req, res) {
    var allTasks = tasks.all
    var newId = allTasks.length + 1
    tasks.create({id: newId, body: req.body.body, completed: req.body.completed == "true"})
  },
  update: function(req, res) {
    var id = req.params.task_id - 1;
    var task = tasks.find(id);
    task.completed = req.body.completed == "true";
  },
  delete: function(req, res) {
    var id = req.params.task_id - 1;
    tasks.delete(id);
  }
}
