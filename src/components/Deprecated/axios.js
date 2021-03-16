/* eslint-disable */

import axios from 'axios';
import * as rp from 'request-promise-native';

// import { transform } from 'lodash';
// import { key } from '../api-key';

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// const getStats = async () => {
// 	const results = await rp({
// 		uri:
// 			'https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2020-21&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&TwoWay=0&VsConference=&VsDivision=&Weight=',
// 		headers: {
// 			Connection: 'keep-alive',
// 			'User-Agent':
// 				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36',
// 			'x-nba-stats-origin': 'stats',
// 			Referer: 'https://stats.nba.com/',
// 		},
// 		json: true,
// 	});
// 	return results;
// 	// Reformat response data for easier parsing
// 	const headers = results.resultSets[0].headers;
// 	const data = results.resultSets[0].rowSet;
// 	const transformedData = data.map((player) => {
// 		return player.reduce((obj, el, idx) => {
// 			return {
// 				...obj,
// 				[headers[idx]]: el,
// 			};
// 		}, {});
// 	});

// 	return transformedData;
// };

// export default getStats;

const getStats = async () => {
	const response = await axios({
		url:
			'https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2020-21&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&TwoWay=0&VsConference=&VsDivision=&Weight=',
		method: 'GET',
		headers: {
			Connection: 'keep-alive',
			'User-Agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36',
			'x-nba-stats-origin': 'stats',
			Referer: 'https://stats.nba.com/',
		},
		json: true,
	});
	return response;
};

export default getStats;
