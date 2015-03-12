/**
 * Created by stefvandenberg on 10/03/15.
 */

angular
    .module('perscriptio')
    .config(config);

function config($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'assets/js/app/users/user.html',
            controller: 'UserController',
            controllerAs: 'vm'
        }).
        when('/company', {
            templateUrl: 'assets/js/app/companies/company.html',
            controller: 'CompanyController',
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo: '/'
        });
}