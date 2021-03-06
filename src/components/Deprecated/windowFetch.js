// import fetch from 'node-fetch';
import 'whatwg-fetch';
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const getStats = async () => {
	console.log('Making API Request...');
	// request the data from the JSON API
	try {
		const results = await window.fetch(
			proxyUrl +
				'https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2020-21&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&TwoWay=0&VsConference=&VsDivision=&Weight=',
			{
				credentials: 'include',
				headers: {
					Connection: 'keep-alive',
					'User-Agent':
						'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36',
					'x-nba-stats-origin': 'stats',
					Referer: 'https://stats.nba.com/',
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'PUT, GET, POST',
					'Access-Control-Allow-Headers':
						'Origin, X-Requested-With, Content-Type, Accept',
				},
				// 	// ReferrerPolicy: 'strict-origin-when-cross-origin',
				// 	// mode: 'cors',
			}
		);
		console.log('results > ', results);

		return results.json();
		// const data = await results.json();
		// // console.log(data.resultSet.headers);
		// const headers = data.resultSets[0].headers;
		// const stats = data.resultSets[0].rowSet;
		// const transformedData = stats.map((player) => {
		// 	return player.reduce((obj, el, idx) => {
		// 		return {
		// 			...obj,
		// 			[headers[idx]]: el,
		// 		};
		// 	}, {});
		// });
		// return transformedData;
	} catch (error) {
		console.log('BIG ERRORS');
		console.log(error);
	}
};

export default getStats;
