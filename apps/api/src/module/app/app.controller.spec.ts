import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { ConfigurationService } from '../../shared/module/config/configuration.service';
import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
	let appController: AppController;
	const configurationService = mock<ConfigurationService>();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			imports: [PubSubModule],
			providers: [AppService, { provide: ConfigurationService, useValue: configurationService }],
		}).compile();

		appController = await module.resolve(AppController);
	});

	describe('getData', () => {
		it('should return "Welcome to set-online!"', () => {
			const result = appController.getData();

			expect(result).toStrictEqual({ message: 'Welcome to set-online!' });
		});
	});
});
