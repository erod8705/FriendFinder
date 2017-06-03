//requiring express

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
// TODO: the code below will need to go in your htmlRoutes.js
app.get('/', function (req, res) {
  res.send('hello world')
})

//requiring body-parser
var bodyParser = require('body-parser')

//requiring PATH
var path = require('path');


// TODO: add middleware statements (ie the bodyparser stuff)

// TODO: require your routes (htmlRouts.js, apiRoutes.js)

// TODO
// app.listen....


