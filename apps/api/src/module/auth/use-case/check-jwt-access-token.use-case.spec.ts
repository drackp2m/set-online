import { JsonWebTokenError, JwtModule, JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { JwtFactory } from '../../../shared/module/config/factories/jwt.factory';
import { EditableDate } from '../../../shared/util/editable-date';

import { CheckJwtAccessTokenUseCase } from './check-jwt-access-token.use-case';

describe('CheckJwtAccessTokenUseCase', () => {
	let module: TestingModule;
	let useCase: CheckJwtAccessTokenUseCase;

	const jwtServiceVerify = jest.spyOn(JwtService.prototype, 'verify');
	const validJwtDate = new Date('2024-03-20T14:30:30.000Z');

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
				CheckJwtAccessTokenUseCase,
				{ provide: ConfigurationService, useValue: configurationService },
			],
		}).compile();

		useCase = await module.resolve(CheckJwtAccessTokenUseCase);
	};

	beforeEach(async () => {
		const configurationService = mock<ConfigurationService>({
			jwt: {
				secret: 'secret',
				id: 'uuid',
				audience: 'test-runner',
				issuer: 'test',
			},
		});

		await prepareTestingModule(configurationService);
	});

	it('should be defined', () => {
		expect(useCase).toBeDefined();
	});

	describe('execute', () => {
		it('throw JsonWebTokenError with "invalid signature" when secret is not valid', async () => {
			const configurationService = mock<ConfigurationService>({
				jwt: {
					secret: 'invalid secret',
					id: 'uuid',
					audience: 'test-runner',
					issuer: 'test',
				},
			});

			await prepareTestingModule(configurationService);

			const fakeJwt =
				'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA5NDQ0ODgsIm5iZiI6MTcxMDk0NDQ4OCwiZXhwIjoxNzEwOTQ1Mzg4LCJhdWQiOiJ0ZXN0LXJ1bm5lci1hY2Nlc3MtdG9rZW4iLCJpc3MiOiJ0ZXN0Iiwic3ViIjoidXNlci11dWlkIiwianRpIjoidXVpZCJ9.Yj_vgfAsPA3dgbAUkP_BvpS9W7oRBVvcVyv75vB7fMreSb0jIDwzdFgbM2K7Mgu5NsRpoa9Xh94eICaSiL769w';

			expect(() => useCase.execute(fakeJwt)).toThrow(new JsonWebTokenError('invalid signature'));

			expect(jwtServiceVerify).toHaveBeenCalledTimes(1);
			expect(jwtServiceVerify).toHaveBeenCalledWith(fakeJwt, {
				jwtid: 'uuid',
				audience: 'test-runner-access-token',
				issuer: 'test',
			});
		});

		it('throw JsonWebTokenError with "jwt jwtid invalid" when id is not valid', async () => {
			jest.useFakeTimers().setSystemTime(validJwtDate);

			const configurationService = mock<ConfigurationService>({
				jwt: {
					secret: 'secret',
					id: 'iduu',
					audience: 'test-runner',
					issuer: 'test',
				},
			});

			await prepareTestingModule(configurationService);

			const fakeJwt =
				'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA5NDQ0ODgsIm5iZiI6MTcxMDk0NDQ4OCwiZXhwIjoxNzEwOTQ1Mzg4LCJhdWQiOiJ0ZXN0LXJ1bm5lci1hY2Nlc3MtdG9rZW4iLCJpc3MiOiJ0ZXN0Iiwic3ViIjoidXNlci11dWlkIiwianRpIjoidXVpZCJ9.Yj_vgfAsPA3dgbAUkP_BvpS9W7oRBVvcVyv75vB7fMreSb0jIDwzdFgbM2K7Mgu5NsRpoa9Xh94eICaSiL769w';

			expect(() => useCase.execute(fakeJwt)).toThrow(
				new JsonWebTokenError('jwt jwtid invalid. expected: iduu'),
			);

			expect(jwtServiceVerify).toHaveBeenCalledTimes(1);
			expect(jwtServiceVerify).toHaveBeenCalledWith(fakeJwt, {
				jwtid: 'iduu',
				audience: 'test-runner-access-token',
				issuer: 'test',
			});
		});

		it('throw JsonWebTokenError with "jwt audience invalid" when audience is not valid', async () => {
			jest.useFakeTimers().setSystemTime(validJwtDate);

			const configurationService = mock<ConfigurationService>({
				jwt: {
					secret: 'secret',
					id: 'uuid',
					audience: 'test-mock',
					issuer: 'test',
				},
			});

			await prepareTestingModule(configurationService);

			const fakeJwt =
				'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA5NDQ0ODgsIm5iZiI6MTcxMDk0NDQ4OCwiZXhwIjoxNzEwOTQ1Mzg4LCJhdWQiOiJ0ZXN0LXJ1bm5lci1hY2Nlc3MtdG9rZW4iLCJpc3MiOiJ0ZXN0Iiwic3ViIjoidXNlci11dWlkIiwianRpIjoidXVpZCJ9.Yj_vgfAsPA3dgbAUkP_BvpS9W7oRBVvcVyv75vB7fMreSb0jIDwzdFgbM2K7Mgu5NsRpoa9Xh94eICaSiL769w';

			expect(() => useCase.execute(fakeJwt)).toThrow(
				new JsonWebTokenError('jwt audience invalid. expected: test-mock-access-token'),
			);

			expect(jwtServiceVerify).toHaveBeenCalledTimes(1);
			expect(jwtServiceVerify).toHaveBeenCalledWith(fakeJwt, {
				jwtid: 'uuid',
				audience: 'test-mock-access-token',
				issuer: 'test',
			});
		});

		it('throw JsonWebTokenError with "jwt issuer invalid" when audience is not valid', async () => {
			jest.useFakeTimers().setSystemTime(validJwtDate);

			const configurationService = mock<ConfigurationService>({
				jwt: {
					secret: 'secret',
					id: 'uuid',
					audience: 'test-runner',
					issuer: 'spec',
				},
			});

			await prepareTestingModule(configurationService);

			const fakeJwt =
				'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA5NDQ0ODgsIm5iZiI6MTcxMDk0NDQ4OCwiZXhwIjoxNzEwOTQ1Mzg4LCJhdWQiOiJ0ZXN0LXJ1bm5lci1hY2Nlc3MtdG9rZW4iLCJpc3MiOiJ0ZXN0Iiwic3ViIjoidXNlci11dWlkIiwianRpIjoidXVpZCJ9.Yj_vgfAsPA3dgbAUkP_BvpS9W7oRBVvcVyv75vB7fMreSb0jIDwzdFgbM2K7Mgu5NsRpoa9Xh94eICaSiL769w';

			expect(() => useCase.execute(fakeJwt)).toThrow(
				new JsonWebTokenError('jwt issuer invalid. expected: spec'),
			);

			expect(jwtServiceVerify).toHaveBeenCalledTimes(1);
			expect(jwtServiceVerify).toHaveBeenCalledWith(fakeJwt, {
				jwtid: 'uuid',
				audience: 'test-runner-access-token',
				issuer: 'spec',
			});
		});

		it('throw JsonWebTokenError with "jwt not active" when system date is below jwt notBefore time', async () => {
			jest.useFakeTimers().setSystemTime(new EditableDate(validJwtDate).edit('day', -1));

			const fakeJwt =
				'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA5NDQ0ODgsIm5iZiI6MTcxMDk0NDQ4OCwiZXhwIjoxNzEwOTQ1Mzg4LCJhdWQiOiJ0ZXN0LXJ1bm5lci1hY2Nlc3MtdG9rZW4iLCJpc3MiOiJ0ZXN0Iiwic3ViIjoidXNlci11dWlkIiwianRpIjoidXVpZCJ9.Yj_vgfAsPA3dgbAUkP_BvpS9W7oRBVvcVyv75vB7fMreSb0jIDwzdFgbM2K7Mgu5NsRpoa9Xh94eICaSiL769w';

			expect(() => useCase.execute(fakeJwt)).toThrow(new JsonWebTokenError('jwt not active'));

			expect(jwtServiceVerify).toHaveBeenCalledTimes(1);
			expect(jwtServiceVerify).toHaveBeenCalledWith(fakeJwt, {
				jwtid: 'uuid',
				audience: 'test-runner-access-token',
				issuer: 'test',
			});
		});

		it('throw JsonWebTokenError with "jwt not active" when system date is above jwt expiration time', async () => {
			jest.useFakeTimers().setSystemTime(new EditableDate(validJwtDate).edit('day', 1));

			const fakeJwt =
				'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MTA5NDQ0ODgsIm5iZiI6MTcxMDk0NDQ4OCwiZXhwIjoxNzEwOTQ1Mzg4LCJhdWQiOiJ0ZXN0LXJ1bm5lci1hY2Nlc3MtdG9rZW4iLCJpc3MiOiJ0ZXN0Iiwic3ViIjoidXNlci11dWlkIiwianRpIjoidXVpZCJ9.Yj_vgfAsPA3dgbAUkP_BvpS9W7oRBVvcVyv75vB7fMreSb0jIDwzdFgbM2K7Mgu5NsRpoa9Xh94eICaSiL769w';

			expect(() => useCase.execute(fakeJwt)).toThrow(new JsonWebTokenError('jwt expired'));

			expect(jwtServiceVerify).toHaveBeenCalledTimes(1);
			expect(jwtServiceVerify).toHaveBeenCalledWith(fakeJwt, {
				jwtid: 'uuid',
				audience: 'test-runner-access-token',
				issuer: 'test',
			});
		});
	});
});
