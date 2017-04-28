var Post = require('../models/postSchema');
var Comment = require('../models/commentsSchema');

exports.createPosts = function (req, res) {
    var newPost = new Post();
    newPost.title = req.body.title;
    newPost.body = req.body.body;
    newPost.author = req.body.author;
    newPost.save(function (err, createdPost) {
        if (err) {
            res.status(400).send('an error occurred');
        } else {
            res.status(201).send("Post created" + createdPost);
        }
    });
};

exports.getAllPosts = function (req, res) {
    // Post.find({}, function (err, posts) {
    //     res.json(posts);
    // });

    Post.find({}).populate("comments").exec(function (err, posts) {
        res.json(posts);
    });

};

exports.getOnePost = function (req, res) {

    Post.findOne({_id: req.params.id}).populate("comments").exec(function (err, foundPost) {
        if (err) {
            console.log(err);
        } else {
            res.json(foundPost);
        }
    })
};

exports.addComment = function (req, res) {

    Post.findOne({_id: req.params.id}, function (err, foundPost) {
        if (err) {
            console.log(err);
        } else {
            var newComment = new Comment();
            newComment.author = req.body.author;
            newComment.body = req.body.body;
            Comment.create(newComment, function (err, comment) {
                if (err) {
                    console.log(err)
                } else {
                    foundPost.comments.push(comment);
                    foundPost.save();
                    res.send("Thanks you for adding comment " + comment.author);
                }
            });
        }
    });
};

