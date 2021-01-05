const NBA = require('nba');
const router = require('express').Router();

// router.get('/', async (req, res, next) => {
// 	try {
// 		res.json('Home Page');
// 	} catch (err) {
// 		next(err);
// 	}
// });

// Get player stats for a given year
router.get('/:year', async (req, res, next) => {
	try {
		const stats = await NBA.stats.playerStats({ Season: req.params.year });
		const players = stats.leagueDashPlayerStats.filter(
			(player) => player.nbaFantasyPtsRank <= 130
		);
		// const stats = await NBA.stats.playerInfo({ PlayerID: 201939 });
		res.json(players);
	} catch (err) {
		next(err);
	}
});

router.get('/player', async (req, res, next) => {
	try {
		// const stats = await NBA.stats.playerStats({ SeasonId: 12020 });
		const stats = await NBA.stats.homepageV2({});
		res.json(stats);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
