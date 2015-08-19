module.exports = {
  index: function(req, res){
    res.json(tasks)
  },
  show: function(req, res){
    var id = parseInt(req.params.id) - 1;
    res.json(tasks[id])
  },
  create: function(req, res){
    // var newTask = {id: 6, body: "Apply for jobs", completed: false};
    console.log("Post request heard");
    tasks.push(req.body)
    res.json(req.body)
  },
  update: function(req, res){
    var id = parseInt(req.params.id) - 1;
    var task = tasks[id]
    // var newTask = {id: 6, body: "Apply for jobs", completed: false};
    console.log("Put request heard");
    if (task.completed != true) {
        task.completed = true
    }
    res.json(task)
  }
}
