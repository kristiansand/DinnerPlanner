'use strict';

/**
 * @ngdoc overview
 * @name DinnerPlanner
 * @description
 * # DinnerPlanner
 *
 * Main module of the application.
 */
var app = angular.module('DinnerPlanner', [
        'mm.foundation',
        'ngCookies',
        'ngDialog'
    ]);

app.run(function($rootScope, $sce) {
            parseInitialize();
            $rootScope.$on('$viewContentLoaded', function () {
            $(function() {
                FastClick.attach(document.body);
            });
            $(document).foundation();
        });
        $rootScope.title = "DinnerPlanner";
    
        $rootScope.selectStoreBranding = function(){
            var storeCookie = localStorage.getItem("store");
            // Rema 1000
            if(storeCookie === "Dvjkwy8fec"){
                $rootScope.title += " Rema 1000";
                //document.body.style.background = '#004a93';
            }
            // Kiwi
            else if(storeCookie === "phlvMiXLfG"){
                $rootScope.title += " Kiwi";
                //document.body.style.background = '#84c115';
            }
            else{
                console.log("error: " + storeCookie);   
            }
        }
        
        if (localStorage.getItem('recipeList') != null){
            $rootScope.recipeList = localStorage.getItem('recipeList');
            $rootScope.recipeListSafe = $sce.trustAsHtml($rootScope.recipeList);
        }
        else{
            $rootScope.recipeList = "";   
        }
    
        $rootScope.addToList = function (recipe, ingredients){
            alert('"' + recipe + '" added to list');
            $rootScope.recipeList += ("<h4>" + recipe + "</h4>" + ingredients + "<br/>");
            localStorage.setItem('recipeList', $rootScope.recipeList);
        }
        
        $rootScope.emptyList = function (){
            localStorage.removeItem("recipeList");
            $rootScope.recipeList = [];
            alert("List is now empty");
        }
        
        $rootScope.selectStoreBranding();
    
        $rootScope.logOut = function (){
            localStorage.removeItem("store");
            location.replace("index.html");
        }
        
    });

    function parseInitialize(){
        Parse.initialize("KJ7VlLWVQDlpbksXpY4cCgJRWq0jzl8HlXodhRJm", "oOTlG5iSxkBTzIraN6OJuFdPGYhOvcrKM2wVrdhF");   
}