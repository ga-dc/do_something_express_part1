module.exports = {
  sayHello: function() {
    console.log('hello world')
  },
  index: function(req, res) {
    var tasks = [ {id: 1, body: 'toDo1', completed: false},
                  {id: 2, body: 'toDo2', completed: true},
                  {id: 3, body: 'toDo3', completed: false},
                  {id: 4, body: 'toDo4', completed: true},
                  {id: 5, body: 'toDo5', completed: false}, ]
    res.render("index", {
      tasks: tasks} )
  },
  show: function() {}

}
