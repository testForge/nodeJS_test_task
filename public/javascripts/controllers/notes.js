define(['jquery', 'resources','angular'], function($, resources){
	window.resources = resources;

	angular.module('notes.controllers', [])
		.controller('notesController',['$scope', '$http', function($scope, $http){
			$scope.allNotes = [];
			$scope.tab = 0;
			$scope.setTab = function(tab){
				$scope.tab = tab;
			};
			$scope.isTabSet = function(checkTab){
				return $scope.tab === checkTab;
			};
			$scope.getAllNotes = function(){
				$http.get('/notes')
					.success(function(notes){
						console.log(`Got notes, count: ${notes.length}`);
						$scope.allNotes = [];
						notes.forEach((note, idx) =>{
							$scope.allNotes.push(note);
						});
					});
			};

			$scope.setActive = function(event){
				console.log(event)
				window.EVENTT = event;
				$(event.target).parent().addClass('active')
			};


		}]);
});