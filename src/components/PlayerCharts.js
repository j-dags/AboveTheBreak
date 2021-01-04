import React, { useState, useEffect } from 'react';
// import BarTable from './BarTable';
import Scatterplot from './Scatterplot';
import './PlayerCharts.css';
import { useLoading, Grid } from '@agney/react-loading';
import Scatterplot2 from './Scatterplot2';

const PlayerCharts = ({ data, player }) => {
	const [loading, setLoading] = useState(true);
	const { containerProps, indicatorEl } = useLoading({
		loading: true,
		indicator: <Grid width="50" />,
	});

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

	useEffect(() => {
		if (loading) {
			setTimeout(() => setLoading(false), 10);
		}
	});

	// return loading ? (
	// 	<div className="container">
	// 		<section {...containerProps}>{indicatorEl}</section>
	// 	</div>
	// ) : (
	// 	<div className="container">
	// 		{stats.map((stat) => (
	// 			// <Scatterplot key={stat} data={data} player={player} stat={stat} />
	// 			<Scatterplot2 key={stat} data={data} stat={stat} />
	// 		))}
	// 	</div>
	// );
	// };

	return (
		<div className="container">
			{stats.map((stat) => (
				// <Scatterplot key={stat} data={data} player={player} stat={stat} />
				<Scatterplot2 key={stat} data={data} stat={stat} />
			))}
		</div>
	);
};

export default PlayerCharts;
