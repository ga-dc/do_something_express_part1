var tasks = [
  {id: 1, body:"buy a milk",completed: true},
  {id: 2, body:"wash the dishes",completed: true},
  {id: 3, body:"clean my room",completed: true},
  {id: 4, body:"do laundry",completed: false},
  {id: 5, body:"renew the license",completed: false}
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
