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
 *         Routes          UI-ROUTER CONFIGURED LIKE HERE http://www.funnyant.com/angularjs-ui-router/
 **********************/
app.config(function($stateProvider, $urlRouterProvider) {
    'use strict';
    $urlRouterProvider.otherwise("/index");

// HOME STATES AND NESTED VIEWS ========================================
    $stateProvider
    .state('index', {
        url: '/index',
            views: {
                'header':   {   templateUrl: 'templates/partials/header.html',
                                controller: 'MainController'                    },
                'content':  {   templateUrl: 'templates/partials/content.html'  }
            }
    })
    .state('tales', {
        url: '/tales',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html',      
                                controller: function($scope){ $scope.message = 'Pasakojimai'; } 
                            },
                'content':  {templateUrl: 'templates/partials/content.html' }
            }
    })
    .state('photos', {
        url: '/photos',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html',        
                                controller: function($scope){ $scope.message = 'Nuotraukos'; }
                            },
                'content':  {templateUrl: 'templates/partials/content.html' }
            }
    })
    .state('videos', {
        url: '/videos',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html',        
                                controller: function($scope){ 
                                    $scope.message = 'Filmukai'; 
                                }
                            },
                'content':  {templateUrl: 'templates/partials/content.html'}
            }
    })
    .state('arts', {
        url: '/arts',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html',        
                                controller: function($scope){ 
                                    $scope.message = 'Kūriniai'; 
                                }
                            },
                'content':  {templateUrl: 'templates/partials/content.html'}
            }
    })
    .state('creations', {
        url: '/creations',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html',        
                                controller: function($scope){ 
                                    $scope.message = 'Darbeliai'; 
                                }
                            },
                'content':  {templateUrl: 'templates/partials/content.html'}
            }
    })
    .state('popular', {
        url: '/popular',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html',        
                                controller: function($scope){ 
                                    $scope.message = 'Populiariausi';
                                }
                            },
                'content':  {templateUrl: 'templates/partials/content.html'}
            }
    })
    .state('post', {
        url: '/post/:id',
            views: {
                'header':   {templateUrl: 'templates/partials/header-post.html' },
                'content':  {templateUrl: 'templates/post-template.html',        
                                controller: function($scope, $stateParams){ 
                                    $scope.post = $scope.posts[$stateParams.id-1];
                                }
                            }
            }
    })
    .state('author', {
        url: '/author/:id',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html',
                                controller: function ($scope, $stateParams) {
                                    $scope.message = "Autorius "+$stateParams.id;
                                    $scope.filters.author = $stateParams.id;
                                }
                            },
                'content':  {templateUrl: 'templates/partials/content.html'   }
            }
    })
    .state('age', {
        url: '/age/:id',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html' ,
                                controller: function ($scope, $stateParams) {
                                    $scope.message = $stateParams.id+"mečių kūryba";
                                    $scope.filters.age = $stateParams.id;
                                }
                            },
                'content':  {templateUrl: 'templates/partials/content.html'    }
            }
    })
    .state('category', {
        url: '/category/:id',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html' ,
                                controller: function ($scope, $stateParams) {
                                    $scope.message = "Kategorija: "+$stateParams.id;
                                    $scope.filters.categories = $stateParams.id;
                                }
                            },
                'content':  {templateUrl: 'templates/partials/content.html'}
            }
    });
});
