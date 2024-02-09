import https from 'https';

import axios from 'axios';

module.exports = async function () {
	// Configure axios for tests to use.
	const host = process.env.HOST ?? 'localhost';
	const port = process.env.PORT ?? '3000';
	axios.defaults.baseURL = `https://${host}:${port}`;

	axios.defaults.httpsAgent = new https.Agent({
		rejectUnauthorized: false,
	});
}
