/**
 * Created by stefvandenberg on 10/03/15.
 */

perscriptio.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'assets/js/app/partials/user/list.html',
                controller: 'UserController'
            }).
            when('/company', {
                templateUrl: 'assets/js/app/partials/company/list.html',
                controller: 'CompanyController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);