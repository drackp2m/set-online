import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
	let service: AppService;

	beforeAll(async () => {
		const app = await Test.createTestingModule({
			providers: [AppService],
		}).compile();

		service = app.get<AppService>(AppService);
	});

	describe('getData', () => {
		it('should return "Welcome to set-online!"', () => {
			const result = service.getData();

			expect(result).toEqual({ message: 'Welcome to set-online!' });
		});
	});
});
