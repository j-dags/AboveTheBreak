import './Table.css';
import React from 'react';

const Table = (props) => {
	const { data, loaded } = props;
	return !loaded ? (
		<div>Loading...</div>
	) : (
		<div className="Table">
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
};

export default Table;
