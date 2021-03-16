import { data } from './dataset_2020-21'
import _ from 'lodash'

export const playerData = (arr) => {
	// console.log(data.resultSets[0].headers);
	const headers = arr.resultSets[0].headers
	let ans = arr.resultSets[0].rowSet

	ans = ans.map((player) => {
		return player.reduce((obj, el, idx) => {
			return {
				...obj,
				[_.camelCase(headers[idx])]: el,
			}
		}, {})
	})
	return ans
}

let tableData = playerData(data)
	.filter((player) => player.nbaFantasyPtsRank < 200)
	.sort((a, b) => a.nbaFantasyPtsRank - b.nbaFantasyPtsRank)

export default tableData
