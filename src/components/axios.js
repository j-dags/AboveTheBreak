import axios from 'axios';

export const getStats = (season, page) =>
	axios({
		method: 'GET',
		url: 'https://free-nba.p.rapidapi.com/stats',
		headers: {
			'x-rapidapi-key': '9d408c82f7msh3dc0cdcca9d8571p1a2f26jsn95d0bdac7160',
			'x-rapidapi-host': 'free-nba.p.rapidapi.com',
			useQueryString: true,
		},
		params: {
			page: page,
			'seasons[]': season,
			per_page: '100',
		},
		transformResponse: [
			function (res) {
				let { data } = JSON.parse(res);
				// console.log('axios data > ', data);
				return data;
				// 	return games
				// 		.filter((game) => !!game.endTimeUTC)
				// 		.map((game) => game.gameId);
			},
		],
	});
