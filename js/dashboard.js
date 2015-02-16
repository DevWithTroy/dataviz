angular.module('bamx', ['c3Directives', 'backendService'])

	.controller('bamxController', ['$scope', 'backendData', function($scope, backendData) {
		
		$scope.client = backendData.clients[0];

		$scope.budgetWarning = false;

	}])

	.filter('percentage', function() {

		return function(num) {
		
			return num.toFixed(1) + "%";
		
		}
		
	});