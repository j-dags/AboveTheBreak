import React from 'react';
// import Scatterplot from './Scatterplot';
import './PlayerCharts.css';
import Scatterplot2 from './Scatterplot2';

const PlayerCharts = ({ data, player }) => {
	const stats = [
		'FG3M',
		'PTS',
		'REB',
		'AST',
		'STL',
		'BLK',
		'FG_PCT',
		'FT_PCT',
		'TOV',
	];

	return (
		// <div className="container">
		<React.Fragment>
			{stats.map((stat) => (
				<Scatterplot2 key={stat} data={data} stat={stat} name={player.PLAYER} />
			))}
		</React.Fragment>
		// </div>
	);
};

export default PlayerCharts;
