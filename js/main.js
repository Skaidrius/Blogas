/**********************
 * Blog site
 * @author Skaidrius <skaidrius@gmail.com>
 **********************/

/***********************
 * Main AngularJS Web Application
 ***********************/
var app = angular.module('webApp', [
        'ui.router',
        'ui.bootstrap',
        'youtube-embed'
    ]);

/***********************
 *         Routes          CHANGED FROM ngRoute TO UI-ROUTER AND CONFIGURED LIKE HERE http://www.funnyant.com/angularjs-ui-router/
 **********************/
app.config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.otherwise('/home');

// HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
    .state('home', {
        url: '/home',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                       },
                'content':  {templateUrl: 'templates/partials/content.html',     controller: 'MainController'    },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                       }
            }
    })
    .state('tales', {
        url: '/tales',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                       },
                'content':  {templateUrl: 'templates/partials/content.html', controller: 'TalesController'       },
                'footer':   {templateUrl: 'templates/partials/footer.html'
                }
            }
    })
    .state('photos', {
        url: '/photos',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                        },
                'content':  {templateUrl: 'templates/partials/content.html', controller: 'PhotosController'       },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    })
    .state('videos', {
        url: '/videos',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                        },
                'content':  {templateUrl: 'templates/partials/content.html', controller: 'VideosController'       },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    })
    .state('arts', {
        url: '/arts',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                        },
                'content':  {templateUrl: 'templates/partials/content.html', controller: 'ArtsController'         },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    })
    .state('creations', {
        url: '/creations',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                        },
                'content':  {templateUrl: 'templates/partials/content.html', controller: 'CreationsController'    },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    })
    .state('popular', {
        url: '/popular',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                        },
                'content':  {templateUrl: 'templates/partials/content.html', controller: 'PopularController'      },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    })
    .state('post', {
        url: '/post/:id',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                        },
                'content':  {templateUrl: 'templates/post-template.html', controller: 'PostsController'           },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    })
    .state('author', {
        url: '/author/:id',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                        },
                'content':  {templateUrl: 'templates/author-template.html', controller: 'AuthorsController'       },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    })
    .state('age', {
        url: '/age/:id',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                        },
                'content':  {templateUrl: 'templates/age-template.html', controller: 'AgesController'             },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    });
});


/**************************
*       CONTROLLERS
**************************/

//Controls the Main blog posts page - content.html
app.controller('MainController', function ($rootScope, $http) {
    'use strict';
//    retrieve individual posts from json
    $http.get('js/posts.json')
        .then(function (res) {
            $rootScope.posts = res.data;
        });
        
    $rootScope.message = "Visi įrašai";
    $rootScope.filters = { };
});

// Navigation controllers
app.controller('TalesController', function ($scope) {
    'use strict';
    $scope.message = "Pasakojimai";
});

app.controller('PhotosController', function ($scope) {
    'use strict';
    $scope.message = "Nuotraukos";
});

app.controller('VideosController', function ($scope) {
    'use strict';
    $scope.message = "Video";
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

app.controller('PostsController', function ($scope, $stateParams) {
    'use strict';
    // test 
    // $scope.message = "Įrašas";
    $scope.post = $scope.posts[$stateParams.id-1];
    // have to look here: http://plnkr.co/edit/gmtcE2?p=preview
});

app.controller('AuthorsController', function ($scope, $stateParams) {
    'use strict';
    //test
    $scope.message = $stateParams.id;
    $scope.filters.author = $stateParams.id;
});

app.controller('AgesController', function ($scope, $stateParams) {
    'use strict';
    //test
    $scope.message = $stateParams.id;
    $scope.filters.age = $stateParams.id;
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

app.controller('NewPostController', function ($scope, $modal, $log) { //from http://angular-ui.github.io/bootstrap/
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

// TypeDropDown controller for newpost.html
app.controller('TypeDropdownCtrl', function ($scope) {
    $scope.types = [
        'Pasakojimai',
        'Nuotraukos',
        'Video',
        'Piešiniai',
        'Darbeliai'
    ];
    $scope.authors = [
        'Jonas',
        'Petras',
        'Rimas',
        'Linas'
    ];
    
    $scope.selectedType = "Pasakojimai";
    $scope.selectedAuthor = "Jonas";
});
  

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


// app.filter('filtera', function () {
//     'use strict';
//     return function (items) {
//         var filtered = [];
//         for (var i = 0; i < items.length; i++) {
//             var item = items[i];
//             if (item.text!="") {
//               filtered.push(item);
//             }
//         }
//         return filtered;
//     };
// });

//need to make universal filter like here https://stackoverflow.com/questions/14882370/filter-list-of-items-when-clicking-category-link/14883002#14883002