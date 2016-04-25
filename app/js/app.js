(function(){
    'use strict';
  /**
   * @ngdoc overview
   * @name insidedApp
   * @description
   * # insidedApp
   *
   * Main module of the application.
   */
  angular
    .module('insidedApp', [
      'datatables',
      'ui.router',
      'ui.bootstrap',
      'angularjs-dropdown-multiselect'
    ])
    .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {
        
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('dashboard', {
          url:'/dashboard',
          templateUrl: 'views/dashboard/main.html',
          controller: 'MainCtrl'   
      })   
    }])
    .controller('MainCtrl', function($scope, $http, $log, $timeout) {

      $scope.filterUserGroup = [];
      $scope.filterUserGroupsettings = {
          scrollableHeight: '200px',
          scrollable: false,
          enableSearch: true,
          showCheckAll: false,
          showUncheckAll: false,
          dynamicTitle: false,
      };
      $scope.filterUserGroupdata = [{
          "label": "Captain",
              "id": "1"
      }, {
          "label": "Colonel",
              "id": "2"
      }, {
          "label": "General",
              "id": "3" 
      }, {
          "label": "Lieutenant",
              "id": "4"
      }, {
          "label": "Officer",
              "id": "5"       
      }];

      $scope.filterDatedata = [{
          "label": "Before",
              "id": "6"  
      }, {
          "label": "After",
              "id": "7"
      }, {
          "label": "Exact date",
              "id": "8"       
      }];


      $scope.today = function() {
        $scope.dt = new Date();
      };
      $scope.today();

      $scope.clear = function() {
        $scope.dt = null;
      };
      $scope.dateOptions = {
        dateFormat: "yy-mm-dd",
        showOn: "focus",
        startingDay:1
      };

      $scope.open1 = function() {
        $scope.popup1.opened = true;
      };

      $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];
      $scope.altInputFormats = ['M!/d!/yyyy'];

      $scope.popup1 = {
        opened: false
      };
      $scope.isDisabled = false;
    })
    .directive('header',function(){
      return {
          templateUrl:'js/directives/header/header.html',
          restrict: 'E',
          replace: true,
        }
    })
    .directive('sidebar',['$location',function() {
      return {
        templateUrl:'js/directives/sidebar/sidebar.html',
        restrict: 'E',
        replace: true,
        scope: {
        },
        controller:function($scope){
          $scope.selectedMenu = 'dashboard';
          $scope.collapseVar = 0;
          $scope.multiCollapseVar = 0;
          
          $scope.check = function(x){
            
            if(x==$scope.collapseVar)
              $scope.collapseVar = 0;
            else
              $scope.collapseVar = x;
          };
          
          $scope.multiCheck = function(y){
            
            if(y==$scope.multiCollapseVar)
              $scope.multiCollapseVar = 0;
            else
              $scope.multiCollapseVar = y;
          };
        }
      }
    }]);
})();

