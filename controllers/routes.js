var objectModule = require("./anObjectModule.js");


module.exports = {
  index: function( req, res ){
    res.json('index', objectModule.tasks);
  },
  show: function( req, res ){
    var i = req.params.name;
    res.json('show', objectModule.tasks[i]);
    }
};
