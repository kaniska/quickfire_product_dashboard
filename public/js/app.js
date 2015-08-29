'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'ngTable'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/dashboard', {
      templateUrl: 'partials/dashboard',
      controller: 'dashboardCtrl'
    }).
    when('/tables',{
      templateUrl: 'partials/tables',
      controller: 'tablesCtrl'
    }).
    when('/panels-wells',{
        templateUrl: 'partials/panels-wells',
        controller: 'panels-wellsCtrl'
      }).    
    otherwise({
      redirectTo: '/dashboard'
    });

  $locationProvider.html5Mode(true);
});
