/**
 * Created by stefvandenberg on 20/03/15.
 */

angular
    .module('perscriptio.core')
    .config(config);

function config($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'assets/js/app/core/start/start.html',
            controller: 'StartController',
            controllerAs: 'vm'
        }).
        otherwise({
            redirectTo: '/'
        });
}