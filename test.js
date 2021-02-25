// const axios = require('axios');
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

// const getStats = async () => {
// 	const response = await axios({
// 		url:
// 			proxyUrl +
// 			'https://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2020-21&SeasonSegment=&SeasonType=Regular+Season&ShotClockRange=&StarterBench=&TeamID=0&TwoWay=0&VsConference=&VsDivision=&Weight=',
// 		method: 'GET',
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
// 		mode: 'cors',
// 		credentials: 'omit',
// 	});

// 	console.log('response > ', response);
// };

// getStats();

const arr = [1, 2, 2, 2, 5, 6];

console.log(arr.indexOf(5));
