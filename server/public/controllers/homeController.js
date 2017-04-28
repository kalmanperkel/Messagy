angular.module('messagy')
    .controller('homeController', function ($scope, $http) {

        var getPosts = function () {
            $http.get('/posts')
                .success(function (data) {
                    $scope.numberOfMessages = data.length;
                    $scope.posts = data;


                    console.log(data);
                })
                .error(function (data) {
                });
        };

        getPosts();


        $scope.addComment = function (postId, commentField) {

            var url = '/posts/' + postId + '/comment';
            var data = {
                author: "",
                body: commentField
            };
            $http.post(url, data).success(function (data, status, headers, config) {

                getPosts();

            })
                .error(function (data, status, header, config) {
                });

            console.log(postId + commentField);
        };
    });

