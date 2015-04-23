/**
 * Created by stefvandenberg on 09/03/15.
 */
(function() {
    'use strict';

    angular
        .module('perscriptio.front')
        .controller('UserController', UserController);

    UserController.$inject = ['dataservice'];

    function UserController(dataservice) {
        var vm = this;
        vm.users = [];
        vm.getUsers = getUsers;

        activate();

        function activate() {
            return vm.getUsers().then(function() {
                console.info('Activated User View');
            });
        }

        function getUsers() {
            return dataservice.get('user')
                .then(function(data) {
                    vm.users = data;
                    return vm.users;
                });
        }
    }

})();