/* eslint-disable */

import './App.css'

import React, { useEffect, useState } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Table from './Table'
import Navbar from './Navbar'
import LeagueCharts from './LeagueCharts'
import firebaseApp from '../firebase'
const db = firebaseApp.firestore()

const compareDate = (date) => {
	const today = new Date().getTime()
	date = Date.parse(date)
	return today - date < 86400000
}

function App() {
	const [state, setState] = useState({
		loaded: false,
		order: [],
		season: '2020-21',
	})

	useEffect(() => {
		const getPlayerData = async () => {
			// // Check localStorage for prev data
			let storage = JSON.parse(localStorage.getItem('storage'))
			// If localStorage exists, is less than 1 day old, and season hasn't changed, set the state from localStorage
			if (
				storage &&
				compareDate(storage.date) &&
				storage.season === state.season
			)
				setState({ ...state, order: storage.data, loaded: true })
			// Otherwise fetch data from the db
			else {
				// Get and parse data from firestore
				const snapshot = await db.collection(state.season).get()
				let arr = []
				snapshot.forEach((el) => arr.push(el.data()))
				// Filter and sort player data
				if (arr.length > 1) {
					arr = arr
						.filter((player) => player.NBA_FANTASY_PTS_RANK <= 150)
						.sort((a, b) => a.NBA_FANTASY_PTS_RANK - b.NBA_FANTASY_PTS_RANK)
				}

				let storage = {
					data: arr,
					season: state.season,
					date: new Date(),
				}
				console.log('arr > ', arr)
				setState({ ...state, order: arr, loaded: true })
				localStorage.setItem('storage', JSON.stringify(storage))
			}
		}

		getPlayerData()
	}, [state.season])

	const updateSeason = (e) => {
		console.log('e > ', e.target.value)
		setState({ ...state, season: e.target.value })
	}

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route
					exact
					path='/'
					render={() => (
						<Table order={state.order} updateSeason={updateSeason} />
					)}
				/>
				<Route
					path='/stat-charts'
					render={() => (
						<LeagueCharts
							order={state.order}
							updateSeason={updateSeason}
							season={state.season}
						/>
					)}
				/>
				{/* <Route path="/load" component={Load} /> */}
			</Switch>
		</Router>
	)
}

export default App
