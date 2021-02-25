import axios from 'axios';
// import { key } from '../api-key';

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const getStats = async () => {
	const { data } = await axios({
		url:
			'https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2020-21&SeasonType=Regular+Season&StatCategory=PTS',
		method: 'GET',
		headers: {
			accept: '*/*',
			'accept-language': 'en-US,en;q=0.9',
			'sec-fetch-dest': 'empty',
			'sec-fetch-mode': 'cors',
			'sec-fetch-site': 'same-site',
		},
		referrer: 'https://www.nba.com/',
		referrerPolicy: 'strict-origin-when-cross-origin',
		body: null,
		mode: 'cors',
		credentials: 'omit',
		transformResponse: [
			function (res) {
				const headers = JSON.parse(res).resultSet.headers;
				const data = JSON.parse(res).resultSet.rowSet;

				const transformedData = data.map((player) => {
					return player.reduce((obj, el, idx) => {
						return {
							...obj,
							[headers[idx]]: el,
						};
					}, {});
				});
				return transformedData;
			},
		],
	});
	return data;
};

export default getStats;
