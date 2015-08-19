var express = require("express")
var app = express()


app.get("/", function(req, res){
  console.log("we're at root");
  res.sendFile(__dirname + "/app/views/index.html");
})

app.listen(4000, function(){
  console.log("app listening on port 4000")
})
