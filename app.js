var express = require('express');
var app = express();

var object1 = {
	id: 1,
	body: "object1",
	completed: true
}

var object2 = {
	id: 2,
	body: "object2",
	completed: true
}

var object3 = {
	id: 3,
	body: "object3",
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

// ======= INDEX route (request and response)
app.get('/show/1', function (req, res) {

	var showTask = tasks[1];

	res.contentType('application/json');
	res.send(JSON.stringify(showTask));

});



// ======= INDEX route (request and response)
app.get('/', function (req, res) {

	res.contentType('application/json');
	res.send(JSON.stringify(tasks));

});



// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
});

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});

var server = app.listen(3000, function () {

	var host = server.address().address;
	var port = server.address().port;

	console.log('listening at http://%s:%s', host, port);
});