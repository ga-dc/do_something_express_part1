var lists = require("../models/list")

module.exports = {
  index: function(req, res) {
    res.send("hello world")
    res.send(lists.all);
  },
  show: function(req, res) {
    var id = req.params.id - 1;
    var list = lists.find(id)
    res.json(list);
  },
  create: function(req, res) {
    var allLists = lists.all
    var newId = allists.length + 1
    lists.create({id: newId, name: req.body.name, tasks: []});
  },
  // update: function(req, res) {
  //   var id = req.params.id - 1;
  //   var list = lists.find(id);
  //   list = req.body;
  // },
  delete: function(req, res) {
    var id = req.params.id - 1;
    lists.delete(id);
  }
}
