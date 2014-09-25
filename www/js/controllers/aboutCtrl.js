/* 
* Application controller for /about route
*
* @version: 25.09.14  
* @author Martin Othamar <martin@othamar.net>
*/

angular
  .module('app')
  .controller('aboutCtrl', ['$scope', function($scope) {
    $scope.title = "About";
  }]);