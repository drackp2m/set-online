import { Test, TestingModule } from '@nestjs/testing';
import { mock } from 'jest-mock-extended';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { UserFaker } from '../../user/factory/user.faker';
import { UserEntity } from '../../user/user.entity';
import { UserRepository } from '../../user/user.repository';
import { JsonWebToken } from '../definition/json-web-token.interface';

import { JwtStrategyService } from './jwt.strategy.service';

describe('JwtStrategyService', () => {
	const userFaker = new UserFaker();

	let service: JwtStrategyService;
	const configurationService = mock<ConfigurationService>({ jwt: { secret: '1234' } });
	const userEntityRepository = mock<UserRepository>();

	const fakeUuid = '00000000-0000-4000-0000-000000000000';
	const fakeJwt: JsonWebToken = {
		iat: 648600120,
		nbf: 648600120,
		exp: 1974062562,
		aud: 'Jest',
		iss: 'You',
		sub: '42',
		jti: fakeUuid,
	};
	const fakeUser = userFaker.makeOne({ uuid: fakeUuid }, { createdFrom: '2010' }) as UserEntity;

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

		it('should return UserEntity when EntityManager.getOneBy return UserEntity', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(fakeUser);

			const user = await service.validate(fakeJwt);

			expect(user).toStrictEqual(fakeUser);
		});
	});
});
