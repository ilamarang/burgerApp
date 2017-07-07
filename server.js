
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = 3000;

var app = express();

//Setup static content
app.use(express.static('public'));

//Import handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controllers.js");

app.use("/", routes);


app.listen(port);
