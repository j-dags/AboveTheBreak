import React from 'react';
// import Scatterplot from './Scatterplot';
import './PlayerCharts.css';
import Scatterplot2 from './Scatterplot2';

const PlayerCharts = ({ data, player }) => {
	const stats = [
		'fg3M',
		'pts',
		'reb',
		'ast',
		'stl',
		'blk',
		'fgPct',
		'ftPct',
		'tov',
	];

	return (
		// <div className="container">
		<React.Fragment>
			{stats.map((stat) => (
				<Scatterplot2
					key={stat}
					data={data}
					stat={stat}
					name={player.playerName}
				/>
			))}
		</React.Fragment>
		// </div>
	);
};

export default PlayerCharts;
