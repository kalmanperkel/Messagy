/**
 * Created by kalmanperkel on 11/04/2017.
 */

var app = angular.module("messagy", ["ngRoute"]);
app.config(function ($routeProvider) {
   $routeProvider
       .when("/", {
          templateUrl:"templates/home.htm",
           controller: "homeController"
       }).otherwise({
       redirectTo: '/home'
   });

});


