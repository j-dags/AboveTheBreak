import React, { useState, useEffect } from 'react';
// import BarTable from './BarTable';
import Scatterplot from './Scatterplot';
import Slide from './Slide';
import './PlayerCharts.css';
import { useLoading, BallTriangle } from '@agney/react-loading';

const PlayerCharts = ({ data, player }) => {
	const [renderData, setRenderData] = useState([]);
	const [loading, setLoading] = useState(true);
	const { containerProps, indicatorEl } = useLoading({
		loading: true,
		indicator: <BallTriangle width="75" />,
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
		if (renderData.length < 1) {
			stats.forEach((stat) =>
				setRenderData((renderData) => [
					...renderData,
					<Scatterplot key={stat} data={data} player={player} stat={stat} />,
				])
			);
		}
		if (renderData.length > 8) {
			setTimeout(() => setLoading(false), 2000);
		}
	});

	return loading ? (
		<div className="container">
			<section {...containerProps}>{indicatorEl}</section>
		</div>
	) : (
		<div className="container">{renderData.map((el) => el)}</div>
	);
};

export default PlayerCharts;
