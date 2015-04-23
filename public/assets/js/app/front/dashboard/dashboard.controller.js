(function() {
    'use strict';

    angular
        .module('perscriptio.front')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$location','authentication', 'dataservice'];

    function DashboardController($location, authentication, dataservice) {
        var vm = this;
        vm.messages = 'Welkom op het dashboard';
        vm.companies = [];
        vm.company = null;
        vm.projects = [];
        vm.showProjects = false;
        vm.project = 0;
        vm.logout = logout;
        vm.getProjects = getProjects;
        vm.getAmount = calculateAmount;
        vm.save = saveEntry;

        function getProjects() {
            dataservice.get('projects/bycompany/' + vm.company.id).then(function(data) {
                vm.projects = data;
                vm.showProjects = true;
                return vm.projects;
            });
        }

        function saveEntry() {
            vm.entry = {
                company: vm.company.name,
                project: vm.project.title,
                amount: vm.amount,
                description: vm.description,
                company_id: vm.company.id
            };
            dataservice.post('hours', vm.entry).then(function(data) {
                $location.path('/dashboard');
            });
        }

        var startDate = new Date('2015-04-09 08:30:00');
        vm.start = startDate;
        var endDate = new Date('2015-04-09 18:30:00');
        vm.end = endDate;

        vm.getAmount();

        function calculateAmount() {
            vm.amount = (vm.end - vm.start) / 1000 / 60 / 60;
        }
        function logout() {
            authentication.logout();
            $location.path('/');
        }

        activate();

        function activate() {
            return dataservice.get('company')
                .then(function(data) {
                    vm.companies = data;
                    return vm.companies;
                });
        }
    }

})();
