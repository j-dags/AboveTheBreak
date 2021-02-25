import axios from 'axios';
// import { transform } from 'lodash';
// import { key } from '../api-key';

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

const getStats = async () => {
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
		transformResponse: [
			function (res) {
				const headers = JSON.parse(res).resultSet.headers;
				const data = JSON.parse(res).resultSet.rowSet;
				const stats = {
					pts: [],
					fg3m: [],
					reb: [],
					ast: [],
					stl: [],
					blk: [],
					tov: [],
					fgPct: [],
					ftPct: [],
				};
				// const pts = [];
				// const fg3m = [];
				// const reb = [];
				// const ast = [];
				// const stl = [];
				// const blk = [];
				// const tov = [];
				// const fgPct = [];
				// const ftPct = [];

				data.forEach((player) => {
					stats.pts.push(player[22]);
					stats.fg3m.push(player[9]);
					stats.reb.push(player[17]);
					stats.ast.push(player[18]);
					stats.stl.push(player[19]);
					stats.blk.push(player[20]);
					stats.tov.push(player[21]);
					stats.fgPct.push(player[8]);
					stats.ftPct.push(player[14]);
				});
				const transformedData = data.map((player) => {
					return player.reduce((obj, el, idx) => {
						// console.log(`obj: ${obj}, el: ${el}, idx: ${idx}`);

						return {
							...obj,
							[headers[idx]]: el,
						};
					}, {});
				});
				console.log('data > ', data);
				console.log('stats > ', stats);
				console.log('tData > ', transformedData);
				return transformedData;
			},
		],
	});
	return response;
};

export default getStats;
