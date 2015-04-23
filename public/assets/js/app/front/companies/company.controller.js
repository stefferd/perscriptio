(function() {
    'use strict';

    angular
        .module('perscriptio.front')
        .controller('CompanyController', CompanyController);

    CompanyController.$inject = ['dataservice'];

    function CompanyController(dataservice) {
        var vm = this;
        vm.companies = [];
        vm.get = getCompanies;

        activate();

        function activate() {
            return vm.get().then(function() {
                console.info('Activated Company View');
            });
        }

        function getCompanies() {
            return dataservice.get('company')
                .then(function(data) {
                    $scope.companies = data;
                    return $scope.companies;
                });
        }
    }

})();


