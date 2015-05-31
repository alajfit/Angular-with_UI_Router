'use strict';

/**
 * @ngdoc function
 * @name angularWithUiRouterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularWithUiRouterApp
 */
angular.module('angularWithUiRouterApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
