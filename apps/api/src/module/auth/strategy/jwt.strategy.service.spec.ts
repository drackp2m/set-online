import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { User } from '../../user/user.entity';
import { UserRepository } from '../../user/user.repository';
import { JsonWebToken } from '../definition/json-web-token.interface';

import { JwtStrategyService } from './jwt.strategy.service';

describe('JwtStrategyService', () => {
	let service: JwtStrategyService;
	const configurationService = mock<ConfigurationService>({ jwt: { secret: '1234' } });
	const userEntityRepository = mock<UserRepository>();

	const fakeJwt = { sub: 'user-uuid' } as JsonWebToken;

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				JwtStrategyService,
				{ provide: ConfigurationService, useValue: configurationService },
				{ provide: UserRepository, useValue: userEntityRepository },
			],
		}).compile();

		service = module.get<JwtStrategyService>(JwtStrategyService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('validate', () => {
		it('throw NotFoundException when EntityManager.getOneBy throw NotFoundException', async () => {
			userEntityRepository.getOne.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const user = service.validate(fakeJwt);

			expect(user).rejects.toThrow(NotFoundException);
		});

		it('should return User when EntityManager.getOneBy return User', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(new User());

			const user = await service.validate(fakeJwt);

			expect(user).toBeInstanceOf(User);
		});
	});
});
