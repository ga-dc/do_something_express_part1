var tasks = [
  {id: 1, body: "first item", completed: false, list_id: 1},
  {id: 2, body: "second item", completed: false, list_id: 1},
  {id: 3, body: "third item", completed: false, list_id: 1}
  ]

module.exports = {
  all: function() {
    return tasks;
  },
  find: function(id) {
    for (var i=0; i<tasks.length; i++) {
      if(tasks[i].id == id) {
        return tasks[i];
      }
    }
  },
  create: function(body) {
    tasks.push(body);
  },
  delete: function(id) {
    for(var i=0; i<tasks.length; i++) {
      if(tasks[i].id == id) {
        tasks[i].splice(i, 1);
        return
      }
    }
  },
  // faking a belongs_to relationship
  list: function(id) {
    return tasks[id].list_id;
  }
}
