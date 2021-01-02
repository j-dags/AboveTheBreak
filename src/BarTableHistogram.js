import React, { PureComponent } from 'react';
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';
import './BarTableHistogram.css';

export default class BarTableHistogram extends PureComponent {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9kd8rssL/';

	render() {
		let { data, stat } = this.props;
		let decimals = 10;
		let dist = {};

		if (stat === 'pts') decimals = 1;
		if (stat === 'fgPct') decimals = 100;
		if (stat === 'ftPct') decimals = 100;

		if (data.length > 0) {
			// Parse and sort data for the specified stat
			data = data.map((player) => player[stat]);
			data = data
				.map((val) => Math.round(val * decimals) / decimals)
				.sort((a, b) => a - b);

			// Create a stat:stat-frequency object
			data.forEach((stat) => {
				if (Object.keys(dist).includes(stat.toString())) {
					dist[stat] = dist[stat] + 1;
				} else dist[stat] = 1;
			});

			// Convert obj to array of objs (for BarChart component)
			dist = Object.keys(dist)
				.map((key) => {
					return { name: key, val: dist[key] };
				})
				.sort((a, b) => parseInt(a.name) - parseInt(b.name));

			console.log('dist > ', dist);
		}

		return !data ? (
			<div>Loading</div>
		) : (
			<div className="chart">
				<h2>{stat} Distribution</h2>
				{/* <BarChart width={500} height={300} data={dist}>
					<Bar dataKey="val" fill="#8884d8" />
				</BarChart> */}
				<BarChart
					width={500}
					height={300}
					data={dist}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey="val" fill="#82ca9d" />
				</BarChart>
			</div>
		);
	}
}
