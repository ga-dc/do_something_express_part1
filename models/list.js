var List = function(title){
  this.title = title;
  this.tasks = [];
}

List.prototype.push = function(task){
  this.tasks.push(task);
  return this;
}

List.prototype.retitle = function(title){
  this.title = title;
  return this;
}

List.prototype.length = function(){
  return this.tasks.length;
}

module.exports = List
