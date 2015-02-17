/**
 * Blog site
 * @author Skaidrius <skaidrius@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('webApp', [
        'ngRoute'
    ]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
        // Blog
        .when("/", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
        //Log in 
        .when("/login", {templateUrl: "partials/login.html", controller: "LoginCtrl"})
        //Sign up 
        .when("/signup", {templateUrl: "partials/signup.html", controller: "LoginCtrl"})
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "BlogCtrl"});
}]);

/**
 * Controls the Blog posts page
 */

app.controller('BlogCtrl', function ($scope, $http) {
    'use strict';
//    retrieve individual posts from json
    $http.get('js/posts.json')
        .then(function (res) {
            $scope.posts = res.data;
        });
    
//  FILTERS
//    imagefilter
    $scope.withImage = function (post) {
    // Do some tests

        if (post.imgsrc !== "") {
            return true; // this will be listed in the results
        }
        return false; // otherwise it won't be within the results
    };
    
//    textfilter
    $scope.withText = function (post) {
    // Do some tests

        if (post.text !== "") {
            return true; // this will be listed in the results
        }
        return false; // otherwise it won't be within the results
    };
    
});


//capitalize first letter
app.filter('capitalize', function () {
    'use strict';
    return function (input, scope) {
        if (input !== null) {
            input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    };
});
