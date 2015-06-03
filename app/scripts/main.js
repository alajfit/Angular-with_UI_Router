console.log('\'Allo \'Allo!');

angular
	.module('app', [
		'ui.router'
	])
	// we are annotating the passed objects as minification will change them
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/body.html'
			})
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html'
			})
	}])