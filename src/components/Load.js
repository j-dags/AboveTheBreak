import React, { useState } from 'react';
import { getStats } from './axios';
import fs from 'fs';

const Load = () => {
	const [gameStats, setGameStats] = useState([]);
	// const [playerStats, setPlayerStats] = useState([]);

	const fetchStats = async (season, page = 1) => {
		const { data } = await getStats(season, page);
		console.log('Retreiving data from API for page: ' + page);

		if (data.length > 0) {
			return data.concat(await fetchStats(season, page + 1));
		}
		return data;
	};

	const fetchAllStats = async (season, page) => {
		await setGameStats([...gameStats, await fetchStats(season, page)]);
	};

	const storeData = () => {
		const stats = {};
		console.log('gameStats > ', gameStats[0]);
		gameStats[0].map((game) => {
			if (!stats[game.player.id]) return (stats[game.player.id] = []);
			else return stats[game.player.id].push(game);
		});
		console.log(
			'player stats > ',
			Object.keys(stats).filter((id) => id > 3000000)
		);
	};

	return (
		<div id="histogram-body">
			<div>
				<h1>TEST TEST TEST</h1>

				<button onClick={() => fetchAllStats(2020, 20)}>LOAD STATS BB</button>
				<button onClick={() => console.log(gameStats)}>SHOW STATS BB</button>
				<button onClick={storeData}>STORE STATS BB</button>
			</div>
		</div>
	);

	// </div>
};

export default Load;
