// TODO
// You'll need to require your data file in here
var data = require('friends.js');
// Add app.get statements for api/data stuff
//app.post("/api/friends", function (req, res){
    // I got data in req
    // Take that data and compare with friendsArray

    // For each friend in friends arra:
    //      Calculate difference
    //      If closest match, save index

    // friendsArray[index] is the match

//    var userAnswers = req.data;

//   var closestMatchIndex = 0;
//    var closestDifference = null;

//   data.forEach(function(friend) {
//        var difference = 0;
//        friend.score.forEach(function(s, i) {
//            difference += Math.abs(s-userAnswers[i])
//        })

//        if (i == 0) {
//            closestDifference = difference;
//        } else {
//            if (difference < closestDifference) {
//                closestDifference = difference;
//                closestMatchIndex = i
//            }
//        }
//    })

//    res.json(data[closestMatchIndex])


    // Send it back to client with res.json(..)
//});
// The logic for figuring out who should be their friend will be in here inside your app.gets....