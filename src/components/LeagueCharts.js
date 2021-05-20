/* eslint-disable */
import { useContext } from 'react'
import { Context } from './Context'
import Histogram from './Histogram'
import './LeagueCharts.css'

const LeagueCharts = () => {
	const [context, setContext] = useContext(Context)

	return (
		<div id='histogram-body'>
			<div className='histogram-header'>
				<h1>Categorical Distributions.</h1>
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
			<div id='histogram-container'>
				<Histogram data={context.order} stat={'FG3M'} />
				<Histogram data={context.order} stat={'PTS'} />
				<Histogram data={context.order} stat={'REB'} />
				<Histogram data={context.order} stat={'AST'} />
				<Histogram data={context.order} stat={'STL'} />
				<Histogram data={context.order} stat={'BLK'} />
				<Histogram data={context.order} stat={'FG_PCT'} />
				<Histogram data={context.order} stat={'FT_PCT'} />
				<Histogram data={context.order} stat={'TOV'} />
			</div>
		</div>
	)
}

export default LeagueCharts
