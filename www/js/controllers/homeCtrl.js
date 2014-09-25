/* 
* Application controller for /home route
*
* @version: 25.09.14  
* @author Martin Othamar <martin@othamar.net>
*/

angular
  .module('app')
  .controller('homeCtrl', ['$scope', function($scope) {
    $scope.title = "Home";
  }]);