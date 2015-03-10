(function() {
    'use strict';

    angular
        .module('perscriptio')
        .controller('CompanyController', Company);

    CompanyController.$inject = ['$scope', 'company'];

    function CompanyController($scope, company) {
        var vm = this;
        vm.companies = [];

        activate();

        function activate() {
            return getCompanies().then(function() {
                console.info('Activated Company View');
            });
        }

        function getCompanies() {
            return company.getCompanies()
                .then(function(data) {
                    vm.companies = data;
                    return vm.companies;
                });
        }
    }

})();


