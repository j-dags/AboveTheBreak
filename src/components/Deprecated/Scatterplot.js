import React, { PureComponent } from 'react';
import './Scatterplot.css';
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from 'recharts';

export default class Example extends PureComponent {
	static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3mw50Lc9/';

	render() {
		let { data, stat, player } = this.props;

		// Parse and sort data for the specified stat
		data = data.map((player) => ({ x: player.gp, y: player[stat] }));
		const dataPlayer = [player].map((player) => ({
			x: player.gp,
			y: player[stat],
		}));

		return (
			<div className="chart">
				<h3>{stat.toUpperCase()} </h3>
				<ScatterChart
					width={300}
					height={300}
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 0,
					}}
				>
					<CartesianGrid />
					<XAxis type="number" dataKey="x" name="Games Played" />
					<YAxis type="number" dataKey="y" name={stat} />
					<Tooltip cursor={{ strokeDasharray: '3 3' }} />
					<Legend />
					<Scatter name="League" data={data} fill="#AAC7DA" shape="circle" />
					<Scatter
						name={player.playerName}
						data={dataPlayer}
						fill="#e63946"
						shape="circle"
					/>
				</ScatterChart>
			</div>
		);
	}
}
