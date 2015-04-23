/**
 * Created by stefvandenberg on 10/03/15.
 */

angular
    .module('perscriptio.front')
    .config(config);

function config($routeProvider) {
    $routeProvider.
        when('/user', {
            templateUrl: 'assets/js/app/front/users/user.html',
            controller: 'UserController',
            controllerAs: 'vm'
        }).
        when('/company', {
            templateUrl: 'assets/js/app/front/companies/company.html',
            controller: 'CompanyController',
            controllerAs: 'vm'
        }).
        when('/projects', {
            templateUrl: 'assets/js/app/front/projects/project.html',
            controller: 'ProjectController'
        }).
        when('/projects/add/:company', {
            templateUrl: 'assets/js/app/front/projects/add.html',
            controller: 'ProjectController'
        }).
        when('/dashboard', {
            templateUrl: 'assets/js/app/front/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo: '/'
        });
}