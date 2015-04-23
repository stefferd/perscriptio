/**
 * Created by stefvandenberg on 10/03/15.
 */

(function() {
    'use strict';

    angular
        .module('perscriptio')
        .config(config)
        .constant('AUTH_EVENTS', {
            loginSuccess: 'auth-login-success',
            loginFailed: 'auth-login-failed',
            logoutSuccess: 'auth-logout-success',
            notAuthorized: 'auth-not-authorized'
        })
        .constant('USER_ROLES', {
            all: '*',
            admin: 'admin',
            guest: 'guest'
        })
        .run(checkAuthentication);

    function config($routeProvider) {

        $routeProvider.
            otherwise({
                redirectTo: '/'
            });
    }

    checkAuthentication.$inject = ['$rootScope', 'AUTH_EVENTS', 'Session'];

    function checkAuthentication($rootScope, AUTH_EVENTS, Session) {
        $rootScope.$on('routeChangeStart', function(event, next) {
           var authorizedRoles = next.data.authorizedRoles;
        });
    }
})();

