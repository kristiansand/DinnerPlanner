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

app.run(function($rootScope) {
            parseInitialize();
	        $rootScope.$on('$viewContentLoaded', function () {
        	$(function() {
                FastClick.attach(document.body);
            });
	        $(document).foundation();
    	});
        
        $rootScope.isLoggedIn = function(){
            return false;
        }
        
	});

function parseInitialize(){
    Parse.initialize("KJ7VlLWVQDlpbksXpY4cCgJRWq0jzl8HlXodhRJm", "oOTlG5iSxkBTzIraN6OJuFdPGYhOvcrKM2wVrdhF");   
}