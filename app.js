var express = require('express');
var bodyParser = require("body-parser")
var hbs = require("hbs");
var app = express();


// ======= set directory for views
app.set('views', './views');
app.set('view engine', 'hbs');


// ======= body-parser init
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ======= tasks
var task1 = {
	id: 1,
	body: "index task",
	completed: true
}

var task2 = {
	id: 2,
	body: "post task",
	completed: true
}

var task3 = {
	id: 3,
	body: "edit task",
	completed: true
}

var task4 = {
	id: 4,
	body: "task4",
	completed: true
}

var task5 = {
	id: 5,
	body: "task5",
	completed: true
}

var list1 = [task1, task2, task3, task4, task5];


// ======= js files module
var list = require("./models/list.js");
var task = require("./models/task.js");
var listsController = require("./controllers/listsController.js");
var tasksController = require("./controllers/tasksController.js");


// ======= routes pages
var initRoutes = require('./initRoutes');
initRoutes.initRoutes(app, list1);


// ======= server port
app.listen(3000, function(){
  console.log("http://localhost:3000/")
})

