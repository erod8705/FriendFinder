//requiring express
// respond with "hello world" when a GET request is made to the homepage

var express = require('express');
var app = express();
//requiring body-parser
var bodyParser = require('body-parser');
//requiring PATH
var path = require('path');
//requiring the friends.js file
var friends = require('friends');
//setting up our port
var PORT = process.env.PORT || 8080

// TODO: the code below will need to go in your htmlRoutes.js 
app.get('/', function (req, res) {
  res.send('Hello World')
})

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json 
app.use(bodyParser.json());
 
require('./app/routing/htmlRoutes.js')(app);
// TODO
// app.listen....
app.listen(PORT, function(){
  console.log("App listening on PORT" + PORT);
});






// TODO: add middleware statements (ie the bodyparser stuff)

// TODO: require your routes (htmlRouts.js, apiRoutes.js)


