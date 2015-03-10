/**
 * Created by stefvandenberg on 10/03/15.
 */

angular
    .module('perscriptio')
    .config(config);

function config($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'assets/js/app/partials/user/list.html',
            controller: 'User',
            controllerAs: 'vm'
        }).
        when('/company', {
            templateUrl: 'assets/js/app/partials/company/list.html',
            controller: 'Company',
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo: '/'
        });
}