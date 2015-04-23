/**
 * Created by stefvandenberg on 09/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio.shared')
        .service('Session', Session);


    function Session() {
        var vm = this;

        return {
            create: create,
            destroy: destroy,
            vm: vm
        };

        function create(username, role) {
            vm.authenticated = true;
            vm.username = username;
            vm.role = role;
        }

        function destroy() {
            vm.authenticated = null;
            vm.username = null;
            vm.role = null;
        }
    }
})();
