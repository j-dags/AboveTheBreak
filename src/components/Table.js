/* eslint-disable */
import './Table.css'
import React, { useContext, useState } from 'react'
import { rgb } from 'd3'

import TableRow from './TableRow'
import PlayerCharts from './PlayerCharts'
import { headerData } from './rowData'
import { Context } from './Context'

const Table = () => {
	const [state, setState] = useState({
		selectedPlayer: null,
		filter: 'NBA_FANTASY_PTS_RANK',
		reverse: false,
		showCharts: false,
	})
	const [context, setContext] = useContext(Context)
	let i = 0

	const handleClick = (evt) => {
		if (!state.selectedPlayer)
			setState({
				...state,
				selectedPlayer: evt.target.dataset.value,
				showCharts: !state.showCharts,
			})
		else setState({ ...state, showCharts: !state.showCharts })
	}

	const setSelectedPlayer = (value = !state.selectedPlayer) => {
		setState({ ...state, selectedPlayer: value })
	}

	const toggleShowChart = (value = !state.showCharts) => {
		setState({ ...state, showCharts: value })
	}

	// Set new player order sorted depending on column clicked
	const handleFilter = (evt) => {
		const newFilter = evt.target.getAttribute('name')
		let newReverse = false
		if (newFilter === state.filter) {
			newReverse = !state.reverse
		}

		setState({
			...state,
			filter: newFilter,
			reverse: newReverse,
		})
		setContext({ ...context, order: filterFnc(newFilter, newReverse) })
	}

	// Return order array sorted depending on column clicked
	const filterFnc = (filter, reverse) => {
		// Sort strings
		if (filter === 'PLAYER_NAME' || filter === 'TEAM_ABBREVIATION') {
			return [...context.order].sort(
				(a, b) => a[filter].localeCompare(b[filter]) * (reverse ? -1 : 1)
			)
		}
		// Sort numbers
		else if (!!/RANK/.test(filter) && filter !== 'TOV_RANK') {
			return [...context.order].sort(
				(a, b) => (reverse ? 1 : -1) * (b[filter] - a[filter])
			)
		} else {
			return [...context.order].sort(
				(a, b) => (reverse ? -1 : 1) * (b[filter] - a[filter])
			)
		}
	}

	const setBgColor = (val) => {
		if (val < 75) {
			return { background: rgb(0, 255, 0, Math.max(0.1, 0.6 - val / 75)) }
		} else {
			return { background: rgb(255, 0, 0, Math.min(0.25, (val - 75) / 500)) }
		}
	}

	return (
		context.loaded && (
			<div id='table-body'>
				<div className='h1-container'>
					<h1>Player Rankings.</h1>
					<select
						name='Decimal'
						className='ui fluid dropdown'
						onChange={(e) => setContext({ ...context, season: e.target.value })}
						type='number'
						value={context.season}
					>
						<option key={0} value={'2020-21'}>
							2020-21
						</option>
						<option key={1} value={'2019-20'}>
							2019-20
						</option>
						<option key={2} value={'2018-19'}>
							2018-19
						</option>
						<option key={3} value={'2017-18'}>
							2017-18
						</option>
						<option key={4} value={'2016-17'}>
							2016-17
						</option>
						<option key={5} value={'2015-16'}>
							2015-16
						</option>
					</select>
				</div>
				<table>
					<tbody>
						<tr className='table-header' onClick={handleFilter}>
							{headerData.map((stat) => (
								<th
									key={stat.text}
									className={
										state.filter === stat.name
											? stat.className + '-active'
											: stat.className
									}
									name={stat.name}
								>
									{stat.text}
								</th>
							))}
						</tr>
						{context.order.map((player) => {
							i++
							return (
								<React.Fragment key={i}>
									<TableRow
										filter={state.filter}
										handleClick={handleClick}
										player={player}
										setBgColor={setBgColor}
									/>
									{state.selectedPlayer === player.PLAYER_NAME && (
										<tr key={player.PTS} className='player-charts-row'>
											<td colSpan='22'>
												<PlayerCharts
													data={state.order}
													player={player}
													showCharts={state.showCharts}
													setSelectedPlayer={setSelectedPlayer}
													toggleShowChart={toggleShowChart}
												/>
											</td>
										</tr>
									)}
								</React.Fragment>
							)
						})}
					</tbody>
				</table>
			</div>
		)
	)
}

export default Table
