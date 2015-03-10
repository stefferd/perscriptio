/**
 * Created by stefvandenberg on 09/03/15.
 */

perscriptioServices.factory('CompanyService', ['$resource',
    function($resource){
        return $resource('http://localhost:8888/Development/perscriptio/public/api/v1/company', {}, {
            query: { method:'GET', isArray: true }
        });
    }
]);