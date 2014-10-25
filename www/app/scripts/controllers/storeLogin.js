'use strict';

/**
 * @ngdoc function
 * @name angularjsApp.controller:StoreLoginCtrl
 * @description
 * # StoreLoginCtrl
 * Controller of the angularjsApp
 */
angular.module('angularjsApp')
  .controller('StoreLoginCtrl', function ($scope, $cookies, $cookieStore, $location, ngDialog) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
    ];
    // Strings
    $scope.loginStr = "Log in";
    $scope.usernameStr = "Username";
    $scope.passwordStr = "Password";

    var openDialog = function(templateId){
        ngDialog.open({ 
            template: templateId,
            scope: $scope 
        });
    };
      
    $scope.logIn = function(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if(username.length > 0 && password.length > 0){
            Parse.User.logIn(username, password, {
                success: function(user) {
                    if(user.get("store").id != null) {
                        $cookieStore.put("store", user.get("store").id);
                        $location.path("/home");                        
                    } else {
                        $scope.error = "Du er ikke logget inn! Kunne ikke finne butikk registrert på ditt bruker.";
                        openDialog('dialogs/errorDialog.html');
                    }
                },
                error: function(user, error) {
                    $scope.error = "Du er ikke logget inn! Det må være noe feil med brukernavn og passord.";
                    openDialog('dialogs/errorDialog.html');
                }
            });
        }
        else{
            //Username and/or password not input 
            $scope.error = "Brukernavn og passord må fylles inn";  
    		openDialog('dialogs/errorDialog.html');
        }
    };
});