var Task = function(body, index){
  this.body = body;
  this.completed = false;
  this.index = index;
}
Task.prototype.complete = function(){
  this.completed = true;
}
Task.prototype.uncomplete = function(){
  this.completed = false;
}
Task.prototype.count = 0;

module.exports = Task
