/**
 * Created by stefvandenberg on 09/03/15.
 */
(function() {
    'use strict';

    angular
        .module('perscriptio')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', 'user'];

    function UserController($scope, user) {
        var vm = this;
        vm.users = [];

        activate();

        function activate() {
            return getUsers().then(function() {
                console.info('Activated User View');
            });
        }

        function getUsers() {
            return user.getUsers()
                .then(function(data) {
                    vm.users = data;
                    return vm.users;
                });
        }
    }

})();