var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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

/////////////////////////////////////////////

// localhost:5000

app.listen(5000, function() {
    console.log("app listening on port 5000")
})
