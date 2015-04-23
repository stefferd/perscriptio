/**
 * Created by stefvandenberg on 09/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio.shared')
        .factory('localstorage', localstorage);

    localstorage.$inject = ['$window'];

    function localstorage($window) {
        var vm = this;

        return {
            get: getItem,
            set: setItem,
            remove: removeItem
        };

        function getItem(key) {
            return $window.localStorage.getItem(key);
        }

        function setItem(key, value) {
            return $window.localStorage.setItem(key, value);
        }

        function removeItem(key) {
            return $window.localStorage.removeItem(key);
        }
    }
})();
