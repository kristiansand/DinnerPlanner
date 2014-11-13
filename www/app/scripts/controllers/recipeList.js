'use strict';

/**
 * @ngdoc function
 * @name DinnerPlanner.controller:RecipeListCtrl
 * @description
 * # RecipeListCtrl
 * Controller of the DinnerPlanner
 */
angular.module('DinnerPlanner')
  	.controller('RecipeListCtrl', function ($scope, $cookies, $cookieStore, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];
  	// Strings
  	$scope.recipeListStr = "Recipe list";
        
        
     $scope.isLoggedIn = function(){
        return localStorage.getItem("store")!= null;
    }

    if(!$scope.isLoggedIn()){
        location.replace("index.html");   
    } 

  });