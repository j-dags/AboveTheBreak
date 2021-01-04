import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div id="navbar" className="row">
				<Link to="/">Table</Link>
				<Link to="/stat-charts">Stat Charts</Link>
			</div>
		</nav>
	);
};

export default Navbar;
