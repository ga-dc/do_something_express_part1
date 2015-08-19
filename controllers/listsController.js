module.exports = {
  index: function(req, res){
    res.json(lists)
  },
  show: function(req, res){
    var id = parseInt(req.params.id) - 1;
    res.json(lists[id])
  },
  create: function(req, res){
    console.log("Post request heard");
    lists.push(req.body)
    res.json(req.body)
  },
  update: function(req, res){
    var id = parseInt(req.params.id) - 1;
    var list = lists[id]
    console.log("Put request heard");
    // if (list.completed != true) {
    //     list.completed = true
    // }
    res.json(list)
  }
}
