(function() {
    'use strict';

    angular
        .module('perscriptio.core')
        .controller('StartController', StartController);

    StartController.$inject = ['$scope', 'authentication', '$location'];

    function StartController($scope, authentication, $location) {

        $scope.attempt = function() {
          console.log('username is ' + $scope.email);
          console.log('password is ' + $scope.password);
            authentication.login($scope.email, $scope.password).then(
                function(response) {
                    $location.path('/dashboard');
                }
            )
        };

        $scope.logout = function() {
            authentication.logout().then(
                function(response) {
                    console.log('Uitgelogd');
                }
            )
        }
    }

})();
