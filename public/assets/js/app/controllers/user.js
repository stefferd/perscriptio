/**
 * Created by stefvandenberg on 09/03/15.
 */
(function() {
    'use strict';

    angular
        .module('perscriptio')
        .controller('User', User);

    User.$inject = ['$scope', 'UserDataservice'];

    function User($scope, UserDataservice) {
        var vm = this;
        vm.users = [];

        activate();

        function activate() {
            return getUsers().then(function() {
                console.info('Activated User View');
            });
        }

        function getUsers() {
            return UserDataservice.getUsers()
                .then(function(data) {
                    vm.users = data;
                    return vm.users;
                });
        }
    }

})();