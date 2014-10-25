'use strict';

/**
 * @ngdoc overview
 * @name angularjsApp
 * @description
 * # angularjsApp
 *
 * Main module of the application.
 */
var app = angular.module('angularjsApp', [
	    'mm.foundation',
	    'ngRoute',
	    'slick',
        'ngCookies',
        'ngDialog'
	]);

app.config(['$routeProvider', 
    function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/storeLogin.html',
            controller: 'StoreLoginCtrl'
        }).
        when('/home', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        }).
        otherwise({ redirectTo: '/' });    
}]);

app.run(function($rootScope, $cookies, $cookieStore) {
            parseInitialize();
	        $rootScope.$on('$viewContentLoaded', function () {
        	$(function() {
                FastClick.attach(document.body);
            });
	        $(document).foundation();
    	});
        $rootScope.title = "DinnerPlanner";
    
        $rootScope.selectStoreBranding = function(){
            var storeCookie = $cookieStore.get("store");
            // Rema 1000
            if(storeCookie === "Dvjkwy8fec"){
                $rootScope.title += " Rema 1000";
                document.body.style.background = '#004a93';
            }
            // Kiwi
            else if(storeCookie === "phlvMiXLfG"){
                $rootScope.title += " Kiwi";
                document.body.style.background = '#84c115';
            }
            else{
                console.log("error: " + storeCookie);   
            }
        }
        
        if (typeof $cookieStore.get('recipeList') != 'undefined'){
            $rootScope.recipeList = $cookieStore.get('recipeList');
        }
        else{
            $rootScope.recipeList = [];   
        }
    
        $rootScope.addToList = function (recipe){
            alert('"' + recipe + '" added to list');
            $rootScope.recipeList.push(recipe);
            $cookieStore.put('recipeList', $rootScope.recipeList);
        }
        
        $rootScope.emptyList = function (){
            $rootScope.recipeList = [];
            alert("List is now empty");
        }
        
        $rootScope.selectStoreBranding();
        
        $rootScope.isLoggedIn = function(){
            return true;
        }
        
	});

    function parseInitialize(){
        Parse.initialize("KJ7VlLWVQDlpbksXpY4cCgJRWq0jzl8HlXodhRJm", "oOTlG5iSxkBTzIraN6OJuFdPGYhOvcrKM2wVrdhF");   
}