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
    $scope.mockPath = 'views/mocks/' + $routeParams.mockName + '.html';
    $scope.groups = [
      {name: 'KrDzIs3011Si', selected: false},
      {name: 'KrDzIs3011Io', selected: false},
      {name: 'KrDUIs1011', selected: true},
      {name: 'KrDUIs1012', selected: false},
      {name: 'KrDUIs1013', selected: false},
      {name: 'KrDUFr1012', selected: false},
      {name: 'KrDUFr1013', selected: false},
      {name: 'KrDUZd1012', selected: true},
      {name: 'KrDUZd1013', selected: false}
    ];
    $scope.timetable = [
      { 
        date: 'Poniedziałek, 08 Grudnia 2014', 
        activities: [
          { 
            name: 'Matematyka dyskretna', 
            time: '11:20 – 12:50', 
            place: 'Paw. F s. 102', 
            groups: ['KrDUIs1011, KrDUIs1012'], 
            type: 'wyklad', color: 'primary'
          },
          { 
            name: 'Hurtowanie danych', 
            time: '13:05 – 14:35', 
            place: 'Paw. F s. 102', 
            groups: ['KrDUIs1011'], 
            type: 'ćwiczenia', 
            color: 'warning' 
          }
        ] 
      }, 
      { 
        date: 'Wtorek, 09 Grudnia 2014', 
        activities: [
          { 
            name: 'Inżynieria oprogramowania', 
            time: '16:30 – 18:00', 
            place: 'Bibl. s. 442', 
            groups: ['KrDUIs1011'], 
            type: 'ćwiczenia', 
            color: 'warning',
            notes: 'Zajęcia przeniesione na 22.12.2014'
          }
        ] 
      },
      { 
        date: 'Środa, 10 Grudnia 2014', 
        activities: [
          { 
            name: 'Język angielski', 
            time: '9:35 – 11:05', 
            place: 'Paw. F s. 102', 
            groups: ['SJO'], 
            type: 'lektorat', 
            color: 'success' 
          },
          { 
            name: 'Egzamin', 
            time: '13:05 – 14:35', 
            place: 'Paw. C nowa aula', 
            groups: ['KrDUIs1011', 'KrDUIs1012', 'KrDUIs1013'], 
            type: 'egzamin', 
            color: 'danger' 
          },
        ] 
      },
      { 
        date: 'Czwartek, 11 Grudnia 2014', 
        activities: [
          { 
            name: 'Inżynieria oprogramowania', 
            time: '16:30 – 18:00', 
            place: 'Bibl. s. 442', 
            groups: ['KrDUIs1011'], 
            type: 'ćwiczenia', 
            color: 'danger',
          }
        ] 
      },
    ];
  });
