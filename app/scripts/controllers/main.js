'use strict';

/**
 * @ngdoc function
 * @name uppsalaHackaton2016App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uppsalaHackaton2016App
 */
angular.module('uppsalaHackaton2016App')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi, $log, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    // TODO: We should center the map to the area that we are watching.
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 8 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;
    $scope.marker = {
      id: 0,

      // TODO: The lat/lon for the selected drone should be passed here.
      //	When locating the drone, how do we check if it is not out-of-bounds for our map?
      //	We would need to recenter the map if out-of-bounds
      coords: {
        latitude: 40.1451, 
        longitude: -99.6680
      },
      options: { draggable: true,
      			 icon: 'images/blue-drone-icon.png' },
    };



    // Not sure what the $wacthCollection does.
    $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
      if (_.isEqual(newVal, oldVal))
        return;
      $scope.coordsUpdates++;
    });


    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });


  });