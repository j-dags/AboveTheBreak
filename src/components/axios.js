import axios from 'axios';
import { key } from '../api-key';

export const getStats = (season, page) =>
	axios({
		method: 'GET',
		url: 'https://free-nba.p.rapidapi.com/stats',
		headers: {
			'x-rapidapi-key': key,
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
