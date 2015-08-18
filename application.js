var express = require("express");
var app = express();
app.set("view engine", "hbs");

app.listen(3000), function(){
  console.log("app listening on port 3000");
});

var tasks = {
  { id: "1",
    body:"bake a cake",
    completed[true]:"success",
    completed[false]:"try again"
  }
  { id: "2",
    body:"walk the dog",
    completed[true]:"success",
    completed[false]:"try again"
  }
  { id: "3",
    body:"wash the dishes",
    completed:"boolean",
    completed[true]:"success",
    completed[false]:"try again"
  }
  { id: "4",
    body:"shop for groceries",
    completed:"boolean",
    completed[true]:"success",
    completed[false]:"try again"
  }
  { id: "5",
    body:"shop for shoes",
    completed:"boolean",
    completed[true]:"success",
    completed[false]:"try again"
  }
};
