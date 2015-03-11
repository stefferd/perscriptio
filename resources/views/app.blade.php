<!DOCTYPE html>
<html lang="nl" data-ng-app="perscriptio">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Perscriptio</title>
	<link href="{{ URL::asset('assets/css/app.css') }}" rel="stylesheet" />

	<!-- Fonts -->
	<link href='//fonts.googleapis.com/css?family=Roboto:400,300' rel='stylesheet' type='text/css'>
</head>
<body>
	<div class="container" data-ng-view></div>
	<!-- Scripts -->
	<script src="{{ URL::asset('assets/vendor/angular/angular.min.js') }}"></script>
	<script src="{{ URL::asset('assets/vendor/angular/angular-resource.min.js') }}"></script>
	<script src="{{ URL::asset('assets/vendor/angular/angular-route.min.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/app.module.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/app.config.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/services/dataservice.service.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/users/user.controller.js') }}"></script>
	<script src="{{ URL::asset('assets/js/app/companies/company.controller.js') }}"></script>
</body>
</html>
