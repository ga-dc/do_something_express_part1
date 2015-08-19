var task = require("../models/task")

module.exports = {
  index: function(req,res){
    res.json(task.all())
  },
  show: function(req, res){
    res.json(task.find(req.params.id))
  },
  create: function(req,res){
    var t = task.create(req.body)
    res.json(t)
  },
  delete: function(req, res){
    task.delete(req.params.id)
    res.json("")
  }
}
