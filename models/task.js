var tasks = [
  {id: 1, body: "Clean the kitchen", completed: false},
  {id: 2, body: "Wash the clothes", completed: false},
  {id: 3, body: "Wash the car", completed: false},
  {id: 4, body: "Walk the doge", completed: false},
  {id: 5, body: "Finish the GA hw", completed: false}
];

// The two routes below are for displaying all of the current tasks
app.get("/", function(req, res){
  res.json(tasks);
});

app.get("/tasks", function(req, res){
  res.json(tasks);
});

// The route below displays the details for a particular task
app.get("/tasks/:id", function(req, res){
  res.json(tasks[req.params.id-1]);
});

// The addTask page is for new tasks, below are the routes to get the page and post to it
app.get("/addTask", function(req, res){
  res.send("Enter new task: <form action=\"/\" method=\"post\"><input type=\"text\" name=\"taskName\"></form>");
});

app.post("/addTask", function(req, res){
  tasks.push({id: (tasks.length + 1), body: req.params.taskName, completed: false})
  res.send("Added! <a href=\"/tasks\">Back to tasks</a>")
});

module.export = Task
