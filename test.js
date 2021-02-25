const { getNodeText } = require('@testing-library/react');
const axios = require('axios');

// const response = fetch(
// 	'https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2020-21&SeasonType=Regular+Season&StatCategory=PTS',
// 	{
// 		headers: {
// 			accept: '*/*',
// 			'accept-language': 'en-US,en;q=0.9',
// 			'sec-fetch-dest': 'empty',
// 			'sec-fetch-mode': 'cors',
// 			'sec-fetch-site': 'same-site',
// 		},
// 		referrer: 'https://www.nba.com/',
// 		referrerPolicy: 'strict-origin-when-cross-origin',
// 		body: null,
// 		method: 'OPTIONS',
// 		mode: 'cors',
// 		credentials: 'omit',
// 	}
// );

const getStats = async () => {
	try {
		const response = await axios({
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
		});
	} catch (error) {
		console.log(error);
	}
	console.log('response > ', response.data);
};

getStats();
