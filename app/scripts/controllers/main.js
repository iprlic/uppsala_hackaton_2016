'use strict';

/**
 * @ngdoc function
 * @name uppsalaHackaton2016App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the uppsalaHackaton2016App
 */
angular.module('uppsalaHackaton2016App')
  .controller('MainCtrl', function ($scope) {
    $scope.drones = [
    	{
    		'id': 'Drone1',
    		'posX': 200,
    		'posY': 100,
    		'areaX': 0,
    		'areaY': 0,
    		'width': 300,
    		'height': 300
    	},
    	{
    		'id': 'Drone2',
    		'posX': 487,
    		'posY': 100,
    		'areaX': 200,
    		'areaY': 0,
    		'width': 300,
    		'height': 300
    	}
    ];

    $scope.showDrone = function(drone) {
    	// show drone on map
    	console.log(drone);
    }
  });
