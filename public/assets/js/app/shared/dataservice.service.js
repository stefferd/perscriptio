/**
 * Created by stefvandenberg on 09/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio.shared')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http'];

    function dataservice($http) {
        var vm = this;
        vm.serviceUri = 'http://localhost:8888/Development/perscriptio-git/public/api/v1/';

        return {
            post: postData,
            get: getData,
            delete: deleteData
        };

        function getData(method) {
            return $http.get(vm.serviceUri + method)
                .then(getComplete)
                .catch(getFailed);
        }

        function postData(method, data) {
            return $http.post(vm.serviceUri + method, data)
                .then(getComplete)
                .catch(getFailed);
        }

        function deleteData(method, data) {
            return $http.delete(vm.serviceUri + method + '/' + data)
                .then(getComplete)
                .catch(getFailed);
        }

        function getComplete(response) {
            return response.data;
        }

        function getFailed(error) {
            console.error('XHR Failed for:' + error.data);
        }
    }
})();
