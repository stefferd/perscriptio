(function () {
    'use strict';

    angular
        .module('blocks.logger')
        .factory('logger', logger);

    logger.$inject = ['$log', 'toastr'];

    /* @ngInject */
    function logger($log, toastr) {
        var service = {
            showToasts: true,

            error: error,
            info: info,
            success: success,
            warning: warning,
            log: $log.log
        };

        return service;

        ////////////////

        function error() {
        }

        function info() {
        }

        function success() {
        }

        function warning() {
        }
    }
})();