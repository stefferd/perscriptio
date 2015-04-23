/**
 * Created by stefvandenberg on 09/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio.shared')
        .directive('dexNavigation', dexNavigation);

    function dexNavigation() {

        var directive = {
            restrict: 'EA',
            templateUrl: 'assets/js/app/shared/navigation/navigation.html',
            controller: NavigationController,
            controllerAs: 'vm',
            bindToController: true

        };
        return directive;
    }

    NavigationController.$inject = ['$location', 'authentication'];

    function NavigationController($location, authentication) {
        var vm = this;
        vm.message = 'Message van link';
        vm.authenticated = authentication.isAuthenticated();
        vm.logout = logout;

        function logout() {
            authentication.logout();
            $location.path('/');
        }
    }
})();