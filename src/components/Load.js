import React, { useState } from 'react';
import { getStats } from './axios';

const Load = () => {
	const [gameStats, setGameStats] = useState([]);

	const fetchNBA = async () => {
		const { data } = await getStats();
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
