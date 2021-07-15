var mongoose = require('mongoose');
var config = require('./config');
var Question = require('./questionModel');
var questionsJson = require('./questions.json');

mongoose.connect(config.connectionStr);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log("Connection Successful!");
    
    Question.collection.insert(questionsJson, function (err, docs) {
        if (err) {
            return console.error(err);
        } else {
            console.log("Multiple questions inserted to Collection");
        }
    });

});