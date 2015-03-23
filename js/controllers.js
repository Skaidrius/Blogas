/**********************
 * Blog site
 * @author Skaidrius <skaidrius@gmail.com>
 **********************/


/**************************
*       CONTROLLERS
**************************/
// IIFE - could be separated to separate files

(function(){
    
    function MainController ($rootScope, $http) {
    'use strict';
//    retrieve individual posts from json
    $http.get('js/posts.json')
        .success(function(data, status, headers, config) {
            $rootScope.posts = data;
        })
        .error(function(data, status, headers, config) {
        // log error
        });
        
    $rootScope.message = "Visi įrašai";
    $rootScope.filters = { };
}

angular
    .module('webApp')
    .controller('MainController', MainController);

})();

//NewPost Controller
(function(){
    
function NewPostController($scope, $modal, $log) { //from http://angular-ui.github.io/bootstrap/
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
}

angular
    .module('webApp')
    .controller('NewPostController', NewPostController);

})();

//  NavBarCollapse status controller
//http://stackoverflow.com/questions/14741988/twitter-boostrap-navbar-with-angular-js-collapse-not-functioning

(function(){

function NavBarController($scope) { 
    'use strict';
    $scope.isCollapsed = true;
}

// TypeDropDown controller for newpost.html
(function(){
    
function TypeDropdownCtrl($scope) {
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
}

angular
    .module('webApp')
    .controller('TypeDropdownCtrl', TypeDropdownCtrl);

})();

// end of new post controller

angular
    .module('webApp')
    .controller('NavBarController', NavBarController);

})();

//Login controller
(function(){

function LoginController ($scope, $modal, $log) { //from http://angular-ui.github.io/bootstrap/
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
}

angular
    .module('webApp')
    .controller('LoginController', LoginController);

})();

//Modal Instance controller
(function(){
    
function ModalInstanceController($scope, $modalInstance, items) {

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
}

angular
    .module('webApp')
    .controller('ModalInstanceController', ModalInstanceController);

})();


