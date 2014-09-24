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