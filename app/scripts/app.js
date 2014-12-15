'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/preview/:mockName', {
        templateUrl: 'views/preview.html',
        controller: 'PreviewCtrl'
      })
      .when('/mock/:mockName', {
        templateUrl: 'views/mock.html',
        controller: 'MockCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MockList', function() {
    var list = [
      'register',
      'timetable_v0',
      'timetable_v1',
    ];
    return list;
  });
