import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import BarTable from './BarTable';
import Histogram from './Histogram';
import './LeagueCharts.css';

const LeagueCharts = () => {
	const [data, setData] = useState({});
	const [loaded, setLoaded] = useState(false);
	const [year, setYear] = useState('2020-21');

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(`/stats/${year}`);
			setData(data);
			setLoaded(true);
		};
		fetchData();
	}, [year]);

	return !loaded ? (
		<div>Loading...</div>
	) : (
		<React.Fragment>
			<h1>League Stats</h1>
			<select
				name="Decimal"
				className="ui fluid dropdown"
				onChange={(e) => setYear(e.target.value)}
				type="number"
				value={year}
			>
				<option key={0} value={'2020-21'}>
					2020-21
				</option>
				<option key={1} value={'2019-20'}>
					2019-20
				</option>
				<option key={2} value={'2018-19'}>
					2018-19
				</option>
				<option key={3} value={'2017-18'}>
					2017-18
				</option>
				<option key={4} value={'2016-17'}>
					2016-17
				</option>
				<option key={5} value={'2015-16'}>
					2015-16
				</option>
			</select>
			<div id="histogram-container">
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
		</React.Fragment>
	);

	// </div>
};

export default LeagueCharts;
