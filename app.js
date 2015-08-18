var express = require("express")
var app = express()

var tasks = [
  {
    id: 1,
    body: "complete express homework",
    completed: false
  },
  {
    id: 2,
    body: "cut my hair",
    completed: false
  },
  {
    id: 3,
    body: "cook dinner",
    completed: false
  },
  {
    id: 4,
    body: "do a load of laundry",
    completed: false
  },
  {
    id: 5,
    body: "watch rick and morty",
    completed: false
  }
]




app.listen(4000, function(){
  console.log("app listening on port 4000")
})
