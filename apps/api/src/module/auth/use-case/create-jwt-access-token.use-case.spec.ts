import { JwtModule, JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { JwtFactory } from '../../../shared/module/config/factories/jwt.factory';

import { CreateJwtAccessTokenUseCase } from './create-jwt-access-token.use-case';

describe('CreateJwtAccessTokenUseCase', () => {
	let module: TestingModule;
	let useCase: CreateJwtAccessTokenUseCase;

	const jwtServiceSign = jest.spyOn(JwtService.prototype, 'sign');

	const prepareTestingModule = async (
		configurationService: ConfigurationService,
	): Promise<void> => {
		module = await Test.createTestingModule({
			imports: [
				JwtModule.registerAsync({
					useFactory: () => new JwtFactory(configurationService).createJwtOptions(),
				}),
			],
			providers: [
				CreateJwtAccessTokenUseCase,
				{ provide: ConfigurationService, useValue: configurationService },
			],
		}).compile();

		useCase = await module.resolve(CreateJwtAccessTokenUseCase);
	};

	beforeEach(async () => {
		const configurationService = mock<ConfigurationService>({
			jwt: {
				secret: 'secret',
				algorithm: 'HS512',
				id: 'uuid',
				issuer: 'test',
				audience: 'test-runner',
				accessTokenExpiresIn: '15m',
			},
		});

		await prepareTestingModule(configurationService);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('throw Error when config is invalid', async () => {
			const configurationService = mock<ConfigurationService>({
				jwt: {
					secret: 'secret',
					algorithm: 'HS512',
					id: 'uuid',
					issuer: 'test',
					audience: 'test-runner',
					accessTokenExpiresIn: '15x',
				},
			});

			await prepareTestingModule(configurationService);

			expect(() => useCase.execute('user-uuid')).toThrow(
				Error(
					'"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60',
				),
			);

			expect(jwtServiceSign).toHaveBeenCalledTimes(1);
			expect(jwtServiceSign).toHaveBeenCalledWith(
				{},
				{
					subject: 'user-uuid',
					audience: 'test-runner-access-token',
					expiresIn: '15x',
					notBefore: 0,
				},
			);
		});

		it('should return valid Jwt', () => {
			const jwtToken = useCase.execute('user-uuid');

			const parts = jwtToken.split('.');

			expect(jwtServiceSign).toHaveBeenCalledTimes(1);
			expect(jwtServiceSign).toHaveBeenCalledWith(
				{},
				{
					subject: 'user-uuid',
					audience: 'test-runner-access-token',
					expiresIn: '15m',
					notBefore: 0,
				},
			);

			expect(typeof jwtToken).toStrictEqual('string');
			expect(parts.length).toStrictEqual(3);
			expect(jwtToken.length).toStrictEqual(296);
		});
	});
});
