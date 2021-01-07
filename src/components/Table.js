import './Table.css';
import React, { useEffect, useState } from 'react';
import PlayerCharts from './PlayerCharts';
import { headerData } from './rowData';
import { rgb } from 'd3';
// import Slide from './Slide';
// import _ from 'lodash';

// import NBA from 'nba';

const Table = ({ data }) => {
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

	const setBgColor = (val) => {
		if (val < 150) {
			return { background: rgb(0, 255, 0, 0.5 - val / 300) };
		} else {
			return { background: rgb(255, 0, 0, val / 500 - 0.3) };
		}
	};

	useEffect(() => {
		if (data.length > 1) {
			setOrder([...data]);
		}
	}, [data]);

	return (
		<div id="table-body">
			<div className="h1-container">
				<h1>Player Rankings.</h1>
			</div>
			<table>
				<tbody>
					<tr className="table-header" onClick={handleFilter}>
						{headerData.map((stat) => (
							<th
								key={stat.text}
								className={
									filter === stat.name
										? stat.className + '-active'
										: stat.className
								}
								name={stat.name}
							>
								{stat.text}
							</th>
						))}
					</tr>
					{order.map((player) => {
						i++;
						return (
							<React.Fragment key={i}>
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
										bgcolor={filter === 'blkRank' ? color : null}
										className="row-stat"
									>
										{player.blk.toFixed(1)}
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
									<td style={setBgColor(player.fg3mRank)} className="row-stat">
										{player.fg3mRank}
									</td>
									<td style={setBgColor(player.ptsRank)} className="row-stat">
										{player.ptsRank}
									</td>
									<td style={setBgColor(player.rebRank)} className="row-stat">
										{player.rebRank}
									</td>
									<td style={setBgColor(player.astRank)} className="row-stat">
										{player.astRank}
									</td>
									<td style={setBgColor(player.stlRank)} className="row-stat">
										{player.stlRank}
									</td>
									<td style={setBgColor(player.blkRank)} className="row-stat">
										{player.blkRank}
									</td>
									<td style={setBgColor(player.fgPctRank)} className="row-stat">
										{player.fgPctRank}
									</td>
									<td style={setBgColor(player.ftPctRank)} className="row-stat">
										{player.ftPctRank}
									</td>
									<td style={setBgColor(player.tovRank)} className="row-stat">
										{player.tovRank}
									</td>
								</tr>
								{charts === player.playerName && active ? (
									<tr key={player.pts} className="player-charts-row">
										<td colSpan="22">
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
