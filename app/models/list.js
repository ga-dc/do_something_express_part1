var tasks = [
  {id: 1, body: "first item", completed: false, list_id: 1},
  {id: 2, body: "second item", completed: false, list_id: 1},
  {id: 3, body: "third item", completed: false, list_id: 1}
];
var taskList = [];
for (var i=0; i<tasks.length; i++) {
  if (tasks[i].list_id == 1) {
    taskList.push(tasks[i]);
  }
}
var lists = [
  {id: 1, name: "List 1", tasks: taskList}
];

module.exports = {
  all: function() {
    return lists;
  },
  find: function(id) {
    for (var i=0; i<lists.length; i++) {
      if(lists[i].id == id) {
        return lists[i];
      }
    }
  },
  create: function(body) {
    lists.push(body);
  },
  delete: function(id) {
    for(var i=0; i<lists.length; i++) {
      if(lists[i].id == id) {
        lists[i].splice(i, 1);
        return
      }
    }
  },
}
