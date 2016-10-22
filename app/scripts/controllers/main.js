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
    $scope.drones = [
    	{
    		'id': 'Drone1',
    		'posX': 66.3673995,
    		'posY': 20.9953064,
    		'areaX': 0,
    		'areaY': 0,
    		'width': 300,
    		'height': 300
    	},
    	{
    		'id': 'Drone2',
        'posX': 65.3673995,
        'posY': 20.9911111,
    		'areaX': 200,
    		'areaY': 0,
    		'width': 300,
    		'height': 300
    	}
    ];

    $scope.showDrone = function(drone) {
    	// show drone on map
    	console.log(drone);

      $scope.map.center.latitude = drone.posX;
      $scope.map.center.longitude = drone.posY;


    }

    $scope.map = {
      center:
      { latitude: 45, longitude: -73 }, zoom: 8 };

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
