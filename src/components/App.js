/* eslint-disable */

import './App.css'

import React, { useContext, useEffect } from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Table from './Table'
import Navbar from './Navbar'
import LeagueCharts from './LeagueCharts'
import firebaseApp from '../firebase'
const db = firebaseApp.firestore()

import { Context } from './Context'

// Check if a given date is within the last 24 hours
const compareDate = (date) => {
	const today = new Date().getTime()
	date = Date.parse(date)
	return today - date < 86400000
}

function App() {
	const [context, setContext] = useContext(Context)

	useEffect(() => {
		const getPlayerData = async () => {
			if (context) {
				// Check localStorage for prev data
				let storage = JSON.parse(localStorage.getItem(context.season))

				// Check if content was loaded from storage and is less than a day old
				if (storage && compareDate(storage.date)) {
					setContext({
						...context,
						order: storage.data,
						loaded: true,
					})
				}
				// Otherwise fetch data from the db
				else {
					// Get and parse data from firestore
					const snapshot = await db.collection(context.season).get()
					let arr = []
					snapshot.forEach((el) => arr.push(el.data()))
					// Filter and sort player data
					if (arr.length) {
						arr = arr
							.filter((player) => player.NBA_FANTASY_PTS_RANK <= 150)
							.sort((a, b) => a.NBA_FANTASY_PTS_RANK - b.NBA_FANTASY_PTS_RANK)
					}

					// Save data to localStorage and context
					let storage = {
						data: arr,
						date: new Date(),
					}
					setContext({ ...context, order: arr, loaded: true })
					localStorage.setItem(context.season, JSON.stringify(storage))
				}
			}
		}

		getPlayerData()
	}, [context.season])

	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path='/' render={() => <Table />} />
				<Route path='/stat-charts' render={() => <LeagueCharts />} />
			</Switch>
		</Router>
	)
}

export default App
