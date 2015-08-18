var express = require("express");
var app = express();
app.set("view engine", "hbs");
var bodyParser = require("body-parser");
app.use(bodyParser.json());  // for json post requests
// app.use(bodyParser.urlencoded({extended:true}));  // for forms

app.listen(3000), function(){
  console.log("app listening on port 3000");  // could be any port, 3000-5000
};

var tasks = [
  {id: 1, body:"bake a cake", completed: true},
  {id: 2, body:"walk the dog", completed: true},
  {id: 3, body:"wash the dishes", completed: true},
  {id: 4, body:"shop for groceries", completed: true},
  {id: 5, body:"shop for shoes", completed: true},
];

// tasks#index
app.get('/', function (req, res){
  res.send('get index');
});
