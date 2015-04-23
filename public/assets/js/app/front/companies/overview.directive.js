(function() {
    'use strict';

    angular.module('perscriptio.front')
        .directive('companyList', list);

    function list() {
        return {
            restrict: 'EAC',
            replace: false,
            template: getTemplate,
            link: function(scope, elem, attrs) {
                scope.visible = true;
            }
        }
    }

    function getTemplate() {
        return '<tr data-ng-repeat="company in companies"> '
        + '    <td>{{company.id}}</td>'
        + '    <td>{{company.name}}</td>'
        + '    <td>{{company.registration}}</td>'
        + '    <td>{{company.tax}}</td>'
        + '    <td><a href="/company/detail/{{company.id}}" title="Company details">Bekijken</a></td>'
        + '    <td><a href="/company/edit/{{company.id}}" title="Company details">Bewerken</a></td>'
        + '    <td><a href="/company/delete/{{company.id}}" title="Company details">Verwijderen</a></td>'
        + '</tr>';
    }

})();
