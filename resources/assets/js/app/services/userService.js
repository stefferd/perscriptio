/**
 * Created by stefvandenberg on 09/03/15.
 */

perscriptioServices.factory('UserService', ['$resource',
    function($resource){
        return $resource('http://localhost:8888/Development/perscriptio/public/api/v1/user', {}, {
            query: { method:'GET', isArray: true }
        });
    }
]);