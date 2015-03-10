(function() {
    'use strict';

    angular
        .module('perscriptio')
        .controller('Company', Company);

    Company.$inject = ['$scope', 'CompanyDataservice'];

    function Company($scope, CompanyDataservice) {
        var vm = this;
        vm.companies = [];

        activate();

        function activate() {
            return getCompanies().then(function() {
                console.info('Activated Company View');
            });
        }

        function getCompanies() {
            return CompanyDataservice.getCompanies()
                .then(function(data) {
                    vm.companies = data;
                    return vm.companies;
                });
        }
    }

})();


