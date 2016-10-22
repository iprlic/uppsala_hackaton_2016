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

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

    });

  });
