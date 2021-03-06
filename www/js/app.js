/* 
* Angular application module, route configuration and viewload scripting.
*
* @version: 25.09.14  
* @author Martin Othamar <martin@othamar.net>
*/

angular
  .module('app', [
    'ui.router',
    'mm.foundation',
    'mm.foundation.offcanvas'
  ])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'homeCtrl',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'aboutCtrl'
      })
  }])
  .run(function($rootScope) {
        $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
    });
  })