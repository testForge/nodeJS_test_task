define(['resources','angular'], function(resources){
	console.log(resources)

	window.resources = resources;

	angular.module('notes.controllers', [])
		.controller('notesController', function($scope, $http){
			$scope.title = 'hello epta';
		});
});