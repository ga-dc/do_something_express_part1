var tasksController = require("../controllers/tasksController.js");

var tasks = [
  {id: 1, body:"bake a cake", completed: true},
  {id: 2, body:"walk the dog", completed: true},
  {id: 3, body:"wash the dishes", completed: true},
  {id: 4, body:"shop for groceries", completed: true},
  {id: 5, body:"shop for shoes", completed: true},
];

module.exports = function(){
  return tasks;
};
