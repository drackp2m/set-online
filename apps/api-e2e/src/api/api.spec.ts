import axios from 'axios';

describe('GET /api/app/hello', () => {
	it('should return a message', async () => {
		const res = await axios.get(`/api/app/hello`);

		expect(res.status).toBe(200);
		expect(res.data).toStrictEqual({ message: 'Welcome to set-online!' });
	});
});
