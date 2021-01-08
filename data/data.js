const scrapeData = require('../src/data/outputata/output');

const transform = (data) => {
	// console.log(data.resultSets[0].headers);
	const headers = data.resultSets[0].headers;
	let playerData = data.resultSets[0].rowSet;

	playerData = playerData.map((player) => {
		return player.reduce((obj, el, idx) => {
			return {
				...obj,
				[headers[idx]]: el,
			};
		}, {});
	});
	return playerData;
};

const transformData = transform(scrapeData);
console.log(transformData);

module.exports = transformData;
