/**
 * Created by stefvandenberg on 09/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {

        return {
            getCompanies: getCompanies,
            getUsers: getUsers
        };

        function getCompanies() {
            return $http.get('http://localhost:8888/Development/perscriptio/public/api/v1/company')
                .then(getComplete)
                .catch(getFailed);
        }

        function getUsers() {
            return $http.get('http://localhost:8888/Development/perscriptio/public/api/v1/company')
                .then(getComplete)
                .catch(getFailed);
        }

        function getComplete(response) {
            return response.data;
        }

        function getFailed(error) {
            logger.error('XHR Failed for:' + error.data);
        }
    }
})();
