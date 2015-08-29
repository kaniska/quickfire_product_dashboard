'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('AppCtrl', function ($scope, $http, $location, AppService) {
    
    $scope.Datefn  = function(messageDate){return AppService.Datefn(messageDate);}
    $scope.TruncMessage  = function(message){return AppService.Truncatetxt(message);}
    
    AppService.getData().then(function(data) {
      $scope.inbox = data.inbox;
      $scope.processes = data.processes;
    });
  }).
  controller('dashboardCtrl', function ($scope, $location, AppService) {
    
    AppService.getData().then(function(data) {
      $scope.dashboardTable = data.dashboardTable;
      $scope.notifications = data.notifications;
      $scope.chat = data.chat;
      $scope.timeline = data.timeline;
    });
    
    $scope.chatDirectionClass = function(direction){
      return (direction == 'Outgoing')?'left':'right';
    }
    
    // write Ctrl
    $scope.$on('$viewContentLoaded', function () 
     {
       $scope.$parent.name = 'Dream Serenity Wedge Foam Pillow  :  Review Analysis ';
       $scope.$parent.location = $location.path();
       // javascript code here
       $('div#page-wrapper div:last').nextAll('script').remove();
       $('div#page-wrapper').append('<script src="sb-admin-2/js/plugins/morris/raphael.min.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/morris/morris.js"></script>'+
                                    '<script src="sb-admin-2/js/plugins/morris/morris-data.js"></script>');
     });
  }).
  controller('tablesCtrl', function ($scope, $location, AppService) {
	    
	    AppService.getData().then(function(data) {
	      $scope.dashboardTable = data.dashboardTable;
	      $scope.notifications = data.notifications;
	      $scope.chat = data.chat;
	      $scope.timeline = data.timeline;
	    });
	    
	    $scope.chatDirectionClass = function(direction){
	      return (direction == 'Outgoing')?'left':'right';
	    }
	    
	    // write Ctrl
	    $scope.$on('$viewContentLoaded', function () 
	     {
	       $scope.$parent.name = 'Cream Of Wheat: Whole Grain Hot Cereal  :  Review Analysis';
	       $scope.$parent.location = $location.path();
	       // javascript code here
	       $('div#page-wrapper div:last').nextAll('script').remove();
	       $('div#page-wrapper').append('<script src="sb-admin-2/js/plugins/morris/raphael.min.js"></script>'+
	                                    '<script src="sb-admin-2/js/plugins/morris/morris.js"></script>'+
	                                    '<script src="sb-admin-2/js/plugins/morris/morris-data2.js"></script>');
	     });
  }).
  controller('panels-wellsCtrl', function($scope, $location){
	    $scope.$on('$viewContentLoaded', function()
	     {
	      $scope.$parent.name = ' Review by jrtrini' ;
	      $scope.$parent.location = $location.path();
	      $('div#page-wrapper div:last').nextAll('script').remove();
	     });
	  });
