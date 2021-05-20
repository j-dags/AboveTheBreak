import React from 'react'

function TableRow({ player, handleClick, filter, setBgColor }) {
	let i = 0
	let color = '#f6f6f6'

	return (
		<React.Fragment key={i}>
			<tr onClick={handleClick} className='table-row'>
				<td
					className='row-rank'
					bgcolor={filter === 'NBA_FANTASY_PTS_RANK' ? color : null}
				>
					{player.NBA_FANTASY_PTS_RANK}
				</td>
				<td
					bgcolor={filter === 'PLAYER_NAME' ? color : null}
					className='row-name'
					data-value={player.PLAYER_NAME}
				>
					{player.PLAYER_NAME}
				</td>
				<td
					bgcolor={filter === 'TEAM_ABBREVIATION' ? color : null}
					className='row-team'
				>
					{player.TEAM_ABBREVIATION}
				</td>
				<td bgcolor={filter === 'GP' ? color : null} className='row-team'>
					{player.GP}
				</td>
				<td bgcolor={filter === 'FG3M' ? color : null} className='row-stat'>
					{player.FG3M.toFixed(1)}
				</td>
				<td bgcolor={filter === 'PTS' ? color : null} className='row-stat'>
					{player.PTS.toFixed(1)}
				</td>
				<td bgcolor={filter === 'REB' ? color : null} className='row-stat'>
					{player.REB.toFixed(1)}
				</td>
				<td bgcolor={filter === 'AST' ? color : null} className='row-stat'>
					{player.AST.toFixed(1)}
				</td>
				<td bgcolor={filter === 'STL' ? color : null} className='row-stat'>
					{player.STL.toFixed(1)}
				</td>
				<td bgcolor={filter === 'BLK' ? color : null} className='row-stat'>
					{player.BLK.toFixed(1)}
				</td>
				<td bgcolor={filter === 'FG_PCT' ? color : null} className='row-stat'>
					{player.FG_PCT.toFixed(2)}
				</td>
				<td bgcolor={filter === 'FT_PCT' ? color : null} className='row-stat'>
					{player.FT_PCT.toFixed(2)}
				</td>
				<td bgcolor={filter === 'TOV' ? color : null} className='row-stat'>
					{player.TOV.toFixed()}
				</td>
				<td className='row-stat' style={setBgColor(player.FG3M_RANK)}>
					{player.FG3M_RANK}
				</td>
				<td className='row-stat' style={setBgColor(player.PTS_RANK)}>
					{player.PTS_RANK}
				</td>
				<td className='row-stat' style={setBgColor(player.REB_RANK)}>
					{player.REB_RANK}
				</td>
				<td className='row-stat' style={setBgColor(player.AST_RANK)}>
					{player.AST_RANK}
				</td>
				<td className='row-stat' style={setBgColor(player.STL_RANK)}>
					{player.STL_RANK}
				</td>
				<td className='row-stat' style={setBgColor(player.BLK_RANK)}>
					{player.BLK_RANK}
				</td>
				<td className='row-stat' style={setBgColor(player.FG_PCT_RANK)}>
					{player.FG_PCT_RANK}
				</td>
				<td className='row-stat' style={setBgColor(player.FT_PCT_RANK)}>
					{player.FT_PCT_RANK}
				</td>
				<td className='row-stat' style={setBgColor(250 - player.TOV_RANK)}>
					{player.TOV_RANK}
				</td>
			</tr>
		</React.Fragment>
	)
}

export default TableRow
