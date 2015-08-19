var tasks = [
  { id: 1,
    body: "roto-root shower drain",
    completed: true },
  { id: 2,
    body: "grease rear axle on the Biscayne",
    completed: false},
  { id: 3,
    body: "replant flag at Sea of Tranquility",
    completed: false},
]

module.exports = {
  all: function(){
    return tasks
  },
  find: function(id){
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i].id == id){
        return tasks[i]
      }
    }
  },
  create: function(body){
    tasks.push(body)
    return body
  },
  delete: function(id){
    for(var i = 0; i < tasks.length; i++){
      if(tasks[i].id == id){
	tasks = tasks.splice(i,1)
	return
      }
    }
  }
}
