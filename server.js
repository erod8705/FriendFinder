//requiring express

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

//requiring body-parser
var bodyParser = require('body-parser')

//requiring PATH
var path = require('path');


