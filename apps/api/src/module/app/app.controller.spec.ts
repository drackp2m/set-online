import { Test, TestingModule } from '@nestjs/testing';

import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
	let appController: AppController;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [AppController],
			imports: [PubSubModule],
			providers: [AppService],
		}).compile();

		appController = module.get<AppController>(AppController);
	});

	describe('getData', () => {
		it('should return "Welcome to set-online!"', () => {
			const result = appController.getData();

			expect(result).toEqual({ message: 'Welcome to set-online!' });
		});
	});
});
