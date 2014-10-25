'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('ModalCtrl', function ($scope, $modal, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: ModalInstanceCtrl,
            resolve: {
            items: function () {
                    return $scope.items;
                }
            }
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };
});