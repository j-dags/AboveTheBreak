import './Table.css';
import React, { useEffect, useState } from 'react';
import PlayerCharts from './PlayerCharts';
import { headerData } from './rowData';
import { rgb } from 'd3';
import { getStats } from './axios';
import tableData from '../data/data';

const Table = () => {
	const [charts, setCharts] = useState(null);
	let [active, setActive] = useState(false);
	let [order, setOrder] = useState([]);
	let [filter, setFilter] = useState('nbaFantasyPtsRank');
	let [reverse, setReverse] = useState(false);
	let [loaded, setLoaded] = useState(false);
	let i = 0;
	let color = '#f6f6f6';

	const handleClick = (evt) => {
		console.log('evt > ', charts);
		setCharts(evt.target.dataset.value);
		if (!active) setActive(true);
		if (evt.target.dataset.value === charts && active) setActive(false);
	};

	// Set new player order sorted depending on column clicked
	const handleFilter = (evt) => {
		const newFilter = evt.target.getAttribute('name');
		let newReverse = false;
		if (newFilter === filter) {
			newReverse = !reverse;
		}

		setOrder(filterFnc(newFilter, newReverse));
		setFilter(newFilter);
		setReverse(newReverse);
	};

	// Return order array sorted depending on column clicked
	const filterFnc = (filter, reverse) => {
		console.log(filter, !!filter.match(/Rank/));
		// Sort strings
		if (filter === 'playerName' || filter === 'teamAbbreviation') {
			return [...order].sort(
				(a, b) => a[filter].localeCompare(b[filter]) * (reverse ? -1 : 1)
			);
		}
		// Sort numbers
		else if (!!filter.match(/Rank/)) {
			return [...order].sort(
				(a, b) => (reverse ? 1 : -1) * (b[filter] - a[filter])
			);
		} else {
			return [...order].sort(
				(a, b) => (reverse ? -1 : 1) * (b[filter] - a[filter])
			);
		}
	};

	const setBgColor = (val) => {
		if (val < 150) {
			return { background: rgb(0, 255, 0, 0.5 - val / 300) };
		} else {
			return { background: rgb(255, 0, 0, val / 500 - 0.3) };
		}
	};

	useEffect(() => {
		// // USE FOR LEAGELEADERS API REQUEST
		// async function makeOrder() {
		// 	const { data } = await getStats();
		// 	console.log('data > ', data);
		// 	setOrder(data);
		// }
		// makeOrder();

		// USE FOR PLAYERSTATS (PREFERRED TABLE) SCRAPED AND STORED IN OUTPUT.JS
		setOrder(tableData);
		setLoaded(true);
	}, []);

	console.log('order > ', order);

	return !loaded ? (
		<div>Loading</div>
	) : (
		// <div>HOL UP</div>
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
										{player.nbaFantasyPtsRank}
									</td>
									<td
										bgcolor={filter === 'playerName' ? color : null}
										className="row-name"
										data-value={player.playerName}
									>
										{player.playerName}
									</td>
									<td
										bgcolor={filter === 'teamAbbreviation' ? color : null}
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
										bgcolor={filter === 'fg3M' ? color : null}
										className="row-stat"
									>
										{player.fg3M.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'pts' ? color : null}
										className="row-stat"
									>
										{player.pts.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'reb' ? color : null}
										className="row-stat"
									>
										{player.reb.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'ast' ? color : null}
										className="row-stat"
									>
										{player.ast.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'stl' ? color : null}
										className="row-stat"
									>
										{player.stl.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'blk' ? color : null}
										className="row-stat"
									>
										{player.blk.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'fgPct' ? color : null}
										className="row-stat"
									>
										{player.fgPct.toFixed(2)}
									</td>
									<td
										bgcolor={filter === 'ftPct' ? color : null}
										className="row-stat"
									>
										{player.ftPct.toFixed(2)}
									</td>
									<td
										bgcolor={filter === 'tov' ? color : null}
										className="row-stat"
									>
										{player.tov.toFixed()}
									</td>
									<td className="row-stat" style={setBgColor(player.fg3MRank)}>
										{player.fg3MRank}
									</td>
									<td className="row-stat" style={setBgColor(player.ptsRank)}>
										{player.ptsRank}
									</td>
									<td className="row-stat" style={setBgColor(player.rebRank)}>
										{player.rebRank}
									</td>
									<td className="row-stat" style={setBgColor(player.astRank)}>
										{player.astRank}
									</td>
									<td className="row-stat" style={setBgColor(player.stlRank)}>
										{player.stlRank}
									</td>
									<td className="row-stat" style={setBgColor(player.blkRank)}>
										{player.blkRank}
									</td>
									<td className="row-stat" style={setBgColor(player.fgPctRank)}>
										{player.fgPctRank}
									</td>
									<td className="row-stat" style={setBgColor(player.ftPctRank)}>
										{player.ftPctRank}
									</td>
									<td className="row-stat" style={setBgColor(player.tovRank)}>
										{player.tovRank}
									</td>
								</tr>
								{charts === player.playerName && active ? (
									<tr key={player.pts} className="player-charts-row">
										<td colSpan="22">
											<div className="active">
												<PlayerCharts data={order} player={player} />
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
