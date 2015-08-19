module.exports = {

// lists#index
app.get("/lists", function(req, res){
  res.send("lists index page");
});

// lists#new
app.get("/lists/new", function(req, res){
  res.send('GET to gather info for a new list');
})

// lists#show
app.get("/lists/:id", function(req, res){
  res.send("GET lists show page:" + req.params.id);
});

// lists#create
app.post("/lists/", function(req, res){
  res.send('POST  to create a list');
})

// lists#edit
app.get('/lists/:id/edit', function (req, res) {
  res.send('GET to gather info to update list:' + req.params.id);
})

// lists#update
app.patch('/lists/:id', function (req, res) {
  res.send('PATCH to update list:' + req.params.id);
})

// lists#delete
app.delete('/lists/:id', function (req, res){
  res.send('DELETE list:' + req.params.id); 
})

};
