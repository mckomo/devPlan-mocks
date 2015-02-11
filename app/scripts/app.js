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
      'timetable_v1',
      'timetable_v2',
      'timetable_v3',
      'timetable_v4',
      'timetable_v5',
      'bookmark_v1',
      'bookmark_v2',
      'group_selection_v1',
      'welcome_screen'
    ];
    return list;
  });
