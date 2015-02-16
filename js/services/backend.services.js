angular.module('backendService', [])

	.factory('backendData', function() {
		// THIS WOULD REALLY BE A GET REQUEST
		var data = {clients: [
			{
				name: "Saks Fifth Avenue",
				clicksPerDay: {
					number: [],
					date: []
				},
				impressions: 103706,
				clicks: 3111,
				ctr: 3,
				cpc: 2,
				share: 67,
				budget: 50000
			},
			{
				name: "Neiman Marcus",
				clicksPerDay: {
					number: [],
					date: []
				}
			},

		]};

		for(i = 0; i < data.clients.length; i++) {
			// KEEP CLICKS WITHIN THE SPECIFIED RANGE
			var num1 = 2000;
			var num2 = 3000;
			if(data.clients[i].name == "Neiman Marcus") {
				num1 = 3000;
				num2 = 7000;
			}

			// CREATE BEGINNING OF DATE RANGE
			var startDate = {month: 12, day: 01, year: 2014};
			var endDate = {month: 12, day: 14, year: 2014};

			// ADD DATE AND CLICKS TO CLIENT
			for(startDate; startDate.day < (endDate.day+1); startDate.day += 1) {

				// FORMAT DATE OF CLICKS FOR CHART
				clickDate = (startDate.year + '-' + startDate.month + '-' + startDate.day);

				// ADD DATE OF CLICKS
				data.clients[i].clicksPerDay.date.push(clickDate);

				// ADD CLICK QTY
				data.clients[i].clicksPerDay.number.push(Math.floor((Math.random() * num1) + num2));
			}
		}

		console.log(data);

		return data;

	});