'use strict';

/**
 * @ngdoc function
 * @name angMaterialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angMaterialApp
 */
angular.module(APP_MODULE_NAME)
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      $scope.patient = {
        strokeId: '',
        bhtNo: null,
        hospital: '',
        name: '',
        age: null,
        dob: '',
        nic: '',
        pregnant: false
      }
    ];
  });
