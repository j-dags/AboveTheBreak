import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
	const [data, setData] = useState({ players: [] });
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('/stats');
			setData(data);
			setLoaded(true);
		};
		fetchData();
	}, []);

	console.log(data);

	return !loaded ? (
		<div>Loading...</div>
	) : (
		<div className="App">
			<table>
				<tbody>
					<tr className="table-header">
						<th className="row-name">Team</th>
						<th className="row-team">Name</th>
						<th className="row-stat">3s</th>
						<th className="row-stat">Pts</th>
						<th className="row-stat">Reb</th>
						<th className="row-stat">Ast</th>
						<th className="row-stat">Stl</th>
						<th className="row-stat">TOs</th>
						<th className="row-stat">FG%</th>
						<th className="row-stat">FT%</th>
					</tr>
					{data.map((player) => (
						<tr key={player.playerName}>
							<td className="row-name">{player.playerName}</td>
							<td className="row-team">{player.teamAbbreviation}</td>
							<td className="row-stat">{player.fG3M}</td>
							<td className="row-stat">{player.pts}</td>
							<td className="row-stat">{player.reb}</td>
							<td className="row-stat">{player.ast}</td>
							<td className="row-stat">{player.stl}</td>
							<td className="row-stat">{player.tov}</td>
							<td className="row-stat">{player.fgPct}</td>
							<td className="row-stat">{player.ftPct}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
