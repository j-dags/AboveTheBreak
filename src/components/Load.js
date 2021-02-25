import { set } from 'lodash';
import React, { useState } from 'react';
import getStats from './axios';
// import axios from 'axios';
// import getStats from './axios';

const Load = () => {
	const [gameStats, setGameStats] = useState([]);

	const fetchNBA = async () => {
		const data = await getStats();
		return data;
	};

	const setNBA = async () => {
		setGameStats(await fetchNBA());
	};

	console.log('gameStats > ', gameStats);
	return (
		<div id="histogram-body">
			<div>
				<h1>TEST TEST TEST</h1>

				<button onClick={setNBA}>LOAD STATS BB</button>
				<button onClick={() => console.log(gameStats)}>SHOW STATS BB</button>
			</div>
		</div>
	);

	// </div>
};

export default Load;
