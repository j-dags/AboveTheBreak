import React, { useState } from 'react';
// import { getStats } from './axios';
import axios from 'axios';

const Load = () => {
	const [gameStats, setGameStats] = useState([]);

	const fetchNBA = async () => {
		// const { data } = await getStats();
		const { data } = await axios.get('/stats/2020-21');
		console.log('data > ', data);
		setGameStats(data);
	};

	return (
		<div id="histogram-body">
			<div>
				<h1>TEST TEST TEST</h1>

				<button onClick={fetchNBA}>LOAD STATS BB</button>
				<button onClick={() => console.log(gameStats)}>SHOW STATS BB</button>
			</div>
		</div>
	);

	// </div>
};

export default Load;
