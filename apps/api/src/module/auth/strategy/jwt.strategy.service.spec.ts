import { Test, TestingModule } from '@nestjs/testing';

import { NotFoundException } from '../../../shared/exception/not-found.exception';
import { ConfigurationService } from '../../../shared/module/config/configuration.service';
import { JwtConfig } from '../../../shared/module/config/types/jwt-config.type';
import { UserFaker } from '../../user/factory/user.faker';
import { UserEntity } from '../../user/user.entity';
import { UserEntityRepository } from '../../user/user.repository';
import { JsonWebToken } from '../definition/json-web-token.interface';

import { JwtStrategyService } from './jwt.strategy.service';

describe('JwtStrategyService', () => {
	const userFaker = new UserFaker();

	let service: JwtStrategyService;
	let configurationService: jest.Mocked<Partial<ConfigurationService>>;
	// let configService: jest.Mocked<Partial<ConfigService>>;
	let userEntityRepository: jest.Mocked<Partial<UserEntityRepository>>;

	const mockUuid = '00000000-0000-4000-0000-000000000000';
	const mockJwt: JsonWebToken = {
		iat: 648600120,
		nbf: 648600120,
		exp: 1974062562,
		aud: 'Jest',
		iss: 'You',
		sub: '42',
		jti: mockUuid,
	};
	const mockUser = userFaker.makeOne({ uuid: mockUuid }, { createdFrom: '2010' }) as UserEntity;

	beforeAll(async () => {
		configurationService = {
			jwt: { secret: '1234' } as JwtConfig,
		};

		userEntityRepository = {
			getOne: jest.fn(),
		};

		const module: TestingModule = await Test.createTestingModule({
			providers: [
				JwtStrategyService,
				{ provide: ConfigurationService, useValue: configurationService },
				{ provide: UserEntityRepository, useValue: userEntityRepository },
			],
		}).compile();

		service = module.get<JwtStrategyService>(JwtStrategyService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	describe('validate', () => {
		it('should throw NotFoundException when EntityManager.getOneBy throw NotFoundException', async () => {
			userEntityRepository.getOne.mockRejectedValueOnce(() => {
				throw new NotFoundException();
			});

			const user = service.validate(mockJwt);

			expect(user).rejects.toThrow(NotFoundException);
		});

		it('should return UserEntity when EntityManager.getOneBy return UserEntity', async () => {
			userEntityRepository.getOne.mockResolvedValueOnce(mockUser);

			const user = await service.validate(mockJwt);

			expect(user).toStrictEqual(mockUser);
		});
	});
});
