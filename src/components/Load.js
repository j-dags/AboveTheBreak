import React, { useState } from 'react';
import { getStats } from './axios';
import fs from 'fs';

const Load = () => {
	const [gameStats, setGameStats] = useState([]);

	const fetchStats = async (season, page = 1) => {
		const { data } = await getStats(season, page);
		console.log('Retreiving data from API for page: ' + page);

		if (data.length > 0) {
			return data.concat(await fetchStats(season, page + 1));
		}
		return data;
	};

	const fetchAllStats = async (season, page) => {
		await setGameStats([...gameStats, await fetchStats(season)]);
		storeData(gameStats, './data.js');
	};

	const storeData = (data, path) => {
		try {
			fs.writeFile(path, JSON.stringify(data));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div id="histogram-body">
			<div>
				<h1>TEST TEST TEST</h1>

				<button onClick={() => fetchAllStats(2020)}>LOAD STATS BB</button>
				<button onClick={() => console.log(gameStats)}>SHOW STATS BB</button>
			</div>
		</div>
	);

	// </div>
};

export default Load;
