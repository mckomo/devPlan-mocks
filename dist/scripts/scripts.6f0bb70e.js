"use strict";angular.module("angularApp",["ngResource","ngRoute","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/preview/:mockName",{templateUrl:"views/preview.html",controller:"PreviewCtrl"}).when("/mock/:mockName",{templateUrl:"views/mock.html",controller:"MockCtrl"}).otherwise({redirectTo:"/"})}]).factory("MockList",function(){var a=["register","timetable_v1","timetable_v2","timetable_v3","timetable_v4"];return a}),angular.module("angularApp").controller("MainCtrl",["$scope","MockList",function(a,b){a.mocks=b}]),angular.module("angularApp").controller("PreviewCtrl",["$scope","$routeParams",function(a,b){a.mockUrl="#/mock/"+b.mockName}]),angular.module("angularApp").controller("MockCtrl",["$scope","$routeParams",function(a,b){a.mockPath="views/mocks/"+b.mockName+".html",a.timetable=[{date:"Poniedziałek, 08 Grudnia 2014",activities:[{name:"Matematyka dyskretna",time:"11:20 – 12:50",place:"Paw. F s. 102",groups:["KrDUIs1011, KrDUIs1012"],type:"wyklad",color:"primary"},{name:"Hurtowanie danych",time:"13:05 – 14:35",place:"Paw. F s. 102",groups:["KrDUIs1011"],type:"ćwiczenia",color:"warning"}]},{date:"Wtorek, 09 Grudnia 2014",activities:[{name:"Inżynieria oprogramowania",time:"16:30 – 18:00",place:"Bibl. s. 442",groups:["KrDUIs1011"],type:"ćwiczenia",color:"warning",notes:"Zajęcia przeniesione na 22.12.2014"}]},{date:"Środa, 10 Grudnia 2014",activities:[{name:"Język angielski",time:"9:35 – 11:05",place:"Paw. F s. 102",groups:["SJO"],type:"lektorat",color:"success"},{name:"Egzamin",time:"13:05 – 14:35",place:"Paw. C nowa aula",groups:["KrDUIs1011","KrDUIs1012","KrDUIs1013"],type:"egzamin",color:"danger"}]},{date:"Czwartek, 11 Grudnia 2014",activities:[{name:"Inżynieria oprogramowania",time:"16:30 – 18:00",place:"Bibl. s. 442",groups:["KrDUIs1011"],type:"ćwiczenia",color:"danger"}]}]}]);