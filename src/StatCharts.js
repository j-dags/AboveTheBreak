import React from 'react';
import BarTable from './BarTable';
import BarTableHistogram from './BarTableHistogram';
import './StatChart.css';

const StatChart = ({ data, loaded }) => {
	return (
		<div id="#-pts">
			<div id="chart-container">
				{/* <BarTable data={data} stat={'fG3M'} />
				<BarTable data={data} stat={'pts'} />
				<BarTable data={data} stat={'reb'} />
				<BarTable data={data} stat={'ast'} />
				<BarTable data={data} stat={'stl'} />
				<BarTable data={data} stat={'blk'} />
				<BarTable data={data} stat={'fgPct'} />
				<BarTable data={data} stat={'ftPct'} />
				<BarTable data={data} stat={'tov'} /> */}
				<BarTableHistogram data={data} stat={'fG3M'} />
				<BarTableHistogram data={data} stat={'pts'} />
				<BarTableHistogram data={data} stat={'reb'} />
				<BarTableHistogram data={data} stat={'ast'} />
				<BarTableHistogram data={data} stat={'stl'} />
				<BarTableHistogram data={data} stat={'blk'} />
				<BarTableHistogram data={data} stat={'fgPct'} />
				<BarTableHistogram data={data} stat={'ftPct'} />
				<BarTableHistogram data={data} stat={'tov'} />
			</div>
		</div> //
	);
};

export default StatChart;
