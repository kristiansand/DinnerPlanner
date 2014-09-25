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
    $scope.map = {
        center: {
            latitude: 58.147406,
            longitude: 7.996714
        },
        zoom: 15
    };
  }]);