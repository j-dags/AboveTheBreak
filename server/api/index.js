const NBA = require('nba');
const router = require('express').Router();

// router.get('/', async (req, res, next) => {
// 	try {
// 		res.json('Home Page');
// 	} catch (err) {
// 		next(err);
// 	}
// });

router.get('/', async (req, res, next) => {
	try {
		const stats = await NBA.stats.playerStats({ Season: '2020-21' });
		const players = stats.leagueDashPlayerStats.filter(
			(player) => player.nbaFantasyPtsRank <= 100
		);
		// const stats = await NBA.stats.playerInfo({ PlayerID: 201939 });
		res.json(players);
	} catch (err) {
		next(err);
	}
});

router.get('/curry', async (req, res, next) => {
	try {
		// const stats = await NBA.stats.playerStats({ SeasonId: 12020 });
		const stats = await NBA.stats.playerInfo({ PlayerID: 201939 });
		res.json(stats);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
