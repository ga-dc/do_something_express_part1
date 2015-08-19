module.exports = {
  index: function(req, res){
    res.json(list.all())
  },
  show: function(req, res){
    res.json(task.find(req.params.id))
  },
  create: function(req, res){
    lists.push(req.body)
    res.json(req.body)
  },
  delete: function(req, res){
    list.delete(req.params.id)
    res.json("")
  }
}
