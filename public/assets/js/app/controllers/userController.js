/**
 * Created by stefvandenberg on 09/03/15.
 */
perscriptio.controller('UserController', ['$scope', 'UserService', function($scope, UserService) {
    $scope.users = UserService.query();
}]);