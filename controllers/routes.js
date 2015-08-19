var objectModule = require("../models/anObjectModule.js");


module.exports = {
  index: function( req, res ){
    res.json('index', objectModule.tasks);
  },
  show: function( req, res ){
    var i = req.params.name;
    res.json('show', objectModule.tasks[i]);
  },
  new: function( req, res){
    var i = req.params.name;
    res.send('new', objectModule.tasks[i]);
  },
  update: function( req, res){
    var i = req.params.name;
    res.send('update', objectModule.tasks[i]);
  },
  delete: function( req, res){
    var i = req.params.name;
    res.send('delete', objectModule.tasks[i]);
  }
};
