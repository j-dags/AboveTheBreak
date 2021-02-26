/* eslint-disable */

import Scatterplot2 from './Scatterplot2';
import React, { useState } from 'react';
import { useSpring, animated as a, config } from 'react-spring';

import './PlayerCharts.css';

const PlayerCharts = ({
	data,
	player,
	showCharts,
	setShowCharts,
	setCharts,
	setClose,
}) => {
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

	// const [showCharts, set] = useState(true);

	// Waits for animation to finish before changing state
	const clearActive = () => {
		if (!showCharts) {
			setCharts(null);
		}
	};

	const props = useSpring({
		config: {
			mass: 1,
			tension: 210,
			friction: showCharts ? 20 : 30,
			velocity: -5,
		},
		from: { width: '100%', height: '0px', background: 'lightgreen' },
		to: {
			width: '100%',
			height: showCharts ? '800px' : '0px',
			background: 'lightblue',
		},
		onRest: () => clearActive(),
	});

	return (
		<a.div
			className="script-box"
			style={props}
			onClick={() => setShowCharts(!showCharts)}
		>
			{/* <div className="container">
				<React.Fragment>
					{stats.map((stat) => (
						<Scatterplot2
							key={stat}
							data={data}
							stat={stat}
							name={player.PLAYER_NAME}
						/>
					))}
				</React.Fragment>
			</div> */}
		</a.div>
	);
};

export default PlayerCharts;
