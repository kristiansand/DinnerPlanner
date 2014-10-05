'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
      
      $scope.recipes = [];
      
      //$scope.recipes = getRecipes();
      $scope.getRecipes = function(){
        var recipes = [];
        var Recipe = Parse.Object.extend("Recipe");
        var recipesQuery = new Parse.Query(Recipe);
        recipesQuery.notEqualTo("name", "dskfh");
        recipesQuery.find({
          success: function(results) {
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) { 
              var object = results[i];
                var objectArray = [object.get('name'), object.get('description'), object.get('image').url()];
              $scope.recipes.push(objectArray);
            }
          },
          error: function(error) {
            alert("Error: " + error.code + " " + error.message);
          }
        });

      }
      
      
      $scope.getRecipes();
      
  });