var express = require('express')
var app = express()
var bodyParser = require("body-parser")
var tasks = tasks:[{id:1,body:"Take shower",completed: True},
			  {id:2,body:"Brush Teeth",completed: True},
			  {id:3,body:"Eat Breakfast",completed: True},
			  {id:4,body:"Grab Laptop",completed: True},
			  {id:5,body:"Catch Bus",completed: False}]

//app.set('view engine', "hbs");
//app.set("views", __dirname + "/views")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

 app.get("/tasks/:id", function(req, res){
  for(var i = 0; i < tasks.length; i++){
    if(tasks[i].id == req.params.id){
      res.json(tasks[i])
    }
  }
})

app.post("/tasks", function(req,res){
	tasks.push(req.body)
	res.json(req.body)

app.listen (4000,function(){
	console.log("Taking the stage on 4000")
	});
