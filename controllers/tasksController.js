var task = require("../models/task.js");

module.exports= {

  app.get('/', function (req, res){  // tasks#index
    res.json(tasks);
  });

  app.get('tasks/:id', function (req, res){  // tasks#show
    res.json(tasks[1]);  // why was there a for loop in the solution to return only one task?
  });                    // couldn't it just be hard-coded?

  app.post('/tasks', function (req, res){  // tasks#create
    res.json({$push : {tasks: id: 5, body:"shop for clothes", completed: true}});
  });                    // why won't this work to add an object to an array?

};
