(function() {
    'use strict';

    angular
        .module('perscriptio')
        .controller('CompanyController', CompanyController);

    CompanyController.$inject = ['$scope', 'dataservice'];

    function CompanyController($scope, dataservice) {
        var vm = this;
        vm.companies = [];

        activate();

        function activate() {
            return getCompanies().then(function() {
                console.info('Activated Company View');
            });
        }

        function getCompanies() {
            return dataservice.getCompanies()
                .then(function(data) {
                    vm.companies = data;
                    return vm.companies;
                });
        }
    }

})();


