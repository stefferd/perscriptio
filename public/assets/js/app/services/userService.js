/**
 * Created by stefvandenberg on 09/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio')
        .factory('UserDataservice', UserDataservice);

    UserDataservice.$inject('$resource');

    function UserDataservice($resource) {

        var service = {
            get: get
        };
        return service;

        ////////////

        function get() {
            return $resource('http://localhost:8888/Development/perscriptio/public/api/v1/user', {}, {
                query: { method:'GET', isArray: true }
            });
        }

    }
})();
