'use strict';

/**
 * @ngdoc function
 * @name uppsalaHackaton2016App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uppsalaHackaton2016App
 */
angular.module('uppsalaHackaton2016App')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });

  });
