'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:StoreLoginCtrl
 * @description
 * # StoreLoginCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('StoreLoginCtrl', function ($scope, $cookies, $cookieStore) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];
      // Strings
      $scope.loginStr = "Log in";
      $scope.usernameStr = "Username";
      $scope.passwordStr = "Password";
        
    console.log($cookieStore.get("test"));
      
      $scope.logIn = function(){
          var username = document.getElementById("username").value;
          var password = document.getElementById("password").value;
            if(username.length > 0 && password.length > 0){
                Parse.User.logIn(username, password, {
                  success: function(user) {
                    $cookieStore.put("test", user.get("store"));
                  },
                  error: function(user, error) {
                    alert("Du er ikke logget inn!");
                  }
                });
            }
            else{
                //Username and/or password not input   
            }
}
  });