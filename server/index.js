const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const path = require('/path');

const app = express();

// Connection logging middleware
app.use(morgan('dev'));

// Req.body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Api routes
app.use('/stats', require('./api'));
app.use('/fetch', require('./api/fetch'));

// Direct other requests to index.html
// app.get('*', function (req, res) {
// 	res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// 500 Err Handling
app.use(function (err, req, res, next) {
	console.error(err);
	console.error(err.stack);
	res.status(err.status || 500).send(err.message || 'Internal server error.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Dribbling on port, ${port}`));

module.exports = app;
