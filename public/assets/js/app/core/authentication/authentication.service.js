(function() {
    'use strict';

    angular
        .module('perscriptio.core')
        .factory('authentication', authentication);

    authentication.$inject = ['dataservice'];

    function authentication(dataservice) {
        var vm = this;

        return {
            login : login
        };

        function login(username, password) {
            var data = {
                email: username,
                password: password
            };
            return dataservice.post('login', data)
                .then(succeeded)
                .catch(failed);
        }

        function succeeded(response) {
            console.log(response);
        }

        function failed(error) {
            console.log(error);
        }
    }


})();