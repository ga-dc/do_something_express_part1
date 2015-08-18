var express = require("express")
var app = express()

/////////////////////////////////////////////

// tasks objects

var tasks = [{
    id: 1,
    body: "todo1",
    completed: true
}, {
    id: 2,
    body: "todo2",
    completed: true
}, {
    id: 3,
    body: "todo3",
    completed: false
}, {
    id: 4,
    body: "todo4",
    completed: false
}, {
    id: 5,
    body: "todo5",
    completed: true
}]

/////////////////////////////////////////////

app.get("/", function(req, res) {
    res.redirect("/tasks")
})

// index route

app.get("/tasks", function(req, res) {
    res.json(tasks)
})

// show route

app.get("/tasks/:id", function(req, res) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == req.params.id) {
            res.json(tasks[i])
        }
    }
})

// post route

app.post("/tasks", function(req, res) {
    tasks.push(req.body)
    res.json(req.body)
})

// Bonus

// update to to completed
// not working or complete

app.post("/tasks/:id", function(req, res) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == req.params.id) {
            if (tasks.completed == false) {
                tasks.completed = true
            }
        }
    }
})

/////////////////////////////////////////////

// localhost:5000

app.listen(5000, function() {
    console.log("app listening on port 5000")
})
