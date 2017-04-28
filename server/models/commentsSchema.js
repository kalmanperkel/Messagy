

var mongoose = require("mongoose");

var comment = new mongoose.Schema({

   author: String,
    body: String
});

module.exports = mongoose.model("Comment", comment);


