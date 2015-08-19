app.get("/lists", function(req, res){
  console.log("lists index page");
});

app.get("/lists/:id", function(req, res){
  console.log("lists show page");
});
