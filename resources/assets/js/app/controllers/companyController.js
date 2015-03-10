/**
 * Created by stefvandenberg on 09/03/15.
 */
perscriptio.controller('CompanyController', ['$scope', 'CompanyService', function($scope, CompanyService) {
    $scope.companies = CompanyService.query();
}]);