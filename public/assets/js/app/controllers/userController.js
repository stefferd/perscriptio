/**
 * Created by stefvandenberg on 09/03/15.
 */
(function() {
    'use strict';

    angular
        .module('perscriptio')
        .controller('User', User);

    Company.$inject = ['$scope', 'UserService'];

    function User($scope, UserService) {
        var vm = this;
        this.users = UserService.query();
    }

})();