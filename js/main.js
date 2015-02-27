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
                'content':  {templateUrl: 'templates/partials/content.html', controller: 'AuthorsController'       },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    })
    .state('age', {
        url: '/age/:id',
            views: {
                'header':   {templateUrl: 'templates/partials/header.html'                                        },
                'content':  {templateUrl: 'templates/partials/content.html', controller: 'AgesController'             },
                'footer':   {templateUrl: 'templates/partials/footer.html'                                        }
            }
    });
});

