(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        var otherwise = '/login';
        routerHelper.configureStates(getStates(), otherwise);
    }

    function getStates() {
        return [
            {
                state: '404',
                config: {
                    url: '/404',
                    templateUrl: 'assets/app/core/404.html',
                    title: '404'
                }
            },
            {
                state: 'login',
                config: {
                    url: '/login',
                    templateUrl: 'assets/app/login/login.html',
                    title: 'login'
                }
            }
        ];
    }
})();
