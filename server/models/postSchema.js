var mongoose = require("mongoose");

var post = new mongoose.Schema({

    title: String,
    body: String,
    author: String,
    created_at: {type: Date, default: Date.now},
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]

});

module.exports = mongoose.model("Post", post);

// example of object in java script

// var objectName = {
//   name : "sadasd"
// };