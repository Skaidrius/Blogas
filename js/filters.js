/**********************
 * Blog site
 * @author Skaidrius <skaidrius@gmail.com>
 **********************/

/***********************
 * Main AngularJS Web Application
 * 
 *  FILTERS - CAPITALIZE
 *   
 ***********************/
//IIFE

(function (){
    
    // Capitalize first letter
function capitalize() {
    'use strict';
    return function (input, scope) {
        if (input !== null) {
            input = input.toLowerCase();
            return input.substring(0, 1).toUpperCase() + input.substring(1);
        }
    };
}

angular.module('webApp')
    .filter('capitalize', capitalize);

})();

//need to make universal filter like here https://stackoverflow.com/questions/14882370/filter-list-of-items-when-clicking-category-link/14883002#14883002