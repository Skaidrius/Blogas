/**********************
 * Blog site
 * @author Skaidrius <skaidrius@gmail.com>
 **********************/

/***********************
 * Main AngularJS Web Application
 * 
 *  FILTERS
 *   
 ***********************/
var app = angular.module('webApp');



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