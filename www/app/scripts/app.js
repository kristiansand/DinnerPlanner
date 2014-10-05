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
        'ngCookies'
	]);

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
        
        
        $rootScope.selectStoreBranding();
        
        $rootScope.isLoggedIn = function(){
            return true;
        }
        
	});

function parseInitialize(){
    Parse.initialize("KJ7VlLWVQDlpbksXpY4cCgJRWq0jzl8HlXodhRJm", "oOTlG5iSxkBTzIraN6OJuFdPGYhOvcrKM2wVrdhF");   
}