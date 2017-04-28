var path = require('path');
var posts = require('./posts');

module.exports = function (app, express) {

    app.get("/posts",posts.getAllPosts);
    app.get("/posts/:id", posts.getOnePost);
    app.post("/posts/create", posts.createPosts);
    app.post("/posts/:id/comment",posts.addComment);

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single templates file (angular will handle the page changes on the front-end)
    });

};