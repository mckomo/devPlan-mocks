'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MockCtrl', function ($scope, $routeParams) {
    $scope.mockPath = 'views/mocks/' + $routeParams.name + '.html';
  });
