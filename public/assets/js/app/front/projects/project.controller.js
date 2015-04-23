/**
 * Created by stefvandenberg on 09/03/15.
 */
(function() {
    'use strict';

    angular
        .module('perscriptio.front')
        .controller('ProjectController', ProjectController);

    ProjectController.$inject = ['dataservice'];

    function ProjectController(dataservice) {
        var vm = this;
        vm.projects = [];
        vm.message = '';
        vm.add = addProjects;
        vm.delete = deleteProject;
        vm.get = getProjects;

        activate();

        function addProjects(data) {
            return dataservice.add('projects', data)
                .then(function(response) {
                    vm.message = response.message;
                })
        }

        function deleteProject(project) {
            return dataservice.delete('projects', project.id)
                .then(function(response) {
                    vm.message = response.message;
                })
        }

        function activate() {
            return vm.get().then(function() {
                console.info('Activated User View');
            });
        }

        function getProjects() {
            return dataservice.get('projects')
                .then(function(data) {
                    vm.projects = data;
                });
        }
    }

})();