var express = require('express');
var app = express();

var tasks = [
  {id:1 ,body:"Take out Garbage",completed: true },
  {id:2 ,body:"Defeat Cobra Commander",completed:false },
  {id:3 ,body:"Volunteer at Kids Shelter",completed:true },
  {id:4 ,body:"Cure Cancer",completed:false },
  {id:5 ,body:"Feed Dog",completed:true }
]

var server = app.listen(3000,function(){
    var host = server.address().address; //these are from the expressJS getting started docs
    var port = server.address().port;  //why were these not included with the lesson? do we not need them?
  console.log("app listening on port 3000 Big Burrito !");
});
