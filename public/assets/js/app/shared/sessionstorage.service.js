/**
 * Created by stefvandenberg on 09/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio.shared')
        .factory('sessionstorage', sessionstorage);

    sessionstorage.$inject = ['$window'];

    function sessionstorage($window) {
        var vm = this;

        return {
            get: getItem,
            set: setItem,
            remove: removeItem
        };

        function getItem(key) {
            return $window.sessionStorage.getItem(key);
        }

        function setItem(key, value) {
            return $window.sessionStorage.setItem(key, value);
        }

        function removeItem(key) {
            return $window.sessionStorage.removeItem(key);
        }
    }
})();
