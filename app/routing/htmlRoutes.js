// TODO
// You'll need to require your data file in here
var path = require('path');
var friendsArray = require('friendsArray');

// Add app.get statements for html files
module.exports = function(app) {

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
}); 

}