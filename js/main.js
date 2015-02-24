/**********************
 * Blog site
 * @author Skaidrius <skaidrius@gmail.com>
 **********************/

/***********************
 * Main AngularJS Web Application
 ***********************/
var app = angular.module('webApp', [
        'ui.router',
        'ui.bootstrap'
    ]);

/***********************
 *         Routes          CHANGED FROM ngRoute TO UI-ROUTER AND CONFIGURED LIKE HERE http://www.funnyant.com/angularjs-ui-router/
 **********************/
app.config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.otherwise('home');

// HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
    .state('home', {
        url: '/home',
        views: {
            'header': {
                templateUrl: 'templates/partials/header.html'
            },
            'content': {
                templateUrl: 'templates/partials/content.html', controller: 'MainController'
            },
            'footer': {
                templateUrl: 'templates/partials/footer.html'
            }
        }
    })
    .state('tales', {
        url: '/tales',
        views: {
            'header': {
                templateUrl: 'templates/partials/header.html'
            },
            'content': {
                templateUrl: 'templates/partials/content.html', controller: 'TalesController'
            },
            'footer': {
                templateUrl: 'templates/partials/footer.html'
            }
        }
    })
    .state('photos', {
        url: '/photos',
        views: {
            'header': {
                templateUrl: 'templates/partials/header.html'
            },
            'content': {
                templateUrl: 'templates/partials/content.html', controller: 'PhotosController'
            },
            'footer': {
                templateUrl: 'templates/partials/footer.html'
            }
        }
    })
    .state('videos', {
        url: '/videos',
        views: {
            'header': {
                templateUrl: 'templates/partials/header.html'
            },
            'content': {
                templateUrl: 'templates/partials/content.html', controller: 'VideosController'
            },
            'footer': {
                templateUrl: 'templates/partials/footer.html'
            }
        }
    })
    .state('arts', {
        url: '/arts',
        views: {
            'header': {
                templateUrl: 'templates/partials/header.html'
            },
            'content': {
                templateUrl: 'templates/partials/content.html', controller: 'ArtsController'
            },
            'footer': {
                templateUrl: 'templates/partials/footer.html'
            }
        }
    })
    .state('creations', {
        url: '/creations',
        views: {
            'header': {
                templateUrl: 'templates/partials/header.html'
            },
            'content': {
                templateUrl: 'templates/partials/content.html', controller: 'CreationsController'
            },
            'footer': {
                templateUrl: 'templates/partials/footer.html'
            }
        }
    })
    .state('popular', {
        url: '/popular',
        views: {
            'header': {
                templateUrl: 'templates/partials/header.html'
            },
            'content': {
                templateUrl: 'templates/partials/content.html', controller: 'PopularController'
            },
            'footer': {
                templateUrl: 'templates/partials/footer.html'
            }
        }
    });
});

/**************************
*       CONTROLLERS
**************************/

//Controls the Main blog posts page - content.html
app.controller('MainController', function ($scope, $http) {
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
app.controller('TalesController', function ($scope) {
    'use strict';
    $scope.message = "Pasakojimai";
});

app.controller('PhotosController', function ($scope) {
    'use strict';
    $scope.message = "Nuotraukos";
    $scope.posts = $scope.withImage;
});

app.controller('VideosController', function ($scope) {
    'use strict';
    $scope.message = "Video";
    $scope.posts = $scope.withImage;
});

app.controller('ArtsController', function ($scope) {
    'use strict';
    $scope.message = "Piešiniai";
});

app.controller('CreationsController', function ($scope) {
    'use strict';
    $scope.message = "Darbeliai";
});

app.controller('PopularController', function ($scope) {
    'use strict';
    $scope.message = "Populiariausi";
});

//  MODAL controller
app.controller('NavBarController', function ($scope) { //http://stackoverflow.com/questions/14741988/twitter-boostrap-navbar-with-angular-js-collapse-not-functioning
    'use strict';
    $scope.isCollapsed = true;
});

app.controller('LoginController', function ($scope, $modal, $log) { //from http://angular-ui.github.io/bootstrap/
    'use strict';
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (templateUrl) {

        var modalInstance = $modal.open({
            templateUrl: templateUrl,
            controller: 'ModalInstanceController',
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

app.controller('ModalInstanceController', function ($scope, $modalInstance, items) {

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
 
// Capitalize first letter
app.filter('capitalize', function () {
    'use strict';
    return function (input, scope) {
        if (input !== null) {
            input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    };
});
