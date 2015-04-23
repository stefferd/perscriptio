(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('psSidebar', psSidebar);

    /* @ngInject */
    function psSidebar () {
        // Opens and closes the sidebar menu.
        // Usage:
        //  <div ht-sidebar">
        //  <div ht-sidebar whenDoneAnimating="vm.sidebarReady()">
        // Creates:
        //  <div ht-sidebar class="sidebar">
        var directive = {
            bindToController: true,
            link: link,
            restrict: 'EA',
            scope: {
                whenDoneAnimating: '&?'
            }
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }
})();
