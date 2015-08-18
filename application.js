var express = require("express")
var app = express()

var tasks = [
  {id:1, body:"Run $ npm init to initialize a new NodeJS application.", completed:true },
  {id:2, body:"Install the express node module by running $ npm install --save express", completed:true },
  {id:3, body:"Make a new file $ touch application.js", completed:true },
  {id:4, body:"Run $ npm install -g nodemon so you don't have to restart the server every time you update a file.", completed:false },
  {id:5, body:"Start up your by running $ nodemon application.js", completed:false }
];

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get("/", function(req, res){
  res.send("hello world")
})
