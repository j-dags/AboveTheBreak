import './Table.css';
import React, { useEffect, useState } from 'react';
import PlayerCharts from './PlayerCharts';
// import Slide from './Slide';
// import _ from 'lodash';

// import NBA from 'nba';

const Table = ({ data, loaded }) => {
	const [charts, setCharts] = useState(null);
	let [active, setActive] = useState(false);
	let [order, setOrder] = useState([]);
	let [filter, setFilter] = useState('nbaFantasyPtsRank');
	let [rev, setRev] = useState(false);
	let i = 0;
	let color = '#fafafa';

	const handleClick = (evt) => {
		setCharts(evt.target.dataset.value);
		if (!active) setActive(true);
		if (evt.target.dataset.value === charts && active) setActive(false);
	};

	const handleFilter = (evt) => {
		const newFilter = evt.target.getAttribute('name');
		let newRev = false;
		if (newFilter === filter) {
			newRev = !rev;
		}

		const filterFnc = (newFilter) => {
			if (newFilter === 'playerName' && 'teamId') {
				return [...data].sort(
					(a, b) => a[newFilter].localeCompare(b[newFilter]) * (newRev ? -1 : 1)
				);
			} else if (newFilter === 'gp') {
				return [...data].sort(
					(a, b) => (newRev ? 1 : -1) * (a[newFilter] - b[newFilter])
				);
			} else {
				return [...data].sort(
					(a, b) => (newRev ? -1 : 1) * (a[newFilter] - b[newFilter])
				);
			}
		};
		setOrder(filterFnc(newFilter));

		setFilter(newFilter);
		setRev(newRev);
	};

	useEffect(() => {
		if (data.length > 1) {
			setOrder([...data]);
		}
	}, [data]);

	console.log(`filter: ${filter}`);

	return !loaded ? (
		<div>Loading...</div>
	) : (
		<div id="table-body">
			<h1>League Stats</h1>
			<table>
				<tbody>
					<tr className="table-header" onClick={handleFilter}>
						<th className="row-rank" name="nbaFantasyPtsRank">
							#
						</th>
						<th className="row-header-name" name="playerName">
							NAME
						</th>
						<th className="row-team" name="teamId">
							TEAM
						</th>
						<th className="row-stat" name="gp">
							GP
						</th>
						<th className="row-stat" name="fg3mRank">
							3PM
						</th>
						<th className="row-stat" name="ptsRank">
							PTS
						</th>
						<th className="row-stat" name="rebRank">
							REB
						</th>
						<th className="row-stat" name="astRank">
							AST
						</th>
						<th className="row-stat" name="stlRank">
							STL
						</th>
						<th className="row-stat" name="fgPctRank">
							FG%
						</th>
						<th className="row-stat" name="ftPctRank">
							FT%
						</th>
						<th className="row-stat" name="tovRank">
							TOV
						</th>
					</tr>
					{order.map((player) => {
						i++;
						return (
							<React.Fragment key={player.playerName}>
								<tr onClick={handleClick} className="table-row">
									<td
										className="row-rank"
										bgcolor={filter === 'nbaFantasyPtsRank' ? color : null}
									>
										{i}
									</td>
									<td
										bgcolor={filter === 'playerName' ? color : null}
										className="row-name"
										data-value={player.playerName}
									>
										{player.playerName}
									</td>
									<td
										bgcolor={filter === 'teamId' ? color : null}
										className="row-team"
									>
										{player.teamAbbreviation}
									</td>
									<td
										bgcolor={filter === 'gp' ? color : null}
										className="row-team"
									>
										{player.gp}
									</td>
									<td
										bgcolor={filter === 'fg3mRank' ? color : null}
										className="row-stat"
									>
										{player.fG3M.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'ptsRank' ? color : null}
										className="row-stat"
									>
										{player.pts.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'rebRank' ? color : null}
										className="row-stat"
									>
										{player.reb.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'astRank' ? color : null}
										className="row-stat"
									>
										{player.ast.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'stlRank' ? color : null}
										className="row-stat"
									>
										{player.stl.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'fgPctRank' ? color : null}
										className="row-stat"
									>
										{player.fgPct.toFixed(2)}
									</td>
									<td
										bgcolor={filter === 'ftPctRank' ? color : null}
										className="row-stat"
									>
										{player.ftPct.toFixed(2)}
									</td>
									<td
										bgcolor={filter === 'tovRank' ? color : null}
										className="row-stat"
									>
										{player.tov.toFixed()}
									</td>
								</tr>
								{charts === player.playerName && active ? (
									<tr key={player.pts} className="player-charts-row">
										<td colSpan="12">
											<div className="active">
												<PlayerCharts data={data} player={player} />
											</div>
										</td>
									</tr>
								) : (
									<></>
								)}
							</React.Fragment>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
