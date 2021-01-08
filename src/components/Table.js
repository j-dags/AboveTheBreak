import './Table.css';
import React, { useEffect, useState } from 'react';
import PlayerCharts from './PlayerCharts';
import { headerData } from './rowData';
// import { rgb } from 'd3';
import { getStats } from './axios';

const Table = ({ data }) => {
	const [charts, setCharts] = useState(null);
	let [active, setActive] = useState(false);
	let [order, setOrder] = useState([]);
	let [filter, setFilter] = useState('nbaFantasyPtsRank');
	let [reverse, setReverse] = useState(false);
	let i = 0;
	let color = '#fafafa';

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
		// Sort strings
		if (filter === 'PLAYER' || filter === 'TEAM') {
			return [...order].sort(
				(a, b) => a[filter].localeCompare(b[filter]) * (reverse ? -1 : 1)
			);
		}
		// Sort numbers
		else {
			return [...order].sort(
				(a, b) => (reverse ? -1 : 1) * (b[filter] - a[filter])
			);
		}
	};

	// const setBgColor = (val) => {
	// 	if (val < 150) {
	// 		return { background: rgb(0, 255, 0, 0.5 - val / 300) };
	// 	} else {
	// 		return { background: rgb(255, 0, 0, val / 500 - 0.3) };
	// 	}
	// };

	useEffect(() => {
		async function makeOrder() {
			const { data } = await getStats();
			setOrder(data);
		}
		makeOrder();
	}, []);

	console.log('order > ', order);
	console.log('CHARTS > ', charts);
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
										bgcolor={filter === 'RANK' ? color : null}
									>
										{i}
									</td>
									<td
										bgcolor={filter === 'PLAYER' ? color : null}
										className="row-name"
										data-value={player.PLAYER}
									>
										{player.PLAYER}
									</td>
									<td
										bgcolor={filter === 'TEAM' ? color : null}
										className="row-team"
									>
										{player.TEAM}
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
										{(player.DREB + player.OREB).toFixed(1)}
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
									{/* <td className="row-stat">{player.FG3M}</td>
									<td className="row-stat">{player.PTS}</td>
									<td className="row-stat">{player.REB}</td>
									<td className="row-stat">{player.AST}</td>
									<td className="row-stat">{player.STL}</td>
									<td className="row-stat">{player.BLK}</td>
									<td className="row-stat">{player.FG_PCT}</td>
									<td className="row-stat">{player.FT_PCT}</td>
									<td className="row-stat">{player.TOV}</td> */}
								</tr>
								{charts === player.PLAYER && active ? (
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
