


function Task(id, body){
  this.id = id,
  this.body = body
}

Task.prototype.completed = false

module.exports = Task
