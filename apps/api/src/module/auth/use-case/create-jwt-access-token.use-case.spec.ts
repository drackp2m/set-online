import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { JwtFactory } from '../../../shared/module/config/factories/jwt.factory';
import { UserRepository } from '../../user/user.repository';
import { JwtStrategyService } from '../strategy/jwt.strategy.service';

import { CreateJwtAccessTokenUseCase } from './create-jwt-access-token.use-case';

describe.skip('CreateJwtAccessTokenUseCase', () => {
	let useCase: CreateJwtAccessTokenUseCase;
	const jwtServiceSign = jest.spyOn(JwtService.prototype, 'sign');
	const configurationService = mock<ConfigurationService>({
		jwt: { secret: 'secret', algorithm: 'HS512', accessTokenExpiresIn: '1h' },
	});
	const userEntityRepository = mock<UserRepository>();

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				CreateJwtAccessTokenUseCase,
				JwtService,
				JwtStrategyService,
				JwtFactory,
				{ provide: UserRepository, useValue: userEntityRepository },
				{ provide: ConfigurationService, useValue: configurationService },
			],
		}).compile();

		useCase = await module.resolve<CreateJwtAccessTokenUseCase>(CreateJwtAccessTokenUseCase);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('should return valid jwt', async () => {
			const jwtToken = useCase.execute('user-uuid');

			expect(jwtServiceSign).toHaveBeenCalledTimes(1);
			expect(typeof jwtToken).toStrictEqual('string');
		});
	});
});
