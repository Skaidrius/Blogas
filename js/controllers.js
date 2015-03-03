/**********************
 * Blog site
 * @author Skaidrius <skaidrius@gmail.com>
 **********************/

/***********************
 * Main AngularJS Web Application
 * 
 * CONTROLLERS 
 * 
 ***********************/
var app = angular.module('webApp');

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
    $scope.message = "Filmukai";
});

app.controller('ArtsController', function ($scope) {
    'use strict';
    $scope.message = "Kūriniai";
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
    $scope.message = '';    
    $scope.post = $scope.posts[$stateParams.id-1];
    // have to look here: http://plnkr.co/edit/gmtcE2?p=preview
    
});

app.controller('AuthorsController', function ($scope, $stateParams) {
    'use strict';
    //test
    $scope.message = "Autorius "+$stateParams.id;
    $scope.filters.author = $stateParams.id;
});

app.controller('AgesController', function ($scope, $stateParams) {
    'use strict';
    //test
    $scope.message = $stateParams.id+"mečių kūryba";
    $scope.filters.age = $stateParams.id;
});

app.controller('CategoriesController', function ($scope, $stateParams) {
    'use strict';
    //test
    $scope.message = "Kategorija: "+$stateParams.id;
    $scope.filters.categories = $stateParams.id;
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
        'Filmukai',
        'Kūriniai',
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