/**
 * Created by stefvandenberg on 09/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio')
        .factory('user', user);

    user.$inject = ['$http'];

    function user($http) {

        return {
            getUsers: getUsers
        };

        function getUsers() {
            return $http.get('http://localhost:8888/Development/perscriptio/public/api/v1/user')
                .then(getUsersComplete)
                .catch(getUsersFailed);

            function getUsersComplete(response) {
                return response.data;
            }

            function getUsersFailed(error) {
                logger.error('XHR Failed for getCompanies.' + error.data);
            }
        }

    }
})();
