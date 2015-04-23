<!DOCTYPE html>
<html lang="nl" data-ng-app="perscriptio">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Perscriptio</title>
	<link href="{{ URL::asset('assets/vendor/bootstrap/bootstrap.min.css') }}" rel="stylesheet" />
	<link href="{{ URL::asset('assets/css/app.css') }}" rel="stylesheet" />
</head>
<body>
	<dex-navigation></dex-navigation>
	<div class="container" data-ng-view></div>
	<!-- Scripts -->
	<script src="{{ URL::asset('assets/vendor/angular/angular.min.js') }}"></script>
	<script src="{{ URL::asset('assets/vendor/angular/angular-resource.min.js') }}"></script>
	<script src="{{ URL::asset('assets/vendor/angular/angular-route.min.js') }}"></script>
    <script src="{{ URL::asset('assets/vendor/angular-ui-bootstrap/timepicker/timepicker.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/app.module.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/app.config.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/core/core.module.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/core/core.config.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/core/start/start.controller.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/shared/shared.module.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/shared/authentication/authentication.service.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/shared/navigation/navigation.directive.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/shared/localstorage.service.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/shared/session.service.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/shared/dataservice.service.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/front/front.module.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/front/front.config.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/front/dashboard/dashboard.controller.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/front/users/user.controller.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/front/companies/company.controller.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/front/companies/overview.directive.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/front/projects/project.controller.js') }}"></script>
</body>
</html>
