import React from 'react';
// import Scatterplot from './Scatterplot';
import './PlayerCharts.css';
import Scatterplot2 from './Scatterplot2';

const PlayerCharts = ({ data, player }) => {
	const stats = [
		'fG3M',
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
		<div className="container">
			{stats.map((stat) => (
				<Scatterplot2
					key={stat}
					data={data}
					stat={stat}
					name={player.playerName}
				/>
			))}
		</div>
	);
};

export default PlayerCharts;
