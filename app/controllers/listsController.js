app.get("/lists", function(req, res){
  res.send("lists index page");
});

app.get("/lists/:id", function(req, res){
  res.send("lists show page");
});
