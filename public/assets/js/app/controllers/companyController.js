(function() {
    'use strict';

    angular
        .module('perscriptio')
        .controller('Company', Company);

    Company.$inject = ['$scope', 'CompanyService'];

    function Company($scope, CompanyService) {
        var vm = this;
        this.companies = CompanyService.query();
    }

})();


