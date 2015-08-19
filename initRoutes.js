function initRoutes(app, list1) {


// ======= INDEX route
  app.get('/', function (req, res) {

    // res.contentType('application/json');
    // res.send(JSON.stringify(list1));

    console.log("list1: " + list1.length);

    var nextTask;
    var nextParagraph = "";

    for (i = 0; i < list1.length; i++) {
      nextTask = list1[i];
      nextParagraph = nextParagraph + "<p>" + list1[i].id + " | " + list1[i].body + " | " + list1[i].completed + "</p></br>";
    }
    // console.log("nextParagraph: " + nextParagraph);
    res.render("index", {para: nextParagraph});
  });


  // ======= NEW route
  app.get('/new', function (req, res) {

    // Handlebars.registerPartial('taskForm', '{{name}}');

  });


  // ======= SHOW route
  app.get('/show/:id', function (req, res) {

    var showTask = list1[req.params.id - 1];

    res.contentType('application/json');
    res.send(JSON.stringify(showTask));

  });


  // ======= POST route
  app.post("/", function(req, res){

    var id = 6;
    var name = "buy coffee";
    var completed = false;

    var newObj = {"id": id, "body": name, "completed": completed };

    list1.push(newObj);

    res.contentType('application/json');
    res.send(JSON.stringify(list1));
  })

}

exports.initRoutes = initRoutes;
