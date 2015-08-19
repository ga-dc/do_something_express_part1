var express = require("express");
var app = express();
var objectModule = require("../models/anObjectModule.js");
var routes = require("../controllers/routes.js");

app.get("/", routes.index );

app.get("/:name", routes.show );

app.listen(3333, function(){
  console.log("app listening on port 3333");
});
