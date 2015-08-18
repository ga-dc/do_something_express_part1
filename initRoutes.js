function initRoutes(app, tasks) {

// ======= INDEX route
  app.get('/', function (req, res) {

    res.render('index');

    // res.contentType('application/json');
    // res.send(JSON.stringify(tasks));

  });

  // ======= SHOW route
  app.get('/show/:id', function (req, res) {

    var showTask = tasks[req.params.id - 1];

    res.contentType('application/json');
    res.send(JSON.stringify(showTask));

  });

  // ======= POST route
  app.post("/", function(req, res){

    var id = req.body.id;
    var name = req.body.name;
    var completed = req.body.completed;

    res.render("POST id: " + id + " name: " + name + " completed: " + completed)
  })

  
  // // songs#index
  // app.get('/songs', function (req, res) {
  //   res.send('GET index of Songs ');
  // });
  //
  // // songs#new
  // app.get('/songs/new', function (req, res) {
  //   res.send('make new song ');
  // });
  //
  // // songs#create
  // app.post('/songs', function (req, res) {
  //   res.send('POST to create a new song ');
  // });
  //
  // // songs#edit
  // app.get('/songs/edit/:id', function (req, res) {
  //   res.send('GET selected song to edit: ' + req.params.id);
  // });

  // app.get('/about', function(req, res) {
  //     res.render('about');
  // });
  //
  // app.get('/task', function(req, res) {
  //     res.render('task');
  // });
  //

}

exports.initRoutes = initRoutes;
