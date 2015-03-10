/**
 * Created by stefvandenberg on 09/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio')
        .factory('CompanyDataservice', CompanyDataservice);

    CompanyDataservice.$inject = ['$http'];

    function CompanyDataservice($http) {

        return {
            getCompanies: getCompanies
        };

        function getCompanies() {
            return $http.get('http://localhost:8888/Development/perscriptio/public/api/v1/company')
                .then(getCompaniesComplete)
                .catch(getCompaniesFailed);

            function getCompaniesComplete(response) {
                return response.data;
            }

            function getCompaniesFailed(error) {
                logger.error('XHR Failed for getCompanies.' + error.data);
            }
        }
    }
})();
