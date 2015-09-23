'use strict';

var app = angular.module('app', []);

app.controller('SnowCtrl', function ($scope)
{
    $scope.snow = [];

    $scope.addPetal = function (){
    	$scope.snow.push("*")
    	// return $scope.snow;
    }

    $scope.removePetal = function(){
    	$scope.snow.pop()
    	// return $scope.snow;
    	}
});

app.directive('enter', function (){
	return function(scope, element, attrs){
		element.bind('mouseenter', function(){
			scope.$apply(attrs.enter)
		})
	}


})
