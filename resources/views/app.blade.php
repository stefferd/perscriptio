<!DOCTYPE html>
<html lang="nl" data-ng-app="app">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Perscriptio</title>
    <base href="/" />
</head>
<body>
    <div>
        <div ng-include="app/layout/shell.html"></div>
        <div id="splash-page" ng-show="showSplash">
            <div class="page-splash">
                <div class="page-splash-message">
                    Perscriptio
                </div>
                <div class="progress progress-striped active page-progress-bar">
                    <div class="bar"></div>
                </div>
            </div>
        </div>
    </div>
    <!-- Resources -->
    <script src="{{ URL::asset('assets/lib/angular/angular.js') }}"></script>
    <script src="{{ URL::asset('assets/lib/angular-animate/angular-animate.js') }}"></script>
    <script src="{{ URL::asset('assets/lib/angular-aria/angular-aria.js') }}"></script>
    <script src="{{ URL::asset('assets/lib/angular-material/angular-material.js') }}"></script>
    <script src="{{ URL::asset('assets/lib/angular-sanitize/angular-sanitize.js') }}"></script>
    <script src="{{ URL::asset('assets/lib/angular-ui-router/release/angular-ui-router.js') }}"></script>
    <script src="{{ URL::asset('assets/lib/moment/moment.js') }}"></script>
    <!-- Bootstrap off the app -->
    <script src="{{ URL::asset('assets/app/app.module.js') }}"></script>
    <!-- app.core -->
    <script src="{{ URL::asset('assets/app/core/core.module.js') }}"></script>
    <script src="{{ URL::asset('assets/app/core/config.js') }}"></script>
    <script src="{{ URL::asset('assets/app/core/constants.js') }}"></script>
    <script src="{{ URL::asset('assets/app/core/core.route.js') }}"></script>
    <script src="{{ URL::asset('assets/app/core/dataservice.js') }}"></script>
    <!-- app.blocks -->
    <script src="{{ URL::asset('assets/app/blocks/exception/exception.module.js') }}"></script>
    <script src="{{ URL::asset('assets/app/blocks/exception/exception-handler.provider.js') }}"></script>
    <script src="{{ URL::asset('assets/app/blocks/exception/exception.js') }}"></script>
    <script src="{{ URL::asset('assets/app/blocks/logger/logger.module.js') }}"></script>
    <script src="{{ URL::asset('assets/app/blocks/logger/logger.js') }}"></script>
    <script src="{{ URL::asset('assets/app/blocks/router/router.module.js') }}"></script>
    <script src="{{ URL::asset('assets/app/blocks/router/router-helper.provider.js') }}"></script>
    <!-- app.dashboard -->
    <script src="{{ URL::asset('assets/app/dashboard/dashboard.module.js') }}"></script>
    <script src="{{ URL::asset('assets/app/dashboard/dashboard.route.js') }}"></script>
    <script src="{{ URL::asset('assets/app/dashboard/dashboard.controller.js') }}"></script>
    <!-- app.layout -->
    <script src="{{ URL::asset('assets/app/layout/layout.module.js') }}"></script>
    <script src="{{ URL::asset('assets/app/layout/ps-sidebar.directive.js') }}"></script>
    <script src="{{ URL::asset('assets/app/layout/shell.controller.js') }}"></script>
    <script src="{{ URL::asset('assets/app/layout/sidebar.controller.js') }}"></script>
    <!-- app.widgets -->
    <script src="{{ URL::asset('assets/app/widgets/widgets.module.js') }}"></script>
    <script src="{{ URL::asset('assets/app/widgets/ps-img-person.directive.js') }}"></script>
    <script src="{{ URL::asset('assets/app/widgets/ps-widget-header.directive.js') }}"></script>
</body>
</html>
