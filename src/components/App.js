import './App.css';
// import axios from 'axios';
// import getStats from './axios';
import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Table from './Table';
import Navbar from './Navbar';
import LeagueCharts from './LeagueCharts';
// import Load from './Load';
// import getStats from './axios';

function App() {
	// const [data, setData] = useState({ players: [] });
	// const [loaded, setLoaded] = useState(false);

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const data = await getStats();
	// 		console.log(' data > ', data);
	// 		// setData(data.sort((a, b) => a.nbaFantasyPtsRank - b.nbaFantasyPtsRank));
	// 		setLoaded(true);
	// 	};
	// 	fetchData();
	// }, []);

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/" render={() => <Table />} />
				<Route path="/stat-charts" render={() => <LeagueCharts />} />
				{/* <Route path="/load" component={Load} /> */}
			</Switch>
		</Router>
	);
}

export default App;
