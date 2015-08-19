module.exports = {
  index: function(req, res){
    res.json(task.all())
  },
  show: function(req, res){
    res.json(task.find(req.params.id))
    },
  create: function(req, res){
    tasks.push(req.body)
    res.json(req.body)
  },
  delete: function(req, res){
    task.delete(req.params.id)
    res.json("")
  }
}
