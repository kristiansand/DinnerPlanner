'use strict';

/**
 * @ngdoc overview
 * @name angularjsApp
 * @description
 * # angularjsApp
 *
 * Main module of the application.
 */
angular
  	.module('angularjsApp', [
	    'mm.foundation',
	    'ngRoute',
	    'slick'
	])
	.run(function($rootScope) {
	        $rootScope.$on('$viewContentLoaded', function () {
        	$(function() {
                FastClick.attach(document.body);
            });
	        $(document).foundation();
				
			$(".previous").click(function(e){
				e.preventDefault();
				return false;
			});	
			
    	});
	});