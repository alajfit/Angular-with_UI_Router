'use strict';

/**
 * @ngdoc function
 * @name angularWithUiRouterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularWithUiRouterApp
 */
angular.module('angularWithUiRouterApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
