let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let config = require('./config');


let app = express();

let apiRoutes = require("./api-routes");
app.use(bodyParser.urlencoded({
     extended: true
}));
app.use(bodyParser.json());
mongoose.connect(config.connectionStr, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

if (!db) {
     console.log("Error connecting db");
} else {
     console.log("Db connected successfully")
}

var port = process.env.PORT || 8080;

app.use('/api', apiRoutes);

app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});