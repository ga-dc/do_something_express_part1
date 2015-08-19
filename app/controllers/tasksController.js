module.exports = {
  tasks: [
    {id: 1, body: "Do something!", completed: true},
    {id: 2, body: "Do something else!", completed: false},
    {id: 3, body: "Do another thing!", completed: true},
    {id: 4, body: "Just do it!", completed: false},
    {id: 5, body: "Do the right thing!", completed: true}
  ],

  //tasks#index
  index: function(req, res) {
    res.render("index");
    res.json(tasks);
  }
}

//   //tasks#new
//   app.get("/tasks/new", function(req, res) {
//     res.send("GET form to create a new task")
//   })
//
//   //tasks#create
//   app.post("/tasks", function(req, res) {
//     tasks.push(req.body);
//     res.json(tasks[tasks.length - 1]);
//   });
//
//   //tasks#show
//   app.get("/tasks/:id", function(req, res){
//     for(var i = 0; i < tasks.length; i++){
//       if(tasks[i].id == req.params.id){
//         res.json(tasks[i]);
//       }
//     }
//   });
//
//   //tasks#edit
//   app.get("/tasks/:id/edit", function(req, res) {
//     res.send("GET form to edit task with id of " + req.params.id)
//   })
//
//   //tasks#update
//   app.put("/tasks/:id", function(req, res) {
//     res.send("PUT edited data to task with id of " + req.params.id)
//   })
//
//   //tasks#delete
//   app.delete("tasks/:id", function(req, res){
//     res.send("DELETE task with id of " + req.params.id)
//   })
//
// }
