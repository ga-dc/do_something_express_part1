var task = require("../models/task")

module.exports = {
  index: function(req,res){
    res.json(task.all())
  }
}
