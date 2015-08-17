var express = require('express');
var app = express();

var server = app.listen(3000,function(){
    var host = server.address().address; //these are from the expressJS getting started docs
    var port = server.address().port;  //why were these not included with the lesson? do we not need them?
  console.log("app listening on port 3000 Big Burrito !");
});
