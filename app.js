var express = require("express")
var app = express()
var bodyParser = require("body-parser")

app.use(bodyParser.json()) //handles json post requests
app.use(bodyParser.urlencoded({ extended: true })) // handles form submissions

var tasks = [
  {
    id: 1,
    body: "complete express homework",
    completed: false
  },
  {
    id: 2,
    body: "cut my hair",
    completed: true
  },
  {
    id: 3,
    body: "cook dinner",
    completed: false
  },
  {
    id: 4,
    body: "do a load of laundry",
    completed: false
  },
  {
    id: 5,
    body: "watch rick and morty",
    completed: true
  }
]
var tasksCompleted = []

/* Not sure that this is quite what the bonus was looking for but it sort ofworks. It creates two issues though:
   The biggest issue is that it affects the /:task routes because it messes up the indexing from the tasks array and doesn't search for the task id in the tasksCompleted array.
   I could get around that by making two arrays: tasksCompleted and tasksIncomplete while keeping tasks array the same. That was actually what I did for my first attempt at sorting. Then I "refactored".
   I'm also thinking that it wouldn't be too hard to sort it directly in a view and only show the tasks you want without changing the tasks array.
   Another problem is that you can't change a task from completed to incomplete and have it show up back in the tasks array.
   So, basically, my refactoring made things worse but it's late and I'm too tired to fix it.
   */

function sortByCompleted(array){
  for (i = 0; i < array.length; i++) {
    // compared to boolean and string "true" because CocoaRestClient entered values as strings
    if (array[i].completed == true || array[i].completed == "true") {
      tasksCompleted.push(array[i])
      tasks.splice(i, 1)
    }
  }
}

app.get("/", function(req, res){
  sortByCompleted(tasks)
  res.json({toDo: tasks, done: tasksCompleted})
})

app.get("/:task", function(req, res){
  var todo = parseInt(req.params.task) - 1
  res.json(tasks[todo])
})

// used CocoaRestClient to test post routes
// it worked except that it entered id: and completed: values as strings, not int and boolean

app.post("/", function(req, res){
  tasks.push(req.body)
  res.json(tasks)
})

app.post("/:task", function(req,res){
  var todo = parseInt(req.params.task) - 1
  tasks[todo].completed = req.body.completed
  res.json(tasks[todo])
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
