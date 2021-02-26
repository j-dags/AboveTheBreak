/* eslint-disable */
import Scatterplot2 from './Scatterplot2';
import React, { useState, useRef } from 'react';
import {
	useTransition,
	useSpring,
	useChain,
	config,
	animated as a,
} from 'react-spring';
import { Container, Item } from './styles';

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

	// Waits for animation to finish before changing state
	const clearActive = () => {
		if (!showCharts) {
			setCharts(null);
		}
	};

	const springRef = useRef();
	const props = useSpring({
		ref: springRef,
		config: {
			mass: 1,
			tension: 210,
			friction: showCharts ? 20 : 20,
			// velocity: -5,
		},
		from: { height: '0px' },
		to: {
			height: showCharts ? '800px' : '0px',
		},
		onRest: () => clearActive(),
	});

	// const transRef = useRef();
	// const transitions = useTransition(showCharts ? stats : [], (stat) => stat, {
	// 	ref: transRef,
	// 	unique: true,
	// 	trail: 400 / stats.length,
	// 	from: { opacity: 0, transform: 'scale(0)' },
	// 	enter: { opacity: 1, transform: 'scale(1)' },
	// 	leave: { opacity: 0, transform: 'scale(0)' },
	// });

	// // This will orchestrate the two animations above, comment the last arg and it creates a sequence
	// useChain(showCharts ? [springRef, transRef] : [transRef, springRef], [
	// 	// 0,
	// 	// showCharts ? 0.1 : 0.6,
	// 	0,
	// 	1,
	// ]);

	return (
		<a.div
			className="script-box"
			style={props}
			onClick={() => setShowCharts(!showCharts)}
		>
			{/* {transitions.map(({ item, key, props }) => (
				// <Scatterplot2
				// 	key={key}
				// 	data={data}
				// 	stat={stat}
				// 	name={player.PLAYER_NAME}
				// />
				<Item key={key} style={{ ...props, background: item.css }}>
					ITEM
				</Item>
			))} */}
		</a.div>
	);
};

export default PlayerCharts;

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
