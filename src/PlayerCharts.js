import React from 'react';
// import BarTable from './BarTable';
import Scatterplot from './Scatterplot';
import './PlayerCharts.css';

const PlayerCharts = ({ data, player }) => {
	return (
		<div id="container">
			<Scatterplot data={data} stat={'fG3M'} player={player} />
			<Scatterplot data={data} stat={'pts'} player={player} />
			<Scatterplot data={data} stat={'reb'} player={player} />
			<Scatterplot data={data} stat={'ast'} player={player} />
			<Scatterplot data={data} stat={'stl'} player={player} />
			<Scatterplot data={data} stat={'blk'} player={player} />
			<Scatterplot data={data} stat={'fgPct'} player={player} />
			<Scatterplot data={data} stat={'ftPct'} player={player} />
			<Scatterplot data={data} stat={'tov'} player={player} />
		</div>
	);
};

export default PlayerCharts;
