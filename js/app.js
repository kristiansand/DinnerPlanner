angular
  .module('app', [
    'ui.router',
    'google-maps'
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
  });