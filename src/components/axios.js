/* eslint-disable */

import axios from 'axios';
import * as rp from 'request-promise-native';

// import { transform } from 'lodash';
// import { key } from '../api-key';

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const getStats = async () => {
	const results = await rp({
		uri:
			'https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2020-21&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&TwoWay=0&VsConference=&VsDivision=&Weight=',
		headers: {
			Connection: 'keep-alive',
			'User-Agent':
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36',
			'x-nba-stats-origin': 'stats',
			Referer: 'https://stats.nba.com/',
		},
		json: true,
	});
	return results;
	// Reformat response data for easier parsing
	const headers = results.resultSets[0].headers;
	const data = results.resultSets[0].rowSet;
	const transformedData = data.map((player) => {
		return player.reduce((obj, el, idx) => {
			return {
				...obj,
				[headers[idx]]: el,
			};
		}, {});
	});

	return transformedData;
};

export default getStats;

// const getStats = async () => {
// const response = await axios({
// 	url:
// 		'https://stats.nba.com/stats/leagueLeaders?LeagueID=00&PerMode=PerGame&Scope=S&Season=2020-21&SeasonType=Regular+Season&StatCategory=PTS',
// 	method: 'GET',
// 	headers: {
// 		accept: '*/*',
// 		'accept-language': 'en-US,en;q=0.9',
// 		'sec-fetch-dest': 'empty',
// 		'sec-fetch-mode': 'cors',
// 		'sec-fetch-site': 'same-site',
// 	},
// 	referrer: 'https://www.nba.com/',
// 	referrerPolicy: 'strict-origin-when-cross-origin',
// 	body: null,
// 	mode: 'cors',
// 	credentials: 'omit',
// 	transformResponse: [
// 		function (res) {
// 			const headers = JSON.parse(res).resultSet.headers;
// 			const data = JSON.parse(res).resultSet.rowSet;
// 			const stats = {
// 				pts: [],
// 				fg3m: [],
// 				reb: [],
// 				ast: [],
// 				stl: [],
// 				blk: [],
// 				tov: [],
// 				fgPct: [],
// 				ftPct: [],
// 			};
// 			// const pts = [];
// 			// const fg3m = [];
// 			// const reb = [];
// 			// const ast = [];
// 			// const stl = [];
// 			// const blk = [];
// 			// const tov = [];
// 			// const fgPct = [];
// 			// const ftPct = [];
// 			data.forEach((player) => {
// 				stats.pts.push(player[22]);
// 				stats.fg3m.push(player[9]);
// 				stats.reb.push(player[17]);
// 				stats.ast.push(player[18]);
// 				stats.stl.push(player[19]);
// 				stats.blk.push(player[20]);
// 				stats.tov.push(player[21]);
// 				stats.fgPct.push(player[8]);
// 				stats.ftPct.push(player[14]);
// 			});
// 			const transformedData = data.map((player) => {
// 				return player.reduce((obj, el, idx) => {
// 					// console.log(`obj: ${obj}, el: ${el}, idx: ${idx}`);
// 					return {
// 						...obj,
// 						[headers[idx]]: el,
// 					};
// 				}, {});
// 			});
// 			console.log('data > ', data);
// 			console.log('stats > ', stats);
// 			console.log('tData > ', transformedData);
// 			return transformedData;
// 		},
// 	],
// });
// return response;
// };
