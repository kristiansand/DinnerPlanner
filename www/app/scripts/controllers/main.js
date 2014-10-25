'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
    .controller('MainCtrl', function ($scope, $cookies, $cookieStore, ngDialog) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var openDialog = function(templateId){
        ngDialog.open({ 
            template: templateId,
            scope: $scope 
        });
    };
    $scope.errors = [];


    //Select boxes
    $scope.foodCategories = [
        {id: 1, name: 'Meat'},
        {id: 2, name: 'Fish'},
        {id: 3, name: 'Veg'}
    ];

    $scope.timeSpent = [
        {id: 1, name: 'Quick'},
        {id: 2, name: 'Medium'},
        {id: 3, name: 'Slow'}
    ];

    $scope.difficulty = [
        {id: 1, name: 'Easy'},
        {id: 2, name: 'Medium'},
        {id: 3, name: 'Difficult'}
    ];

    $scope.price = [
        {id: 1, name: 'Cheap'},
        {id: 2, name: 'Medium'},
        {id: 3, name: 'Expensive'}
    ];
      
    $scope.recipes = [];
      
      
    $scope.getRecipes = function(){
        var recipes = [];
        //selectboxes
        //alert($scope.foodCategorySelected + " " + $scope.timeSpentSelected + " " + $scope.difficultySelected + " " + $scope.priceSelected);
          
        var Recipe = Parse.Object.extend("Recipe");
        var recipesQuery = new Parse.Query(Recipe);
        
        // henter oppskrifter unike for butikken
        if (typeof $cookieStore.get("store") != 'undefined'){
            var otherStore = "";
            // Kiwi
            if($cookieStore.get("store") === "phlvMiXLfG"){
                   otherStore = "Dvjkwy8fec"; // Rema 1000
            }
            else if($cookieStore.get("store") === "Dvjkwy8fec"){
                otherStore = "phlvMiXLfG";
            }
            recipesQuery.notEqualTo("store", otherStore);  
        }
        
        if (typeof $scope.foodCategorySelected != 'undefined'){
            recipesQuery.equalTo("category", $scope.foodCategorySelected);
        }
        if (typeof $scope.timeSpentSelected != 'undefined'){
            recipesQuery.equalTo("timeSpent", $scope.timeSpentSelected);
        }
        if (typeof $scope.difficultySelected != 'undefined'){
            recipesQuery.equalTo("difficulty", $scope.difficultySelected);
        }
        if (typeof $scope.priceSelected != 'undefined'){
            recipesQuery.equalTo("price", $scope.priceSelected);
        }
        recipesQuery.find({
            success: function(results) {
                $scope.recipes.length = 0;
                // Do something with the returned Parse.Object values
                for (var i = 0; i < results.length; i++) { 
                    var object = results[i];
                    var objectArray = [object.get('name'), object.get('description'), object.get('image').url(), object.id];
                    $scope.recipes.push(objectArray);
                }
            },
            error: function(error) {
                $scope.errors.push("Error: " + error.code + " " + error.message);
                openDialog('dialogs/errorDialog.html');
            }
        });

    }
      
    // select boxes functions
    $scope.foodCategorySelect = function(selected) {
        $scope.foodCategorySelected = selected.id;
        $scope.getRecipes();
    }
    $scope.timeSpentSelect = function(selected) {
        $scope.timeSpentSelected = selected.id;
        $scope.getRecipes();
    }
    $scope.difficultySelect = function(selected) {
        $scope.difficultySelected = selected.id;
        $scope.getRecipes();
    }
    $scope.priceSelect = function(selected) {
        $scope.priceSelected = selected.id;
        $scope.getRecipes();
    }
      
      
    $scope.getRecipes();
      
});