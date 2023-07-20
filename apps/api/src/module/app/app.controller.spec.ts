import { Test, TestingModule } from '@nestjs/testing';

import { PubSubModule } from '../../shared/module/pub-sub/pub-sub-module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
	let app: TestingModule;

	beforeAll(async () => {
		app = await Test.createTestingModule({
			controllers: [AppController],
			imports: [PubSubModule],
			providers: [AppService],
		}).compile();
	});

	describe('getData', () => {
		it('should return "Welcome to set-online!"', () => {
			const appController = app.get<AppController>(AppController);
			expect(appController.getData()).toEqual({
				message: 'Welcome to set-online!',
			});
		});
	});
});
