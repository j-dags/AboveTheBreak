/* eslint-disable */
import './Table.css';
import React, { useEffect, useState } from 'react';
import PlayerCharts from './PlayerCharts';
import { headerData } from './rowData';
import axios from 'axios';
import { rgb } from 'd3';
// import getStats from './axios';
import getStats from './nodeFetch';

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
		console.log(filter, !!/RANK/.test(filter));
		// Sort strings
		if (filter === 'PLAYER_NAME' || filter === 'TEAM_ABBREVIATION') {
			return [...order].sort(
				(a, b) => a[filter].localeCompare(b[filter]) * (reverse ? -1 : 1)
			);
		}
		// Sort numbers
		else if (!!/RANK/.test(filter) && filter !== 'TOV_RANK') {
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
		if (val < 75) {
			return { background: rgb(0, 255, 0, Math.max(0.1, 0.6 - val / 75)) };
		} else {
			return { background: rgb(255, 0, 0, Math.min(0.25, (val - 75) / 500)) };
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get('/stats/rp');
			// const data = await getStats();
			const order = data
				.sort((a, b) => a.NBA_FANTASY_PTS_RANK - b.NBA_FANTASY_PTS_RANK)
				.slice(0, 128);
			setOrder(order);
		};
		fetchData();
		setLoaded(true);
	}, []);

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
										bgcolor={filter === 'NBA_FANTASY_PTS_RANK' ? color : null}
									>
										{player.NBA_FANTASY_PTS_RANK}
									</td>
									<td
										bgcolor={filter === 'PLAYER_NAME' ? color : null}
										className="row-name"
										data-value={player.PLAYER_NAME}
									>
										{player.PLAYER_NAME}
									</td>
									<td
										bgcolor={filter === 'TEAM_ABBREVIATION' ? color : null}
										className="row-team"
									>
										{player.TEAM_ABBREVIATION}
									</td>
									<td
										bgcolor={filter === 'GP' ? color : null}
										className="row-team"
									>
										{player.GP}
									</td>
									<td
										bgcolor={filter === 'FG3M' ? color : null}
										className="row-stat"
									>
										{player.FG3M.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'PTS' ? color : null}
										className="row-stat"
									>
										{player.PTS.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'REB' ? color : null}
										className="row-stat"
									>
										{player.REB.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'AST' ? color : null}
										className="row-stat"
									>
										{player.AST.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'STL' ? color : null}
										className="row-stat"
									>
										{player.STL.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'BLK' ? color : null}
										className="row-stat"
									>
										{player.BLK.toFixed(1)}
									</td>
									<td
										bgcolor={filter === 'FG_PCT' ? color : null}
										className="row-stat"
									>
										{player.FG_PCT.toFixed(2)}
									</td>
									<td
										bgcolor={filter === 'FT_PCT' ? color : null}
										className="row-stat"
									>
										{player.FT_PCT.toFixed(2)}
									</td>
									<td
										bgcolor={filter === 'TOV' ? color : null}
										className="row-stat"
									>
										{player.TOV.toFixed()}
									</td>
									<td className="row-stat" style={setBgColor(player.FG3M_RANK)}>
										{player.FG3M_RANK}
									</td>
									<td className="row-stat" style={setBgColor(player.PTS_RANK)}>
										{player.PTS_RANK}
									</td>
									<td className="row-stat" style={setBgColor(player.REB_RANK)}>
										{player.REB_RANK}
									</td>
									<td className="row-stat" style={setBgColor(player.AST_RANK)}>
										{player.AST_RANK}
									</td>
									<td className="row-stat" style={setBgColor(player.STL_RANK)}>
										{player.STL_RANK}
									</td>
									<td className="row-stat" style={setBgColor(player.BLK_RANK)}>
										{player.BLK_RANK}
									</td>
									<td
										className="row-stat"
										style={setBgColor(player.FG_PCT_RANK)}
									>
										{player.FG_PCT_RANK}
									</td>
									<td
										className="row-stat"
										style={setBgColor(player.FT_PCT_RANK)}
									>
										{player.FT_PCT_RANK}
									</td>
									<td
										className="row-stat"
										style={setBgColor(250 - player.TOV_RANK)}
									>
										{player.TOV_RANK}
									</td>
								</tr>
								{charts === player.PLAYER_NAME && active && (
									<tr key={player.PTS} className="player-charts-row">
										<td colSpan="22">
											{/* <div className="active"> */}
											<PlayerCharts
												data={order}
												player={player}
												setActive={setActive}
											/>
											{/* </div> */}
										</td>
									</tr>
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
