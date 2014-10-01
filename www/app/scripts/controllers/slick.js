'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('SlickCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	$scope.pictures = [
		'oppskrift1.jpg',
		'oppskrift2.jpg',
		'oppskrift3.jpg',
		'oppskrift4.jpg',
		'oppskrift5.jpg',
		'oppskrift6.jpg',
		'oppskrift7.jpg',
		'oppskrift8.jpg',
		'oppskrift9.jpg',
		'oppskrift10.jpg',
		'oppskrift11.jpg',
		'oppskrift12.jpg',
		'oppskrift13.jpg',
		'oppskrift14.jpg',
		'oppskrift15.jpg'
	];
	
    $scope.breakpoints = [
	  	{
	    breakpoint: 768,
	    settings: {
	      slidesToShow: 2,
	      slidesToScroll: 2
	    }
	  	}, {
	    breakpoint: 480,
	    settings: {
	      slidesToShow: 1,
	      slidesToScroll: 1
	    }
	  }
	];				

  });
