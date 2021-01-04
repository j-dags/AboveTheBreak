import React from 'react';
// import BarTable from './BarTable';
import Histogram from './Histogram';
import './LeagueCharts.css';

const LeagueCharts = ({ data, loaded }) => {
	return (
		<div id="#-pts">
			<div id="chart-container">
				<Histogram data={data} stat={'fG3M'} />
				<Histogram data={data} stat={'pts'} />
				<Histogram data={data} stat={'reb'} />
				<Histogram data={data} stat={'ast'} />
				<Histogram data={data} stat={'stl'} />
				<Histogram data={data} stat={'blk'} />
				<Histogram data={data} stat={'fgPct'} />
				<Histogram data={data} stat={'ftPct'} />
				<Histogram data={data} stat={'tov'} />
			</div>
		</div>
	);
};

export default LeagueCharts;
