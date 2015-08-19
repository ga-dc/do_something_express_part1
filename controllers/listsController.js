var List = require("../models/list")
var lists = [];
lists.push(new List("test"))
lists.push(new List("test2"))

function setup(app){
  app.get('/lists', function(req, res){
    res.json(lists);
  });

  app.get('/lists/:title', function(req, res){
    var list = lists.filter(isTitled(req.params.title));
    res.json(list);
  });

  app.post('/lists', function(req, res){
    console.log(req.body.title);
    if (!(lists.filter(isTitled(req.body.title)))){
      res.send("Title already taken, please choose unique title")
    }
    else {
      var newList = new List(req.body.title);
      lists.push(newList);
      res.json(lists);
    }
  });
  function isTitled(title){
    console.log(title);
    return (function(list){
      console.log(list.title == title)
      return (list.title == title);
    })
  }

}

exports.setupLists = setup;
