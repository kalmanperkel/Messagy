var express = require("express");
var app = express();
var morgan = require("morgan");
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var config = require("./config");
var routes = require("./routes/routes");

/**
 * Configuration
 */
mongoose.connect(config.database, function () {
    console.log("We are connected successfully to the database");
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
/**
 * Routes
 */

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
  console.log('addr: '+add);
})

routes(app, express);

/**
 * Running the server
 */
var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log("THE SERVER IS STARTED");
});
