import './Table.css';
import React, { useState } from 'react';
import PlayerCharts from './PlayerCharts';
// import Slide from './Slide';
// import _ from 'lodash';

// import NBA from 'nba';

const Table = (props) => {
	const { data, loaded } = props;
	const [charts, setCharts] = useState(null);
	let [active, setActive] = useState(false);
	let i = 0;

	// const toggleActive = () => setActive(!active);

	const handleClick = (evt) => {
		setCharts(evt.target.dataset.value);
		if (!active) setActive(true);
		if (evt.target.dataset.value === charts && active) setActive(false);
	};

	// const getStats = async () => {
	// 	return await NBA.stats.playerStats();
	// };
	// const stats = getStats();
	// console.log('stats > ', stats);

	return !loaded ? (
		<div>Loading...</div>
	) : (
		<div className="Table">
			<table>
				<tbody>
					<tr className="table-header">
						<th className="row-rank">#</th>
						<th className="row-header-name">NAME</th>
						<th className="row-team">TEAM</th>
						<th className="row-stat">3PM</th>
						<th className="row-stat">PTS</th>
						<th className="row-stat">REB</th>
						<th className="row-stat">AST</th>
						<th className="row-stat">STL</th>
						<th className="row-stat">FG%</th>
						<th className="row-stat">FT%</th>
						<th className="row-stat">TOV</th>
					</tr>
					{data.map((player) => {
						i++;
						return (
							<React.Fragment key={player.playerName}>
								<tr onClick={handleClick} className="table-row">
									<td className="row-rank">{i}</td>
									<td className="row-name" data-value={player.playerName}>
										{player.playerName}
									</td>
									<td className="row-team">{player.teamAbbreviation}</td>
									<td className="row-stat">{player.fG3M.toFixed(1)}</td>
									<td className="row-stat">{player.pts.toFixed(1)}</td>
									<td className="row-stat">{player.reb.toFixed(1)}</td>
									<td className="row-stat">{player.ast.toFixed(1)}</td>
									<td className="row-stat">{player.stl.toFixed(1)}</td>
									<td className="row-stat">{player.tov.toFixed(1)}</td>
									<td className="row-stat">{player.fgPct.toFixed(1)}</td>
									<td className="row-stat">{player.ftPct.toFixed(1)}</td>
								</tr>
								<tr key={player.pts} className="player-charts-row">
									<td colSpan="11">
										{charts === player.playerName && active ? (
											<div className="active">
												<PlayerCharts data={data} player={player} />
												{/* LOADING */}
											</div>
										) : (
											<div className="inactive"></div>
										)}
									</td>
								</tr>
							</React.Fragment>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
