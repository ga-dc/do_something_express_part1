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

// var taskEngine = require('./task');
//
// app.set('view engine', 'html');
// app.engine('html', hbs.__express);


// ======= objects
var object1 = {
	id: 1,
	body: "index task",
	completed: true
}

var object2 = {
	id: 2,
	body: "post task",
	completed: true
}

var object3 = {
	id: 3,
	body: "edit task",
	completed: true
}

var object4 = {
	id: 4,
	body: "object4",
	completed: true
}

var object5 = {
	id: 5,
	body: "object5",
	completed: true
}

var tasks = [object1, object2, object3, object4, object5];


// ======= routes pages
var initRoutes = require('./initRoutes');
initRoutes.initRoutes(app, tasks);


// ======= server port
app.listen(3000, function(){
  console.log("http://localhost:3000/")
})



// ======= home page
// app.get('/', function(req, res) {
//     res.render('index');
// });
//
// app.get('/', function(req, res) {
//     res.render('index',{title:"ToDo App", tasks:taskEngine.getTasks()});
// });
//
// app.get('/about', function(req, res) {
//     res.render('about', {title:"About Me"});
// });
//
// app.get('/task/:id', function(req, res) {
//     var task = taskEngine.getTask(req.params.id);
//     res.render('task',{ id:task.id, body:task.body, completed:task.completed });
// });
//


// exports.getTasks = function() {
//     return tasks;
// }
//
// exports.getTask = function(id) {
//     for(var i=0; i < tasks.length; i++) {
//         if(tasks[i].id == id) return tasks[i];
//     }
// }



// // ======= housekeeping
// var express = require("express");
// var bodyParser = require("body-parser")
// var hbs = require("hbs");
// var app = express();

// // ======= view engine set to hbs
// app.set("view engine", "hbs")


// app.configure(function(){
// 	app.set('views', __dirname + '/views');
// 	app.set('view engine', 'hbs');
// 	app.use(bodyParser.json()) 							// handles json post requests
// 	app.use(bodyParser.urlencoded({ extended: true }))	// handles form submissions
// 	app.use(express.json());       						// to support JSON-encoded bodies
// 	app.use(express.urlencoded()); 						// to support URL-encoded bodies
// 	// app.use(express.bodyParser());
// 	// app.use(express.methodOverride());
// 	// app.use(app.router);
// 	// app.use(express.static(__dirname + '/public'));
// });


// // ======= routes
// app.route('/task')
//   .get(function(req, res) {
//     res.send('Get a random task');
//   })
//   .post(function(req, res) {
//     res.send('Add a task');
//   })
//   .put(function(req, res) {
//     res.send('Update the task');
//   });





// // ======= get route EDIT
// app.get('/:name', function (req, res) {
// 	res.render("taskForm", {
// 		name: req.params.name
// 	})

// 	var editTask = tasks[3];

// 	res.contentType('application/json');
// 	res.send(JSON.stringify(editTask));

// });


// // ======= POST route
// app.post('/formPost', function(req, res) {
//     console.log(JSON.stringify(req.body));
//     console.log('req.body.id', req.body['name']);
//     console.log('req.body.body', req.body['body']);
//     console.log('req.body.completed', req.body['completed']);
// });


// // app.post('/test-page', function(req, res) {
// //     var id = req.body.id;
// //     var body = req.body.body;
// //     var completed = req.body.completed;

// //     res.render("hello " + req.body.name)
// // });


// // app.post('/', function (req, res) {

// // 	tasks.push(params);

// // 	res.contentType('application/json');
// // 	res.send(JSON.stringify(tasks));

// // });


// // ======= SHOW route
// app.get('/show/1', function (req, res) {

// 	var showTask = tasks[1];

// 	res.contentType('application/json');
// 	res.send(JSON.stringify(showTask));

// });


// // ======= INDEX route
// app.get('/', function (req, res) {

// 	res.contentType('application/json');
// 	res.send(JSON.stringify(tasks));

// });



// // accept POST request on the homepage
// app.post('/', function (req, res) {
//   res.send('Got a POST request');
// });


// // accept PUT request at /user
// app.put('/user', function (req, res) {
//   res.send('Got a PUT request at /user');
// });


// // accept DELETE request at /user
// app.delete('/user', function (req, res) {
//   res.send('Got a DELETE request at /user');
// });


// var server = app.listen(3000, function () {
// 	var host = server.address().address;
// 	var port = server.address().port;
// 	console.log('listening at http://%s:%s', host, port);
// });
