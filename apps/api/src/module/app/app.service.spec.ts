import { Test } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { ConfigurationService } from '../../shared/module/config/configuration.service';

import { AppService } from './app.service';

describe('AppService', () => {
	let service: AppService;
	const configurationService = mock<ConfigurationService>({
		api: { protocol: 'https', domain: 'localhost', port: 3000 },
	});

	beforeAll(async () => {
		const app = await Test.createTestingModule({
			providers: [AppService, { provide: ConfigurationService, useValue: configurationService }],
		}).compile();

		service = app.get<AppService>(AppService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('getData', () => {
		it('should return "Welcome to Play Set Online!"', () => {
			const result = service.welcomeMessage();

			expect(result).toStrictEqual({ message: 'Welcome to Play Set Online!' });
		});
	});
});
