// import axios from 'axios';
// // import { key } from '../api-key';

// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const targetUrl = 'https://stats.nba.com/stats/leagueLeaders?';

// // export const getStats = () =>
// // 	axios({
// // 		method: 'GET',
// // 		url: proxyUrl + targetUrl,

// // 		params: {
// // 			LeagueID: '00',
// // 			PerMode: 'PerGame',
// // 			Scope: 'S',
// // 			Season: '2020-21',
// // 			SeasonType: 'Regular Season',
// // 			StatCategory: 'PTS',
// // 		},
// // 		transformResponse: [
// // 			function (res) {
// // 				const headers = JSON.parse(res).resultSet.headers;
// // 				const data = JSON.parse(res).resultSet.rowSet;

// // 				const transformedData = data.map((player) => {
// // 					return player.reduce((obj, el, idx) => {
// // 						return {
// // 							...obj,
// // 							[headers[idx]]: el,
// // 						};
// // 					}, {});
// // 				});
// // 				return transformedData;
// // 			},
// // 		],
// // 	});

// export const getStats = () =>
// 	axios({
// 		method: 'GET',
// 		url:
// 			'https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=1&player_ids[]=2',

// 		// params: {
// 		// 	LeagueID: '00',
// 		// 	PerMode: 'PerGame',
// 		// 	Scope: 'S',
// 		// 	Season: '2020-21',
// 		// 	SeasonType: 'Regular Season',
// 		// 	StatCategory: 'PTS',
// 		// },
// 		// transformResponse: [
// 		// 	function (res) {
// 		// 		const headers = JSON.parse(res).resultSet.headers;
// 		// 		const data = JSON.parse(res).resultSet.rowSet;

// 		// 		const transformedData = data.map((player) => {
// 		// 			return player.reduce((obj, el, idx) => {
// 		// 				return {
// 		// 					...obj,
// 		// 					[headers[idx]]: el,
// 		// 				};
// 		// 			}, {});
// 		// 		});
// 		// 		return transformedData;
// 		// 	},
// 		// ],
// 	});
