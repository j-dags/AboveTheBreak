/* eslint-disable */

import Scatterplot2 from './Scatterplot2';
import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import './PlayerCharts.css';

const PlayerCharts = ({ data, player, setActive }) => {
	const stats = [
		'FG3M',
		'PTS',
		'REB',
		'AST',
		'STL',
		'BLK',
		'FG_PCT',
		'FT_PCT',
		'TOV',
	];

	// return (
	// 	// <div className="container">
	// 	<React.Fragment>
	// 		{stats.map((stat) => (
	// 			<Scatterplot2
	// 				key={stat}
	// 				data={data}
	// 				stat={stat}
	// 				name={player.PLAYER_NAME}
	// 			/>
	// 		))}
	// 	</React.Fragment>
	// 	// </div>
	// );

	const [open, set] = useState(true);
	const clearActive = () => {
		if (!open) setActive(false);
	};

	const props = useSpring({
		config: { mass: 1, tension: 210, friction: open ? 20 : 30, velocity: -5 },
		from: { width: '100%', height: '0px', background: 'lightgreen' },
		to: {
			width: '100%',
			height: open ? '800px' : '0px',
			background: 'lightblue',
		},
		onRest: () => clearActive(),
	});

	console.log('open > ', open);
	return (
		<animated.div
			className="script-box"
			style={props}
			onClick={() => set(!open)}
		/>
	);
};

export default PlayerCharts;
