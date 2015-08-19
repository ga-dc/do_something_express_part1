var express = require("express");
var app = express();
var objectModule = require("./models/anObjectModule.js");
var routes = require("./controllers/routes.js");

app.get("/", routes.index );

app.get("/:name", routes.show );

app.put("/:name/", routes.new );

app.delete("/:name", routes.delete);

app.patch("/:name", routes.update);

app.get("/", function(request, response){
  response.sendFile(__dirname + "./views/index.html");
});

app.set("view engine", "hbs");

app.listen(3333, function(){
  console.log("app listening on port 3333");
});
