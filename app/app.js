'use strict';

// Declare app level module which depends on views, and components
var dispatch = angular.module('dispatch', ['ui.router', 'ngAnimate']).
		config(['$stateProvider', '$urlRouterProvider', 
        function($stateProvider, $urlRouterProvider) {
	 
	  	$urlRouterProvider.otherwise('main');
	      $stateProvider.state({
	              name: 'main',
	              url: '/main',
	              templateUrl: 'main-page/main.html',
	              controller: 'mainController',
	              controllerAs: 'vm'
	          }).state({
	          	name:'login',
	          	url: '/login',
	          	templateUrl: 'login/login.html',
	          	controller: 'loginController',
	          	controllerAs: 'loginCtrl'
	          }).state({
	          	name:'login.profile',
	          	url:'/profile',
	          	templateUrl: 'login/profile.html'
	          })				
	          .state({
	          	name:'login.info',
	          	url:'/info',
	          	templateUrl: 'login/info.html'
	          })
	          // url will be /form/interests
	          .state({
	          	name:'login.interests',
	              url: '/interests',
	              templateUrl: 'login/form-interests.html'
	          })
	          .state({             // url will be /form/payment
	          	  name:'login.payment', 
	              url: '/payment',
	              templateUrl: 'login/form-payment.html'
	          }).state({
	        	  name:'Register',
	        	  url: '/register',
	        	  controller:'RegisterController',
	        	  templateUrl:'register/register.html'
	          });
}]);
