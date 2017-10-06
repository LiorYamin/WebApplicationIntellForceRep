var app = angular.module('app', ['ngRoute','ngResource','ngDialog']);
app.config(function($routeProvider){
    $routeProvider
        .when('/survey',{
            templateUrl: '/views/survey.html',
            controller: 'surveyController',
            controllerAs: 'sc'
        })
        .when('/',{
    		templateUrl: '/views/register.html',
    		controller: 'registerController',
    		controllerAs: 'rc'
    	})
    	.otherwise(
                { redirectTo: '/'}
        );
});