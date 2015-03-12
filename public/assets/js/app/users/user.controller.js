/**
 * Created by stefvandenberg on 09/03/15.
 */
(function() {
    'use strict';

    angular
        .module('perscriptio')
        .controller('UserController', UserController);

    UserController.$inject = ['$scope', 'dataservice'];

    function UserController($scope, dataservice) {
        var vm = this;
        vm.users = [];

        activate();

        function activate() {
            return getUsers().then(function() {
                console.info('Activated User View');
            });
        }

        function getUsers() {
            return dataservice.getUsers()
                .then(function(data) {
                    vm.users = data;
                    return vm.users;
                });
        }
    }

})();