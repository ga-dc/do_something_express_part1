var tasks = [
  {taskID: 1},
  {taskID: 2},
  {taskID: 3},
  {taskID: 4},
  {taskID: 5}
];

// The two routes below are for displaying all of the current tasks
app.get("/", function(req, res){
  res.json(tasks[]);
});

app.get("/lists", function(req, res){
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
