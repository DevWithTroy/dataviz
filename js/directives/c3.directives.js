angular.module('c3Directives', ['backendService'])

	.directive('analytics', ['backendData', function(backendData) {

		return {
			restrict: 'E',
			controller: function($scope) {

			},
			link: function(scope, element, attrs) {

				var clients = backendData.clients;

				// ADJUST TO RECEIVE DATE RANGE DYNAMICALLY
				var	chartData = [['x']];

				var aggregate = ['Aggregate'];

				// PUSH CLICK DATES TO X
				for(x = 0; x < clients[0].clicksPerDay.date.length; x++) {
					chartData[0].push(clients[0].clicksPerDay.date[x]);
				}

				// 
				for(i = 0; i < clients.length; i++) {
					//
					clientDetails = [clients[i].name];

					for(g = 0; g < clients[0].clicksPerDay.number.length; g++) {
						clientDetails.push(clients[i].clicksPerDay.number[g]);

						// GET AGGREGATE TOTALS
						var totalClicksForDay = 0;

						for(z = 0; z < clients.length; z++) {
							totalClicksForDay += clients[z].clicksPerDay.number[g];
						}

						aggregate.push(totalClicksForDay)
					}

					chartData.push(clientDetails);
				}

				chartData.push(aggregate);

				console.log(chartData, aggregate);

				var chart = c3.generate({
				    data: {
				        x: 'x',
				//        xFormat: '%Y%m%d', // 'xFormat' can be used as custom format of 'x'
				        columns: chartData
				    },
				    axis: {
				        x: {
				            type: 'timeseries',
				            tick: {
				                format: '%m/%d/%Y'
				            }
				        }
				    }
				});		

			}
		}

	}]);