(function() {
    'use strict';

    angular
        .module('perscriptio.shared')
        .factory('authentication', authentication);

    authentication.$inject = ['dataservice', 'Session'];

    function authentication(dataservice, Session) {
        return {
            isAuthenticated: isAuthenticated,
            isAuthorized: isAuthorized,
            login : login,
            logout: logout
        };

        function isAuthorized(roles) {
            if (!angular.isArray(roles)) {
                roles = [roles];
            }
            return (isAuthenticated() && roles.indexOf(Session.role) !== -1);
        }

        function isAuthenticated() {
            return !!Session.authenticated;
        }

        function login(username, password) {
            var data = {
                email: username,
                password: password
            };
            return dataservice.post('login', data)
                .then(function(response) {
                    var user = response.user;
                    Session.create(user.name, user.role);
                    return response
                })
                .catch(function(error) {
                    Session.destroy();
                    return error;
                });
        }

        function logout() {
            return dataservice.get('logout')
                .then(succeeded)
                .catch(failed);
        }

        function succeeded(response) {
            Session.destroy();
            return response;
        }

        function failed(error) {
            Session.destroy();
            return error;
        }
    }


})();