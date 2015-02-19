/**
 * Blog site
 * @author Skaidrius <skaidrius@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('webApp', [
        'ngRoute',
        'ui.bootstrap'
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
        // Side menu:
        .when("/tales", {templateUrl: "partials/blog.html", controller: "TalesCtrl"})
        .when("/photos", {templateUrl: "partials/blog.html", controller: "PhotoCtrl"})
        .when("/arts", {templateUrl: "partials/blog.html", controller: "ArtCtrl"})
        .when("/creations", {templateUrl: "partials/blog.html", controller: "CreatorCtrl"})
        .when("/popular", {templateUrl: "partials/blog.html", controller: "PopularCtrl"})
        
        // else 404
        .otherwise("/404", {templateUrl: "partials/404.html", controller: "BlogCtrl"});
}]);

/**************************
*       CONTROLLERS
**************************/

//Controls the Blog posts page
app.controller('BlogCtrl', function ($scope, $http) {
    'use strict';
//    retrieve individual posts from json
    $http.get('js/posts.json')
        .then(function (res) {
            $scope.posts = res.data;
        });
    $scope.message = "Visi įrašai";

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

// Navigation messages
app.controller('TalesCtrl', function ($scope) {
    'use strict';
    $scope.message = "Pasakojimai";
});

app.controller('PhotoCtrl', function ($scope) {
    'use strict';
    $scope.message = "Nuotraukos";
    $scope.posts = $scope.withImage;
});

app.controller('ArtCtrl', function ($scope) {
    'use strict';
    $scope.message = "Piešiniai";
});

app.controller('CreatorCtrl', function ($scope) {
    'use strict';
    $scope.message = "Darbeliai";
});

app.controller('PopularCtrl', function ($scope) {
    'use strict';
    $scope.message = "Populiariausi";
});

//  Modal controller
app.controller('NavBarCtrl', function ($scope) { //http://stackoverflow.com/questions/14741988/twitter-boostrap-navbar-with-angular-js-collapse-not-functioning
    'use strict';
    $scope.isCollapsed = true;
});

app.controller('LoginCtrl', function ($scope, $modal, $log) { //from http://angular-ui.github.io/bootstrap/
    'use strict';
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (templateUrl) {

        var modalInstance = $modal.open({
            templateUrl: templateUrl,
            controller: 'ModalInstanceCtrl',
            resolve: {
                items: function () {
                   return $scope.items;
                }
            }
        });

    modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
    },  function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };
    
    $scope.ok = function () {
        $modalInstance.close($scope.selected.item);
    };
    
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
// End of modal controller

/*************************
*       FILTERS
**************************/
 
// capitalize first letter
app.filter('capitalize', function () {
    'use strict';
    return function (input, scope) {
        if (input !== null) {
            input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    };
});
