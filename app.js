var express = require("express")
var app = express()

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

app.get("/tasks", function(req, res) {
    res.json(tasks)
})

app.get("/tasks/:id", function(req, res) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == req.params.id) {
            res.json(tasks[i])
        }
    }
})

app.listen(5000, function() {
    console.log("app listening on port 5000")
})
