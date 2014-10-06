'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:RecipeListCtrl
 * @description
 * # RecipeListCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('RecipeListCtrl', function ($scope, $cookies, $cookieStore, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];
      // Strings
      $scope.recipeListStr = "Recipe list";

  });